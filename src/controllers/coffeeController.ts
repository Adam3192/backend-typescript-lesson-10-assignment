import { RequestHandler } from "express";
import { Coffee } from "../models/coffee";

export const getAllItems: RequestHandler = async (req, res, next) => {
    let allItems = await Coffee.findAll();
    res.status(200).json(allItems);
}

export const createItem: RequestHandler = async (req, res, next) => {
 let newItem: Coffee = req.body;
 if (newItem.name && newItem.description) {
     let created = await Coffee.create(newItem);
     res.status(201).json(created);
 }
 else {
     res.status(400).send();
 }
}

export const getItem: RequestHandler = async (req, res, next) => {
 let coffeeId = req.params.coffeeId;
 let foundItem = await Coffee.findByPk(coffeeId);
 if (foundItem) {
     res.status(200).json(foundItem);
 }
 else {
     res.status(404).json();
 }
}

export const updateItem: RequestHandler = async (req, res, next) => {
 let coffeeId = req.params.coffeeId;
 let newItem: Coffee = req.body;
 
 let foundItem = await Coffee.findByPk(coffeeId);
 
 if (foundItem && foundItem.coffeeId == newItem.coffeeId
     && newItem.name && newItem.description) {
         await Coffee.update(newItem, {
             where: { coffeeId: coffeeId }
         });
         res.status(200).json();
 }
 else {
     res.status(400).json();
 }
}

export const deleteItem: RequestHandler = async (req, res, next) => {
 let coffeeId = req.params.coffeeId;
 let foundItem = await Coffee.findByPk(coffeeId);
 
 if (foundItem) {
     await Coffee.destroy({
             where: { coffeeId: coffeeId }
     });
     res.status(200).json();
 }
 else {
     res.status(404).json();
 }
}