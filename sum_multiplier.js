function sumMultiplier(array){
    let num;
    let numArray = [];
    let k =0;
    let sum = 0;
    let doubleSum;
    let checkStr = '';
    for (let i = 0; i < array.length; i++) {


        num = array[i];

        sum = sum + num;
        for (let j = 0; j < array.length ; j++) {

            if(i !== j){
                numArray[k] = num * array[j]
                k++;
            }

        }



    }

    doubleSum = sum * 2;

    for (let i = 0; i < numArray.length; i++) {
        if(numArray[i] > doubleSum){

            checkStr = 'true';
            break;

        }
        else{
            checkStr = 'false'
        }
    }
    console.log(checkStr);
}
