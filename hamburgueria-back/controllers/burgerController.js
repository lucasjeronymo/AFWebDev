const Burger = require('../models/Burger');

const addBurger = async (req, res) => {
  const { nome, ingredientes, preco, estoque } = req.body;
  try {
    const newBurger = new Burger({ nome, ingredientes, preco, estoque });
    await newBurger.save();
    res.status(201).json(newBurger);
  } catch (error) {
    res.status(500).json({ message: 'Error adding burger', error });
  }
};

const getBurgers = async (req, res) => {
  try {
    const burgers = await Burger.find();
    res.status(200).json(burgers);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching burgers', error });
  }
};

module.exports = { addBurger, getBurgers };
