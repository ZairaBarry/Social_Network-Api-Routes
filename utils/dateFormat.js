module.exports = function dateFormat(date) {
    return date.toLocaleDateString(undefined, {  year: 'numeric', month: 'short', day: 'numeric' })

} 