function chunkArray(arr, chunkSize) {
  let index = 0;
  
  return {
      next: function() {
          const chunk = arr.slice(index, index + chunkSize);
          index += chunkSize;
          return {
              value: chunk.length > 0 ? chunk : undefined,
              done: index > arr.length
          };
      }
  };
}