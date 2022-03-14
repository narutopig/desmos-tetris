import { unit } from "./rendering";

export let l = [
  (x1: number, y1: number) => [
    unit(x1, y1),
    unit(x1 + 1, y1),
    unit(x1, y1 + 1),
    unit(x1, y1 + 2),
  ],
  (x1: number, y1: number) => [
    unit(x1, y1),
    unit(x1, y1 + 1),
    unit(x1 + 1, y1 + 1),
    unit(x1 + 2, y1 + 1),
  ],
  (x1: number, y1: number) => [
    unit(x1, y1 + 2),
    unit(x1 + 1, y1),
    unit(x1 + 1, y1 + 1),
    unit(x1 + 1, y1 + 2),
  ],
  (x1: number, y1: number) => [
    unit(x1, y1),
    unit(x1 + 1, y1),
    unit(x1 + 2, y1),
    unit(x1 + 2, y1 + 1),
  ],
];

// l but reflected
export let invl = [
  (x1: number, y1: number) => [
    unit(x1, y1),
    unit(x1 + 1, y1),
    unit(x1 + 1, y1 + 1),
    unit(x1 + 1, y1 + 2),
  ],
  (x1: number, y1: number) => [
    unit(x1, y1),
    unit(x1 + 1, y1),
    unit(x1 + 2, y1),
    unit(x1, y1 + 1),
  ],
  (x1: number, y1: number) => [
    unit(x1, y1),
    unit(x1, y1 + 1),
    unit(x1, y1 + 2),
    unit(x1 + 1, y1 + 2),
  ],
  (x1: number, y1: number) => [
    unit(x1, y1 + 1),
    unit(x1 + 1, y1 + 1),
    unit(x1 + 2, y1 + 1),
    unit(x1 + 2, y1),
  ],
];

export let x2 = [
  (x1: number, y1: number) => [
    unit(x1, y1),
    unit(x1 + 1, y1),
    unit(x1, y1 + 1),
    unit(x1 + 1, y1 + 1),
  ],
];

export let x4 = [
  (x1: number, y1: number) => [
    unit(x1, y1),
    unit(x1, y1 + 1),
    unit(x1, y1 + 2),
    unit(x1, y1 + 3),
  ],
  (x1: number, y1: number) => [
    unit(x1, y1),
    unit(x1 + 1, y1),
    unit(x1 + 2, y1),
    unit(x1 + 3, y1),
  ],
];

export let t = [
  (x1: number, y1: number) => [
    unit(x1, y1),
    unit(x1 + 1, y1),
    unit(x1 + 2, y1),
    unit(x1 + 1, y1 + 1),
  ],
  (x1: number, y1: number) => [
    unit(x1, y1),
    unit(x1, y1 + 1),
    unit(x1, y1 + 2),
    unit(x1 + 1, y1 + 1),
  ],
  (x1: number, y1: number) => [
    unit(x1, y1 + 1),
    unit(x1 + 1, y1 + 1),
    unit(x1 + 2, y1 + 1),
    unit(x1 + 1, y1),
  ],
  (x1: number, y1: number) => [
    unit(x1 + 1, y1),
    unit(x1 + 1, y1 + 1),
    unit(x1 + 1, y1 + 2),
    unit(x1, y1 + 1),
  ],
];
