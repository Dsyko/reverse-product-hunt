templates["nav"] = "PHnav";
templates["submitButton"] = "PHsubmitButton";

UI.registerHelper("PHformatDate", function(datetime) {
	return moment(datetime).calendar();
});

moment.locale('en', {
	calendar : {
		lastDay : '[Yesterday]',
		sameDay : '[Today]',
		nextDay : '[Tomorrow]',
		lastWeek : '[last] dddd',
		nextWeek : 'dddd',
		sameElse : 'dddd'
	}
});