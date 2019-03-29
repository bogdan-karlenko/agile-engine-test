import { Request, Response, NextFunction } from 'express';
import storage from './storage';

export default (req: Request, res: Response, next: NextFunction) => {
    if (req.method === 'POST' && req.url === '/transaction' && storage.isProcessing) {
        res.status(423).send('Write opearations are temporarily locked. Please try again later.');
    } else {
        next();
    }
}
