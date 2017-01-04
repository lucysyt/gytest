	$(function() {

		var liLen = $("#div2Ul").find("li").length;
		$("#div2 ul").css('width', liLen * 135 + "px");
		scrolls.slideDefault();
	});
	var scrolls = {
		lefti: 0,
		liLength: $("#div2Ul").find("li").length,
		hiddenLen: $("#div2Ul").find("li").length - 9,
		slideDefault: function() {

			var timer = null;
			if(scrolls.lefti >= 0 && scrolls.lefti <= scrolls.hiddenLen) {
				var diect = "left";
				timer = setInterval(function() {
					if(scrolls.lefti == 0) {
						diect = "right";
					}
					if(scrolls.lefti == scrolls.hiddenLen) {
						diect = "left";
					}

					if(diect == "left") {
						scrolls.slideLeft();
					} else {
						scrolls.slideRight();
					}
					console.log(scrolls.lefti);
				}, 2000);
			}

			$("#div1").mouseover(function() {
				clearInterval(timer);
			});
			$("#div1").mouseout(function() {
				if(scrolls.lefti >= 0 && scrolls.lefti <= scrolls.hiddenLen) {
					var diect = "left";
					timer = setInterval(function() {
						if(scrolls.lefti == 0) {
							diect = "right";
						}
						if(scrolls.lefti == scrolls.hiddenLen) {
							diect = "left";
						}

						if(diect == "left") {
							scrolls.slideLeft();
						} else {
							scrolls.slideRight();
						}
						console.log(scrolls.lefti);
					}, 2000);
				}
			})

		},
		slideLeft: function() {
			this.lefti--;
			if(this.lefti < 0) {
				this.lefti = 0;
				return false;
			} else {
				$("#div2Ul").stop().animate({
					"left": -(this.lefti * 135) + "px"
				}, 800);
				console.log(this.lefti);
				return false;
			}
		},
		slideRight: function() {
			console.log(this.hiddenLen);
			this.lefti++;
			if(this.lefti > this.hiddenLen) {
				this.lefti = this.hiddenLen;
				return false
			} else {
				$("#div2Ul").stop().animate({
					"left": -(this.lefti * 135) + "px"
				}, 800);

				return false;
			}
		}
	};