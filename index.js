// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
function returnFirstTwoDrivers(drivers){

    function firstTwoDrivers(drivers){
        return [drivers[0],drivers[1]]
    }
 return firstTwoDrivers(drivers)
}


function returnLastTwoDrivers(drivers){
    function LastTwodrivers(drivers){
return [drivers[2],drivers[3]]
}
return LastTwodrivers(drivers)
}
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];
const  createFareMultiplier=function (FareMultiplier){
    return function(value){
        return FareMultiplier*value;
    }
}

const fareDoubler=createFareMultiplier(2)
const  fareTripler=createFareMultiplier(3)
function selectDifferentDrivers(drivers, selectedfn){
    return selectedfn(drivers)
}

