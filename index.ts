import { console } from "./polyfills";
import { concat, interval, of } from "rxjs";
import { map, take } from "rxjs/operators";
import * as faker from "faker";
import {
  startOfDay,
  startOfToday,
  endOfToday,
  addMinutes,
  roundToNearestMinutes,
  areIntervalsOverlapping
} from "date-fns";

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

const SLOT_DURATIONS = [30, 45, 60, 90, 120];

const createAppointment = (): Appointment => ({
  title: faker.name.firstName(),
  appendix: faker.name.lastName(),
  type: SlotType.APPOINTMENT,
  status: faker.random.objectElement(StatusType),
  note: faker.lorem.sentence(2)
});

const createSlot = (min: Date, max: Date) => {
  const swimlane: Room = faker.random.arrayElement(ROOMS);
  const start = roundToNearestMinutes(faker.date.between(min, max), {
    nearestTo: 15
  });
  const end = addMinutes(start, faker.random.arrayElement(SLOT_DURATIONS));

  return { swimlane, start, end };
};

export const UNITS: Unit[] = [
  { id: 1, name: "Department 1" },
  { id: 2, name: "Department 2" },
  { id: 3, name: "Department 3" }
];

export const ROOMS: Room[] = [
  { id: 1, unitId: 1, name: "Room 1" },
  { id: 2, unitId: 1, name: "Room 2" },
  { id: 3, unitId: 2, name: "Room 3" },
  { id: 4, unitId: 2, name: "Room 4" },
  { id: 5, unitId: 2, name: "Room 5" },
  { id: 6, unitId: 3, name: "Room 6" }
];

const isOverlapping = (slot1, slot2) =>
  slot1.swimlane === slot2.swimlane && areIntervalsOverlapping(slot1, slot2);

const intervals = (length: number, min: Date, max: Date) =>
  Array.from({ length }).reduce((accumulator: any[], item, index) => {
    const slot = createSlot(min, max);
    if (!accumulator.some(item => isOverlapping(item, slot))) {
      accumulator.push(slot);
    }

    return accumulator;
  }, []);

const start = startOfToday();
const end = endOfToday();

console.log(intervals(100, start, end).length);
