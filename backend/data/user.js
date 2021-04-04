import bcrypt from "bcrypt";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Johnny Doremouth",
    email: "john@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Jenifer Lopez",
    email: "jenifer@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
