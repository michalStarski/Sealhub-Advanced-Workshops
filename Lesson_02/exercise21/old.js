console.log("start");
//RangeError - Tablica jest za krótka
const anArray = new Array(-1);
anArray.push("0");
console.log(anArray);

const width = 12;
//ReferenceError - blad w odniesieniu, nie zdeklarowalismy zmiennej height
console.log(width * height);

//SyntaxError - blad w skladni, brakuje przecinka ktory nalezy umiescic przy wymienianiu elementow w tablicy
let list = ['element 1', 'Element 2'
'Element 3'];
//TypeError - literowka - upperCase nie jest funkcja w js
console.log(list[0].upperCase());

//RangeError - argument musi byc pomiedzy 0 a 20
width.toFixed(30);

const user = {
    //SyntaxError - blad w skladni atrybutem obiektu nie moga byc slowa po spacji
    first name: "Bartek",
    lastName: "Nowak",
    age: 25
}

//TypeError - literówka user.age.tostring nie jest funkcja w js
console.log(user.age.tostring());
