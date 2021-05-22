/*jshint esversion: 6 */
const fs = require('fs');
fs.readFile('./resource/你好.md',(err, data)=>{
    if(err) throw err;
    console.log(data.toString());
});