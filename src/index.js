module.exports = function reverse (n) {
    let result = String(n).split('').reverse().join('');
    result = result.includes('-') ? result.slice(0, -1) : result;
    return Number(result);
};
