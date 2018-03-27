function main() {
    const x = "Hello world!";
    if(typeof(x) === 'string'){
        try{
            throw new Error(200, 'Zmienna x jest typu string!');
        }catch(e){
            console.log(e.number, e.message);
        }
    }
    try {
        const result = run(x);
    }catch(e){
        console.log(e.name, e.message);
    }

    try{
        console.log(x.lowerCase());
    }catch(e){
        console.log(e.name, e.message);
    }

}

window.onload = main;
window.addEventListener('error', (msg, url, line)=> {
    console.log(msg, url, line)
});

let x = y+5;

