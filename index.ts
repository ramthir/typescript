import { console } from "./polyfills";
import { concat, interval } from "rxjs";
import { map, take } from "rxjs/operators";

const developer = {
  name: "Ramesh Thiruchelvam",
  designation: "Software Engineer",
  team: "Web SDK"
};

Object.defineProperty(developer, "designation", { writable: false });

console.log(developer);

developer.name = "Lasantha Nagoda";

const { name, ...rest } = developer;

console.log(name);
console.log(rest);

const descriptor = Object.getOwnPropertyDescriptor(developer, "designation");
console.log(descriptor);
