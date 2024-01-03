export function multiplyCSSUnit(value: string, multiplier: number): string {
  const unit = value.replace(/[^a-z]/gi, "");
  const number = parseFloat(value.replace(unit, ""));
  return `${number * multiplier}${unit}`;
}

export function getDateString(date: string | undefined) {
  if (!date) return '';
  const d = new Date(date);
  return d.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
}

import type { EasingFunction } from 'svelte/transition';

export function count(
  start: number,
  end: number,
  easing: EasingFunction = (t) => t,
  duration: number = 1000,
  callback: (count: number) => void

) {
  if (start === end || start > end) return;
  
  const startTime = Date.now();

  function update() {
    const currentTime = Date.now();
    const elapsed = currentTime - startTime;

    if (elapsed < duration) {
      const progress = elapsed / duration;
      const currentCount = Math.round(start + (end - start) * easing(progress));

      callback(currentCount);

      setTimeout(update, 1);
    } else {
      callback(end);
    }
  }

  update();
}