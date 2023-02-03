const arr = ['home','house','houses'];
  

  let word = 0;
  let longestWord;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > word) {
      let word = arr[i].length;
      longestWord = arr[i];
    }
    
  }

  console.log(longestWord);