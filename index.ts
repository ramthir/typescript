import { console } from "./polyfills";
import { concat, interval, of } from "rxjs";
import { map, take } from "rxjs/operators";
import * as faker from "faker";

const length = 100;

enum SlotType {
  AVAILABILITY,
  APPOINTMENT
}

enum StatusType {
  PLANNED = "planned",
  BOOKED = "booked",
  ONGOING = "ongoing"
}

const appointment = () => ({
  title: faker.name.firstName(),
  appendix: faker.name.lastName(),
  type: SlotType.APPOINTMENT,
  status: faker.random.objectElement(StatusType),
  note: faker.lorem.sentence(2)
});

const intervals = Array.from({ length }).reduce((accumulator, item, index) => {
  accumulator.push(appointment());
  return accumulator;
}, []);

console.log(intervals);
//console.log(faker.random.number());
