import express from 'express';
const router = express.Router();

// Dummy users for testing
const users = [
  { username: 'admin', password: '12345', role: 'admin' },
  { username: 'user1', password: '12345', role: 'user' },
];

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);

  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  // Normally you'd generate JWT token here
  res.json({ token: 'fake-jwt-token', username: user.username, role: user.role });
});

export default router;
