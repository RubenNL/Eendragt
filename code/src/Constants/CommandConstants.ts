export default class CommandConstants {
    public static readonly SLASH = {
        UDPATE: 'update',
        VALIDATE: 'validate',
        TEMPLATE: 'template',
        ONBOARDING: 'onboarding',
        COORDINATE: 'coordinate',
        VOICE: 'voice',
        TREATY: 'treaty',
        VARIABLE: {
            COMMAND: 'variable',
            SET: 'set',
            GET: 'get',
            GETALL: 'getall',
        }
    };

    public static readonly MENU = {
        APPROVE: 'Goedkeuren',
        DECLINE: 'Afwijzen',
        DELAY: 'Uitstellen',
        VOTE: 'Stemming',
    };
}