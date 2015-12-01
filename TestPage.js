var lydnr = 240;
var player =Ti.Media.createSound({url:"/media/waves/" + lydnr + ".wav"});
function PlaySound()
	{
		player.url = "/media/waves/" + lydnr + ".wav";
		//player.stop();
		player.play();
		Ti.API.info('lydnr'+lydnr);
		
		if (lydnr === 640) {
			var newPage = Alloy.createController("EndPage").getView();
			newPage.open();
			Ti.API.info('IN  IF STATEMENT'); 
		}
		else
		{
			lydnr = lydnr + 40; 
			
		}
	}
for(var i=0;i<5;i++){
    var button = Titanium.UI.createButton({
        id:"button_"+i,
        _index: i
    });

   button.addEventListener('click',function(e) {
      alert("You clicked the button " +e.source.id); 
      alert("button index is "+ e.source._index);
   });
}

for(var i=0;i<100;i++){
    var button = Titanium.UI.createButton({
        id:"button_right"+i,
        _index: i
    });

   button.addEventListener('click',function(e) {
      alert("You clicked the button " +e.source.id); 
      alert("button index is "+ e.source._index);
   });
}
$.TestPage.open();
