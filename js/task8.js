String.prototype.removeDuplicate = function(){
  let arrOfWords = this.split(' ');
  let uniqueWords = [];
  arrOfWords.forEach(word =>{
    if(!uniqueWords.includes(word)){
      uniqueWords.push(word);
    }
  });
  return uniqueWords.join(' ')
} 