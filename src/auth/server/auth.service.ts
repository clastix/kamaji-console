import { env } from "@/env/server.mjs";
import {
  singAccessJWT,
  verifyAccessJWT,
  singRefreshJWT,
  verifyRefreshJWT,
} from "./jwt";
import { Session, User } from "../types";
import { NextApiRequest } from "next";
import { TRPCError } from "@trpc/server";

export interface LoginInput {
  email?: string;
  password?: string;
}

export class Auth {
  constructor(private readonly secret: string) {
    console.log("constructing auth service");
  }

  async getServerAuthSession(req: NextApiRequest): Promise<Session> {
    const token = req.headers.authorization?.replace("Bearer ", "");
    if (!token) {
      return { status: "unauthenticated" };
    }

    try {
      const user = verifyAccessJWT(token, this.secret);
      return { status: "authenticated", user };
    } catch (e) {
      return { status: "unauthenticated" };
    }
  }

  async refreshToken(token: string) {
    const user = verifyRefreshJWT(token, this.secret);
    const accessToken = singAccessJWT(user, this.secret);
    return accessToken;
  }

  async authorize(input: LoginInput) {
    if (
      input?.email === env.ADMIN_EMAIL &&
      input?.password === env.ADMIN_PASSWORD
    ) {
      return {
        id: "admin",
        email: env.ADMIN_EMAIL,
        image: "https://avatars.githubusercontent.com/u/13383422?v=4",
      };
    }

    throw new TRPCError({
      message: "Invalid email or password",
      code: "BAD_REQUEST",
    });
  }

  async login(input: LoginInput) {
    console.log("Entered login: ", input)
    const user = await this.authorize(input);
    const accessToken = singAccessJWT(user, this.secret);
    const refreshToken = singRefreshJWT(user, this.secret);
    return { accessToken, refreshToken };
  }
}
