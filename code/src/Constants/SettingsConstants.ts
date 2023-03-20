import { ColorResolvable } from 'discord.js';

export default class SettingsConstants {
    public static readonly BOT_ID = (process.env.BOT_ID || '');
    public static readonly MASTER_ID = process.env.MASTER_ID || '';
    public static readonly SERVER_ID = process.env.SERVER_ID || '';

    public static readonly CHANNELS = {
        LOG_ID: process.env.LOG_CHANNEL_ID || '',
        SUGGESTIONS_ID: process.env.SUGGESTIONS_CHANNEL_ID || '',
        NOMINATION_ID: process.env.NOMINATION_CHANNEL_ID || '',
        DIPLOMACY_THREADS_ID: process.env.DIPLOMACY_THREADS_CHANNEL_ID || '',
        DIPLOMACY_DISPATCH_ID: process.env.DIPLOMACY_DISPATCH_CHANNEL_ID || '',
        DIPLOMACY_REPORTS_ID: process.env.DIPLOMACY_REPORTS_CHANNEL_ID || '',
        BOT_SUPPORT_ID: process.env.BOT_SUPPORT_CHANNEL_ID || '',
        NIGHTS_WATCH_ID: process.env.NIGHTS_WATCH_CHANNEL_ID || '',
    };

    public static readonly ROLES = {
        PLACER_ID: process.env.PLACER_ROLE_ID || '',
        DIPLOMAT_ID: process.env.DIPLOMAT_ROLE_ID || '',
        OBSERVER_ID: process.env.OBSERVER_ROLE_ID || '',
        DEVELOPMENT_ID: process.env.DEVELOPMENT_ROLE_ID || '',
        ARTIST_ID: process.env.ARTIST_ROLE_ID || '',
        NIGHTS_WATCH_ID: process.env.NIGHTS_WATCH_ROLE_ID || '',
    };

    public static readonly EMOJI = {
        UPVOTE_ID: process.env.UPVOTE_EMOJI_ID || '',
        DOWNVOTE_ID: process.env.DOWNVOTE_EMOJI_ID || '',
    };

    public static readonly TAGS = {
        NOMINATED_ID: process.env.NOMINATED_TAG_ID || '',
        VALID_ART_ID: process.env.VALID_ART_TAG_ID || '',
        ARTIST_SEARCH_ID: process.env.ARTIST_SEARCH_TAG_ID || '',
        APPRECIATED_ID: process.env.APPRECIATED_TAG_ID || '',
        DISLIKED_ID: process.env.DISLIKED_TAG_ID || '',
        NEW_ART_ID: process.env.NEW_ART_TAG_ID || '',
        UPGRADE_ART_ID: process.env.UPGRADE_ART_TAG_ID || '',
        LAYOUT_ID: process.env.LAYOUT_TAG_ID || '',
        OTHER_ID: process.env.OTHER_TAG_ID || '',
    };

    public static readonly BOT_INVITE_URL = process.env.BOT_INVITE_URL || '';
    public static readonly SUPPORT_SERVER_INVITE_URL = process.env.SUPPORT_SERVER_INVITE_URL || '';

    public static readonly COLORS: { [key: string]: ColorResolvable } = {
        DEFAULT: '#ffa800',
        BAD: '#ff0000',
        GOOD: '#00ff00',
        BLUE: '#85c0ea',
        GRAY: '#91a1ac',
        NIGHT: '#000032',
    };

    public static readonly DEFAULT_PREFIX = '/';

    public static readonly BOT_NAME = 'Eendragt';

    public static readonly NIGHTS_WATCH_IMAGE_URL = 'https://cdn.discordapp.com/attachments/817036396790939718/1087339335348650084/image.png';
    public static readonly SUGGESTION_THREAD_BASE_URL = `https://discord.com/channels/${SettingsConstants.SERVER_ID}/`;

    public static readonly SUGGESTION_APPRECIATION_CRITERIA = {
        GOOD_AMOUNT: 20,
        BAD_AMOUNT: 10,
        RATIO: .75,
    };

    public static readonly SUGGESTION_SIMILARITY_CRITERIA = {
        IDENTICAL: .9,
        SIMILAR: .4,
    };

    public static readonly TIME = {
        NIGHT_START: 1,
        NIGHT_END: 6
    };

    public static readonly CANVAS = {
        WIDTH: 1000,
        HEIGHT: 1000,
        VALID_COLORS: [
            '#ff4500',
            '#ffa800',
            '#ffd635',
            '#00a368',
            '#7eed56',
            '#2450a4',
            '#3690ea',
            '#51e9f4',
            '#811e9f',
            '#b44ac0',
            '#ff99aa',
            '#9c6926',
            '#000000',
            '#898d90',
            '#d4d7d9',
            '#ffffff'
        ]
    };
}
