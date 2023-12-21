import readlinesync from 'readline-sync';
const inputmatix = () => {
    const row = readlinesync.questionInt(`no. of rows: `);
    const col = readlinesync.questionInt(`no of coloumn: `);
    console.log(row+'X'+col);
    let mat = new Array(row);
    // console.log(mat);
    for(var i=0; i<mat.length; i++){
        mat[i]=new Array(col);
       
    }
    // console.log(mat);
    for(var i=0; i<row; i++){
        for(var j=0; j<col; j++){
            mat[i][j]=readlinesync.questionInt(`Enter the value
             of ${i} ${j} is: `)
        }
    }
    // console.log(mat);
    return mat;
}
// inputmatix();
const print = (mat) =>{
    let str="";
    for(let i=0; i<mat.length; i++){
        for(let j=0;j<mat[0].length;j++){
          str+=mat[i][j]+" ";
        }
        console.log(str);

        str="";
        // return str;

    }
    
}
// print(inputmatix());
console.log(`matrix of m1`);
let m1=inputmatix();
print(m1);
console.log(`matrix of m2`);
let m2=inputmatix();
print(m2);
console.log(`adding of m1 and m2`);
// const m3 = (m1,m2) =>{
//     let add="";
//     for(let i=0; i<m1.length; i++){
//         for(let j=0;j<m2[0].length;j++){
//           m3 = m1[i][j]+" "+m2[i][j]
//         }
//         console.log(add);
//         add="";
//     }
    
// }
// (m1,m2);
// const xyz = ()=>{
//     let add=[[],[]];
//     let d=""
//     for(let i=0; i<2; i++){
//         for(let j=0;j<2;j++){
//         add=m1[i][j]+m2[i][j];
//         }
//         console.log(add);
//         //  add+=[[],[]];
    
//         // d+="";
    
//     }
    
// }
// print()

