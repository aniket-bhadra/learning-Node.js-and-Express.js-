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
