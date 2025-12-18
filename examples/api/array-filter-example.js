// Array.prototype.filter - Keep only active users
const users = [
  { id: 1, active: true },
  { id: 2, active: false }
];
const activeUsers = users.filter(u => u.active);

