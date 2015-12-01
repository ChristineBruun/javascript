function GoLogin()
{
if (($.password.value == "1234") && ($.username.value == "User") )
{
$.MenuPage.backgroundColor = " # 2D2D99 ";
var newPage =
Alloy.createController("TestPage").getView();
newPage.open();
}
else
{
$.MenuPage.backgroundColor = " # FF3300 ";
$.password.value = "";
$.username.value = "User";
}
}
$.MenuPage.open();
