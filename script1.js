function submit() {
    var fullname = document.getElementById('fullname');
    console.log(fullname.value);
    
    var phno = document.getElementById('phno');
    var errorMsg = document.getElementById('errorMsg'); 

    var phnoRegex = /^\d+$/;
    if (!phnoRegex.test(phno.value)) {
        errorMsg.textContent = "Please enter a valid phone number.";
        return;
    } 
    console.log(phno.value);

    var email = document.getElementById('email');
    var errorMsg = document.getElementById('errorMsg'); 

    var emailRegex = /^\d+$/;
    if (!emailRegex.test(email.value)) {
        errorMsg.textContent = "Please enter a valid email id.";
        return;
    } 
    console.log(email.value);

    var feedback = document.getElementById('Feedback');
    console.log(feedback.value);
}