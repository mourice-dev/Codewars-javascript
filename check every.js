function smallEnough(a, limit){
// const arr = a.map(n => n < limit);
return a.every(n => n < limit || n == limit)
  
}
console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100))