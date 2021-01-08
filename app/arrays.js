exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        return i;
      }
    }

    return -1;
  },

  sum: function(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }

    return sum;    
  },

  remove: function(arr, item) {
    // create container string
    // create result array
    // iterate through array
      // if curr is not looked-for elem
        // add to string
    // iterate through container string
      // add elem to result array with [i] syntax and setting
    // return result array
  
    let container = '';
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== item) {
        container += arr[i];
      }
    }

    for (let j = 0; j < container.length; j++) {
      result[j] = container[j];
    }

    return result;

  },

  removeWithoutCopy: function(arr, item) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i--;
      }
    }

    return arr;
  },

  append: function(arr, item) {
    const length = arr.length;
    arr[length] = item;
    return arr;
  },

  truncate: function(arr) {
    let result = [];
    for (let i = 0; i < arr.length - 1; i++) {
      result[i] = arr[i];
    }

    return result;
  },

  prepend: function(arr, item) {
    let result = [];
    result[0] = item;
    for (let i = 0; i < arr.length; i++) {
      result[i + 1] = arr[i];
    }

    return  result;
  },

  curtail: function(arr) {
    let result = [];
    for (let i = 1; i < arr.length; i++) {      
      result[i - 1] = arr[i];
    }

    return result;    
  },

  concat: function(arr1, arr2) {
    return [...arr1, ...arr2];
  },

  insert: function(arr, item, index) {
    // create copy of orig from index on so don't lose elements
    // create section of before index
    // spread together, before, item, after
    let before = [];
    let after = [];    
    let afterIndex = 0;
    for (let i = 0; i < arr.length; i++) { 
      console.log(i); 
      if (i < index) {    
        before[i] = arr[i];
      } else if (i >= index) {
        after[afterIndex] = arr[i];
        afterIndex++;
      }
    }

    const result = [...before, item, ...after];    
    return result;
  },

  count: function(arr, item) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        count += 1;
      }
    }

    return count;
  },

  duplicates: function(arr) {
    // make container array
    // iterate
      // iterate again
        // if curr elem is there multiple times
          // add to container
    // iterate through container array
      // compare curr elem to elem after
        // if next elem is less than curr elem
          // switch them
    // return container
    
    let container = [];
    let seen = [];
    for (let i = 0; i < arr.length; i++) {      
      let currCount = 0;
      const curr = arr[i];      
      seen = [...seen, curr];
      for (let j = 0; j < arr.length; j++) {
        if (arr[j] === curr) {          
          currCount += 1;
        }
      }

      if (currCount > 1) {      
        container = [...container, curr]        
      }

      currCount = 1;
    }

    for (let k = 0; k < container.length; k++) {      
      for (let b = 0; b < container.length; b++) {
        if (container[k] === container[b] && k !== b) {
          delete container[b];
        }
      }
    }

    return container;
  },

  square: function(arr) {
    let squared = [];
    for (let i = 0; i < arr.length; i++) {
      squared = [...squared, (arr[i] * arr[i])];
    }

    return squared;
  },

  findAllOccurrences: function(arr, target) {
    // create result array
    // iterate
      // if curr matches target
        // add target to result
    // return result

    let result = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        result = [...result, i];
      }
    }

    return result;
  }
};
