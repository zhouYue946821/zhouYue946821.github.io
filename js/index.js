			var $ul = $('.myLunBoUl'),
			    $ol = $('.myLunBoOl'),
			    $ulli = $ul.find('li'),
			    len = $ulli.length,
			    timer,
			    jiShiQi=0,
			    lsIndex = 0;
			    width = $ulli.width();
			    $ul.width(len * width);
			
			$('.myLunBoOl').find('li').on('click',function () {
				var $this = $(this),
				    index = $this.index(),
				    jiShiQi = index,
				    $onUlLi = $ul.find('li').eq(index);
				    if (lsIndex == index) {
				    	return;
				    }
				    lsIndex = index;
				    $this.addClass('on').siblings('.on').removeClass('on');
				    $onUlLi.css('left',width);				    				    
				    $ul.animate({"left":-width},500,function () {
					    $ul
					    .css('left',0);
	                    $onUlLi
	                    .addClass('onli')
	                    .siblings()
	                    .removeClass('onli')
	                    .end()
	                    .css('left',0);
				    });				    
			});
            function gunDg () {
            timer =	setInterval(function () {
            		jiShiQi++;
            		if (jiShiQi>len-1) {
            			jiShiQi = 0;
            		}
            	var	$onUlLi = $ul.find('li').eq(jiShiQi),
            		$onOlli = $ol.find('li').eq(jiShiQi);
            	    $onOlli.addClass('on').siblings('.on').removeClass('on');            	
				    $onUlLi.css('left',width);				    				    
				    $ul.animate({"left":-width},500,function () {
					    $ul
					    .css('left',0);
	                    $onUlLi
	                    .addClass('onli')
	                    .siblings()
	                    .removeClass('onli')
	                    .end()
	                    .css('left',0);
				    });           	
            	},2000);
            };
			gunDg();
			$('#myLunBo').hover(function () {
				clearInterval(timer);
			},function () {
				gunDg();
			})