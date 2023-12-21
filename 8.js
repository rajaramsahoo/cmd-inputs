// function print(num){
//     console.log(num);
//     if(num>=5) return;
//     print(num+1);
// }
// print(1);
// function isTeenager (age) {
//     return age < 20 && age > 12;
// }
    
//     var result = isTeenager (14);
//     console.log(result)
    
// var animalSoundMap = { sheep: 'baa',
// cat: 'meow',
// cow: 'moo',
// fox: 'ring-ding-ding-ding-ding-ring-ding'
// }

// function getAnimalSound(animal) {
// var sound = animalSoundMap[animal]; 
// if (sound) {
// return sound;
// }

// // We assume that animals without an explicit sound, make a
// // 'woof' sound
// return 'woof' ;
// }

// var result = getAnimalSound('cow');
// console.log(result)

// const words = ['limit', 'description','syntax','javascript','nodejs','docker'];
// // ['LIMITS', "DESCRIPTION", ...]

// // let res = words.map(ele => ele.toUpperCase());
// // console.log(res);

// let res = words.map(ele => ele[0].toUpperCase() + ele.slice(1));
// console.log(res);

// // function convertToUpper(str){
// //     return str.toUpperCase();
// // }
// // let res = words.map(convertToUpper);
// // console.log(res);

// let arr = ["raja","jinu","kajol"];
// let a2 = arr.map((ele)=>ele.toUpperCase())
// console.log(a2);

// let arr1 = ["raja","jinu","bala"];

//  arr1[0]=0;
//  let arr2 = arr1;
// console.log(arr1);
// console.log(arr2);
// let a = "raja"
// let b = a;
// a = "jinu";
// console.log(a)
// console.log(b)
let arr = [10,20,30,40,50];
for(let i=0;i<4;i++){
    console.log(arr[i]);
}