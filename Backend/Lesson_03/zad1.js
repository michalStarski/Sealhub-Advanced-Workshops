const colors = require('colors');
const fs = require('fs');

console.log('node.js zad 1'.america);

if(process.argv.length !== 4){
    console.log('-------------Error---------------'.red);
}

let timeoutVar = process.argv[2];
let file = process.argv[3];

setTimeout(()=> {
    const d = new Date();
    let seconds = d.getSeconds()<10 ? `0${d.getSeconds()}`:d.getSeconds();
    let minutes = d.getMinutes()<10 ? `0${d.getMinutes()}`:d.getMinutes();
    let month = d.getMonth()+1<10 ? `0${d.getMonth()+1}`:d.getMonth()+1;
    let day = d.getDate()<10 ? `0${d.getDate()}`: d.getDate();
    let year = d.getFullYear();
    let hours = d.getHours()<10 ? `0${d.getHours()}`: d.getHours();

    console.log(`${day}-${month}-${year} ${hours}:${minutes}:${seconds}`);

    // //Callbacks
    // fs.open(file, 'a', (error,fd) => {
    //     if(error)
    //         throw 'Error!'.america;
    //
    //     fs.appendFile(file,`${day}-${month}-${year} ${hours}:${minutes}:${seconds}\n`, err => {
    //        if(err)
    //            throw 'Error!'.america;
    //     });
    //
    //     fs.close(fd , error => {
    //         if(error)
    //             throw 'Error!'.america;
    //     });
    // })

    // Promises (Works but throws an error)
    let p = new Promise((resolve, reject) => {
        fs.open(file, 'a', (error, fd) => {
           if(error)
               throw '-------------Error---------------'.red;
           resolve(fd);
           reject('-------------Error---------------'.red);
        });
    });

        p.then((response)=> {
          fs.appendFile(file,`${day}-${month}-${year} ${hours}:${minutes}:${seconds}\n`, error=> {
             if(error)
                 throw '-------------Error---------------'.red;
             console.log(response);
             resolve(response);
          });
        })
        .then((response) => {
            fs.close(response, error => {
               if(error)
                   throw '-------------Error---------------'.red;
            });
        });

},timeoutVar);

