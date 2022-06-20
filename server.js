import fsp from "fs/promises";
import express from "express";

const app = express();
app.use(express.json());


function getMaxId(arr) {
  const ids = arr.map((item) => {
    return item.id;
  });
  const max = Math.max(...ids);
  return max;
}


app.get("/", (req, res) => {
  res.send("HOME PAGE");
});


app.get("/products", (req, res) => {
  fsp.readFile("./products.json", "utf8").then((data) => res.send(data));
});


app.get("/products/:productID", (req, res) => {
  const { productID } = req.params;
  fsp.readFile("./products.json", "utf8").then((data) => {
    const products = JSON.parse(data);
    const product = products.find((product) => product.id === +productID);
    if (product) {
      res.send(product);
    } else {
      res.send("Lo Hetzliach");
    }
  });
});


app.post("/products", (req, res) => {
    console.log('req', req);
  fsp.readFile("./products.json", "utf8").then((data) => {
    const products = JSON.parse(data);
    products.push({
      id: getMaxId(products) + 1,
      title: req.body.title,
      price: req.body.price,
      description: "TBD",
      category: "TBD",
    });
    fsp.writeFile("./products.json", JSON.stringify(products));
    res.send(products);
  });
//   res.send("Somthing went wrong");
});

app.listen(8000);
