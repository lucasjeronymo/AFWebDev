const User = require('../models/client');

const createUser = async (req, res) => {
  const { nome, hamb_id } = req.body;
  try {
    const newUser = new User({ nome, hamb_id });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao adicionar usuário', error });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar usuários', error });
  }
};

module.exports = { createUser, getUsers };

