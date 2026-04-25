function getNestedValue(obj: any, path: string) {
  return path.split('.').reduce((acc, key) => acc?.[key], obj);
}

function applyTransform(value: any, transform: any) {
  if (!transform || value == null) return value;

  switch (transform.name || transform) {
    case 'to_uppercase':
      return String(value).toUpperCase();
    case 'to_lowercase':
      return String(value).toLowerCase();
    case 'regex_replace': {
      const pattern = transform.pattern
        ? new RegExp(transform.pattern, 'g')
        : null;
      return pattern
        ? String(value).replace(pattern, transform.replacement || '')
        : value;
    }
    default:
      return value;
  }
}

function cleanupTemplateValue(value: string) {
  return value
    .replace(/\(\s*\)/g, '') // remove empty parentheses
    .replace(/\.{2,}/g, '.') // collapse multiple dots
    .replace(/^\.|\.$/g, '.') // trim leading and trailing dots
    .replace(/\s{2,}/g, '.'); // collapse double spaces
}

export function resolveExpression(row: any, expression: any) {
  if (expression.type == 'field') {
    let value = getNestedValue(row, expression.path);
    value = applyTransform(value, expression.transform);
    return value;
  }

  if (expression.type == 'template') {
    let value = expression.template;
    for (const p of expression.path) {
      let v = getNestedValue(row, p) ?? '';
      v = applyTransform(v, expression.transform?.[p]);
      value = value.replace(`{${p}`, v);
    }
    value = cleanupTemplateValue(value);
    return value;
  }

  return '';
}
