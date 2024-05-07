
<!-- Data Carrying in Node JS in the three main locations  -->

1.> In Body


app.post('/users', (req, res) => {
    const userData = req.body; 
    <!-- userData ---->>>  here userdata is the value whatever client side has passed the data in the form of body -->
    
});


2.>  In Params 

app.get('/users/:userId', (req, res) => {
    const userId = req.params.userId; // Access parameter from the URL
    // Use userId to fetch user data   // extracting userid here as a form of params
});

3.> In the form of headers


app.get('/protected', (req, res) => {
    const authToken = req.headers.authorization; // Access authorization header
    // Validate authToken and provide access if valid
});

<!-- now i will after authentication how to give the authorization to the user for the endpoints -->


