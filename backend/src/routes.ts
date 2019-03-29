import { Router, Request, Response } from 'express'
const router = Router();
import storage from './storage';

router.get('/transactions',
    (req: Request, res: Response) => {
        res.send(storage.getAll());
    });

router.post('/transaction',
    (req: Request, res: Response) => {
        const type = req.body.type;
        const amount = req.body.amount;
        if (type === 'debit' || (type === 'credit' && storage.balance - amount > 0)) {
            storage.add({ type, amount, fullfilledAt: new Date() });
            res.sendStatus(200);
        } else {
            res.status(417).send('Not enought funds');
        }
        res.send();
    });

router.get('/transaction/:id',
    (req: Request, res: Response) => {
        const id = req.params.id;
        res.send(storage.get(id));
    });

router.get('/balance',
    (req: Request, res: Response) => {
        res.send(`${storage.balance}`);
    });

export default router;
