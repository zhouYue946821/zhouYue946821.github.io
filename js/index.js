!function () {
	var jiShiQi=0;
	
	function lunbo () {
		var $ul = $('.lunBo-ul'),
		    $ulli = $ul.find('li'),
		    len = $ulli.length,
		    $ol = $('.lunBo-ol'),
		    $olli = $ol.find('li'),
		    width= $ulli.width();
		    
		    $ul.width(len*width);
		setInterval(function() {
			jiShiQi ++;
			if (jiShiQi >len-1) {
				jiShiQi=0;
			};
			$lis = $olli.eq(jiShiQi);
			$lis.addClass('on').siblings('.on').removeClass('on');
			$ul.animate({'marginLeft':-width},500,function () {
				$ul
				.append($ul.find('li:first'))
				.css('margin-left',0)
			})
		},2000)
	};	
	lunbo();
	
	function tab () {
		var $ul = $('.div-ul');
		setInterval(function () {
			$ul
			.animate({'marginTop':'-50px'},1000,function () {
				$ul
				.append($ul.find('li:first'))
				.css('margin-top',0)
			})
		});
		
		
	};
	
	tab();
	
}();
