import * as fs from "fs";
import * as path from "path";
import { parse } from "./";

const fixturesDir = path.join(__dirname, "../fixtures");

describe("parse", () => {
  const filenames = fs.readdirSync(fixturesDir);
  filenames.forEach((filename) => {
    it(filename, () => {
      expect(
        parse(fs.readFileSync(path.join(fixturesDir, filename), "utf-8"))
      ).toMatchSnapshot();
    });
  });
});
