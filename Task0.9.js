
function getVowel(str) {
    let vowelList = 'AEIOUaeiou'
    let vowels = 'Vowels: ';
    
     for(var i = 0; i < str.length ; i++)
      {
        if (vowelList.indexOf(str[i]) !== -1)
        {
          vowels += str[i];
        }
      }
      return vowels;
    }
   