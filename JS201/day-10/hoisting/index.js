let num = 121;

function reverse(num) {
    num = num.toString();
    let str = [...num].reverse().join("");
    return num == str;
}

console.log(reverse(num));