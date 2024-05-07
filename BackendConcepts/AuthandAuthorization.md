<!-- now i will after authentication how to give the authorization to the user for the endpoints -->

<!--  read it carefully adding comments for better understanding  -->
const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = 3000;

// Middleware to parse JSON body
app.use(express.json());

// Sample user data (usually fetched from a database)
const users = [
    { id: 1, username: 'user1', password: 'password1' },
    { id: 2, username: 'user2', password: 'password2' }
];

// Secret key for JWT signing (should be securely stored)
const JWT_SECRET = 'your_secret_key';

// Middleware to authenticate users and generate JWT token
function authenticateUser(req, res, next) {
    const { username, password } = req.body;

    // Find user by username and password
    const user = users.find(u => u.username === username && u.password === password);

    if (!user) {
        return res.status(401).json({ success: false, message: 'Invalid username or password' });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' });
    res.locals.user = user; // Attach user object to response locals for further middleware
    res.locals.token = token; // Attach token to response locals for further middleware
    next();
}

// Middleware to authorize access to protected routes
function authorizeUser(req, res, next) {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ success: false, message: 'Authorization token missing' });
    }

    // Verify JWT token
    jwt.verify(token, JWT_SECRET, (err, decodedToken) => {
        if (err) {
            return res.status(401).json({ success: false, message: 'Invalid token' });
        }

        req.user = decodedToken; // Attach decoded token to request object
        next();
    });
}

// Public endpoint (no authentication required)
app.post('/login', authenticateUser, (req, res) => {
    const { user, token } = res.locals;
    res.json({ success: true, message: 'Login successful', user, token });
});

// Protected endpoint (authentication and authorization required)
app.get('/profile', authorizeUser, (req, res) => {
    const { user } = req.user;
    res.json({ success: true, message: 'Profile accessed successfully', user });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
