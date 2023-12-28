export function multiplyCSSUnit(value: string, multiplier: number): string {
  const unit = value.replace(/[^a-z]/gi, "");
  const number = parseFloat(value.replace(unit, ""));
  return `${number * multiplier}${unit}`;
}