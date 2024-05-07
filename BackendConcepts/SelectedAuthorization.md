<!-- How to give authorization to the selected  -->

// Middleware to authorize access to specific routes for authenticated users
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

        // Check if the user is authorized to access the requested route
        if (decodedToken.email === 'sagargupta.gola@gmail.com' && req.path === '/route1') {
            // User with email 'sagargupta.gola@gmail.com' is authorized to access '/route1'
            next();
        } else {
            // User is not authorized to access the requested route
            return res.status(403).json({ success: false, message: 'Access forbidden' });
        }
    });
}
