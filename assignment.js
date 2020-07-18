//--------feetToMile---------------

function feetToMile(feet) {
    var mile = feet / 5280; // 1 mile = 5280 feet

    if (feet < 0) {         //if feet input is less than zero
        console.log("sorry length can not be negative.")
        return 0;
    }
    return mile;
}
var convertFeet = feetToMile(213987);
convertFeet = convertFeet.toFixed(2);       // to show only two values after decimal
console.log("the conversion of feet to mile is: " + convertFeet);





//----------woodCalculator---------------

function woodCalculator(chair, table, bed) {
    var woodForChair = chair * 1;   //required wood of chair is 1
    var woodForTable = table * 3;   //required wood of table is 3
    var woodForBed = bed * 5;   //required wood of bed is 5

    if (chair < 0) {
        console.log("sorry no item can be lesser than zero")
        return 0;
    }
    if (table < 0) {
        console.log("sorry no item can be lesser than zero")
        return 0;
    }
    if (bed < 0) {
        console.log("sorry no item can be lesser than zero")
        return 0;
    }

    var RequiredWood = woodForChair + woodForTable + woodForBed;
    return RequiredWood;

}

var TotalWood = woodCalculator(14, 12, 7);
console.log("Total " + TotalWood + " cubic feet " + "Wood Needed.");





//----------brickCalculator------------

function brickCalculator(floor) {
    brickPerFeet = 1000; //bricks required in one feet

    perFeetWall1 = 15; //height of first ten floor's wall
    perFeetWall2 = 12; //height of second ten floor's wall
    perFeetWall3 = 10; //height of other floor's wall

    firstTenFloor = 10;  //floor counts
    secondTenFloor = 10; //floor counts


    if (floor <= 0) {               //if floor number input is equal or less than zero
        console.log("building not ready yet.");
        return undefined;
    }

    else if (floor >= 20) {
        TotalBricks = firstTenFloor * perFeetWall1 * 1000 + secondTenFloor * perFeetWall2 * 1000 + (floor - 20) * perFeetWall3 * 1000;
    }

    else if (floor > 10 && floor <= 20) {
        TotalBricks = firstTenFloor * perFeetWall1 * 1000 + secondTenFloor * perFeetWall2 * 1000;
    }

    else if (floor > 0 && floor <= 10) {
        TotalBricks = firstTenFloor * perFeetWall1 * 1000;
    }
    return TotalBricks;
}
console.log("Total Bricks required:", brickCalculator(25));





//----------tinyFriend------------

function tinyFriend(friends) {
    var tiny = friends[0];

    //if the array is empty
    if (friends.length < 1) {
        console.log("sorry there is no name in this array");
        return undefined;
    }

    for (var i = 0; i < friends.length; i++) {
        var newTiny = friends[i];
        if (newTiny.length < tiny.length) {
            tiny = newTiny;
        }
    }
    return tiny;
}

shortFriendName = tinyFriend(['Masum', 'Jony', 'Firojshah', 'Sadia', 'Maria']);
console.log("The tiniest friend from the array is: " + shortFriendName);