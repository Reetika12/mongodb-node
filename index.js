const dbConnect = require("./mongodb");

// dbConnect().then((res) => {
//   res
//     .find({ name: "rohit" })
//     .toArray()
//     .then((data) => {
//       console.log(data);
//     });
// });

const main = async () => {
  let data = await dbConnect();
  let res = await data.find({}).toArray();
  console.log(res);
};

main();
