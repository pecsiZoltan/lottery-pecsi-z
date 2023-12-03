export interface GameOptions {
  panels: number,
  rows: number,
  columns: number,
  numbersDrawn: number
}

export const defaultGameOptions: GameOptions = {
  panels: 4,
  rows: 7,
  columns: 7,
  numbersDrawn: 6
}
