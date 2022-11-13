function x() {
    let b = 90;
    function k() {
        let a = 10;
        function y() {
            console.log(a,b);
        }
        a = 100;
        return y;
    }
    return k;
}

let z = x();
z()();