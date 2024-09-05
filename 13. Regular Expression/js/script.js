// Regular Expression 
// Pattern Matching Technique
// A regular expression is a sequence of characters that forms a search pattern.
// When you search for data in a text, you can use this search pattern to describe what you are searching for.
// A regular expression can be a single character, or a more complicated pattern.
// Regular expressions can be used to perform all types of text search and text replace operations.


let re;
let str;
// Use tow forward slash define for regex. 
// /regex/

re = /Hello/;
console.log(re);

// Note // is not a regular expression
// if you want to se only regular expressions use varnameContainRe.source 
console.log(re.source);
str = "hello, world";


// Using exec()
// The exec() method is a RegExp expression method.
// It searches a string for a specified pattern, and returns the found text as an object.
// If no match is found, it returns an empty (null) object.
// If match retrun a array
let res = re.exec(str);
// null because of case sensitivity
console.log(res);

// If want to ignore case sensitivity
re = /Hello/i;
res = re.exec(str);
console.log(res);

// Also use constructor for ignor case sensivity 
re = /Hello/;
res = new RegExp(re.source,"i").exec(str);
console.log(res);

//In retruning array index indiacate matching start indexs
//Input indicate against string we want to matching
re = /world/;
str = "Hello world";

res = re.exec(str);
console.log(res);

//try to matching pattern if found any where it returns array
str = "Hello asdfsworlddsf";
res = re.exec(str);
console.log(res);

 // There is two patterns in the string it take the first one
 str = "Hello world world";
 res = re.exec(str);
 console.log(res);


// Using test()
// The test() method is a RegExp expression method.
// It searches a string for a pattern, and returns true or false, depending on the result.
// The following example searches a string for the character "e":
res = re.test(str);
console.log(res);

// match() as it is exec different is only it is string object method
// str.match(re) follow this format 
res = str.match(re);
console.log(res);

// search() method returns the first index of matching string. it's also string method
// if not matched return -1
res = str.search(re);
console.log(res);

res = str.search(/dfsaf/);
console.log(res);


// replace() method is string object method. It replaces the string with first match 
res = str.replace(re, "Earth");
console.log(res);


// Literal Charcater 

// re = /hello/i;
// re = /hel/;
// re = /llo/i;
// re = /llo w/i;
// re = /llow/i;
str = "hello world!";

reTest(re,str);

res = re.test(str);

function reTest(re, str) {
    if(re.test(str)){
        console.log(`${str} matches ${re.source}`);
    }else{
        console.log(`${str} does not matches ${re.source}`);
    }
}
 

//Meta Characters 
re = /^hello/; // must start with hello

reTest(re,str); 
str = "Hi, hello world!";
reTest(re,str);


re = /world!$/; // must end with
reTest(re,str);

re = /world$/;
reTest(re,str); 

// must start and end with  hello or only have hello
re = /^hello$/;
reTest(re,str);

 
re = /^hello$/; 
str = "hello";
reTest(re,str);

//. postion can have any char but not empty and other characters must be maatche 
re = /h.llo/;
reTest(re,str);

re = /h.llo/;
str = "hallo";
reTest(re,str);

str = "hllo"; //empty is not a character
reTest(re,str);

str = "h llo"; //space is a char
reTest(re,str);

//other charcter also must be match expect . positon char
str = "haddo";
reTest(re,str);

str = "hillo world"
reTest(re,str);


// char * one or more this character 

str = "heeello"
re = /h*llo/;
reTest(re,str);

str = "deeello";
reTest(re,str);
// The pattern /h*llo/ matches any string that has "llo" somewhere in it, regardless of whether "h" is present or not. The "h*" part just needs to match zero or more "h" characters, and then it looks for "llo". Since "llo" exists in "deeello", the pattern matches.

re = /he*llo/;

str = "heiiillo";
reTest(re,str);

str = "heeeello";
reTest(re,str);

//.* In this portion there have no char or one more char
re = /hello.*hello/;
str = "hello world hello";
reTest(re,str);

re = /hello.*hello/;


re = /hello.*earth/;
str = "hello afdasf dsfdasf afdsa earth";
reTest(re,str);

re = /he?llo/; // e is optional but other char not allowed. not allowed on more e or other char
str = "hllo";
reTest(re,str);

str = "hello";
reTest(re,str);

str = "hllo";
reTest(re,str);

str = "heello";
reTest(re,str);


str = "hallo";
reTest(re,str);


re = /he?l?lo/; // e or l are optional or both are optional.
str = "hlo";
reTest(re,str);

// escaping char using \
re  = /hello\?/;
reTest(re,str);

str = "hello?";
reTest(re,str);


// Character Set using Brackets 

//Must be one of them in brakets. Not Both
re = /h[ea]llo/;
str = "hello";
reTest(re,str);

str = "hallo";
reTest(re,str);

str = "heallo"; //both not match
reTest(re,str);

str = "hdllo"; //or any other char not match also
reTest(re,str);

// we can also use here ignore case sensivitiy
re = /h[ea]llo/i;
str = "hEllo";
reTest(re,str);


// Anything  expect those inside brackets
re = /[^ha]ello/;
str = "hello";
reTest(re,str);
str = "aello";
reTest(re,str);
str = "dello";
reTest(re,str);

