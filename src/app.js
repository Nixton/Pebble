//bd5b1e79751f62f7a8402a928ffb3444 weather api id
var ajax = require('ajax');
var UI = require('ui');
var Vector2 = require('vector2');
var splash = require('splashWindow');
var input = require('inputWindow');
//var conversations = require('conversationsWindow');
//var conversation = require('conversationWindow');
//show splash window
splash.showSplash();
//splash.splashWindow.hide();

//show conversations window


//show input window
input.showInput();
//input.inputWindow.hide();

/*//Parse weather data to menu items
	var parseFeed = function(data, quantity) {
	var items = [];
	for(var i = 0; i < quantity; i++) {
		// Always upper case the description string
		var title = data.list[i].weather[0].main;
		title = title.charAt(0).toUpperCase() + title.substring(1);

		// Get date/time substring
		var time = data.list[i].dt_txt;
		time = time.substring(time.indexOf('-') + 1, time.indexOf(':') + 3);

		// Add to menu items array
		items.push({
			title:title,
			subtitle:time
		});
	}

	// Finally return whole array
	return items;
};
// Make request to openweathermap.org
ajax(
  {
    url:'http://api.openweathermap.org/data/2.5/forecast?q=Moscow' + '&appid=' + 'bd5b1e79751f62f7a8402a928ffb3444',
    type:'json'
  },
  function(data) {
		// Create an array of Menu items
		var menuItems = parseFeed(data, 10);

		// Check the items are extracted OK
		for(var i = 0; i < menuItems.length; i++) {
			console.log(menuItems[i].title + ' | ' + menuItems[i].subtitle);
		}
		// Construct Menu to show to user
			var resultsMenu = new UI.Menu({
				sections: [{
					title: 'Current Forecast',
					items: menuItems
				}]
			});
			// Add an action for SELECT
			resultsMenu.on('select', function(e) {
				// Get that forecast
				var forecast = data.list[e.itemIndex];

				// Assemble body string
				var content = data.list[e.itemIndex].weather[0].description;

				// Capitalize first letter
				content = content.charAt(0).toUpperCase() + content.substring(1);

				// Add temperature, pressure etc
				content += '\nTemperature: ' + Math.round(forecast.main.temp - 273.15) + '°C' +
				  '\nPressure: ' + Math.round(forecast.main.pressure) + ' mbar' +
					'\nWind: ' + Math.round(forecast.wind.speed) + ' mph, ' + 
					Math.round(forecast.wind.deg) + '°';
				// Create the Card for detailed view
				var detailCard = new UI.Card({
					title:'Details',
					subtitle:e.item.subtitle,
					body: content
				});
				detailCard.show();
			});

			// Show the Menu, hide the splash
			resultsMenu.show();
			splashWindow.hide();
  },
  function(error) {
    console.log('Download failed: ' + error);
  }
);*/


