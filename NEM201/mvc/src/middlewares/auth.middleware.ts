import { Request, Response, NextFunction } from 'express';

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    if (!req.headers['authorization']) {
        return res.send('Please provide');
    }
    next();
};

module.exports = authMiddleware;
