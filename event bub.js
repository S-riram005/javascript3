const grandparent=document.querySelector("#grandparent");
const parent=document.querySelector("#parent");
const child=document.querySelector("#child");
/*
grandparent.addEventListener("click",function(){
    console.log("Grandpa Clicked");
});

parent.addEventListener("click",function(){
    console.log("parent Clicked");
});

child.addEventListener("click",function(){
    console.log("child Clicked");
}); 
*/                                           //output: event bubbling :child clicked,parent clicked,grandpa clicked

/*
grandparent.addEventListener("click",function(){
    console.log("Grandpa Clicked");
},
false
);

parent.addEventListener("click",function(){
    console.log("parent Clicked");
},
false
);

child.addEventListener("click",function(){
    console.log("child Clicked");
},
false
);  
*/                                  //output: event bubbling :child clicked,parent clicked,grandpa clicked

/*
grandparent.addEventListener("click",function(){
    console.log("Grandpa Clicked");
},
true
);

parent.addEventListener("click",function(){
    console.log("parent Clicked");
},
true
);


child.addEventListener("click",function(){
    console.log("child Clicked");
},
true
);   
*/                               //output:true it takes the event capturing :grandparent clicked,parent clicked,child clicked
/*
grandparent.addEventListener("click",function(){
    console.log("Grandpa Clicked");
},
true
);

parent.addEventListener("click",function(){
    console.log("parent Clicked");
},
false
);

child.addEventListener("click",function(){
    console.log("child Clicked");
},
true
);    //output:parent is event bubbling is false come and it first print the event capturing grandclicked,child clicked,parent clicked
*/

/*
grandparent.addEventListener("click",function(){
    console.log("Grandpa Clicked");
},
false
);

parent.addEventListener("click",function(){
    console.log("parent Clicked");
},
false
);

child.addEventListener("click",function(e){
    console.log("child Clicked");
    e.stopPropagation();
},
false
);                            //output:we use stoppropagation in bulid in function  stop child is clicked


grandparent.addEventListener("click",function(){
    console.log("Grandpa Clicked");
},
True
);

parent.addEventListener("click",function(){
    console.log("parent Clicked");
},
false
);

child.addEventListener("click",function(e){
    console.log("child Clicked");
    e.stopPropagation();
},
true
); 
*/                                      //output:this event bubbling first it came the grandpa clicked and next will come the child clicked it stop it did not go to te parent child

/*
grandparent.addEventListener("click",function(){
    console.log("Grandpa Clicked");
},
true
);

parent.addEventListener("click",function(){
    console.log("parent Clicked");
},
false
);

child.addEventListener("click",function(e){
    console.log("child Clicked");
    e.stopPropagation();
},
true
); 

child.addEventListener("click",function(e){
    console.log("child Clicked2");
    e.stopPropagation();
},
true
);                                        //output:this event bubbling have worked grandpaclicked it have the two child it works the child clicked child clicked 2

*/

/*
grandparent.addEventListener("click",function(){
    console.log("Grandpa Clicked");
},
true
);

parent.addEventListener("click",function(){
    console.log("parent Clicked");
},
false
);

child.addEventListener("click",function(e){
    console.log("child Clicked");
    e.stopImmediatePropagation();
},
true
); 

child.addEventListener("click",function(e){
    console.log("child Clicked2");
    e.stopPropagation();
},
true
);                                          //output:its grandparent clicked we used the stopimmediatepropagation it stoped the child clicked


*/

 