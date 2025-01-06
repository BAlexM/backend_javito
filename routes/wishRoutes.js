const express = require('express');
const router = express.Router();
const {
  getAllWishes,
  getWishById,
  createWish,
  updateWish,
  deleteWish,
} = require('../controllers/wishController');

router.get('/', getAllWishes);
router.get('/:id', getWishById);
router.post('/', createWish);
router.put('/:id', updateWish);
router.delete('/:id', deleteWish);

module.exports = router;
