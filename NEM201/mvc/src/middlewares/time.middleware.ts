import { Request, Response, NextFunction } from 'express';

// currying
const timeMiddleware = () => {
    return (req: Request, res: Response, next: NextFunction) => {
        next();
    };
};

module.exports = timeMiddleware;
