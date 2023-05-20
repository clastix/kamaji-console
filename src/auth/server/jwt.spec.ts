import { describe, expect, it } from "vitest";

import {
  singAccessJWT,
  singRefreshJWT,
  verifyAccessJWT,
  verifyRefreshJWT,
} from "./jwt";

describe("jwt", () => {
  it("should sign and verify", () => {
    const user = {
      id: "1",
      email: "test@test.com",
      image: "",
    };

    const token = singAccessJWT(user, "test");
    expect(token).toBeTruthy();

    const res = verifyAccessJWT(token, "test");
    expect(res).toBeTruthy();
    expect(res.id).toBe("1");
    expect(res.email).toBe("test@test.com");
  });

  it("should sign and verify refresh token", () => {
    const user = {
      id: "1",
      email: "test@test.com",
      image: "",
    };

    const token = singRefreshJWT(user, "test");
    expect(token).toBeTruthy();

    const res = verifyRefreshJWT(token, "test");
    expect(res).toBeTruthy();
    expect(res.id).toBe("1");
  });
});
