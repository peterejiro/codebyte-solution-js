function rotateArray(array){
    let count = array.length;
    let pos = array.lastIndexOf(array[array[0]]);
    let j = 0;
    let newArray = [];

    for(let i  = pos; i <= count-1; i++){
        newArray[j] = array[i]
        j++;
    }

    for(let i = 0; i <  pos; i++ ){
        newArray[j] = array[i];
        j++;
    }

    console.log(newArray.join(''));

}
