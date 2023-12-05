import { test } from "vitest";
import { PrimaryKey } from "./zod.js";

test("PrimaryKey", () => {
  ({ pk: "1" }) as PrimaryKey;
  ({ compositePk: { keys: [["1", "2"]] } }) as PrimaryKey;
});
