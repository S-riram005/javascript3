/*
const userMap=new Map();
//add elements to the map

userMap.set("name","sriram");
userMap.set("age",23);
userMap.set("city","madurai");
userMap.set("contact","6382869862");
//printing map object
console.log(userMap);

//update the value for age
userMap.set("age",24);
console.log(userMap);
//map size
console.log("map size: ",userMap.size);

//deleted key
console.log("Before Delete: ",userMap);
userMap.delete("city");
console.log("After Delete: ",userMap);
//get
console.log(userMap.get("name"));
//has
console.log(userMap.has("name"));
console.log(userMap.has("city"));
//iterating map with for of

for(const [key,value] of userMap){
    console.log(`${key}=${value}`);
}

//keys
for(const key of userMap.keys()){
    console.log(key);
}
//value
for(const value of userMap.values()){
    console.log(value);
}  
//entities
for(const [key,value] of userMap.entries()){
    console.log(`${key}=${value}`);
}

//for each
userMap.forEach((value,key)=>{
    console.log(`${key}=${value}`);
})

//clear()
userMap.clear();
console.log("After Map: ",userMap);

//Relation with Array objects
const arr=[
    ["key1","value1"],
    ["key2","value2"],
];
console.log(arr);
const myMap=new Map(arr);
console.log(myMap);
console.log(myMap.get("key1"));

//map object to array
console.log(Array.from(myMap));

//spread
console.log([...myMap]);
console.log(Array.from(myMap.keys()));
console.log(Array.from(myMap.values()));

//do not do this
const wrongMap=new Map();
console.log(wrongMap);
wrongMap["key1"]="Data1";
wrongMap["key2"]="Data2";
console.log(wrongMap);
console.log(wrongMap.has("key1"));


//correct map
const correctMap=new map();
console.log(correctMap);
correctMap.set("key1","Data1");
correctMap.set("key2","Data2");
console.log(correctMap);
console.log(correctMap.has("key1"));


/*
console.log(Number("Ram"));
const myMaps=new Map();
myMaps.set(NaN,"Not a Number");
console.log(myMaps.get(NaN));

//maps can be merged with Arrays:

const first=new Map([
    [1,"one"],
    [2,"two"],
    [3,"three"],
]);
const second=new Map([
    [1,"first"],
    [2,"second"],
]);

const merged=new Map([...first,...second]);
console.log(merged);  
*/                         //1=>first 2=>second 3=>three


const first=new Map([
    [1,"one"],
    [2,"two"],
    [3,"three"],
]);
const second=new Map([
    [1,"first"],
    [2,"second"],
]);

const merged=new Map([...first,...second,[1,"Ist"]]);
console.log(merged);                                                        //1=>Ist,2=>second,3=>three


//counting the frequency of words in a string

const sentences = "Fear leads to anger anger leads to hatred hatred leads to conflict";
const words = sentences.split(" ");
console.log(words);

const wordFrequency = new Map(); // ✅ Capital M

for (let word of words) {
    if (wordFrequency.has(word)) {
        wordFrequency.set(word, wordFrequency.get(word) + 1);
    } else {
        wordFrequency.set(word, 1);
    }
}

console.log(wordFrequency);

//2.grouping objects by a prpoerty
const people = [
    { name: "sri", age: 30 },
    { name: "santhosh", age: 23 },
    { name: "seeni", age: 30 },
    { name: "zega", age: 23 },
];

const peopleByAge = new Map(); // Capital M

for (let person of people) {
    const age = person.age;
    if (peopleByAge.has(age)) {
        peopleByAge.get(age).push(person);
    } else {
        peopleByAge.set(age, [person]);
    }
}

console.log(peopleByAge);

//3.implementing a frequency counter
function frequencyCounter(arr){
    const map = new Map();
    for(let i = 0; i < arr.length; i++){
        const element = arr[i];
        map.set(element, (map.get(element) || 0) + 1);
    }
    return map;
}

const array = [1,2,3,1,2,2,4];
console.log(frequencyCounter(array));
const array2=[1,54,1,52];
console.log(frequencyCounter(array2));


