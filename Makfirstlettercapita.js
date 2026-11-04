function hello(name) {
  
   if( typeof name !== "string" || name === ""){
     return "Hello, World!"
   } 
  const nam = name.split("")
  return "Hello, "+ nam[0].toUpperCase() + nam.slice(1).join("").toLowerCase()+"!";
}

console.log(hello("mauricE"))