// let type = document.querySelector(".type")
// let typetext = type.innerHTML
// let typedArr = typetext.split("")
// type.innerHTML = ""
// let typing = 0;



// function typedJs() {
//     if(typing < typetext.length){
//         type.innerHTML += typetext.charAt(typing)
//          typing++;
//          typedArr = typetext.split("")
//     }else{
//         typedArr.pop("");
//        type.innerHTML = typedArr.join("");
//        if(typedArr.length == 0){
//             typing = 0;
//        }
//     }
// }
// setInterval(()=>{
//     typedJs()
// }, 500)


// let type = document.querySelector(".type");
// let typedtext = type.innerHTML
// let typedArr = typedtext.split("");
// let typing = 0;
// type.innerHTML = ""



// function typedJs(){
//     if(typing < typedtext.length){
//         type.innerHTML += typedtext.charAt(typing);
//         typing++;
//         typedArr = typedtext.split("");
//     }else{
//         typedArr.pop("");
//         type.innerHTML = typedArr.join("");
//         if(typedArr.length == 0){
//             typing = 0;
//         }
//     }
 
// }

// setInterval(()=>{
//     typedJs()
// },100)


// let type = document.querySelector(".type");
// let typedtext = type.innerHTML
// let typedArr = typedtext.split("");
// let typing = 0;
// type.innerHTML = ""





// function typedJs(){
//     if(typing < typedtext.length){
//         type.innerHTML += typedtext.charAt(typing);
//         typing++;
//         typedArr = typedtext.split("");
//     }else{
//         typedArr.pop("");
//         type.innerHTML = typedArr.join("");
//         if(typedArr.length == 0){
//             typing = 0;
//         }
//     }
// }
// setInterval(()=>{
//     typedJs()
// },100)


// let type = document.querySelector(".type")
// let typetext = type.innerHTML
// let typedArr = typetext.split("")
// let typing = 0;
// type.innerHTML = "";


// function typedJs(){
//     if(typing < typetext.length){
//         type.innerHTML += typetext.charAt(typing)
//         typing++
//         typedArr = typetext.split("")
//     }else{
//         typedArr.pop("");
//         type.innerHTML = typedArr.join("");
//         if(typedArr.length == 0){
//             typing = 0;

//         }
//     }
// }
// setInterval(()=>{
//     typedJs()
// },500)


let type = document.querySelector(".type")
let typetext = type.innerHTML
let typedArr = typetext.split("")
let typing = 0;
type.innerHTML = "";



function typedJs(){
    if(typing < typetext.length){
        type.innerHTML += typetext.charAt(typing)
        typing++
        typedArr = typetext.split("")
    }else{
        typedArr.pop("");
        type.innerHTML =typedArr.join("");
        if(typedArr.length == 0){
            typing = 0;
        }
    }
}
setInterval(()=>{
    typedJs()
} ,500)
