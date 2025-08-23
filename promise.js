/*
const promise=new Promise((resolve,reject)=>{
    const sum=22+1;
    if(sum==2){
        resolve("success");
    }else{
        reject("error");
    }
});
promise
.then((msg)=>{
    console.log(msg);
})
.catch((error)=>{
    console.error(error);
});
*/
/*
setTimeout(function(){
    console.log("sriram is mern stck developer")
},1000);

function setTimeoutPromise(duration){
    return new Promise((resolve, reject) => {
       setTimeout(resolve,duration);
    })
}
setTimeoutPromise(250).then(()=>{
    console.log("sriram is a mern stack developer")
});
*/
/*
setTimeout(()=>{
    console.log("Normal:1")
    setTimeout(()=>{
    console.log("Normal:2")
    setTimeout(()=>{
    console.log("Normal:3")
    },250);
    },250);
},250);

function setTimeoutPromise(duration){
    return new Promise((resolve, reject) => {
       setTimeout(resolve,duration);
    })
}
    */
/*
setTimeoutPromise(250).then(()=>{
console.log("Normal SetTime: 1");
setTimeoutPromise(250).then(()=>{
console.log("Normal SetTime: 2");
setTimeoutPromise(250).then(()=>{
    console.log("Normal setTime: 3");
});
});
});
*/
/*
setTimeoutPromise(250)
.then(()=>{
    console.log("cool Promise: 1");
    return setTimeoutPromise(250);
}) 
.then(()=>{
    console.log("cool promise: 2");
    return setTimeoutPromise(250);
})
.then(()=>{
    console.log("cool promise: 2");
})
*/
/*
const button=document.querySelector("button");

function addEventPromise(element,method){
    return new Promise((resolve,reject)=>{
        element.addEventListener(method,resolve)
});
}

addEventPromise(button,"click").then(()=>{
    console.log("clicked")
});
*/

/*

console.log(Promise.resolve("Good"));

Promise.all([Promise.resolve("Good"),Promise.resolve("Good"),Promise.resolve("Good")])
.then((msg)=>{
    console.log(msg);
})
.catch((error)=>{
    console.log(error)
});

Promise.all([Promise.resolve("Good"),Promise.reject("Error"),Promise.resolve("Good")])
.then((msg)=>{
    console.log(msg);
})
.catch((error)=>{
    console.log(error)
});

Promise.any([Promise.resolve("Good"),Promise.reject("Error"),Promise.resolve("Good")])
.then((msg)=>{
    console.log(msg);
})
.catch((error)=>{
    console.log(error)
});                              //output:good

Promise.any([Promise.resolve("1"),Promise.reject("Error"),Promise.resolve("3")])
.then((msg)=>{
    console.log(msg);
})
.catch((error)=>{
    console.log(error)
});                               //output:1


Promise.any([Promise.reject("1"),Promise.reject("Error"),Promise.resolve("3")])
.then((msg)=>{
    console.log(msg);
})
.catch((error)=>{
    console.log(error)
});                              //output 3

*/
/*
Promise.race([Promise.resolve("Good-1"),Promise.resolve("Good-2"),Promise.resolve("Good-3")])
.then((msg)=>{
    console.log(msg);
})
.catch((error)=>{
    console.log(error)
});                            //output good-1


Promise.race([Promise.reject("Good-1"),Promise.resolve("Good-2"),Promise.resolve("Good-3")])
.then((msg)=>{
    console.log(msg);
})
.catch((error)=>{
    console.log(error)
});
                     // reject error message will show Good-1 it take the first element only
*/
/*
Promise.allSettled([Promise.resolve("Good-1"),Promise.resolve("Good-2"),Promise.resolve("Good-3")])
.then((msg)=>{
    console.log(msg);
})
.catch((error)=>{
    console.log(error)
});                    //it comes the 3 output it will printed then message only do not work the catch 


const promise=Promise.resolve("Done");
promise
.then((msg)=>{
    console.log(msg);
})
.catch((err)=>{
console.error(err);
})
.finally(()=>{
    console.log("All Completed")
});
*/

/*
const promise=Promise.reject("Error");
promise
.then((msg)=>{
    console.log(msg);
})
.catch((err)=>{
console.error(err);
})
.finally(()=>{
    console.log("All Completed")
});//output:error all completed
*/
/*
const getpost = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const posts = ["Post-1", "Post-2", "Post-3"];
            resolve(posts);
        }, 1000);
    });
};

const getComments = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const comments = ["Comment 1", "Comment 2", "Comment 3"];
            resolve(comments);
        }, 2000);
    });
};

// Pass promises inside an array
Promise.all([getpost(), getComments()])
    .then((results) => {
        const [posts, comments] = results;
        console.log(`Posts: ${posts}`);
        console.log(`Comments: ${comments}`);
    })
    .catch((err) => {
        console.error(err);
    });
    */

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>response.json())
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
});
