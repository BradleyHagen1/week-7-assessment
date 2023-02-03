
function isPangrams(string){
    let strArr = string.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
   
    for(let i = 0; i < alphabet.length; i++){
     if(strArr.indexOf(alphabet[i]) === -1){
       return false;
     }
    }
    return true;
  }
  console.log(isPangrams('The quick brown fox jumps over the lazy dog!'))
