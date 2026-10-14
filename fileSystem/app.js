const { readFileSync,writeFileSync } = require("fs");

let text=readFileSync('text-content/new-folder/text.file','utf-8');

console.log(text)

writeFileSync('text-content/new-folder/text.file','Now I am writing');
writeFileSync('text-content/new-folder/new-text.file',text);

text=readFileSync('text-content/new-folder/text.file','utf-8');

console.log(text);

text=readFileSync('text-content/new-folder/new-text.file','utf-8',);

console.log(text);

