import colors from "colors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import users from "./data/user.js";
import connectDB from "./config/db.js";
import products from "./data/products.js";
import UserModel from "./models/userModel.js";
import ProductModel from "./models/productModel.js";
import OrderModel from "./models/orderModel.js";

dotenv.config();
await connectDB().catch((err) =>
  console.log(`Database connecting error: ${err}`)
);

/*
const importData = async (doc, options) => {
  try {
    await UserModel.deleteMany().then(console.log("deleted user model"));
    await OrderModel.deleteMany().then(console.log("deleted order model"));
    await ProductModel.deleteMany().then(console.log("deleted product model"));

    const createdUser = await UserModel.insertMany(users);
    console.log(
      `[LOG]:: [seeder.js]:: created Users: ${createdUser}`.green.bold
    );

    const adminUser = createdUser[0]._id;

    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });

    await ProductModel.insertMany(sampleProducts, options);

    console.log("Data imported!".green.inverse);
    process.exit(0);
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await UserModel.deleteMany();
    await OrderModel.deleteMany();
    await ProductModel.deleteMany();

    console.log("Data destroyed!".red.inverse);
    process.exit(0);
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
*/

const importData = async () => {
  try {
    await OrderModel.deleteMany();
    await ProductModel.deleteMany();
    await UserModel.deleteMany();

    const createdUsers = await UserModel.insertMany(users);

    const adminUser = createdUsers[0]._id;

    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });

    await ProductModel.insertMany(sampleProducts);

    console.log("Data Imported!".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await OrderModel.deleteMany();
    await ProductModel.deleteMany();
    await UserModel.deleteMany();

    console.log("Data Destroyed!".red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
