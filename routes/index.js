const router = require('express').Router();
const apiRoutes= require('./api');

// Using Middleware
router.use('/api', apiRoutes);

router.use((req, res) => {
    res.status(404).send(err)
});

// Exporting module
module.exports=router;
