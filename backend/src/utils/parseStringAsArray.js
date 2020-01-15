module.exports = function parseStringAsArray(arrayAsString) {
    return arrayAsString.split(',').map(technology => technology.trim())
}