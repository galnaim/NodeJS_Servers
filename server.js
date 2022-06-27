import fsp from "fs/promises";
import express from "express";
import mongoose from "mongoose";
import { send } from "process";

const app = express();
app.use(express.json());

const Product = mongoose.model("Product", {
  title: String,
  price: Number,
  description: String,
  category: String,
  image: String,
});

// app.get("/products", (req, res) => {
//   fsp.readFile("./products.json", "utf8").then((data) => {
//     const products = JSON.parse(data);

//     products.map(function (item) {
//       const { title, price, description, category, image } = item;
//       Product.insertMany([
//         {
//           title,
//           price,
//           description,
//           category,
//           image,
//         },
//       ]).then(res.send("Good"));
//     });
//   });
// });

app.get("/products/:productID", (req, res) => {
  const { productID } = req.params;
  Product.findById(productID)
  .then((retrievedProduct) => {
    res.send(retrievedProduct);
  })
  .catch((e) => res.send("ERROR"))
});


app.get("/products", (req, res)=>{
  const {title} = req.query;
if (title){
  Product.find({title})
  .then((retrievedProduct)=>
  res.send(retrievedProduct));}
  else
  {Product.find()
  .then((retrievedProduct)=>res.send(retrievedProduct))}
  })


app.patch("/products/:productID", (req, res)=>{
  const {productID} = req.params;
  Product.findByIdAndUpdate(productID, req.body)
  .then((retrievedProduct)=>res.send(retrievedProduct))
})

app.delete("/products/:productID", (req, res)=>{
  const {productID} = req.params;
  Product.findByIdAndDelete(productID)
  .then((Mutzar)=>res.send(Mutzar))
})

// app.post("/products", (req, res)=>{
//   const {title, price, description, category, image } = req.body;
//   console.log('req.body', req.body);
//   Product.insertMany([{
//     title,
//     price,
//     description,
//     category,
//     image
//   }]).then((products)=>{
//     res.send(products)
//   })
// })

// function getMaxId(arr) {
//   const ids = arr.map((item) => {
//     return item.id;
//   });
//   const max = Math.max(...ids);
//   return max;
// }

// app.get("/", (req, res) => {
//   res.send("HOME PAGE");
// });

// app.get("/products", (req, res) => {
//   fsp.readFile("./products.json", "utf8").then((data) => res.send(data));
// });

// app.get("/products/:productID", (req, res) => {
//   const { productID } = req.params;
//   fsp.readFile("./products.json", "utf8").then((data) => {
//     const products = JSON.parse(data);
//     const product = products.find((product) => product.id === +productID);
//     if (product) {
//       res.send(product);
//     } else {
//       res.send("Lo Hetzliach");
//     }
//   });
// });

// app.post("/products", (req, res) => {
//   console.log("req", req);
//   fsp.readFile("./products.json", "utf8").then((data) => {
//     const products = JSON.parse(data);
//     products.push({
//       id: getMaxId(products) + 1,
//       title: req.body.title,
//       price: req.body.price,
//       description: "TBD",
//       category: "TBD",
//     });
//     fsp.writeFile("./products.json", JSON.stringify(products));
//     res.send(products);
//   });
//   //   res.send("Somthing went wrong");
// });

// app.delete("/products/:productID", (req, res) => {
//   const { productID: productID } = req.params;
//   console.log('req.params', req.params);
//   fsp.readFile("./products.json", "utf8").then((fromJson) => {
//     if (req.body) {
//       const products = JSON.parse(fromJson);
//       const productIndex = products.findIndex((product) => product.id === +productID);
//       if (productIndex >= 0){
//         products.splice(productIndex, 1);
//         fsp.writeFile("./products.json", JSON.stringify(products)).then(()=>{
//           res.send(products)
//         })}
//         else {res.send("Error deleting")}
//     }
//   });
// });

// app.patch("/products/:productID", (req, res) => {
//   const { productID } = req.params;
//   // const { title } = req.body;
//   fsp.readFile("./products.json", "utf8").then((data) => {
//     if (req.body) {
//       const products = JSON.parse(data);
//       const productsIndex = products.findIndex(
//         (product) => product.id === +productID
//       );
//       products[productsIndex] = {...products[productsIndex], ...req.body};

//       fsp.writeFile("./products.json", JSON.stringify(products)).then(() => {
//         res.send(products[productsIndex]);
//       });
//     } else {
//       res.send(Error);
//     }
//   });
// });

// app.get("/products", (req, res)=>{
//   console.log('req.query', req.query);
//   fsp.readFile("./products.json", "utf8").then((stringfromjsonfile)=>{
//     const products = JSON.parse(stringfromjsonfile);
//     if (req.query){
//       const {title} = req.query;
//       const results = products.filter((product) =>
//       product.title.toLowerCase().includes(title.toLowerCase()))
//       res.send(results)
//     }
//     })
// })

mongoose.connect("mongodb://localhost:27017/ShopGoCode").then(() => {
  app.listen(8000);
});



//Ignoer:
// app.get("/todos", (req, res) => {
//   const { title } = req.query;
//   Todo.find().then((todos) => {
//     const filteredTodos = title
//       ? todos.filter((todo) =>
//           todo.title.toLowerCase().includes(title.toLowerCase())
//         )
//       : todos;

//     res.send(filteredTodos);
//   });
// });

// app.get("/todos/:todoId", (req, res) => {
//   const { todoId } = req.params;
//   Todo.findById(todoId)
//     .then((todo) => {
//       res.send(todo);
//     })
//     .catch((e) => res.send("ERROR!!!!!!!!!!!!!!!"));
// });

// app.post("/todos", (req, res) => {
//   const { title } = req.body;

//   Todo.insertMany([
//     {
//       title,
//       completed: false,
//     },
//   ]).then((todos) => {
//     res.send(todos);
//   });
// });

// app.patch("/todos/:todoId", (req, res) => {
//   const { todoId } = req.params;

//   Todo.findByIdAndUpdate(todoId, req.body)
//     .then((todos) => res.send(todos))
//     .catch((e) => res.send("ERRORRRRR!!!!!!"));
// });

// app.delete("/todos/:todoId", (req, res) => {
//   const { todoId } = req.params;

//   Todo.findByIdAndRemove(todoId)
//     .then((todo) => res.send(todo))
//     .catch((e) => res.send("ERRRORRRR!"));
// });