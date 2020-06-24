import { console } from "./polyfills";
import { concat, interval, of } from "rxjs";
import { map, take } from "rxjs/operators";
import * as faker from "faker";

const length = 100;

const appointment = () => ({
  title: faker.name.firstName(),
  appendix: faker.name.lastName(),
  note: faker.lorem.sentence(2)
});

const intervals = Array.from({ length }).reduce((accumulator, item, index) => {
  accumulator.push(appointment());
  return accumulator;
}, []);

console.log(intervals);
//console.log(faker.random.number());
