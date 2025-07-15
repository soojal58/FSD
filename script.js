function submit() {
    debugger;
    var fullname = document.getElementById('fullname');
    console.log(fullname.value);

    var phno = document.getElementById('phno');
    console.log(phno.value);

    var email = document.getElementById('email');
    console.log(email.value);

    // Get selected food preference
    var selectedFood = "";
    var selectedfoodRadio = document.querySelector('input[name="food"]:checked');
    if (selectedfoodRadio) {
        selectedFood = selectedfoodRadio.value;
    }

    console.log("Selected Food Preference:", selectedFood);
    document.getElementById('selectedValue')?.remove();

    var selectedtshirt = "";
    var selectedtshirtRadio = document.querySelector('input[name="tshirt"]:checked');
    if (selectedtshirtRadio) {
        selectedtshirt = selectedtshirtRadio.value;
    }

    console.log("Selected tshirt :", selectedtshirt);
    document.getElementById('selectedValue')?.remove(); 


    var selectedgender = "";
    var selectedgenderRadio = document.querySelector('input[name="gender"]:checked');
    if (selectedgenderRadio) {
        selectedgender = selectedgenderRadio.value;
    }

    console.log("Selected gender :", selectedgender);
    document.getElementById('selectedValue')?.remove(); 



  }