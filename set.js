const users=["ram","sam","ram","rajesh"];
console.log(users);

const unquieUsersSet=new Set(users);
console.log(unquieUsersSet); 

//using spread convert set to array:
//const uniqueUsersArray=[...unquieUsersSet];
const uniqueUsersArray=[...new Set(users)];
console.log(uniqueUsersArray);

// const mySet=new Set();
// console.log(mySet);

// const mySet=new Set([1,2,3]);
// mySet.add(4);
// console.log(mySet);

// const mySet=new Set([1,2,3]);
// mySet.add(4);
// mySet.add(40).add(80);
// console.log(mySet);

// const mySet=new Set([1,2,3]);
// mySet.add(4);
// mySet.add(40).add(80);
// mySet.delete(80);
// console.log(mySet);

const mySet=new Set([1,2,3]);
mySet.add(4);
mySet.add(40).add(80);
mySet.delete(80);
console.log(mySet);
console.log(mySet.size);
console.log(mySet.has(4));
console.log(mySet.has(80));

mySet.forEach((value)=>console.log(value));


const set=new Set(["apple","banana","cherry"]);
console.log(set);


const iterator=set.entries();
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);

 const iteratorKey=set.keys();
 console.log(iteratorKey.next().value)
 console.log(iteratorKey.next().value);
 console.log(iteratorKey.next().value);

 /*
 1.subset
 A=1,2,3
 B=5,6,1,2,3,4
 c=1,3,4,5
 2.union
 3Intersection
 4.difference
 */

 Set.prototype.subset=function(otherset){
    if(this.size>otherset.size){
        return false;
    }else{
        for(var element of this){
            if(!otherset.has(element))return false;
        }
        return true;
    }
 };

 const setA=new Set([1,2,3]);
 const setB=new Set([5,6,1,2,3,4]);
 const setC=new Set([1,3,4,5]);

 console.log(setA.subset(setB));
 console.log(setA.subset(setC));
 console.log(setC.subset(setB));

 Set.prototype.union=function(otherset){
    const unionset=new Set();
    for(let element of this){
        unionset.add(element);
    }
    for(let element of otherset){
        unionset.add(element);
    }
    return unionset;
 }
 console.log(setA.union(setB));
 console.log(setA.union(setC));


 Set.prototype.intersection=function (otherset) {
    const intersectionSet=new Set(); 
    for(let element of otherset){
        if(this.has(element)){
            intersectionSet.add(element);
        }
    }
    return intersectionSet;
 };
 console.log(setA.intersection(setB));


  Set.prototype.difference=function (otherset) {
    const differenceSet=new Set(); 
    for(let element of otherset){
        if(!this.has(element)){
            differenceSet.add(element);
        }
    }
    return differenceSet;
 };
 console.log(setA.difference(setB));



 // Tag Widget
class TagsInput {
  constructor() {
    this.tags = new Set();   // store unique tags
  }

  addTag(newTag) {
    this.tags.add(newTag);   // add to Set (avoids duplicates automatically)
    console.log(this.tags);  // log the current set of tags
  }
}

// Usage
const input = new TagsInput();

input.addTag("Ram");
input.addTag("Sam");
input.addTag("Ram");   // duplicate → ignored by Set
input.addTag("Ravi");


