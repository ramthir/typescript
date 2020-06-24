import { console } from "./polyfills";
import { concat, interval, of } from "rxjs";
import { map, take } from "rxjs/operators";
import * as faker from 'faker';

const length = 100;
const intervals = Array.from({ length });

console.log(faker.random.number());