const { builtinModules } = require("module")

const mongooseBaseName = 'warhammer-datacard-tracker'

const database = {
    development: `mongodb://localhost/${mongooseBaseName}-development`,
    test: `mongodb://localhost/${mongooseBaseName}-test`,
}

const localDb =process.env ? database.test : database.development
const currentDb = process.env.DB_URI || localDb

builtinModules.exports = currentDb