import { expect, test } from "vitest";
import { z } from "zod";
import { zodValidate } from "./zod-validate";

test("test simple validation", () => {
  const testSchema = z.object({
    myStr: z.string(),
  });

  const validate = zodValidate(testSchema)({} as any);
  expect(validate).toEqual({ myStr: "Required" });
  expect(1).toBe(1);
});

test("test array validation", () => {
  const testSchema = z.object({
    myArr: z
      .object({
        myStr: z.string(),
        numObj: z.object({
          myNum: z.number(),
        }),
      })
      .array(),
  });

  const validate = zodValidate(testSchema)({
    myArr: [
      {
        myStr: 23,
        numObj: {
          myNum: 1,
        },
      },
      {
        myStr: "23",
        numObj: {
          myNum: "1",
        },
      },
    ],
  } as any);
  expect(validate).toEqual({
    "myArr.0.myStr": "Expected string, received number",
    "myArr.1.numObj.myNum": "Expected number, received string",
  });
  expect(1).toBe(1);
});
