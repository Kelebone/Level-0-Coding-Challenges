function getVowel(str) {
  let vowelList = 'AEIOUaeiou'
  let vowels = '';
  
   for(var i = 0; i < str.length ; i++)
    {
      if (vowelList.indexOf(str[i]) !== -1)
      {
        vowels += str[i];
      }
      
    }
    return 'Vowels: ' + [...new Set(vowels)];
  }

//insert string to print out vowels in the bracket below:
console.log(getVowel());  
   