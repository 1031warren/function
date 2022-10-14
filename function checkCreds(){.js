function checkCreds(){
    //collect the data
    var fst= document.getElementById("fName").value;
    var lst= document.getElementById("lName").value;
    var badgeNumb = document.getElementById("badgeID").value;
    //work with the data
    var fulName = fstName + " " + lsName;
    console.log("the full name is")
    console.log("the badge number is" + badgeNumb);
    var fullLength = fullName.length;
    console.log("The name length is" + fullLength);

     //check the inputs 
    if(fullLength > 20 || fullLength < 2){
        document.getElementById("loginStatus").innerHTML = "Invalid name entry, please try again";
    } else if(badgeNumb > 999 || badgeNumb < 1){
        document.getElementById("loginStatus").innerHTML = "Invalid Badge Number, please try again";
    }else {
        alert("Access Granted, welcome" + fullName);
        location.replace("./UATSpace.html");
    }
}