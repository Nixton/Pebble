//Splash Window
var UI = require('ui');
var Vector2 = require('vector2');
// Show splash screen while waiting for data
var splashWindow = new UI.Window();
// Text element to inform user
var splashText = new UI.Text({
	position: new Vector2(0, 0),
	size: new Vector2(144, 168),
	text:'Nixton',
	font:'GOTHIC_28_BOLD',
	color:'black',
	textOverflow:'wrap',
	textAlign:'center',
	backgroundColor:'white'
});
// Add to splashWindow and show
splashWindow.add(splashText);
var showSplash = function()
{
	splashWindow.show();
	console.log('Splash window showed');
};
module.exports.showSplash = showSplash;