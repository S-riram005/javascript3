/*
async function welcome(){
    return "Hello World";
}
console.log(welcome());

welcome().then((msg)=>{
    console.log(msg);
})
.catch((err)=>{
    console.error(err);
})
.finally(()=>{
    console.log("All are completed");
})
    */

//-----------------------------------
/*
async function getdata(){
    let blogPost=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Blog Post")
    },2000)
    });

    let blogComment=new Promise((resolve,reject)=>{
         setTimeout(()=>{
        resolve("Comment For Blog")
    },5000)

    })

    console.log("Fetching Post....");
    let post=await blogPost;
    console.log("post: ",post);
    console.log("Fetching Comment....");
    let comment=await blogComment;
    console.log("comment: ",comment);
    return[post,comment];
}

console.log("welcome to Blog Post");
let data=getdata();
console.log(data);

data.then((value)=>{
    console.log(value);
})
.catch((err)=>{
console.log(err);
});
*/

let result=function(marks){
return new Promise((resolve, reject) => {
    console.log("calculation Result....");
    setTimeout(()=>{
        let total=0;
        let result="pass";
        marks.forEach(mark=>{
            total+=mark;
            if(mark<35){
                result="Fail";
            }
        });
        resolve({total:total,result:result});
    },2000);
});
};

let grade=function(response){
    return  new Promise(function(resolve,reject){
        if(response.result=="pass"){
            let avg=response.total/3;
            let gradeText="Grade D";
            if(avg>=90&&avg<=100){
                gradeText="Grade A";
            }else if(avg>=80&&avd<=89){
                gradeText="Grade B";
            }else if(avg>=70&&avg<=79){
                gradeText="Grade C";
            }
            resolve(gradeText);
        }else{
           reject("No Grade");
        }

    })
}
/*
result([98,99,100]).then((value)=>{
    console.log("Total: ",value.total);
    console.log("Result: ",value.result);
    return grade(value)
    .then((data)=>{
        console.log(data);
})
.catch((err)=>{
    console.error(err);
})
})
*/

async function getResult(){
    try{
        const value= await result([98,99,65])
        console.log("Total: ",value.total);
        console.log("Result: ",value.result);
        const gradeText=await grade(value);
        console.log(gradeText);
    }catch(err){
        console.log(err);
    }
}

getResult();