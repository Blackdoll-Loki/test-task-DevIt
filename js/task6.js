function multiplyOddOnMin(arr){
  let min  = Math.min(...arr.flat());
  console.log(min)
  let resultArr = arr.map(subArr => {
    return subArr.map((el)=>{
      if(el%2 === 1){
        return el*min;
      }
      return el;
    })
  })
  return resultArr;
}