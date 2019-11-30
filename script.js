function idCard(){
var firstName = document.getElementById("first").value,
    lastName  = document.getElementById("last").value;
    document.getElementById("postFullName").innerHTML  = firstName + " " + lastName;
    
var address  = document.getElementById("address").value;
    document.getElementById("postAddress").innerHTML  = address;

var age          = document.getElementById("age").value,
    phoneNumber  = document.getElementById("phone").value;    

var numbers = [];
numbers.push(age);
numbers.push(phoneNumber);

   for (i = 0; i < numbers.length; i++){
   if (numbers[i] < 100){
       document.getElementById("postAge").innerHTML  = "Age: " + age;
       }
   else if (numbers[i] > 100){
       document.getElementById("postPhoneNumber").innerHTML = "Phone Number: " + phoneNumber;
       }
   }
}
