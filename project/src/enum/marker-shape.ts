export const MarkerShape = {
  Size: [27, 39] as [number, number],//TODO в данном случае так можно приводить типы? иначе у меня не работает (ts определяет как number[] и new Icon такое не принимает)
  Anchor: [13.5, 39] as [number, number],
} as const;
