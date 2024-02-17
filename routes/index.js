const express = require('express');
const router = express.Router();
const Financas = require('../models/financas'); 

/* GET home page. */
router.get('/', async function(req, res, next) {
  try {
    const financas = await Financas.findAll(); 
    res.render('index', { financas: financas });
  } catch (error) {
    console.error('Erro ao recuperar dados do banco de dados:', error);
    res.status(500).send('Erro ao recuperar dados do banco de dados');
  }
});

module.exports = router;
