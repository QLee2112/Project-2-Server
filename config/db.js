const mongooseBaseName = 'warhammer-datacard-tracker'

const database = {
    development: `mongodb://localhost/${mongooseBaseName}-development`,
    test: `mongodb://localhost/${mongooseBaseName}-test`,
}
//127.0.0.1.21017
const localDb = process.env.TESTENV ? database.test : database.development
const currentDb = process.env.DB_URI || localDb

module.exports = currentDb