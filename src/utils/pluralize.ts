/**
 * Метод определения формы слова в зависимости от числа
 * @param count - число объектов
 * @param forms - формы слов (1 - именительный падеж, 2 - родительный падеж, 3 - множественное число)
 * @returns Корректная форма слова
 */

export function pluralize(
  count: number,
  forms: [string, string, string]
): string {
  const absCount = Math.abs(count) % 100;
  const remainder = absCount % 10;

  if (absCount > 10 && absCount < 20) {
    return forms[2];
  }
  if (remainder > 1 && remainder < 5) {
    return forms[1];
  }
  if (remainder === 1) {
    return forms[0];
  }
  return forms[2];
}
