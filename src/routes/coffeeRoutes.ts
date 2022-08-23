import { Router } from 'express';
import { getAllItems, createItem, getItem, updateItem, deleteItem } from '../controllers/coffeeController';

const router = Router();

router.get('/', getAllItems);

router.get('/:coffeeId', getItem);

router.post('/', createItem);

router.put('/:coffeeId', updateItem);

router.delete('/:coffeeId', deleteItem);

export default router;