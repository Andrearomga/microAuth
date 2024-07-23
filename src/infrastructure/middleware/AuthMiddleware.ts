import { NextFunction, Request, Response } from 'express';
import { ExternalApiAdapterUser } from '../adapters/http/ExternalApiAdapterUser';
import User from '../../domain/entities/User';
import jwt, { JwtPayload } from 'jsonwebtoken';


class AuthMiddleware {

    private externalApiAdapterUser: ExternalApiAdapterUser = new ExternalApiAdapterUser();
    private secretKey: string = "123";

    constructor() {
        this.validateUserToken = this.validateUserToken.bind(this);
        this.generateToken = this.generateToken.bind(this);
        this.validateToken = this.validateToken.bind(this);

    }

    generateToken(user: User): string {
        const payload = { IdUser: user.IdUser + "" };
        const token: string = jwt.sign(payload, this.secretKey, { expiresIn: '12h' }); // Expira en 1 hora
        return token;
    }

    async validateUserToken(req: Request, res: Response, next: NextFunction): Promise<void> {
        const token: string | string[] | undefined = req.headers['token'];        
        if (!token || (Array.isArray(token) && token.length === 0)) {
            res.status(403).json({
                status: 403,
                message: "Acceso denegado (Forbidden)",
            });
            return;
        }

        const tokenString = Array.isArray(token) ? token[0] : token;  
              
        try {
            const value: String | JwtPayload = await jwt.verify(tokenString, this.secretKey);            
            if (value) {
                next();
            } else {
                res.status(401).json({
                    status: 401,
                    message: "Token inválido o expirado.",
                });
            }

        } catch (error) {            
            res.status(401).json({
                status: 401,
                message: "Token inválido o expirado.",
            });
        }
    }

    async validateToken(token: string): Promise<boolean> {
        try {
            const value: String | JwtPayload = await jwt.verify(token, this.secretKey);
            if (value) {
                return true;
            } else {
                return false;
            }
        } catch (error) {            
            return false;
        }
    }

}

export default AuthMiddleware;