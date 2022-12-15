export const toCelcius = (value: number, round: boolean = true) =>
  round ? Math.round(value - 273.15) : value - 273.15;
