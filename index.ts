import { console } from "./polyfills";

function foo(start: Date | number) {
  console.log(start);
}

foo(new Date());
foo(1);