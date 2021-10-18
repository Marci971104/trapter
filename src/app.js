var side_a = document.querySelector("#side_a");
var side_b = document.querySelector("#side_b");
var side_c = document.querySelector("#side_c");
var side_d = document.querySelector("#side_d");
var result = document.querySelector("#result");
var SumBtn = document.querySelector("#SumBtn");
function add(side_a, side_b, side_c, side_d) {
    return ((side_a + side_c) / (4 * (side_a - side_c))
        * Math.sqrt((side_a + side_b - side_c + side_d)
            * (side_a - side_b - side_c + side_d)
            * (side_a + side_b - side_c - side_d)
            * (-side_a + side_b + side_c + side_d)));
}
SumBtn.addEventListener('click', function (event) {
    var res = add(+side_a.value, +side_b.value, +side_c.value, +side_d.value);
    result.value = String(res.toFixed(2) + " cm²");
    //console.log(13, 4, 7, 4);
});
