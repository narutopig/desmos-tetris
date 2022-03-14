export function square(x1: number, y1: number, w: number, h: number) {
  return `\\operatorname{polygon}((${x1},${y1}), (${x1}, ${y1 + h}), (${
    x1 + w
  }, ${y1 + h}), (${x1 + w}, ${y1}))`;
}

export function unit(x1: number, y1: number) {
  let w = 1,
    h = 1;
  return `\\operatorname{polygon}((${x1},${y1}), (${x1}, ${y1 + h}), (${
    x1 + w
  }, ${y1 + h}), (${x1 + w}, ${y1}))`;
}

export function graph(
  calculator: any,
  label: string,
  expressions: string[],
  color?: string
) {
  expressions.forEach((v, i) => {
    calculator.setExpression({
      id: `${label}${i}`,
      latex: v,
      color: color ?? "#ff0000",
    });
  });
}

export function board(x1: number, y1: number, w: number, h: number) {
  return `\\operatorname{polygon}((${x1}, ${y1}), (${x1}, ${y1 + h}), (${
    x1 + w
  }, ${y1 + h}), (${x1 + w}, ${y1}))`;
}
