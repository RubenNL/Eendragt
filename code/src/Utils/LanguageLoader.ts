import * as fs from 'fs';

type LangConfig = {
    ROLE_SELECTOR_PLACEHOLDER: string,
    I_WANT_TO_HELP: string,
    ROLE_APPLICATION_ALREADY_SUBMITTED: string,
    SHOW_PROOF_OF_SKILL: string,
    APPLICATION_SENT: string,
    APPLICATION_LETTER: string,
    ROLE_APPLICATIONS_CLOSED: string,
    ROLE_APPLICATION: string,
    ROLE_CATEGORY_APPLICATION_OPEN_STATUS: string,
    OPEN: string,
    CLOSED: string,
    LOG_ROLE_CATEGORY_APPLICATION_OPEN_STATUS: string,
    CATEGORY: string,
    HERE_YOU_GO: string,
    CLAIM_A_PIXEL: string,
    PIXEL_ART_DOES_NOT_FIT_LOCATION: string,
    TIME_FORMAT: string,
    CURRENTLY_NO_PIXEL_AVAILABLE: string,
    WAIT_BEFORE_CLAIMING_ANOTHER_PIXEL: string,
    MINUTES: string,
    SECONDS: string,
    AND: string,
    FILE_FORMAT_NOT_CORRECT: string,
    FILE_SIZE_INCORRECT: string,
    COLOUR_AT_POSITION_NOT_ALLOWED: string,
    PIXEL_IS_TRANSLUCENT: string,
    SCALE_INCORRECT: string,
    ARTWORK_NOT_TRANSPARENT: string,
    ARTWORK_HAS_NO_COLOURS: string,
    BILLY_TIME_JOKES: string[],
    YOU_DONT_HAVE_THIS_ROLE_ANYMORE: string,
    ILL_PICK_THIS_UP: string,
    YOU_DONT_HAVE_ACCESS_TO_THIS_COMMAND: string,
    COMMAND_CAN_ONLY_BE_USED_IN_DIPLOMACY_THREAD: string,
    PLEASE_WAIT_BEFORE_TAKING_ANOTHER_THREAD: string,
    WATCH: string,
    PICKED_UP_BY: string,
    HERE_IS_YOUR_TREATY: string,
    THIS_ACTION_CAN_ONLY_BE_DONE_IN: string,
    CANT_EXECUTE_THIS_ACTION_ON_THIS_MESSAGE: string,
    SOMETHING_WENT_WRONG: string,
    ALREADY_IN_THREAD: string,
    YOU_CAN_VIEW_THE_THREAD: string,
    NOMINATION_APPROVE_TITLE: string,
    NOMINATION_DECLINE_TITLE: string,
    NOMINATION_DELAY_TITLE: string,
    NOMINATION_VOTE_TITLE: string,
    NOMINATION_APPROVE_MESSAGE: string,
    NOMINATION_DECLINE_MESSAGE: string,
    NOMINATION_DELAY_MESSAGE: string,
    NOMINATION_VOTE_MESSAGE: string,
    NOMINATION_CONFIRMATION_INCORRECT: string,
    NOMINATION_TYPE_TITLE_TO_CONFIRM: string,
    NOMINATION_OPTIONAL_EXPLANATION: string,
    NOMINATION_EXPLANATION_REQUIRED: string,
    ONBOARDING_OBSERVE: string,
    ONBOARDING_ROLES_GIVEN: string,
    ROLES_CANT_MODIFY_OWN_ROLE: string,
    UNAUTHORISED_COMMAND_EXEC: string,
    ROLES_USER_ALREADY_HAS_ROLE: string,
    ROLES_USER_ROLE_REMOVED: string,
    ROLES_USER_DOES_NOT_HAVE_ROLE: string,
    ROLES_USER_ROLE_GIVEN: string,
    ROLES_GIVEN_TO: string,
    ROLES_TAKEN_FROM: string,
    ROLES_LOGGING: string,
    SUGGESTIONS_REQUEST_ARTIST: string,
    SUGGESTIONS_ADD_ONE_TAG: string,
    THREADS_TAG_COUNT: string,
    THREADS_TAGS_HAVE_CHANGED: string,
    THREADS_COMMAND_CAN_ONLY_BE_USED_IN: string,
    THREADS_ALREADY_ARCHIVED: string,
    THREADS_ARCHIVED: string,
    THREADS_LOCK_STATE: string,
    REOPENED: string,
    FORUMS_COMMAND_CAN_ONLY_BE_USED_IN: string,
    THREADS_SELECT_TAGS_FOR_THREAD: string,
    VARIABLES_THE_VALUE_OF_VAR_IS: string,
    JOIN_NIGHTWATCH: string,
    VOTING_CANT_VOTE_FOR_THIS_ANYMORE: string,
    VOTING_VOTED_FOR: string,
    VOTING_VOTE_CHANGED_TO: string,
    VOTING_YOU_CAN_VOTE_ON_MULTIPLE: string,
    VOTING_CAN_ONLY_ADD_MAX_OPTION: string,
    VOTING_VOTE_FOR_YOUR_FAVOURITE: string,
    VOTING_WHICH_SUGGESTION_WOULD_YOU_LIKE: string,
    YES: string,
    NO: string,
    VOTING_OR_VOTE_FOR_MULTIPLE: string,
    VOTING_YES_SEND_IT: string,
    VOTING_NO_TRY_AGAIN: string,
    VOTING_THIS_IS_A_PREVIEW: string,
    VOTING_DOES_IT_LOOK_GOOD: string,
    VOTING_CREATION_FAILED_TRY_AGAIN: string,
    DONE: string,
    OKAY: string,
    VOTING_VOTE: string,
    VOTING_WHAT_IS_THE_DESCRIPTION: string,
    VOTING_GIVE_OPTIONS_INSTRUCTIONS: string,
    VOTING_VOTES: string,
    VOTING_TIME: string,
    VOTING_OPTIONS: string,
    VOTING_VOTE_ENDS_AT: string,
    VOTING_RESULTS: string,
    VOTING_WINNER: string,
    EXTRA_ROLES: string,
    WHICH_ROLE_FITS_YOU: string,
    APPLICATIONS: string,
    APPLICATION: string,
    WE_ARE_LOOKING_FOR_PEOPLE: string,
    USER_APPLIED: string,
    ROLES_2022: string,
    ART_REJECTED_ART: string,
    ART_REASON_FOR_REJECTION: string,
    ART_FILE_FORMAT: string,
    ART_VALID_ART: string,
    ART_ARTWORK_REQUIREMENTS: string,
    ART_PLACING_COORDINATED_PIXELS: string,
    ART_PRESS_BUTTON_TO_CLAIM_PIXEL: string,
    ART_PLACE_PIXEL_RIGHT_AWAY: string,
    ART_WAIT_UNTIL_TIME_TO_PLACE_PIXEL: string,
    ART_AMOUNT_OF_CLAIMED_PIXELS: string,
    ART_DO_NOT_DISMISS_OR_REMEMBER_COLOUR: string,
    VOTING_MULTIPLE_VOTES: string,
    VOTING_SINGLE_VOTE: string,
    COMMANDS_UPDATE_SLASH_COMMAND: string,
    COMMANDS_OPEN_OR_CLOSE_APPLICATIONS: string,
    COMMANDS_FOR_WHICH_ROLE_TO_CLOSE_APPLICATIONS: string,
    ROLES_DIPLOMATS: string,
    ROLES_PIXEL_ARTISTS: string,
    ROLES_COMMUNITY_SUPPORT: string,
    ROLES_EDITOR: string,
    COMMANDS_APPLICATIONS_OPEN_OR_CLOSED: string,
    COMMANDS_OPEN_IT: string,
    COMMANDS_CLOSE_IT: string,
    COMMANDS_CREATE_A_VOTE: string,
    COMMANDS_THE_IMAGE_THAT_BELONGS_TO_THE_VOTE: string,
    COMMANDS_HOW_LONG_SHOULD_THE_VOTE_TAKE: string,
    COMMANDS_CHECK_BILLY_TIME: string,
    COMMANDS_GIVE_OR_TAKE_ROLE: string,
    COMMANDS_WHO_TO_GIVE_ROLE_OR_TAKE_ROLE: string,
    COMMANDS_DO_YOU_WANT_TO_TAKE_OR_GIVE_ROLE: string,
    COMMANDS_GIVE: string,
    COMMANDS_TAKE: string,
    COMMANDS_REASON_FOR_MODIFYING_ROLE: string,
    COMMANDS_MODIFY_DIPLOMAT_ROLE: string,
    COMMANDS_MODIFY_PIXEL_ARTIST_ROLE: string,
    COMMANDS_MANAGE_THREADS: string,
    COMMANDS_ARCHIVE_THREAD: string,
    COMMANDS_REASON_FOR_ARCHIVING: string,
    COMMANDS_CLOSE_THREAD: string,
    COMMANDS_REASON_FOR_CLOSING: string,
    COMMANDS_MODIFY_TAGS_FOR_FORUM_POST: string,
    COMMANDS_MAKE_TEMPORARY_DIPLOMACY_VOICE_CHAT: string,
    COMMANDS_MAKE_DIPLOMACY_TREATY: string,
    COMMANDS_TREATY_TYPE: string,
    COMMANDS_TREATY_DURATION: string,
    COMMANDS_START_COORDINATED_ART_PLACEMENT: string,
    COMMANDS_THE_PIXEL_ART: string,
    COMMANDS_X_COORD_TOP_LEFT: string,
    COMMANDS_Y_COORD_TOP_LEFT: string,
    COMMANDS_AT_WHAT_TIME_TO_PLACE_ARTWORK: string,
    COMMANDS_CREATE_PIXEL_ART_TEMPLATE: string,
    COMMANDS_ADD_PIXEL_ART_TO_TEMPLATE: string,
    COMMANDS_CREATE_GRID_FOR_PIXEL_ART: string,
    COMMANDS_PIXEL_ART_TO_CREATE_GRID_FOR: string,
    COMMANDS_PLACE_ROLES_MESSAGE: string,
    COMMANDS_PLACE_ONBOARDING_MESSAGE: string,
    COMMANDS_VARIABLES: string,
    COMMANDS_NAME_OF_VARIABLE: string,
    COMMANDS_VALUE_OF_VARIABLE: string,
    COMMANDS_CHANGE_VALUE_OF_VARIABLE: string,
    COMMANDS_GET_VARIABLE_VALUE: string,
    COMMANDS_GET_LIST_OF_VALUES_FOR_ALL_VARIABLES: string,
    LINK_TO_THREAD: string,
    DIPLOMACY_COMMUNITY_SIZE: string,
    DIPLOMACY_MESSAGE: string,
    DIPLOMACY_SIMILAR_DIPLOMATS: string,
    DIPLOMAT_SINGLE: string,
    DIPLOMAT_PLURAL: string,
    WELCOME: string,
    ONBOARDING_WHAT_BRINGS_YOU_TO_THE_SERVER: string,
    ONBOARDING_NICE_OF_YOU_TO_COME_HELP: string,
    ONBOARDING_YOU_CAN_HELP_IN_THE_FOLLOWING_WAYS: string,
    ONBOARDING_MORE_ROLES: string,
    ONBOARDING_LOOKING_FOR_TALENT: string,
    NIGHTWATCH: string,
    NIGHTWATCH_MESSAGE: string,
    NIGHTWATCH_WELCOME: string,
    NIGHTWATCH_OPENING_TIMES: string,
};

