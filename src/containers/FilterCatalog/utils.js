export function filterItems(items=[], values={}) {
  let result = items;
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

  if(values.theme) {
    result = result.filter( item => values.theme.indexOf(item.theme) != -1)
  }
  return result;
}