//Must start with those inside the bracket
re = /^[ha]ello/;
str = "hello";
reTest(re,str);

str = "aello";
reTest(re,str);

str ="dello";
reTest(re,str);

// Using range for charset
re = /^[A-H]ello/; // must start with Capital A to H
str = "Hello";
reTest(re, str); 

str = "Mello";
reTest(re, str);

//First letter must be on capital
re = /^[A-Z]/;
str = "Aktar";
reTest(re,str);

re = /[A-Za-z]/; //any letter A-Z pr a-z
str = "aktar";
reTest(re,str);

re = /[0-9]ello/; // 0 to 9 before elllo
str = "Again 1ello";
reTest(re, str);

str = "Again 123ello";
reTest(re,str);

str = "Again hello";
reTest(re,str);

//start with 1to 9 before ello, one digit can allowed
re = /^[1-9]ello/;
str = "2ello";
reTest(re,str);


str ="23ello";
reTest(re,str);

//start with one or more digit. using sequence no of times.
re = /^[1-9][0-9]ello/;
str = "12ello";
reTest(re,str);

str = "1ello";
reTest(re,str);

re = /^[1-9][0-9][a-z]/i;
str = "12aktar";
reTest(re,str);

str = "12Aktar";
reTest(re,str);


// if first char not start with number 
re = /[^1-9]ello/i;
str = "hello";
reTest(re,str);
str = "5ello";
reTest(re,str);


// Braces {} Quantifier
re = /hel{2}o/i; //must occurs exactly two times 
str = "hello";
reTest(re,str);

// Range
re = /hel{2,5}o/; //occurs 2-5 times
reTest(re,str);

str = "helo";
reTest(re,str);

str = "helllo";
reTest(re,str);

// Parenthesis()- Grouping
re = /^([0-9]){5}/; // equal= ^[0-9][0-9][0-9][0-9][0-9]
str ="23245abc";
reTest(re,str);

str ="23avcsd";
reTest(re,str);

re = /^([0-9]a){3}/;
str = "2a1a3a";
reTest(re,str);


// Match Bangladeshi phone number 
re = /^01[0-9]{9}$/;
str = "01323854656";
reTest(re,str);

re = /^\+8801[0-9]{9}$/;
str = "+8801323854656";
reTest(re,str);

str = "+9992930923924";
reTest(re,str);


//Sorthand character classes
re = /\w/; //word character alpha numeric or _
str = "****^%&**";
reTest(re,str);

//Check the whole string
str ="*&&*aa*";
reTest(re,str);

re = /\w+/; // one or more characters
reTest(re,str);


re = /\W/; //non word character 
str = "123avc";
reTest(re,str);

// Non word char means: exclude alpha numeric and _
str = "$#$";
reTest(re,str);

str ="3343asfd$";
reTest(re,str);

// one or more non word cahr 
re = /\W+/;
reTest(re, str);


//digit
re = /\d/;
str = "12avc";
reTest(re,str);

str = "_ava";
reTest(re, str);

//NoN digit

re = /\D/;
reTest(re,str);

// execluding digit
str = "34";
reTest(re,str);


// match white space 
re = /\s/;
str = "heh afds";
reTest(re,str);

str = "fasd";
reTest(re,str);

// Match Non Whitespace. Thant means if only whitespace occuers it can be false otherwise it can be true
str ="asfdas";
re = /\S/;
reTest(re,str);
str = "  ";
reTest(re,str);

str = "Hellow WOrsadf";
reTest(re,str);


// Word Boundary
re = /Hello\b/;
str = "Hello world";

reTest(re,str);

str = "asfdsaHelloasfd world";
reTest(re,str);

str = "&&Hello&&, world";
reTest(re,str);



// Assertion 
re =/x(?=y)/; //Matches x only if x is before y
str ="axyasdfas";
reTest(re,str);

str = "axsadfdsas";
reTest(re,str);

re = /x(?=yz)/;
str = "adsfaxyz";
reTest(re,str);

str = "avxzsda";
reTest(re,str);


re = /x(?!y)/; //Matche only x not before y
str = "adxasdfas";
reTest(re,str);
str = "adaxysdfas";
reTest(re,str);


//Exampe 1:
//Postal Code. Postal Code are 4 digit. All are number 

re = /^[0-9]{4}$/;
str = "1234";
console.log(re.test(str));

// Example Phone Number: 
re = /^01[0-9]{9}$/;
str = "01934342323";
console.log(re.test(str));

// if start with +8801
re = /^\+8801[0-9]{9}$/;
str = "+8801934342323";

console.log(re.test(str));

// if we want to match +88 or 88 optional 
re = /^(\+)?(88)?01[0-9]{9}$/;

str = "01934342323";
console.log(re.test(str));

str = "8801934342323";
console.log(re.test(str));

str = "+8801934342323";
console.log(re.test(str));

str = "880193434232";
console.log(re.test(str));



//Email Address Pattern
re = /^([a-zA-Z0-9]\.?)+[^\.]@([a-zA-Z0-9]\.?)+[^\.]$/;
str = "123.sadf@gmail.com";
console.log(re.test(str));


re = /^([a-zA-Z0-9]\.?)+[^\.]@([a-zA-Z0-9]\.?)+[^\.]$/;
str = "123.saf@gmail.com.bd";
console.log(re.test(str));