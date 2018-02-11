//var DatePicker = require('date_picker');

    var startDate = document.getElementById('start_date');
    var date = new Date();  //实例化
    var year = date.getFullYear() ; //年
    var month = date.getMonth() + 1; //月
    var day = date.getDate(); //日
    
    var the_day = year + '年'+ month + '月' + day + '日';
    startDate.value = the_day;

		var startDatePicker = new window.DatePicker({
			target: startDate,
			confirmCbk: function(data) {
				startDate.value = data.year + '年' + data.month + '月' + data.day + '日';
			}
		});

		startDate.onfocus = function(e) {
			startDate.blur();
			startDatePicker.open();
		};

		var endDate = document.getElementById('end_date');
		var days = date.getDate() + 1;
		var the_day = year + '年'+ month + '月' + days + '日';
		endDate.value = the_day;
		var endDatePicker = new window.DatePicker({
			target: endDate,
			confirmCbk: function(data) {
				endDate.value = data.year + '年' + data.month + '月' + data.day + '日';
			}
		});

		endDate.onfocus = function(e) {
			endDate.blur();
			endDatePicker.open();
		};