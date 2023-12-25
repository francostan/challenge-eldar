import fs from "fs";
import path from "path";

const dbPath = path.join(process.cwd(), "db.txt");

const generateData = () => {
  const data = fs.readFileSync(dbPath, "utf-8");
  const users = JSON.parse(data);
  return users;
};

export const db = {
  async findOne(id) {
    const users = generateData();
    return users.find((user) => user.id === id);
  },

  async findOneByEmail(email) {
    const users = generateData();
    return users.find((user) => user.email === email);
  },

  async createOne(user) {
    const id = Math.floor(Math.random() * 1000000);
    const users = generateData();
    users.push({ ...user, id, isAdmin: false });
    fs.writeFileSync(dbPath, JSON.stringify(users));
  },

  async deleteOne(id) {
    const users = generateData();
    const updatedUsers = users.filter((e) => e.id !== id);
    fs.writeFileSync(dbPath, JSON.stringify(updatedUsers));
  },

  async updateOne(user) {
    const users = generateData();
    const userToUpdate = users.find((e) => e.id === user.id);
    const index = users.indexOf(userToUpdate);
    if (index !== -1) {
      users[index] = user;
      fs.writeFileSync(dbPath, JSON.stringify(users));
      return true;
    } else {
      return false;
    }
  },
  async getAll() {
    const users = generateData();
    return users;
  },

  async isAdmin(id) {
    const user = await this.findOne(id);
    return user.isAdmin || false;
  }
};
