function validateForm(event){
    event.preventDefault();
let nae=document.getElementById('name').value;
let email=document.getElementById('email').value;
let phone =document.getElementById('mobilenumber').value;
let dob=document.getElementById('DOB').value;
const gender =document.querySelector('input[name="male-or-female"]:checked')
let occupation=document.getElementById('occupation').value;
let skills=document.getElementsByName('checking');
let comments=document.getElementById('address').value;
var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
var phonePattern = /^\d{10}$/;

let skill=[]

var ischecked=false;
if(nae== ""){
    alert('please fill your name');   
}else{
    console.log(`Name:${nae}`);
}
if(email==''){
    alert('Enter a email')
}else if (!(emailPattern.test(email))){
    alert('enter a valid email');
}else{
    console.log(`Email: ${email}`);
}
if(dob==""){
    alert("Please enter your Date of Birth")
}else{
    console.log(`DOB: ${dob}`)
}
if(gender==null){
    alert("Enter the  gender");
}else{
    console.log(`Gender : ${gender.value}`)
}

if(phone==""){
    alert("Enter the phone number");
    
}else if(!(phonePattern.test(phone))){
       alert("enter a valid phn number");
   }else{
       console.log(`Phone Number: ${phone}`);
   }
   if(comments==""){
    alert("please ent")
}else{
    console.log(`comments${comments}`)
}
if(occupation==""){
    alert('helo world');
}else{
    console.log(`Occupation: ${occupation}`)
}
for(let i=0; i<skills.length; i++){
    if(skills[i].checked){
        ischecked=true;
        skill.push(skills[i].value);
        
    }
}
function show(skil){
    for(let a=0; a<skil.length; a++){
        console.log(skil[a].value);
    }
}

if(!ischecked){
    alert("please any of these skills");
}else{
    console.log(`Skills: ${show(skills)}`);
}

}


