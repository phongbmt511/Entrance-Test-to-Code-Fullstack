// problem 1
function FindMax(b) {
    var a = b;
    var max = a[0] * a[1];
    var num1 = a[0];
    var num2 = a[1]
    for (var i = 0; i < a.length; i++) {
        if (a[i] * a[i + 1] > max) {
            max = a[i] * a[i + 1];
            num1 = a[i];
            num2 = a[i + 1]
        }
    }
    console.log(max);
}
console.log(FindMax([2, 3, -5, -2, 4]));

// problem 2
function SumWeigth(b) {
    var a = b;
    var team1 = 0;
    var team2 = 0;
    for (var i = 0; i < a.length; i++) {
        if (i % 2 === 0) {
            team1 = team1 + a[i];
        } else {
            team2 = team2 + a[i];
        }
    }
    console.log(team1, team2)
}
console.log(SumWeigth([60, 40, 55, 75, 64]));