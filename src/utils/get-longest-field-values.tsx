function isReactElement(
  value: unknown,
): value is React.ReactElement<{ children?: React.ReactNode }> {
  return typeof value === 'object' && value !== null && 'props' in value;
}

function extractText(value: unknown): string {
  if (value == null) return '';
  if (isReactElement(value)) {
    return value.props.children?.toString() ?? '';
  }
  return value.toString();
}

export function getLongestFieldValues<T extends Record<string, any>>(
  items: T[],
  initial: Partial<Record<keyof T, string>> = {},
): Partial<Record<keyof T, string>> {
  return items.reduce(
    (acc, item) => {
      (Object.keys(item) as (keyof T)[]).forEach((key) => {
        const text = extractText(item[key]);
        if (text.length > (acc[key]?.length ?? 0)) {
          acc[key] = text;
        }
      });
      return acc;
    },
    { ...initial },
  );
}
