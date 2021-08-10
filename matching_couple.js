
function factorial(number){
    let mult = 1;
    for (let i = 1; i <= number ; i++) {
        mult = mult*i;
    }

    return mult;

}


function matchingCouple(array){
    let boys = array[0];
    let girls = array[1];
    let num = array[2];
    let numway = num/2
    let boysWay
    let girlsWay
    let totalWays
    boysWay = factorial(boys)/ ((factorial(numway) * factorial(boys-numway)))
    girlsWay = factorial(girls)/ ((factorial(numway) * factorial(girls-numway)))
    totalWays = boysWay * girlsWay * numway;
    console.log(totalWays);

}



