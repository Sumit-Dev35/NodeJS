const { readFile, writeFile } = require("fs");

readFile('text-content/new-folder/new-text.file','utf-8',(err,result)=>{
  if(err){
    console.log("Got error while reading this file");
    return;
  }
  console.log(`Result : ${result}`);
})

writeFile('text-content/new-folder/new-text1.file','New content arrive',(err)=>{
  if(err)
  console.log("Got error in writing")
})

readFile('text-content/new-folder/new-text1.file','utf-8',(err,result)=>{
  if(err){
    console.log("Got error while reading this file");
    return;
  }
  console.log(`Result : ${result}`);
})