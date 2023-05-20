import jwt from "jsonwebtoken";
import { User } from "../types";

export function singAccessJWT({ email, id, image }: User, secret: string) {
  return jwt.sign({ email, id, image }, secret, {
    algorithm: "HS256",
    expiresIn: "1h",
    audience: "clastix.io/console",
    notBefore: "0s",
    issuer: "clastix.io/console",
  });
}

export function verifyAccessJWT(token: string, secret: string) {
  return jwt.verify(token, secret, {
    algorithms: ["HS256"],
    audience: "clastix.io/console",
  }) as jwt.JwtPayload & User;
}

export function singRefreshJWT({ email, id, image }: User, secret: string) {
  return jwt.sign({ email, id, image }, secret, {
    algorithm: "HS256",
    expiresIn: "24h",
    audience: "clastix.io/refresh",
    notBefore: "0s",
    issuer: "clastix.io/console",
  });
}

export function verifyRefreshJWT(token: string, secret: string) {
  return jwt.verify(token, secret, {
    algorithms: ["HS256"],
    audience: "clastix.io/refresh",
  }) as jwt.JwtPayload & User;
}
