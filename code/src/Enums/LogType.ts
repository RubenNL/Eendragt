export enum LogType {
    CommandsUpdate = 'Commands Update',
    VariableUpdate = 'Variable Update',
    OnboardingCreate = 'Onboarding Create',
    OnboardingPlacer = 'Onboarding Placer',
    OnboardingDiplomatStart = 'Onboarding Diplomat Start',
    OnboardingDiplomat = 'Onboarding Diplomat',
    OnboardingObserver = 'Onboarding Observer',
    OnboardingDevelopment = 'Onboarding Development',
    ValidateArt = 'ValidateArt',
    ValidateArtGood = 'ValidateArt Good',
    ValidateArtBad = 'ValidateArt Bad',
    ValidateArtIllegitimate = 'ValidateArt Illegitimate',
    SuggestionCreated = 'Suggestion Created',
    SuggestionNoTags = 'Suggestion NoTags',
    SuggestionDuplicate = 'Suggestion Duplicate',
    SuggestionAppreciated = 'Suggestion Appreciated',
    SuggestionDisliked = 'Suggestion Disliked',
    SuggestionVote = 'Suggestion Vote',
    DiplomacyClaim = 'Diplomacy Claim',
    DiplomacyReportStart = 'Diplomacy Report Start',
    DiplomacyReport = 'Diplomacy Report',
    DiplomacyInvite = 'Diplomacy Invite',
}