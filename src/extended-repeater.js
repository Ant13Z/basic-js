module.exports = function repeater(str, options) {
    // repeater('STRING', { repeatTimes: 3, separator: '**', addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
    // 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'

    options = Object.assign({
        repeatTimes: 0,
        separator: '+',
        addition: '',
        additionRepeatTimes: 0,
        additionSeparator: ''
    }, options);

    let arrAdditional = [];
    for (let j = 0; j < (options.additionRepeatTimes ? options.additionRepeatTimes : 1); j++) {
        arrAdditional.push(options.addition + '');
    }

    let arrResult = [];
    for (let i = 0; i < (options.repeatTimes ? options.repeatTimes : 1); i++) {
        arrResult.push(str + arrAdditional.join(options.additionSeparator));
    }
    return arrResult.join(options.separator);
};
