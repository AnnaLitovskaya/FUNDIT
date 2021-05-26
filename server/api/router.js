const { Router } = require('express');
const router = Router();

router.use('/users', require('./users'));
router.use('/wishListItem', require('./wishListItem'));
router.use('/families', require('./families'));
router.use('/chores', require('./chores'));
router.use('/allowance', require('./allowance'));
router.use('/auth', require('./auth'));
// router.use('/wishlists', require('./wishlists'));
router.use('/transaction', require('./transaction'));

module.exports = router;
