'use strict';

const express = require('express');

const Clothes = require('../models/clothes');
const clothes = new Clothes();

const clothesRouter = express.Router();

clothesRouter.get('/clothes', getAll);
clothesRouter.get('/clothes/:id', getOne);
clothesRouter.post('/clothes', createItem);
clothesRouter.put('/clothes/:id', updateItem);
clothesRouter.delete('/clothes/:id', deleteItem);

function getAll(req, res) {
	let items = clothes.read();
	res.status(200).json(items);
}

function getOne(req, res) {
	let id = parseInt(req.params.id);
	let item = clothes.read(id);
	res.status(200).json(item);
}

function createItem(req, res) {
	let data = req.body;
	let createItem = clothes.create(data);
	res.status(201).json(createItem);
}

function updateItem(req, res) {
	let id = parseInt(req.params.id);
	let data = req.body;
	let updateItem = clothes.update(id, data);
	res.status(200).json(updateItem);
}

function deleteItem(req, res) {
	let id = parseInt(req.params.id);
	clothes.delete(id);
	res.status(200).json({ msg: 'deleted!' });
}

module.exports = clothesRouter;
