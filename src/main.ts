import "./style.css";
import { board, graph } from "./rendering";
import { invl, l, t, x2, x4 } from "./pieces";

let pieces = [l, invl, x2, x4, t];

interface Square {
  empty: boolean;
  color: string;
}

class Board {
  w: number;
  h: number;
  state: Square[][];

  constructor(w: number, h: number) {
    this.w = w;
    this.h = h;
    this.state = [[]];
  }
}

const { Desmos } = window as any;

let elt = document.getElementById("calculator");
let calculator = Desmos.GraphingCalculator(elt);

let w = 10;
let h = 20;
let x = Math.floor(w / 2);
let y = h;
let rotation = 0;
let piece = Math.floor(Math.random() * pieces.length);
let maxRotation = pieces[piece].length;
let locked = false; // can user still rotate/move
let doneCount = 0;

console.log(piece);

graph(calculator, "curr", pieces[piece][rotation](x, y));

calculator.setExpression({
  id: "board",
  latex: board(0, 0, w, h),
});

setInterval(() => {
  if (y > 0) y--;
  if (y <= 0) {
    locked = true;
    graph(calculator, `done${doneCount}_`, pieces[piece][rotation](x, y));
    piece = Math.floor(Math.random() * pieces.length);
    maxRotation = pieces[piece].length;
    x = w / 2;
    y = h;
    doneCount++;
  }
  graph(calculator, "curr", pieces[piece][rotation](x, y));
}, 1000);

document.addEventListener("keydown", (ev) => {
  if (ev.key == "w") {
    rotation = (rotation + 1) % maxRotation;
  } else if (ev.key == "a" && x > 0) {
    x--;
  } else if (ev.key == "d" && x < w) {
    x++;
  } else if (ev.key == "s" && y > 0) {
    y--;
  }
});
