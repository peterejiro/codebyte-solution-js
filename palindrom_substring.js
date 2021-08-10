function palindromeSubstring(string){
    let strLength = string.length;

    let palindromeArray = [];
    let j = 0;
    for(let i =0; i < strLength; i++){
        let newString = string.substring(i);
        let k = 0;
        let newStringLength = newString.length
        while(k < newString.length){
            for(let r =1; r<newStringLength; r++){
                let tempString = newString.substring(k, k+r)
                let strSplit = tempString.split("");
                let reverseArray = strSplit.reverse();
                let reverseString = reverseArray.join("");
                if((tempString === reverseString) && tempString.length > 2 ){
                    palindromeArray[j] = tempString;
                    j++;
                }
            }
            k++;
        }
    }
    let tLength = 0;
    let strs = '';
    if(palindromeArray.length < 1){
        console.log('none')
    } else{
        for(let t=0; t<palindromeArray.length; t++){
            if(palindromeArray[t].length > tLength){
                tLength = palindromeArray[t].length;
                strs = palindromeArray[t];
            }

        }
        console.log(strs);
    }

}
