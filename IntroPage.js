function MainMenuOpen(e) {
var newPage = Alloy.createController("MenuPage").getView();
newPage.open();
}
// Play a device vibration.
$.IntroPage.open();
$.videoPlayer2.url = "/videos/intro.3gp" ;
$.videoPlayer2.play();
