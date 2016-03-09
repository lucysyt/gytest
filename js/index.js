

	//日期时间
	$("#reservation").daterangepicker(null,function(start,end,label){
		console.log(start.toISOString(), end.toISOString(), label);
	})

