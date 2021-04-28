function getCommon(str1, str2) {
    let common = 'Common Letters: ';
    let comString1 = '';
    let comString2 = '';
    
    if (str1.length > str2.length)
    {
        comString1 = str1;
        comString2 = str2;
    }
    else
    {
        comString1 = str2;
        comString2 = str1;
    }
    
    
    for(var i = 0; i < str1.length ; i++)
      {
        if (comString1.indexOf(comString2[i]) !== -1)
        {
          common += comString2[i];
        }
       
      }
      return common;
    }
    document.getElementById("demo").innerHTML =
    getCommon("house","Computer")