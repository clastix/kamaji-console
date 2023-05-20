export interface User {
  id: string;
  email: string;
  image: string;
}

export type Session =
  | {
      readonly status: "authenticated";
      user: User;
    }
  | {
      readonly status: "unauthenticated";
    };

export type ClientSession =
  | Session
  | {
      readonly status: "loading";
    };