// eslint-disable-next-line no-unused-vars,@typescript-eslint/no-unused-vars
export default class LanguageLoader {
    // These are the default values
    // When language loading fails or a language file has missing translations these values will be loaded.
    public static LangConfig: LangConfig = {
        APPLICATION_LETTER: 'Sollicitatiebrief',
        APPLICATION_SENT: 'Je sollicitatie is verzonden!',
        ROLE_APPLICATION_ALREADY_SUBMITTED: 'Je hebt al een sollicitatie ingediend voor deze rol.',
        SHOW_PROOF_OF_SKILL: 'Link naar iets dat je hebt gemaakt',
        ROLE_SELECTOR_PLACEHOLDER: 'Selecteer een rol',
        I_WANT_TO_HELP: '🌷 Ik wil meehelpen!',
        ROLE_APPLICATIONS_CLOSED: 'Bedankt voor je interesse, maar wij nemen momenteel geen nieuwe {roleName} meer aan.\nHoud de aankondigingen in de gaten om te weten wanneer je weer voor deze rol kan solliciteren.',
        ROLE_APPLICATION: 'Sollicitatie {roleName}',
        ROLE_CATEGORY_APPLICATION_OPEN_STATUS: 'De {roleCategory} sollicitaties zijn nu {status}.',
        OPEN: 'open',
        CLOSED: 'gesloten',
        LOG_ROLE_CATEGORY_APPLICATION_OPEN_STATUS: '{roleCategory} applicaties zijn nu {status}.',
        CATEGORY: 'Categorie',
        HERE_YOU_GO: 'Alsjeblieft',
        CLAIM_A_PIXEL: 'Claim een pixel!',
        PIXEL_ART_DOES_NOT_FIT_LOCATION: 'Deze pixel art past niet op de meegegven locatie.',
        TIME_FORMAT: 'De tijd moet in het formaat `HH:MM` zijn.',
        CURRENTLY_NO_PIXEL_AVAILABLE: 'Er zijn momenteel geen pixels meer beschikbaar. Probeer het later nog eens.',
        WAIT_BEFORE_CLAIMING_ANOTHER_PIXEL: 'Je moet {minutes}{and}{seconds} wachten voordat je weer een pixel kan claimen.',
        MINUTES: 'minuten',
        SECONDS: 'seconden',
        AND: 'en',
        FILE_FORMAT_NOT_CORRECT: 'Het is geen {format} formaat',
        FILE_SIZE_INCORRECT: 'De afbeelding is te groot.\nMax breedte: {width}, max hoogte: {height}',
        COLOUR_AT_POSITION_NOT_ALLOWED: 'De kleur {hex} op positie ({x}, {y}) is niet toegestaan.',
        PIXEL_IS_TRANSLUCENT: 'De pixel op positie ({x}, {y}) is doorzichtig. Dit is niet toegestaan',
        SCALE_INCORRECT: 'Je pixel art lijkt geen 1:1 scaling te hebben. Als het wel 1:1 scaling heeft, voeg rechts dan een transparante rand toe.',
        ARTWORK_NOT_TRANSPARENT: 'Je hebt geen transparante achtergrond. Is je art rechthoekig? Voeg rechts dan een transparante rand toe.',
        ARTWORK_HAS_NO_COLOURS: 'Deze afbeelding is volledig transparant.',
        BILLY_TIME_JOKES: ['Zeg Billy, hoe laat is het bij jou?\nBilly: {time}'],
        YOU_DONT_HAVE_THIS_ROLE_ANYMORE: 'Je hebt de rol niet meer',
        ILL_PICK_THIS_UP: 'Ik pak dit op!',
        YOU_DONT_HAVE_ACCESS_TO_THIS_COMMAND: 'Je hebt geen toegang tot dit commando.',
        COMMAND_CAN_ONLY_BE_USED_IN_DIPLOMACY_THREAD: 'Je kan dit commando alleen in de diplomatieke threads gebruiken.',
        PLEASE_WAIT_BEFORE_TAKING_ANOTHER_THREAD: 'Je hebt recent al een diplomatie-thread opgepakt. Wacht even voordat je er weer een oppakt.',
        WATCH: 'Gluren',
        PICKED_UP_BY: 'Opgepakt door {user}',
        HERE_IS_YOUR_TREATY: 'Hier is het verdrag. Onderteken het eerst zelf, en stuur het daarna naar de andere partij.',
        THIS_ACTION_CAN_ONLY_BE_DONE_IN: 'Je kan deze actie alleen uitvoeren in {location}.',
        CANT_EXECUTE_THIS_ACTION_ON_THIS_MESSAGE: 'Je kan deze actie niet op dit bericht uitvoeren.',
        SOMETHING_WENT_WRONG: 'Er is iets fouts gegaan. Sorry.',
        ALREADY_IN_THREAD: 'Je zit al in de thread.',
        YOU_CAN_VIEW_THE_THREAD: 'Je kan nu in de thread kijken.',
        NOMINATION_APPROVE_TITLE: 'Goedkeuren',
        NOMINATION_DECLINE_TITLE: 'Afwijzen',
        NOMINATION_DELAY_TITLE: 'Uitstellen',
        NOMINATION_VOTE_TITLE: 'Stembus',
        NOMINATION_APPROVE_MESSAGE: 'We gaan het regelen.',
        NOMINATION_DECLINE_MESSAGE: 'Dit is niet mogelijk.',
        NOMINATION_DELAY_MESSAGE: 'Hier is momenteel nog geen tijd/plek voor.',
        NOMINATION_VOTE_MESSAGE: 'Deze suggestie wordt meegenomen in de volgende stemronde.',
        NOMINATION_CONFIRMATION_INCORRECT: 'Bevestiging incorrect.',
        NOMINATION_TYPE_TITLE_TO_CONFIRM: 'Typ {title} om je keuze te bevestigen',
        NOMINATION_OPTIONAL_EXPLANATION: 'Optionele toelichting',
        NOMINATION_EXPLANATION_REQUIRED: 'Licht je keuze toe',
        ONBOARDING_OBSERVE: 'Kijk gerust even rond.',
        ONBOARDING_ROLES_GIVEN: 'Ik heb je de rol{plural} {roles} gegeven.',
        ROLES_CANT_MODIFY_OWN_ROLE: 'Je kunt deze rol niet aan jezelf geven/afpakken',
        UNAUTHORISED_COMMAND_EXEC: 'Je hebt geen toegang tot dit commando.',
        ROLES_USER_ALREADY_HAS_ROLE: '{targetMember} heeft deze rol al',
        ROLES_USER_ROLE_REMOVED: 'Ik heb de rol {roleName} **afgepakt** van {targetMember}',
        ROLES_USER_DOES_NOT_HAVE_ROLE: '{targetMember} heeft deze rol niet',
        ROLES_USER_ROLE_GIVEN: 'Ik heb de rol {roleName} **gegeven** aan {targetMember}',
        ROLES_GIVEN_TO: 'gegeven aan',
        ROLES_TAKEN_FROM: 'afgepakt van',
        ROLES_LOGGING: '{executingMember} heeft de rol {roleName} {givenOrTaken} {targetMember}\n    Reden: {reason}',
        SUGGESTIONS_REQUEST_ARTIST: 'Je mag dit commando alleen in je eigen thread gebruiken, of wanneer je de Artist rol hebt.\n    Vraag een Artist rol aan in {channel}.',
        SUGGESTIONS_ADD_ONE_TAG: 'Zorg dat je exact één van de volgende tags toevoegt aan je post: {tags}',
        THREADS_TAG_COUNT: 'Je kan maximaal {tagCount} tags selecteren',
        THREADS_TAGS_HAVE_CHANGED: 'Tags zijn aangepast',
        THREADS_COMMAND_CAN_ONLY_BE_USED_IN: 'Dit commando kan alleen in een thread worden gebruikt',
        THREADS_ALREADY_ARCHIVED: 'Deze thread is al gearchiveerd.',
        THREADS_ARCHIVED: 'Thread gearchiveerd',
        THREADS_LOCK_STATE: 'Thread {state}',
        REOPENED: 'heropend',
        FORUMS_COMMAND_CAN_ONLY_BE_USED_IN: 'Dit commando kan alleen in een forum post worden gebruikt',
        THREADS_SELECT_TAGS_FOR_THREAD: 'Selecteer de tags die deze thread moet hebben',
        VARIABLES_THE_VALUE_OF_VAR_IS: 'De waarde van `{name}` is `{value}`',
        JOIN_NIGHTWATCH: 'Word beschermer van de nacht',
        VOTING_CANT_VOTE_FOR_THIS_ANYMORE: 'Je kan hier niet meer op stemmen!',
        VOTING_VOTED_FOR: 'Je hebt gestemd op',
        VOTING_VOTE_CHANGED_TO: 'Je stem is veranderd naar',
        VOTING_YOU_CAN_VOTE_ON_MULTIPLE: 'Tip: Gebruik het menu onder de knoppen om op meerdere opties te stemmen.',
        VOTING_CAN_ONLY_ADD_MAX_OPTION: 'Je kan maximaal {max} opties toevoegen!',
        VOTING_VOTE_FOR_YOUR_FAVOURITE: 'Stem op je favoriete suggestie voor op het canvas!',
        VOTING_WHICH_SUGGESTION_WOULD_YOU_LIKE: 'Wil jij deze suggestie op het canvas zien?',
        YES: 'Ja',
        NO: 'Nee',
        VOTING_OR_VOTE_FOR_MULTIPLE: 'Of stem op meerdere opties',
        VOTING_YES_SEND_IT: 'Ja, stuur het',
        VOTING_NO_TRY_AGAIN: 'Nee, opnieuw!',
        VOTING_THIS_IS_A_PREVIEW: 'DIT IS EEN PREVIEW',
        VOTING_DOES_IT_LOOK_GOOD: 'Ziet dit er goed uit zo?',
        VOTING_CREATION_FAILED_TRY_AGAIN: 'Er is iets fout gegaan. Maak de stemming opnieuw aan.',
        DONE: 'Done!',
        OKAY: 'Oké',
        VOTING_VOTE: 'Stemming',
        VOTING_WHAT_IS_THE_DESCRIPTION: 'Wat is de beschrijving van de stemming?',
        VOTING_GIVE_OPTIONS_INSTRUCTIONS: 'Optie per regel | Max {optionsMax} | Context na ::',
        VOTING_VOTES: 'Stemmen',
        VOTING_TIME: 'Tijd',
        VOTING_OPTIONS: 'Opties',
        VOTING_VOTE_ENDS_AT: 'Deze stemming eindigt om **{shortDate}** ({relativeDate})',
        VOTING_WINNER: 'Winnaar 🎉',
        VOTING_RESULTS: 'Resultaten',
        EXTRA_ROLES: 'Extra rollen',
        WHICH_ROLE_FITS_YOU: 'Welke rol past het beste bij jou?',
        APPLICATIONS: 'Sollicitaties',
        APPLICATION: 'Sollicitatie',
        WE_ARE_LOOKING_FOR_PEOPLE: 'Bij {server} zijn we op zoek naar talent! Voel jij je aangesproken bij een van de volgende rollen? Solliciteer met een korte beschrijving waarom je geschikt bent.',
        USER_APPLIED: '{user} heeft gesolliciteerd.',
        ROLES_2022: 'Rollen 2022',
        ART_REJECTED_ART: 'Afgekeurde art',
        ART_REASON_FOR_REJECTION: 'Reden voor afkeuring: {reason}',
        ART_FILE_FORMAT: 'formaat',
        ART_VALID_ART: 'Valide art',
        ART_ARTWORK_REQUIREMENTS: 'Je art moet aan de volgende eisen voldoen:\n- PNG {format}\n- {scale} scaling\n- Transparante achtergrond\n- Alleen de beschikbare kleuren',
        ART_PLACING_COORDINATED_PIXELS: 'Gecoördineerd pixels plaatsen',
        ART_PRESS_BUTTON_TO_CLAIM_PIXEL: 'Klik op de knop hieronder om een pixel te claimen voor deze afbeelding.',
        ART_PLACE_PIXEL_RIGHT_AWAY: 'Deze mag je __direct__ plaatsen!',
        ART_WAIT_UNTIL_TIME_TO_PLACE_PIXEL: '__Wacht__ tot **{shortTime}** ({relativeTime}) met het plaatsen van je pixel!',
        ART_AMOUNT_OF_CLAIMED_PIXELS: 'Aantal geclaimde pixels',
        ART_DO_NOT_DISMISS_OR_REMEMBER_COLOUR: '__Klik dit bericht niet weg__, of onthoud de coördinaten en kleur!',
        VOTING_MULTIPLE_VOTES: 'stemmen',
        VOTING_SINGLE_VOTE: 'stem',
        COMMANDS_UPDATE_SLASH_COMMAND: 'Update de slash commands',
        COMMANDS_OPEN_OR_CLOSE_APPLICATIONS: 'Zet de sollicitaties open of dicht',
        COMMANDS_FOR_WHICH_ROLE_TO_CLOSE_APPLICATIONS: 'Voor welke rol je de sollicitaties wilt openen of sluiten',
        ROLES_DIPLOMATS: 'Diplomaten',
        ROLES_PIXEL_ARTISTS: 'Pixel Artists',
        ROLES_COMMUNITY_SUPPORT: 'Community Support',
        ROLES_EDITOR: 'Redacteur',
        COMMANDS_APPLICATIONS_OPEN_OR_CLOSED: 'Wil je de sollicitaties openen of sluiten?',
        COMMANDS_OPEN_IT: 'Openen',
        COMMANDS_CLOSE_IT: 'Sluiten',
        COMMANDS_CREATE_A_VOTE: 'Creëer een stemming',
        COMMANDS_THE_IMAGE_THAT_BELONGS_TO_THE_VOTE: 'De afbeelding die bij de stemming hoort',
        COMMANDS_HOW_LONG_SHOULD_THE_VOTE_TAKE: 'Optioneel: Hoe lang de stemming moet duren in minuten. Standaard 5 minuten.',
        COMMANDS_CHECK_BILLY_TIME: 'Kijk hoe laat het bij Billy is',
        COMMANDS_GIVE_OR_TAKE_ROLE: 'Geef iemand een rol, of pak een rol af',
        COMMANDS_WHO_TO_GIVE_ROLE_OR_TAKE_ROLE: 'Wie die je de rol wilt geven/afpakken',
        COMMANDS_DO_YOU_WANT_TO_TAKE_OR_GIVE_ROLE: 'Wil je de rol geven of afpakken?',
        COMMANDS_GIVE: 'Geven',
        COMMANDS_TAKE: 'Afpakken',
        COMMANDS_REASON_FOR_MODIFYING_ROLE: 'De reden waarom je de rol geeft/afpakt',
        COMMANDS_MODIFY_DIPLOMAT_ROLE: 'Geef iemand de rol van diplomaat, of pak deze af',
        COMMANDS_MODIFY_PIXEL_ARTIST_ROLE: 'Geef iemand de rol van pixelaar, of pak deze af',
        COMMANDS_MANAGE_THREADS: 'Beheer threads',
        COMMANDS_ARCHIVE_THREAD: 'Archiveer een thread, wordt automatisch geopend als iemand weer praat',
        COMMANDS_REASON_FOR_ARCHIVING: 'Optioneel: Waarom je deze thread sluit',
        COMMANDS_CLOSE_THREAD: 'Sluit een thread, niemand kan meer praten',
        COMMANDS_REASON_FOR_CLOSING: 'Optioneel: De reden waarom je de thread sluit',
        COMMANDS_MODIFY_TAGS_FOR_FORUM_POST: 'Pas de tags aan van een forum post',
        COMMANDS_TREATY_TYPE: 'Het type verdrag',
        COMMANDS_MAKE_DIPLOMACY_TREATY: 'Maak een verdrag dat beide partijen moeten ondertekenen',
        COMMANDS_MAKE_TEMPORARY_DIPLOMACY_VOICE_CHAT: 'Diplomaten: Maak een tijdelijk voicekanaal aan',
        COMMANDS_TREATY_DURATION: 'Optioneel: Hoelang het verdrag geldig is, in het Engels (bijv: 3 hours, 1 day, etc.)',
        COMMANDS_START_COORDINATED_ART_PLACEMENT: 'Start een gecoördineerde plaatsing van pixel art op het canvas',
        COMMANDS_THE_PIXEL_ART: 'De pixel art',
        COMMANDS_X_COORD_TOP_LEFT: 'De x-coördinaat van de linkerbovenhoek van de pixel art',
        COMMANDS_Y_COORD_TOP_LEFT: 'De y-coördinaat van de linkerbovenhoek van de pixel art',
        COMMANDS_AT_WHAT_TIME_TO_PLACE_ARTWORK: 'Optioneel: Hoe laat de pixel art moet worden geplaatst in HH:MM format (bijv: 14:15)',
        COMMANDS_CREATE_PIXEL_ART_TEMPLATE: 'Maak een template afbeelding voor je pixel art',
        COMMANDS_ADD_PIXEL_ART_TO_TEMPLATE: 'De pixel art die je wilt toevoegen aan de template',
        COMMANDS_CREATE_GRID_FOR_PIXEL_ART: 'Creëer een grid voor je pixel art',
        COMMANDS_PIXEL_ART_TO_CREATE_GRID_FOR: 'De pixel art waar je een grid van wilt hebben',
        COMMANDS_PLACE_ROLES_MESSAGE: 'Plaats het rollen bericht in dit kanaal',
        COMMANDS_PLACE_ONBOARDING_MESSAGE: 'Plaats het onboarding bericht in dit kanaal',
        COMMANDS_VARIABLES: 'Variabelen',
        COMMANDS_NAME_OF_VARIABLE: 'De naam van de variabele',
        COMMANDS_VALUE_OF_VARIABLE: 'De waarde van de variabele',
        COMMANDS_CHANGE_VALUE_OF_VARIABLE: 'Verander de waarde van een variabele. Splits arrays met een komma.',
        COMMANDS_GET_VARIABLE_VALUE: 'Krijg de waarde van een variabele',
        COMMANDS_GET_LIST_OF_VALUES_FOR_ALL_VARIABLES: 'Krijg een lijst van de waardes van alle variabelen',
        LINK_TO_THREAD: 'Link naar de thread',
        DIPLOMACY_COMMUNITY_SIZE: 'Community grootte',
        DIPLOMACY_MESSAGE: 'Bericht',
        DIPLOMACY_SIMILAR_DIPLOMATS: '⚠\uFE0F Vergelijkbare {singleOrPlural}',
        DIPLOMAT_SINGLE: 'diplomaat',
        DIPLOMAT_PLURAL: 'diplomaten',
        WELCOME: 'Welkom',
        ONBOARDING_WHAT_BRINGS_YOU_TO_THE_SERVER: 'Waarvoor ben je in de server?',
        ONBOARDING_NICE_OF_YOU_TO_COME_HELP: 'Fijn dat je komt meehelpen!',
        ONBOARDING_YOU_CAN_HELP_IN_THE_FOLLOWING_WAYS: 'Meehelpen kan op de volgende manieren',
        ONBOARDING_MORE_ROLES: 'Nog meer rollen',
        ONBOARDING_LOOKING_FOR_TALENT: 'Bij {server} zijn we op zoek naar talent! Bekijk {rolesChannel} voor nog meer rollen!',
        NIGHTWATCH: 'De Nachtwacht',
        NIGHTWATCH_MESSAGE: 'De nacht breekt aan, en nu begint mijn wacht. Het zal niet eindigen tot 0{timeEnd}:00. ' +
            'Ik zal scherp blijven, geen dutje doen, en niet knikkebollen. Ik zal me focussen op mijn taak en me niet laten afleiden. Ik zal leven op mijn ' +
            'post. Ik ben het zwaard in de duisternis. Ik ben de wachter op het canvas. Ik ben het schild dat het rijk der pixels bewaakt. Ik beloof mijn' +
            'leven en eer aan de Nachtwacht, voor deze nacht en alle komende nachten.',
        NIGHTWATCH_WELCOME: 'Welkom bij de Nachtwacht',
        NIGHTWATCH_OPENING_TIMES: 'Dit kanaal is alleen open tussen 0{timeStart}:00 en 0{timeEnd}:00, bedoeld voor hen met ~~een slecht slaapritme~~ de passie om ons land te beschermen in de nacht. Klik op de knop hieronder om lid te worden van de Nachtwacht, en daarmee ook overdag dit kanaal te kunnen lezen.'
    };
    public static LanguageSetting: string = 'nl-NL';
    public static LoadLanguageConfig(languageCode: string) {
        try {
            const json = fs.readFileSync(`lang/${languageCode}.json`, 'utf8');
            const parsedObject: Partial<LangConfig> = JSON.parse(json);
            this.LangConfig = Object.assign(this.LangConfig, parsedObject);
            this.LanguageSetting = languageCode;
        } catch (e) {
            if (e instanceof Error) {
                console.log(`Error Message: ${e.message}\nAn error occurred while loading the language configuration, settings default values...`);
            }
        }
    }
}
