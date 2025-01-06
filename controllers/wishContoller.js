const { Wish } = require('../models/Wish');

// Ezeket a commenteket én írtam hozzá nem ai vagy hasonló, így is küszködtem a kód átlátásával és így jobban látszik hogy melyik végpont melyik
// getAllWishes //
exports.getAllWishes = async (req, res) => {
  const wishes = await Wish.findAll({ order: [['createdAt', 'DESC']] });
  res.status(200).json(wishes);
};

// getWishById //
exports.getWishById = async (req, res) => {
  const wish = await Wish.findByPk(req.params.id);
  if (!wish) return res.status(404).json({ error: 'Wish not found' });
  res.status(200).json(wish);
};

// createWish //
exports.createWish = async (req, res) => {
  const { name, content } = req.body;
  try {
    const newWish = await Wish.create({ name, content });
    res.status(201).json(newWish);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// updateWish //
exports.updateWish = async (req, res) => {
  const wish = await Wish.findByPk(req.params.id);
  if (!wish) return res.status(404).json({ error: 'Wish not found' });

  const { name, content } = req.body;
  try {
    await wish.update({ name, content });
    res.status(200).json(wish);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// deleteWish //
exports.deleteWish = async (req, res) => {
  const wish = await Wish.findByPk(req.params.id);
  if (!wish) return res.status(404).json({ error: 'Wish not found' });

  await wish.destroy();
  res.status(204).send();
};
