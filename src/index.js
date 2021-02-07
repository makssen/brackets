module.exports = function check(str, bracketsConfig) {
    let lengthOfStr = str.length;

    for (let i = 0; i < lengthOfStr; i++) {
        for (let item of bracketsConfig) {
            if (str.includes(item.join(''))) {
                str = str.replace(item.join(''), '');
            }
        }
        lengthOfStr--;
    }
    return !str.length
}