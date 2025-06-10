console.log('Welcome to Node World')
const fs=require('fs')
fs.writeFile('output.text','writing file',(err)=>{
  if(!err){
    console.error(err);
  }
  else{
    console.log('Successfully Created file');
  }
})