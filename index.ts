import { console } from "./polyfills";
import { concat, interval, of } from "rxjs";
import { map, take } from "rxjs/operators";
import * as faker from "faker";

export interface Unit {
  id: number;
  name: string;
}

export interface Room {
  id: number;
  name: string;
  unitId: number;
}

export interface Appointment {
  title: string;
  appendix: string;
  type: SlotType;
  status: string;
  note: string;
}

enum SlotType {
  AVAILABILITY,
  APPOINTMENT
}

enum StatusType {
  PLANNED = "planned",
  BOOKED = "booked",
  ONGOING = "ongoing"
}

const appointment = (): Appointment => ({
  title: faker.name.firstName(),
  appendix: faker.name.lastName(),
  type: SlotType.APPOINTMENT,
  status: faker.random.objectElement(StatusType),
  note: faker.lorem.sentence(2)
});

export const UNITS: Unit[] = [
  { id: 1, name: 'Department 1' },
  { id: 2, name: 'Department 2' },
  { id: 3, name: 'Department 3' }
];

export const ROOMS: Room[] = [
  { id: 1, unitId: 1, name: 'Room 1' },
  { id: 2, unitId: 1, name: 'Room 2' },
  { id: 3, unitId: 2, name: 'Room 3' },
  { id: 4, unitId: 2, name: 'Room 4' },
  { id: 5, unitId: 2, name: 'Room 5' },
  { id: 6, unitId: 3, name: 'Room 6' },
];

const intervals = (length: number) => Array.from({ length }).reduce((accumulator, item, index) => {
  const randomRoom: Room = faker.random.arrayElement(ROOMS);
  const subIntervals = accumulator[randomRoom.id] || [];
  subIntervals.push(index);
  accumulator[randomRoom.id] = subIntervals;
  return accumulator;
}, {});

console.log(intervals(10));
