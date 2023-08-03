let selectConverter = document.querySelector("#converter")
let selectConver2 = document.querySelector("#converter2")
let input = document.querySelector("#input")
let display = document.querySelector("#display")



function myResult () { 

   let conValue = selectConverter.value;
   let conValue2 = selectConver2.value;


   if (conValue ==="Meter" && conValue2 ==="Kilometer"){
      display.innerHTML =Number (input.value) * 0.001
     
   }
   else if (conValue ==="Meter" && conValue2 ==="Centimeter"){
      display.innerHTML =Number (input.value) * 100
   }
   else if (conValue ==="Meter" && conValue2 ==="Meter"){
      display.innerHTML = input.value
   }



   if (conValue ==="Kilometer" && conValue2 ==="Meter"){
      display.innerHTML =Number (input.value) * 1000
   }
   else if (conValue ==="Kilometer" && conValue2 ==="Centimeter"){
      display.innerHTML =Number (input.value) * 100000
   }
   else if (conValue ==="Kilometer" && conValue2 ==="Kilometer"){
      display.innerHTML = input.value
   }


   if (conValue ==="Centimeter" && conValue2 ==="Kilometer"){
      display.innerHTML = Number (input.value) * 0.00001
   }
   else if (conValue ==="Centimeter" && conValue2 ==="Meter"){
      display.innerHTML =Number (input.value) * 0.01
   }
   else if (conValue ==="Centimeter" && conValue2 ==="Centimeter"){
      display.innerHTML = input. value
   }
}