const fs = require('fs');

const rawDatas = fs.readFileSync("./dataFirstProblem" , 'utf-8');
const datas = rawDatas.split('\n');
console.log(datas);
function  myCalibrationValue(datas){
    let calibration = 0;
    //remove letters
    for (let data of datas){
        const stringWithoutLetter = data.replace(/[^0-9]/g, '');
        const twoDigit = (stringWithoutLetter.substring(0, 1) + stringWithoutLetter.substring(stringWithoutLetter.length - 1));
        calibration += Number(twoDigit);
        console.log(calibration);
    }

}

myCalibrationValue(datas)