let character = 'A';
if (character >= 'A' && character <= 'Z'){
    console.log(character + " is an uppercase letter.");
}else{console.log(character + " is lowercase letter.");}


let age =25
let haslicense = true
if(age<18 && haslicense==true){
    console.log("i cannot drive")
}else{console.log("i can drive")}



let totalamount = 1000
let ismember = true
let discountpercentage = ismember ? 0.20 : 0.05;
let discountamount = totalamount * discountpercentage;
let finalamount =totalamount - discountamount
console.log(`original amount: ${totalamount}`);
console.log(`dicount percentage: ${discountpercentage * 100}%`);
console.log(`discount amount : ${discountamount}`);
console.log(`final amount: ${finalamount}`);


let number =15

for(let i = 1; i <= number; i++)
    if(i % 3 ===0){console.log(i);
}



let hour =14

if(hour>= 5 && hour <= 11){
    console.log("good morning")
}else if(hour >= 12 && hour <= 17){
    console.log("good afternoon")
}else if(hour>=18 && hour <= 21){
    console.log("good evening")
}else{console.log("good night")
}