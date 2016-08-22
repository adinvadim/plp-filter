export function filterItems(items, values={}) {
  let result = items;
  console.log(items, values);
  if (values.new) {
    result = result.filter( item => item.new )
  }
  if (values.type && values.type.length > 0) {
    result = result.filter(item => values.type.indexOf(item.type) != -1);
  }

  if(values.q) {
    result = result.filter(item => item.title.indexOf(values.q) != -1);
  }

  if(values.owner) {
    result = result.filter(item => values.owner.indexOf(item.owner) != -1 || item.owner === values.owner);
  }
  return result;
}

export function mergeFilter(target, ...sources) {
  if (target === undefined || target === null) {
    throw new TypeError('Cannot convert first argument to object');
  }

  let result = Object(target);
  for (let i = 1; i < arguments.length; i++) {
    const nextSource = arguments[i];

    if (nextSource === undefined || nextSource === null) {
      continue;
    }

    const keysArray = Object.keys(Object(nextSource));

    for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {

      const nextKey = keysArray[nextIndex];

      const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);

      if (desc !== undefined && desc.enumerable) {

        if (Array.isArray(result[nextKey]) && Array.isArray(nextSource[nextKey]))  {
          result[nextKey] = [].concat(result[nextKey]).concat(nextSource[nextKey]);
          continue;
        }

        result[nextKey] = nextSource[nextKey];
        continue;
      }
    }
  }
  return result;

}
