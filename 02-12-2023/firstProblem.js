const fs = require("fs");

const rawDatas = fs.readFileSync("./data", 'utf-8');

const datasToExploit = rawDatas.split('\n');

const IdToIgnore = []

const blue =  14;
const red = 12;
const green = 13;
function records(datas){
datas.forEach((records)=>{
    let record =records.split(';');
    // records = records.substring(0,6)
    record.forEach((datas) =>{
        datas = datas.replace(/^[^:]+:\s*/, '')
        let recordDatas = datas.split(',')
    recordDatas.forEach((data)=>{
        if(data.match(/green/g)){
            let numb = Number(data.replace(/\D/g,''))
            if(numb > green){
            console.log(records);
            }
        }else if(data.match(/blue/g)){
            let numb = Number(data.replace(/\D/g,''))
            if(numb > blue){
                console.log(records)
            }
        }else if(data.match(/red/g)){
            let numb = Number(data.replace(/\D/g, ''))
            if(numb > red){
                console.log(records)
            }
        }

    })
    })
})
    console.log(datas);
}

records(datasToExploit);

