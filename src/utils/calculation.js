const handlers = {
  add: (left, right) => right + left,
  div: (left, right) => right / left,
  mod: (left, right) => right % left,
  mul: (left, right) => right * left,
  sub: (left, right) => right - left,
};

export const operands = {
  add: '+',
  div: '/',
  mod: '%',
  mul: '*',
  sub: '-',
};

export default function calc(input, operand) {
  const left = +input.left || 0;
  const right = +input.right || 0;

  return handlers[operand](left, right);
}
