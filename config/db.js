// const mongooseBaseName = 'warhammer-datacard-tracker'

// const database = {
//     development: `mongodb://localhost/${mongooseBaseName}-development`,
//     test: `mongodb://localhost/${mongooseBaseName}-test`,
// }
// const localDb = process.env.TESTENV ? database.test : database.development
// const currentDb = process.env.DB_URI || localDb

// module.exports = currentDb

const mongooseBaseName = 'warhammer-datacard-tracker-development'

const database = {
    development: `mongodb://localhost/${mongooseBaseName}-development`,
    test: `mongodb://localhost/${mongooseBaseName}-test`,
}

const localDb = process.env.TESTENV ? database.test : database.development

const currentDb = process.env.DB_URI || localDb

module.exports = currentDb