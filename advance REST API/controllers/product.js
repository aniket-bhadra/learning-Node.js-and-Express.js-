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
  
    //testing sorting with multiple properties
  // const products = await Product.find({}).sort("-name price");
  
  //testing selecting with multiple propreties
  // const products = await Product.find({}).select("company")
  
  //testing limiting & skipping functionality
  //basic sturcture
  // const products = await Product.find({})
  //   .sort("name")
  //   .select("name price")
  //   .limit(10)
  //   .skip(5);
  
    //testing numeric filters with query operators
  //const products = await Product.find({ price: { $gt: 30 } })
    //.sort("price")
   // .select("name price");
   
   
   res.status(200).json({ products, nbHits: products.length });
  
  }
  
  const getAllProducts = async (req, res) => {
  
  const { featured, company, name, numericFilters, sort, fields } = req.query;
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
  
  
  if (numericFilters) {
    const operatorMap = {
      ">": "$gt",
      ">=": "$gte",
      "=": "$eq",
      "<": "$lt",
      "<=": "$lte",
    };
     const regex = /\b(<|>|>=|=|<=)\b/g;
      let filters = numericFilters.replace(
      regex,
      (match) => `-${operatorMap[match]}-`
    );
        const options = ["price", "rating"];

    filters.split(",").forEach((item) => {
      const [property, operator, value] = item.split("-");
      if (options.includes(property)) {
        queryObject[property] = {
          [operator]: Number(value),
        };
      }
    });
    }
  let result = Product.find(queryObject);
  
  
  
    //find() retuns an query Object, & if u put await infront of it, u will get the list of product not that query object & sort should be called on that query object
  if (sort) {
    const sortList = sort.split(",").join(" ");
    result = result.sort(sortList);
  } else {
    result = result.sort("createdAt");
  }
  
  
    //fields
  if (fields) {
    const fieldsList = fields.split(",").join(" ");
    result = result.select(fieldsList);
  }
  
    //limit & skip
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  result = result.skip(skip).limit(limit);
  
  const products = await result;
  res.status(200).json({ nbHits: products.length, products });
  
  
  }
  
  module.exports = {
  getAllProducts,
  getAllProductsStatic,
};

