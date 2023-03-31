import { ThreadChannel } from 'discord.js';
import SettingsConstants from '../Constants/SettingsConstants';
import IResultInfo from '../Interfaces/IResultInfo';
import { Redis } from '../Providers/Redis';
const stringSimilarity = require('string-similarity');

export default class SimilarityService {

    public static async FindSimiliarThreads(thread: ThreadChannel, keyThreads: string, ignoreDuplicate: boolean, identicalRating: number, similarRating: number, ignorePlace: boolean = false) {
        const resultInfo: IResultInfo = {
            result: false
        };

        const threads = await Redis.hgetall(keyThreads) as { [key: string]: string };
        if (threads == null) {
            return resultInfo;
        }

        let titles = Object.values(threads);

        let similarities = stringSimilarity.findBestMatch(thread.name, titles);
        if (similarities.bestMatch.rating < similarRating) {
            return resultInfo;
        }

        resultInfo.result = true;
        resultInfo.data = {};

        if (!ignoreDuplicate && similarities.bestMatch.rating >= identicalRating) {
            resultInfo.data.identical = true;
            for (const [key, value] of Object.entries(threads)) {
                if (value == similarities.bestMatch.target) {
                    resultInfo.data.thread = {
                        name: value,
                        url: `${SettingsConstants.SUGGESTION_THREAD_BASE_URL}${key}`
                    };

                    return resultInfo;
                }
            }
        }

        if (ignorePlace) {
            const threadName = thread.name.replace(/[pP]lace/, '');
            titles = titles.map((x: string) => x.replace(/[pP]lace/, ''));
            similarities = stringSimilarity.findBestMatch(threadName, titles);
            if (similarities.bestMatch.rating < similarRating) {
                return resultInfo;
            }
        }

        const list = [];

        for (const rating of similarities.ratings) {
            if (rating.rating >= similarRating) {
                for (const [key, value] of Object.entries(threads)) {
                    if (value == rating.target) {
                        list.push({
                            name: value,
                            url: `${SettingsConstants.SUGGESTION_THREAD_BASE_URL}${key}`
                        });
                    }
                }
            }
        }

        resultInfo.data.list = list;
        return resultInfo;
    }
}