function getFlag(country) {
    const flags = {
        albania: 'al',
        austria: 'at',
        belarus: 'by',
        belgium: 'be',
        bosniaherzegovina: 'ba',
        bulgaria: 'bu',
        croatia: 'hr',
        cyprus: 'cy',
        czechia: 'cz',
        denmark: 'dk',
        estonia: 'ee',
        finland: 'fi',
        france: 'fr',
        germany: 'de',
        greece: 'gr',
        hungary: 'hu',
        iceland: 'is',
        ireland: 'ie',
        italy: 'it',
        latvia: 'lv',
        lithuania: 'lt',
        montenegro: 'me',
        netherlands: 'nl',
        northmacedonia: 'mk',
        norway: 'no',
        poland: 'pl',
        portugal: 'pt',
        romania: 'ro',
        russia: 'ru',
        serbia: 'rs',
        slovakia: 'sk',
        slovenia: 'si',
        spain: 'es',
        sweden: 'se',
        switzerland: 'ch',
        ukraine: 'ua',
        unitedkingdom: 'gb'
    }
    return flags[country];
}

export default getFlag