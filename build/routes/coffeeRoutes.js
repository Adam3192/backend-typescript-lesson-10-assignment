"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const coffeeController_1 = require("../controllers/coffeeController");
const router = (0, express_1.Router)();
router.get('/', coffeeController_1.getAllItems);
router.get('/:coffeeId', coffeeController_1.getItem);
router.post('/', coffeeController_1.createItem);
router.put('/:coffeeId', coffeeController_1.updateItem);
router.delete('/:coffeeId', coffeeController_1.deleteItem);
exports.default = router;
