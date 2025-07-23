let first_name = "sriram";
let last_name = "rajkumar";

// concatenation
let c = first_name +" "+ last_name;
console.log("concatenation : "+c);
//concat
c=first_name.concat(" ",last_name);
console.log("concat: "+c);

//append
c="sriram"
c+="rajkumar"
console.log("append: "+c);

//escaping
c='he can\'t run'
console.log(c);

//length
c=first_name.length;
console.log("length: "+c);

c=last_name.length;
console.log("length: "+c);

//upper case

c=first_name.toUpperCase();
console.log("uppercase: "+c);

c=last_name.toUpperCase();
console.log("uppercase: "+c);

//lowercase
c=first_name.toLowerCase();
console.log("lowercase: "+c);

c=last_name.toLowerCase();
console.log("lowercase: "+c);

//index of

c=first_name.indexOf('a');
console.log("index of a: "+c);

c=first_name.lastIndexOf('a');
console.log("last of a: "+c);

//charAt
c=first_name.charAt(1);
console.log("charArt: "+c);

//charcodeat
c=first_name.charCodeAt(1);
console.log("charCodeAt: "+c);

//substr js

c=first_name.substr(0,4);
console.log("substr: "+c);

//substring
let text="6382869862";
c=text.substring(0,4);
console.log("substring: "+c);

c=text.substring(4);
console.log("substring: "+c);

c=text.substring(4,0);
console.log("substring: "+c);


c=text.substring(25,30);
console.log("substring Invalid: "+c);

c=text.substring(-4);
console.log("substring negative: "+c);

//slice
c=text.slice(1,5);
console.log("slice: "+c);

 c=text.slice(4,2);
 console.log("slice: "+c);

 c=text.substring(25,30);
console.log("substring Invalid: "+c);

c=text.slice(-3);
console.log("slice negative: "+c);

//split in js

let a="sriram is a mern stack developer";
c=a.split(" ")
console.log("split: "+c);
console.table(c);

//replace in js
a="i am from madurai";
console.log("before replace: "+a);

c=a.replace('madurai','chennai');
console.log("after replace: "+c);

//includes in js

const pets=['cats','cow','goats'];
console.log(pets.includes('cats'));
console.log(pets.includes('rats'));

//trim js
a=" sriram "
console.log("before trim: "+a.length);
a=a.trim();
console.log("after trim: "+a.length);

//padstart
a="5";
a=a.padStart(4,0);
console.log("pad start: "+a);

a="5";
a=a.padEnd(4,0);
console.log("pad end: "+a);

//string from charcode:
console.log(String.fromCharCode(65,66,67,68,97,98,122));

let longstring=("Madurai District is situated in the South of Tamil Nadu state"+ "It is bounded on the North by the  districts of Dindigul, Thiruchirapalli and on the East by Sivagangai and on the West by Theni and South by Virudhunagar.")
console.log(longstring);
longstring=("Madurai District is situated in the South of Tamil Nadu state"/ "It is bounded on the North by the  districts of Dindigul, Thiruchirapalli and on the East by Sivagangai and on the West by Theni and South by Virudhunagar.")
console.log(longstring);

