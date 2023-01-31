import {decryptAtbash} from "./problem2";
import { test } from "node:test";

test("Test 1", () => {
  expect(decryptAtbash("Olivn rkhfn wloli hrg znvg")).toEqual(
    "Lorem ipsum dolor sit amet"
  );
});
test("Test 2", () => {
  expect(decryptAtbash("Svool dliow! R'n ovzimrmt gbkvhxirkg!")).toEqual(
    "Hello world! I'm learning typescript!"
  );
});
test("Test 3", () => {
  expect(decryptAtbash("Gsv jfrxp yildm ulc qfnkh levi gsv ozab wlt")).toEqual(
    "The quick brown fox jumps over the lazy dog"
  );
});
test("Test 4", () => {
  expect(decryptAtbash("Hovvkbsvzw dsl hgirevh uli kviuvxgrlm")).toEqual(
    "Sleepyhead who strives for perfection"
  );
});
test("Test 5", () => {
  expect(
    decryptAtbash("Ivzxg - Z QzezHxirkg oryizib uli yfrowrmt fhvi rmgviuzxvh")
  ).toEqual("React - A JavaScript library for building user interfaces");
});
function expect(arg0: any) {
    throw new Error("Function not implemented.");
}

