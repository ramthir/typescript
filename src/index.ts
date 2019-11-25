import { concat, interval } from "rxjs";
import { map, take } from "rxjs/operators";

const one$ = interval(1000).pipe(
  take(1),
  map(() => "1")
);
const two$ = interval(1000).pipe(
  take(2),
  map(() => "2")
);
const three$ = interval(1000).pipe(
  take(3),
  map(() => "3")
);

const result = concat(one$, two$, three$);

result.subscribe(x => console.log(x));
