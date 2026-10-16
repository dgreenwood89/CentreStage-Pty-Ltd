// Frozen 2027 cast — edit names here (or in-place on the cards)
const P = "Name TBC";
const PR = "she/her"; // default pronouns — edit per person
export const GROUPS = [
  { id: "leads", label: "The Leads", eyebrow: "Meet the cast / Leads", cols: 3, cast: [
    { id: "elsa", role: "Elsa", name: P, pronouns: PR },
    { id: "anna", role: "Anna", name: P, pronouns: PR },
    { id: "kristoff", role: "Kristoff", name: P, pronouns: PR },
    { id: "olaf", role: "Olaf", name: P, pronouns: PR },
    { id: "sven", role: "Sven", name: P, pronouns: PR },
    { id: "hans", role: "Hans", name: P, pronouns: PR },
  ] },
  { id: "understudies", label: "Understudies", eyebrow: "Meet the cast / Understudies", cols: 2, cast: [
    { id: "elsa-us", role: "Elsa — Understudy", name: P, pronouns: PR },
    { id: "anna-us", role: "Anna — Understudy", name: P, pronouns: PR },
  ] },
  { id: "young", label: "Young Elsa & Young Anna", eyebrow: "Meet the cast / Young Elsa & Young Anna", cols: 3, cast: [
    { id: "yelsa-1", role: "Young Elsa", name: P, set: "Set one" },
    { id: "yanna-1", role: "Young Anna", name: P, set: "Set one" },
    { id: "yelsa-2", role: "Young Elsa", name: P, set: "Set two" },
    { id: "yanna-2", role: "Young Anna", name: P, set: "Set two" },
    { id: "yelsa-3", role: "Young Elsa", name: P, set: "Set three" },
    { id: "yanna-3", role: "Young Anna", name: P, set: "Set three" },
  ] },
  { id: "supporting", label: "Supporting Roles", eyebrow: "Meet the cast / Supporting roles", cols: 3, cast: [
    { id: "weselton", role: "Duke of Weselton", name: P, pronouns: PR },
    { id: "oaken", role: "Oaken", name: P, pronouns: PR },
    { id: "pabbie", role: "Pabbie", name: P, pronouns: PR },
    { id: "bulda", role: "Bulda", name: P, pronouns: PR },
    { id: "agnarr", role: "King Agnarr", name: P, pronouns: PR },
    { id: "iduna", role: "Queen Iduna", name: P, pronouns: PR },
  ] },
  { id: "supporting-2", label: "Supporting Roles", eyebrow: "Meet the cast / Supporting roles, continued", cols: 3, cast: [
    { id: "bishop", role: "Bishop", name: P, pronouns: PR },
    { id: "steward", role: "Steward", name: P, pronouns: PR },
    { id: "wetnurse", role: "Wet Nurse", name: P, pronouns: PR },
    { id: "handmaiden-1", role: "Handmaiden", name: P, pronouns: PR },
    { id: "handmaiden-2", role: "Handmaiden", name: P, pronouns: PR },
  ] },
  { id: "ensemble", label: "Featured Dancers", eyebrow: "Meet the cast / Featured dancers", cols: 5, cast: [
    { id: "ens-1", role: "Featured Dancer", name: P, pronouns: PR }, { id: "ens-2", role: "Featured Dancer", name: P, pronouns: PR },
    { id: "ens-3", role: "Featured Dancer", name: P, pronouns: PR }, { id: "ens-4", role: "Featured Dancer", name: P, pronouns: PR },
    { id: "ens-5", role: "Featured Dancer", name: P, pronouns: PR }, { id: "ens-6", role: "Featured Dancer", name: P, pronouns: PR },
    { id: "ens-7", role: "Featured Dancer", name: P, pronouns: PR }, { id: "ens-8", role: "Featured Dancer", name: P, pronouns: PR },
    { id: "ens-9", role: "Featured Dancer", name: P, pronouns: PR }, { id: "ens-10", role: "Featured Dancer", name: P, pronouns: PR },
  ] },
];
