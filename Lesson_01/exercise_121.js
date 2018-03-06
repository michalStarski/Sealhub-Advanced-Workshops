for (let i = 0; i < 5; i++) {
    const f = function(i){
        setTimeout(function () {
            console.log(i);
        }, 100);
    }(i);
}