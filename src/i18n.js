const NextI18Next = require('next-i18next/dist/commonjs');

module.exports = new NextI18Next({
    otherLanguages: ["en"],
    defaultLanguage: "de",
    localePath: "src/static/locales",
    fallbackLng: "de"
})  