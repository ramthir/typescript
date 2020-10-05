import { compareAsc } from 'date-fns';

export const compare = (a: any, b: any): number =>
  a.localeCompare ? a.localeCompare(b)
    : a instanceof Date && b instanceof Date ? compareAsc(a, b)
      : (a === b ? 0 : a < b ? -1 : 1);

