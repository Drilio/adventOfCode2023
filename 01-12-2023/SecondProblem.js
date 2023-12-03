const fs = require('fs');

const rawDatas = fs.readFileSync("./test", 'utf-8');
const datas = rawDatas.split('\n');

function wordToNumber(word) {
    const wordMap = {
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9,
    };

    const match = word.match(/one|two|three|four|five|six|seven|eight|nine/g);

    if (match) {
        return word.replace(/one|two|three|four|five|six|seven|eight|nine/g, (matched) => {
            return wordMap[matched];
        });
    }

    return word;
}

function myCalibrationValue(datas) {
    let calibration = 0;

    for (let data of datas) {
        const words = data.split(/\s+/);

        for (let word of words) {
            const transformedWord = wordToNumber(word);
            console.log(transformedWord)
            const stringWithoutLetter = transformedWord.replace(/[^0-9]/g, '');
            const twoDigit = (stringWithoutLetter.substring(0, 1) + stringWithoutLetter.substring(stringWithoutLetter.length - 1));
            calibration += parseInt(twoDigit, 10) || 0;
            console.log(twoDigit)

        }
    }

    console.log("Calibration:", calibration);
}

myCalibrationValue(datas);
