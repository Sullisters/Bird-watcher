const router = require('express').Router();
const userRoutes = require('./userRoutes');
const eventRoutes = require('./eventRoutes');

//inject information from ROUTES into the '/' and the insertHereRoutes
router.use('/users', userRoutes);
router.use('/events', eventRoutes);

module.exports = router;
