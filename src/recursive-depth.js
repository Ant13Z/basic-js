module.exports = class DepthCalculator {
    calculateDepth(arrs) {
        let maxLVL = 1;
        arrs.forEach(arr => {
            let lvl = 1;
            if (arr instanceof Array) {
                lvl += this.calculateDepth(arr);
            }
            if (lvl > maxLVL) {
                maxLVL = lvl;
            }
        });
        return maxLVL;
    }
};