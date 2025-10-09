const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Middleware to protect routes (checks for a valid JWT token)
exports.protect = async (req, res, next) => {
    let token;

    // Check for token in headers (usually sent as 'Bearer <token>')
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            // Extract the token part
            token = req.headers.authorization.split(' ')[1];

            // Verify token and decode user ID and role
            const decoded = jwt.verify(token, process.env.JWT_SECRET || 'YOUR_SUPER_SECRET_KEY');

            // Find user, but exclude password from being returned
            const user = await User.findById(decoded.id).select('-password');

            if (!user) {
                return res.status(401).json({ message: 'Not authorized, user not found' });
            }

            // Attach user data to the request object for use in the controller
            req.user = user;
            next();

        } catch (error) {
            console.error(error);
            // If token is invalid, expired, or verification fails
            res.status(401).json({ message: 'Not authorized, token failed or expired' });
        }
    }

    if (!token) {
        // If no token is provided at all
        res.status(401).json({ message: 'Not authorized, no token' });
    }
};

// Middleware to check if the authenticated user is an admin
exports.admin = (req, res, next) => {
    // req.user is populated by the 'protect' middleware
    if (req.user && req.user.role === 'admin') {
        next(); // User is an admin, proceed
    } else {
        // User is logged in but not an admin
        res.status(403).json({ message: 'Not authorized as an admin' });
    }
};
