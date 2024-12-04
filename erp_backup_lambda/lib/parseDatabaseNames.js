/**
 * Parse database names from config.PGDATABASE
 */
function parseDatabaseNames(config) {
    if (!config.PGDATABASE) {
        throw new Error("PGDATABASE was not provided")
    }
    const dbnames = config.PGDATABASE.split(",").map(s => s.trim()).filter(s => s)
    return Array.from(new Set(dbnames))
}

module.exports = parseDatabaseNames