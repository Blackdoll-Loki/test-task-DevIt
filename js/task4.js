function mapper(mapRules){
  return function (item){
    let newItem = {};
    for (let i = 0; i < mapRules.length; i++){
      let [field, newField, fn ] = mapRules[i];
      let value = item[field];
      newItem[newField] = fn ? fn(value) : value;
    }
    return newItem;
  }
}