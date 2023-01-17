//---------------------->>>>>>>>>>-----basic setup for testing routes & controller functions-----------------------

// const getAllProductsStatic = async (req, res) => {
//   throw new Error("testing async errors"); //since we r using express-async-error pacakge so insead of using next() here we just throw error. & this does the job for us. this error will be received by the error-handler.js
//   res.status(200).json({ msg: "products testing route" });
// };

// const getAllProducts = async (req, res) => {
//   res.status(200).json({ msg: "products route" });
// };

// module.exports = {
//   getAllProducts,
//   getAllProductsStatic,
// };


// //so just import the express-async-error by require() in app.js, setup your custom error middleware where you received the error as parameter, then place it below the product routes. that's it. now whenever mongoose throw an error in any controller funciton, that error will be received by the error-handler.js

// //so now if mongoose throw an error that goes to--error-handler.js, & if we throw an error that also goes to error-handler.js

//------------->>>>>>-->>>>>>>>>>>>>>>>-real logic setted up in controller fun-----------------------------

const Product = require("../models/product");

const getAllProductsStatic = async (req, res) => {
  // const products = await Product.find({ featured: "false" });  if u pass false as string, find() still get u the all the products with featured: false as Boolean
   //testing regex query operator
  // const search = "ab";
  // const products = await Product.find({
  //   name: {
  //     $regex: search,
  //     $options: "i",
  //   },
  // });
   res.status(200).json({ products, nbHits: products.length });
  
  }
  
  const getAllProducts = async (req, res) => {
  
  const { featured, company, name } = req.query;
  const queryObject = {};
  // console.log(typeof featured); -------> string
  if (featured) {
    queryObject.featured = featured === "true" ? true : false; //if u pass dierectly queryObject.featured = featured, it still going to work but here we do this explictly just to be clear
  }
    if (company) {
    queryObject.company = company;
  }
   if (name) {
    queryObject.name = {
      $regex: name,
      $options: "i",
    };
  }
  let result = Product.find(queryObject);
  const products = await result;
  res.status(200).json({ nbHits: products.length, products });
  
  
  }
  
  module.exports = {
  getAllProducts,
  getAllProductsStatic,
};

