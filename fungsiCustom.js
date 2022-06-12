// TODO: import module bila dibutuhkan di sini
const fs= require("fs");
// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const bacaData = (fnCb)=>{
  fs.readFile(file1,"utf-8",(err,inValsatu)=>{
    const data1 = JSON.parse(inValsatu);
    const msg1 = kata2(data1.message);

    fs.readFile(file2,"utf-8",(err,inVal2) =>{
const data2 = JSON.parse(inVal2);
const msg2 = kata2(data2[0].message);

fs.readFile(file3,"utf-8",(err,inVal3)=>{
  const data3=JSON.parse(inVal3);
  const msg3=kata2(data3[0].data.message);
  fnCb(err,[msg1,msg2,msg3])

});

    });
  });
};

const kata2=(inVal)=>{
const kataAkhir = inVal.split(" ").reverse();
return kataAkhir[0];
}
// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
