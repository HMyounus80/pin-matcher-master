   //  Random Pin Generator

   var randomPinGenerator = document.getElementById("randomPinGenerator");
        randomPinGenerator.addEventListener('click', function () {
       var GenerateDigitNumber = Math.floor(1000 + Math.random() * 9000);
       document.getElementById("randomPinInput").value = GenerateDigitNumber;
       
   })


   //  Conform Submit Area

   var conformSubmit = document.getElementById("conformSubmit");
   conformSubmit.addEventListener('click', function () {

       var randomPinInput = document.getElementById("randomPinInput").value;
       var calculatorInputShow = document.getElementById("calculatorInputShow").value;

       if (randomPinInput == calculatorInputShow) {
           var pinRight = document.getElementById('pin-right');
           pinRight.style.display = "block";
       } else {
           var pinWrong = document.getElementById('pin-wrong');
           pinWrong.style.display = "block";
       }
   })

   // Clear Number Function

   function clearNumber() {
       document.getElementById('calculatorInputShow').value = '';
   }

   // BackSpace Number Function

   function backSpace() {
       const decreaseValue = document.getElementById("calculatorInputShow").value;
       if (decreaseValue != '') {
           document.getElementById("calculatorInputShow").value = decreaseValue.slice(0, -1);
       }
   }

   // TryCount Area 


