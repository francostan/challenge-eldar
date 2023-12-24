import fs from 'fs';
import path from 'path';

const dbPath = path.join(process.cwd(), 'db.txt');

const generateData = () => {
  const data = fs.readFileSync(dbPath, 'utf-8');
   const users = JSON.parse(data);
   return users;
}

export const db = {
 async findOne(email) {
   const users = generateData();
   return users.find(user => user.email === email);
 },

 async createOne(user) {
  const  id = Math.floor(Math.random() * 1000000);
   const users = generateData();
   users.push({ ...user, id });
   fs.writeFileSync(dbPath, JSON.stringify(users));
 },

 async deleteOne(username) {
   const users = generateData();
   const updatedUsers = users.filter(user => user.username !== username);
   fs.writeFileSync(dbPath, JSON.stringify(updatedUsers));
 },

 async updateOne(username, newPassword) {
   const users = generateData();
   const userToUpdate = users.find(user => user.username === username);
   if (userToUpdate) {
     userToUpdate.password = newPassword;
     fs.writeFileSync(dbPath, JSON.stringify(users));
   }
 },
 async getAll() {
   const users = generateData();
   return users;
 }
};
