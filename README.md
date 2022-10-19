<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>UAT login</title>
</head>
<body>
    <h1>Wlecome to UAT Space</h1>
    <h3>Please log in</h3>
    <br>
    <br>
    <div id="loginStatus">LoginStatus</div>
    <br>
    <br>
    <form id="creditSubmit" onclick="checkCreds();"></form>
    First Name: <input type="text" id="fName"/><br>
    Last Name: <input type="text" id="lName"/><br>
    Badge Number: <input type="number" id="badge"/><br>
    <br>
    <input type="submit" onclick= "checkCreds();">
</body>
</html>
