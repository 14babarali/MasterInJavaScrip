// E
// DE
// CDE
// BCDE
// ABCDE
!function(n){
    let pattern ="";

    for(let i=1 ; i<=n ;i++){
        for(let j=1; j<= i ; j++){
            pattern += String.fromCharCode(64 +n - i + j);
        }
        pattern += "\n"
    }
    console.log(pattern);
}(5);