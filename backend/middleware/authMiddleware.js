// authMiddleware.js
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

// Protect routes (checks for valid JWT)
export const protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET || 'YOUR_SUPER_SECRET_KEY');
      const user = await User.findById(decoded.id).select('-password');

      if (!user) return res.status(401).json({ message: 'Not authorized, user not found' });

      req.user = user;
      next();
    } catch (err) {
      console.error(err);
      res.status(401).json({ message: 'Not authorized, token failed' });
    }
  }

  if (!token) {
    res.status(401).json({ message: 'Not authorized, no token' });
  }
};

// Admin check middleware
export const admin = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    next();
  } else {
    res.status(403).json({ message: 'Not authorized as an admin' });
  }
};
