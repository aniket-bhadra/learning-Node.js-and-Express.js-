const express = require("express");
const app = express();
const { products } = require("./data");

app.get("/", (req, res) => {
  res.send('<h1>Home Page</h1> <a href="/api/products">products</a>');
});

app.get("/api/products", (req, res) => {
  const newItems = products.map((product) => {
    const { id, name, image } = product;
    return {
      id,
      name,
      image,
    };
  });
  res.json(newItems);
});

app.get("/api/products/:jo", (req, res) => {
  // console.log(req.params);
  const { jo } = req.params;
  const singleProduct = products.find((product) => product.id === Number(jo));

  if (!singleProduct) {
    return res.status(404).send("<h1>sorry product doest not exist </h1>");
  }

  res.json(singleProduct);
});

app.get("/api/v1/query", (req, res) => {
  // console.log(req.query);
  const { search, limit } = req.query;
  let sortedProducts = [...products];

  if (search) {
    sortedProducts = sortedProducts.filter((product) =>
      product.name.includes(search)
    );
  }

  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }
  if (sortedProducts.length < 1) {
    //  res.status(404).send("sorry results not found");

    return res.status(200).json({ success: true, data: [] });
  }



  // console.log("a");
  res.status(200).json(sortedProducts);
  // res.send("hello query");
});

app.listen(5000, () => {
  console.log("server is listening on 5000......");
});
