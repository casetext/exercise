var request = require('request'),
	config = require(__dirname + '/config.json');

request({
	url: 'http://api.giphy.com/v1/gifs/translate?s=exercise&rating=pg-13&api_key=dc6zaTOxFJmzC',
	json: true
}, function(err, res, gif) {

	request({
		method: 'POST',
		url: config.url,
		json: {
			icon_emoji: ':pushup:',
			channel: config.channel,
			username: 'richard_simbot',
			text: '<!channel> Do your exercise!',
			attachments: [{
				fallback: 'gif',
				title: 'gif',
				image_url: (gif && gif.data && gif.data.images && gif.data.images.original && gif.data.images.original.url)
			}]
		}
	});

	
});