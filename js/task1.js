function nodeChildCount(node, deep = Infinity){
  let amountOfChildren = 0;
  let deepCounter = 0;
  if(node.children.length === 0){
    return amountOfChildren;
  } else {
    amountOfChildren += node.children.length;
    deepCounter++;
    if(deepCounter < deep){
      for (let child of node.children){
        return  amountOfChildren += nodeChildCount(child);
      }
    } else {
      return amountOfChildren;
    }
  }
}