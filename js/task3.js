function bulkRun(functions) {
  const results = [];

  const promises = functions.map(([fn, args]) => new Promise(resolve => {
      const callback = result => {
          results.push(result);
          resolve();
      };
      fn(...args, callback);
  }));
  return Promise.all(promises).then(() => results);
}