##简单移动端日历插件

> 基于zepto, node的日历

```
npm install --save date_picker
```

 + 引入css / datepicker.min.css
 + 引入zepto
 + 引入js / datepicker.min.js  或者require
 
## 实例化 DatePicker()

```
  var startDatePicker = new window.DatePicker({
			target: startDate,
			confirmCbk: function(data) {
				startDate.value = data.year + '年' + data.month + '月' + data.day + '日';
			}
	});
```
