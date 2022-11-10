const router = require('express').Router();
const userRoutes = require('./userRoutes');
const birdRoutes = require('./birdRoutes');
const eventRoutes = require('./eventRoutes');
const sightingRoutes = require('./sightingRoutes');

//inject information from ROUTES into the '/' and the insertHereRoutes
router.use('/users', userRoutes);
router.use('/birds', birdRoutes);
router.use('/events', eventRoutes);
router.use('/sightings', sightingRoutes);

module.exports = router;
