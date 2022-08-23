"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteItem = exports.updateItem = exports.getItem = exports.createItem = exports.getAllItems = void 0;
const coffee_1 = require("../models/coffee");
const getAllItems = async (req, res, next) => {
    let allItems = await coffee_1.Coffee.findAll();
    res.status(200).json(allItems);
};
exports.getAllItems = getAllItems;
const createItem = async (req, res, next) => {
    let newItem = req.body;
    if (newItem.name && newItem.description) {
        let created = await coffee_1.Coffee.create(newItem);
        res.status(201).json(created);
    }
    else {
        res.status(400).send();
    }
};
exports.createItem = createItem;
const getItem = async (req, res, next) => {
    let coffeeId = req.params.coffeeId;
    let foundItem = await coffee_1.Coffee.findByPk(coffeeId);
    if (foundItem) {
        res.status(200).json(foundItem);
    }
    else {
        res.status(404).json();
    }
};
exports.getItem = getItem;
const updateItem = async (req, res, next) => {
    let coffeeId = req.params.coffeeId;
    let newItem = req.body;
    let foundItem = await coffee_1.Coffee.findByPk(coffeeId);
    if (foundItem && foundItem.coffeeId == newItem.coffeeId
        && newItem.name && newItem.description) {
        await coffee_1.Coffee.update(newItem, {
            where: { coffeeId: coffeeId }
        });
        res.status(200).json();
    }
    else {
        res.status(400).json();
    }
};
exports.updateItem = updateItem;
const deleteItem = async (req, res, next) => {
    let coffeeId = req.params.coffeeId;
    let foundItem = await coffee_1.Coffee.findByPk(coffeeId);
    if (foundItem) {
        await coffee_1.Coffee.destroy({
            where: { coffeeId: coffeeId }
        });
        res.status(200).json();
    }
    else {
        res.status(404).json();
    }
};
exports.deleteItem = deleteItem;
