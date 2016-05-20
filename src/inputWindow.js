//Window for text input
var UI = require('ui');
var Vector2 = require('vector2');
var phase = 0;
var feature = require('platform/feature');
var inputWindow = new UI.Window();
var helpText = new UI.Text({
	position: new Vector2(0, 0),
	size: new Vector2(144, 25),
	text:'Input text below',
	font:'GOTHIC_18',
	color:'black',
	textOverflow:'wrap',
	textAlign:'left',
	backgroundColor:'white'
});
var inputText = new UI.Text({
	position: new Vector2(0, 25),
	size: new Vector2(144, 143),
	text:'',
	font:'GOTHIC_18',
	color:'black',
	textOverflow:'wrap',
	textAlign:'left',
	backgroundColor:'white'
});
var upText = new UI.Text({
	position: new Vector2(144 - feature.actionBarWidth(), 0),
	size: new Vector2(feature.actionBarWidth(), 56),
	backgroundColor:'black',
	text:'abcdefgh_',
	font:'GOTHIC_14',
	color:'white',
	textOverflow:'wrap',
	textAlign:'left'
});
var selectText = new UI.Text({
	position: new Vector2(144 - feature.actionBarWidth(), 56),
	size: new Vector2(feature.actionBarWidth(), 56),
	backgroundColor:'black',
	text:'ijklmnopq',
	font:'GOTHIC_14',
	color:'white',
	textOverflow:'wrap',
	textAlign:'left'
});
var downText = new UI.Text({
	position: new Vector2(144 - feature.actionBarWidth(), 112),
	size: new Vector2(feature.actionBarWidth(), 56),
	backgroundColor:'black',
	text:'rstuvwxyz',
	font:'GOTHIC_14',
	color:'white',
	textOverflow:'wrap',
	textAlign:'left'
});
inputWindow.add(helpText);
inputWindow.add(inputText);
inputWindow.add(upText);
inputWindow.add(selectText);
inputWindow.add(downText);
var reloadBar = function(){
	phase = 0;
	upText.text('abcdefgh_');
	selectText.text('ijklmnopq');
	downText.text('rstuvwxyz');
};
var barClick = function(text){
	console.log(text + ' clicked');
	switch (phase) {
		case 0:
			upText.text(text[0] + text[1] + text [2]);
			selectText.text(text[3] + text[4] + text [5]);
			downText.text(text[6] + text[7] + text [8]);
			phase++;
			break;
		case 1:
			upText.text(text[0]);
			selectText.text(text[1]);
			downText.text(text[2]);
			phase++;
			break;
		case 2:
			if(text == '_')
				text = ' ';
			inputText.text(inputText.text() + text);
			reloadBar();
			break;
	}
};
inputWindow.on('click', 'up', function() {
	barClick(upText.text());
  console.log('Up clicked!');
});
inputWindow.on('click', 'down', function() {
	barClick(downText.text());
  console.log('Down clicked!');
});
inputWindow.on('click', 'select', function() {
	barClick(selectText.text());
  console.log('Select clicked!');
});
var showInput = function()
{
	inputWindow.show();
	console.log('Input window showed');
};
module.exports.showInput = showInput;