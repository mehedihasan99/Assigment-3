

// Answer-1
function kilometerToMeter(kilometer){
    var meter=Math.abs(kilometer*1000);
    return meter;
    
}

// Answer-2
function budgetCalculator(watch,phone,laptop){
    var element1=Math.abs(watch*50);
    var element2=Math.abs(phone*100);
    var element3=Math.abs(laptop*500);
    var total=element1+element2+element3;
    return total;
}
// Answer-3
function hotelCost(days){
    var cost=0;
    if (days<=10 ){
        cost=days*100;
    }
    else if (days<=20){
        var firstPart=10*100;
        var remaining=days-10;
        var secondPart=remaining*80;
        cost=firstPart+secondPart;

    }
    else{
        var firstPart=10*100;
        var secondPart=10*80;
        var remaining=days-20;
        var thirdPart=remaining*50;
        cost=firstPart+secondPart+thirdPart;

    }
    
    return cost;
}
// Answer-4
function megaFriend(friendsName){
    var largestName=friendsName[0];
    for( i = 0;i < friendsName.length; i++){
        var array=friendsName[i];
        if(array.length>largestName.length){
            largestName=array;
        }
    }
    return largestName;
}