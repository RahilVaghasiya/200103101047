function demoAlertExternal() {
    alert('Welcome to Bhavnagar');
}

function demoConfirmExternal() {
    if(confirm('Are You Sure...!?')){
        alert('Yeppppp');
    }
    else{
        alert('Nopeeee');
    }
}

function demoPromptExternal() {
    var fName=prompt('Enter Your First Name Here....');
    var lName=prompt('Enter Your Last Name Here....');

    alert(fName+" "+lName);
}