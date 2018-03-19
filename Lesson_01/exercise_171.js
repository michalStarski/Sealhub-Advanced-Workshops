const cSlice = (angle, radius, pi = Math.PI) => {
    return (angle/360)*pi*radius*radius;
};

console.log(cSlice(30, 5, 3.14));
console.log(cSlice(30, 5, 22/7));
console.log(cSlice(30, 5));

