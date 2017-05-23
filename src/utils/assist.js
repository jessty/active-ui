// Determine whether the parameter is one of..
export function oneOf (value, validList) {
  return validList.some(function(item, index){
    return value === item;
  })
}
