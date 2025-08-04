function submit() {

    debugger
    var name=document.getElementById("name")
nameregex=/^[a-zA-Z]+/.test(name.value)
if(nameregex){
console.log(name.value);
document.getElementById("hiddenname").style.display="none"
}
else{
    document.getElementById("hiddenname").style.display="block"
}

    var fathername = document.getElementById("fathername");
    var fathernameregex = /^[a-zA-Z]+$/.test(fathername.value);
    if (fathernameregex) {
        console.log(fathername.value);
        document.getElementById("hiddenfathername").style.display = "none";
    } else {
        document.getElementById("hiddenfathername").style.display = "block";
    }

    var mothername = document.getElementById("mothername");
    var mothernameregex = /^[a-zA-Z]+$/.test(mothername.value);
    if (mothernameregex) {
        console.log(mothername.value);
        document.getElementById("hiddenmothername").style.display = "none";
    } else {
        document.getElementById("hiddenmothername").style.display = "block";
    }

    var age = document.getElementById("age");
    var ageregex = /^[0-9]{2,}$/.test(age.value);
    if (ageregex) {
        console.log(age.value);
        document.getElementById("hiddenage").style.display = "none";
    } else {
        document.getElementById("hiddenage").style.display = "block";
    }

    var dob = document.getElementById("dob");
    console.log(dob.value);

    var selectedgender = "";
    var selectedgenderRadio = document.querySelector('input[name="gender"]:checked');
    if (selectedgenderRadio) {
        selectedgender = selectedgenderRadio.value;
    }
    console.log("Selected gender :", selectedgender);

    var address = document.getElementById("address");
    console.log(address.value);

    var email = document.getElementById("email");
    var emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9_]+\.[a-zA-Z]{2,}$/.test(email.value);
    if (emailregex) {
        console.log(email.value);
        document.getElementById("hiddenemail").style.display = "none";
    } else {
        document.getElementById("hiddenemail").style.display = "block";
    }

    var phno = document.getElementById("phno");
    var phnoregex = /^[0-9]{10}$/.test(phno.value);
    if (phnoregex) {
        console.log(phno.value);
        document.getElementById("hiddenphno").style.display = "none";
    } else {
        document.getElementById("hiddenphno").style.display = "block";
    }

      var course = document.getElementById("course");
    console.log(course.value);

    var bloodgroup = document.getElementById("bloodgroup");
    console.log(bloodgroup.value);

}