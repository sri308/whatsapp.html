<script type="text/javascript">
alert("AGREE TO CONTINUE")
</script>
function vfun() {
    var country = document.forms["myform"]["country"].value;
    var phonenumber = document.forms["myform"]["phonenumber"].value;

    if (!country) {
        document.getElementById("ErrorBox").innerHTML = "Enter the country";
        return false;
    }
    if (!phonenumber) {
        document.getElementById("ErrorBox").innerHTML = "Enter the phonenumber";
        return false;
    }
    
}

<script type="text/javascript">
alert("OTP Sent")
</script>
function vfun1() {
   
    var otp = document.forms["myform"]["OTP"].value;

  
    if (!OTP) {
        document.getElementById("ErrorBox").innerHTML = "Enter the OTP";
        return false;
    }
}