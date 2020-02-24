module.exports = function countCats(matrix = []) {
    return matrix.reduce((sum, line) => {
        line.forEach(e => sum += e === "^^" ? 1 : 0);
        return sum;
    }, 0);
};