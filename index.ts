import { console } from './polyfills';
import { concat, interval } from "rxjs";
import { map, take } from "rxjs/operators";

interface Developer {
  name: string,
  designation: string,
  team: string
}

const ramesh: Developer = {
  name: "Ramesh Thiruchelvam",
  designation: "Software Engineer",
  team: "Web SDK"
}

const lasantha: Developer = {
  name: "Lasantha Nagoda",
  designation: "Architect",
  team: "Phoenix"
}

const { name, ...rest } = ramesh;

console.log(name);
console.log(rest);

const descriptor = Object.getOwnPropertyDescriptor(lasantha, 'name');
console.log(descriptor);

