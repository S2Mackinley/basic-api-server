'use strict';

const express = require('express');

const Food = require('../models/food');
const food = new Food();

const foodRouter = express.Router();

foodRouter.get('/food', getAll);
foodRouter.get('/food/:id', getOne);
foodRouter.post('/food', createItem);
foodRouter.put('/food/:id', updateItem);
foodRouter.delete('/food/:id', deleteItem);

function getAll(req, res) {
	let items = food.read();
	res.status(200).json(items);
}

function getOne(req, res) {
	let id = parseInt(req.params.id);
	let item = food.read(id);
	res.status(200).json(item);
}

function createItem(req, res) {
	let data = req.body;
	let createItem = food.create(data);
	res.status(201).json(createItem);
}

function updateItem(req, res) {
	let id = parseInt(req.params.id);
	let data = req.body;
	let updateItem = food.update(id, data);
	res.status(200).json(updateItem);
}

function deleteItem(req, res) {
	let id = parseInt(req.params.id);
	food.delete(id);
	res.status(200).json({ msg: 'deleted!' });
}

module.exports = foodRouter;
