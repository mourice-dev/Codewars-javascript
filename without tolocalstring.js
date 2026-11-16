function addCome(number) {
    const str = number.toString();
    return str.slice(0,-3) + "," + str.slice(-3)
}
console.log(addCome(1000))
