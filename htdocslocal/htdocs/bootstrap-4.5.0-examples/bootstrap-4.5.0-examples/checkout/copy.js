function SetBilling(checked) {
    if (checked) {
        document.getElementById('businessnameship').value = document.getElementById('businessname').value; 
    } else {
        document.getElementById('businessnameship').value = ''; 
    }
}
