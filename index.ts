import { console } from "./polyfills";

const fruits = {
  "🍎": "Apple",
  "🍌": "Banana",
  "🥭": "Mango"
};

console.log(fruits["🍌"]);
console.log(fruits["🥑"] || "Not Found");
