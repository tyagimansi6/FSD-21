function f1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("hello");
            resolve();
        }, 1000);
    });
}

function f2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("abes");
            resolve();
        }, 2000);
    });
}
f1().then(f2)
.catch((err) => {  
    console.log("error", err);
})

