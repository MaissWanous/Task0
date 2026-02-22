function sum_to_n_a(n) {
    var sum = 0;
    for (var i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
function sum_to_n_b(n) {
    return n * (n + 1) / 2;
}
function sum_to_n_c(n) {
    if (n <= 1)
        return n;
    return n + sum_to_n_c(n - 1);
}
function main() {
    var n = 5;
    console.log("sum_to_n_a:", sum_to_n_a(n));
    console.log("sum_to_n_b:", sum_to_n_b(n));
    console.log("sum_to_n_c:", sum_to_n_c(n));
}
main();
