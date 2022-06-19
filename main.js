// import * as fs from "fs";
// const myText = fs.readFile("./en.txt", "utf8", (err , data)=>
// {if (err){console.log('Error');}
// console.log('data', data);
// });

import * as http from "http";
import * as fs from "fs/promises";


// http
//   .createServer((request, response) => {
//     response.writeHead(200, { "Content-Type": "application/json" });

//     response.end("Hello");
//   })
//   .listen(8000);

function write(fileName, translation) {
  fs.writeFile(`./${fileName}`, JSON.stringify(`${translation}`))
    .then(() => console.log("Done writing"))
    .catch((err) => console.log("Error", err));
}

function findWordInDictionary(word)
fs.readFile("./translations.json", "utf8").then((data) => {
  const wordsArr = JSON.parse(data);
  {
    if (wordsArr[0].hasOwnProperty(word))
    {write("./he.txt", wordsArr[0][word])}
  }
  });

function read(fileName) {
  fs.readFile(`./${fileName}`, "utf8")
    .then((wordToTranlate) => {
        const word = JSNO.parse(wordToTranlate)
        findWordInDictionary(word)
        })
    .catch((err) => console.log("Erorr", err));
}
read("./en.txt");
