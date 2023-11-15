$('#regForm').click(function () {
    return false
});
$('#name').keyup(function () {
    var nameValue = $(this).val();
    var regex = /^[a-zA-Z-. ]{2,30}$/;
    if(regex.test(nameValue))
    {
        $('#nameError').text('')
    }
    else
    {
        $('#nameError').text('Name Field need 2 to 20 Character')
    }
})
$('#email').keyup(function () {
    var emailValue = $(this).val();
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(regex.test(emailValue))
    {
        $('#emailError').text('');
    }
    else
    {
        $('#emailError').text('Email Field is Invalid');
    }
});
$("input[type =checkbox]").click(function () {
    if((this).is(":checked")){
        alert("ok");
    }else{
        alert('not ok');
    }
})