// import * as fs from "fs";
// const myText = fs.readFile("./en.txt", "utf8", (err , data)=>
// {if (err){console.log('Error');}
// console.log('data', data);
// });

// import * as http from "http";
// import * as fs from "fs/promises";

// function write(fileName, translation) {
//   fs.writeFile(`./${fileName}`, JSON.stringify(`${translation}`))
//     .then(() => console.log("Done writing"))
//     .catch((err) => console.log("Error", err));
// }

// function findWordInDictionary(word) {
//   fs.readFile("./translations.json", "utf8").then((data) => {
//     const wordsArr = JSON.parse(data);
//     {
//       wordsArr[0].hasOwnProperty(word)
//         ? write("./he.txt", wordsArr[0][word])
//         : console.log("word not found");
//     }
//   });
// }

// function read(fileName) {
//   fs.readFile(`./${fileName}`, "utf8")
//     .then((wordToTranlate) => {
//       findWordInDictionary(wordToTranlate);
//     })
//     .catch((err) => console.log("Erorr", err));
// }

// http
//   .createServer((request, response) => {
//     response.writeHead(200, { "Content-Type": "application/json" });
//     read("en.txt")
//     response.end();
//   })
//   .listen(8000);

