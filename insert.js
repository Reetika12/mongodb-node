const dbConnect = require("./mongodb");

const insert = async () => {
  const db = await dbConnect();
  console.log("insert", db);

  const result = await db.insert([
    {
      name: "subodh",
      city: "up",
      gender: "Male",
    },
    {
      name: "noopur",
      city: "hyderabad",
      gender: "Female",
    },
  ]);
  //   console.log(result);
  if (result.acknowledged) {
    console.log("data inserted successfully!!");
  }
};

insert();
