angular.module('clock.no320.services',[])

.constant('DEFAULT_SETTINGS', {
  'tempUnits': 'f'
})

.factory('HelloService', function($rootScope, DEFAULT_SETTINGS) {
    var obj = {			
	    sayHello: function() {
	      console.log('hello service')
	    }
  }

  return obj;
})


.factory('DateUtils', function($rootScope, DEFAULT_SETTINGS) {
	
	/**
	 * _count_time('19860317')
	 */
	function _count_time(birthday){
		var year = birthday.substring(0,4)
		var month = birthday.substring(4,6)
		var day = birthday.substring(6,8)
	
		var old = new Date();
		old.setFullYear(year);
		old.setMonth(month);
		old.setDate(day);
	
		var all_days = 80*365;
	
		var d = new Date();
	
		var y = d.getFullYear();
		var m = d.getMonth();
		var dd = d.getDate();
	
		var ke_yong = (80 - (y - parseInt(year) ) )*365 + (12-m)*30 + (31-dd)
	
		var leaving_day = all_days - ke_yong -1;
	
		// 你还可以活XX年，你的生命还剩XX天，XX小时，XX分，XX秒
	 
		var yy = (80 - (y - parseInt(year) ) ) - 1
	
		var h = 24 - d.getHours() - 2;
	
		var mm =  (60 - d.getMinutes() )
		var ss =  (60 - d.getSeconds() )

		var text = ('<center><font color=white>你还可以活<font color=lightgreen size=34>'+ yy +'</font>年</font></center>');
		var t2 = ('<center><font color=white>你的生命还剩<font color=red>' + leaving_day+ '</font>天，<font color=red>'+h+'</font>小时，<font color=red>'+mm+'</font>分，<font color=lightgreen>'+ss+'</font>秒 </font></center>');
		_write_to_html(text,t2);
		
		setTimeout(function(){
			_count_time(birthday)
		},1000);
	
	}
	
	function _write_to_html(text,text2){
		var leaving_time_show_first = document.getElementById('leaving_time_show_first');
		angular.element(leaving_time_show_first).html(text);
		
		var leaving_time_show_second = document.getElementById('leaving_time_show_second');
		angular.element(leaving_time_show_second).html(text2);
	}
		
  return {
		count_time:function(birthday){
			_count_time(birthday)
		}
	
  };
})

.factory('ImageWithTime', function($rootScope, DEFAULT_SETTINGS) {
	
	/**
	 * _count_time('19860317')
	 */
	function _count_time(birthday,$state){
		var year = birthday.substring(0,4)
		var month = birthday.substring(4,6)
		var day = birthday.substring(6,8)
	
		var old = new Date();
		old.setFullYear(year);
		old.setMonth(month);
		old.setDate(day);
	
		var all_days = 80*365;
	
		var d = new Date();
	
		var y = d.getFullYear();
		var m = d.getMonth();
		var dd = d.getDate();
	
		var ke_yong = (80 - (y - parseInt(year) ) )*365 + (12-m)*30 + (31-dd)
	
		var leaving_day = all_days - ke_yong -1;
	
		// 你还可以活XX年，你的生命还剩XX天，XX小时，XX分，XX秒
	 
		var yy = (80 - (y - parseInt(year) ) ) - 1
	
		var h = 24 - d.getHours() - 1;
	
		var mm =  (60 - d.getMinutes() )
		var ss =  (60 - d.getSeconds() )



		_write_to_html(h, mm , ss, $state);
		
		setTimeout(function(){
			_count_time(birthday)
		},1000);
	
	}
	
	function _write_to_html(h,mm,ss,$scope){
		var leaving_time_show_first = document.getElementById('image_show_container');
	
		
		console.log('show_last_word = '+ window.show_last_word );
		if(ss % 15 == 0 && window.show_last_word == false){
			console.log('remove kkk' + $scope);
			// localStorage.setItem('kkk','ddd');
		
				window.currentState.go('app.second');
		}else{
			 window.show_last_word = false;
			// localStorage.removeItem('kkk');
		}
		
		var hh;
		
		if(ss%3==0){
			hh = 8;
		}
		
		if(ss%3==1){
			hh = 15;
		}
		
		if(ss%3==2){
			hh = 20;
		}
		 
		var t = 'night.png';
		if(6< hh && hh <12){
			t= 'morning.png'
		}
		
		if(12< hh && hh <18){
			t= 'moon.png'
		}
		
		
		if(18< hh && hh <24){
			t= 'night.png'
		}
		
		
		angular.element(leaving_time_show_first).css({ 
			'background-image': 'url(img/'+t+')',
	  	'background-repeat':'no-repeat',
	  	'background-size':'212px 295px'
		});

	 
	}
		
  return {
		count_time:function(birthday,$state){
			_count_time(birthday,$state)
		}
	
  };
})


.factory('StateManager', function($rootScope, DEFAULT_SETTINGS) {
	
	/**
	 * _count_time('19860317')
	 */
	function _change($scope, e, d){
		if(d.url == "/app/index"){
			window.show_last_word = true;
	
			// window.currentState.go('app.second');
			var back_btn = document.getElementsByTagName('ion-nav-bar')[0];	
		
			var right_btn = angular.element(back_btn).find('div')[1];
			angular.element(right_btn).html('');
			
		}else if(d.url == "/app/home"){
			window.show_last_word = true;
			
			var back_btn = document.getElementsByTagName('ion-nav-bar')[0];	
			var right_btn = angular.element(back_btn).find('div')[1];
			angular.element(right_btn).html('');
			
		}else{
			// 
			
			window.show_last_word = false;
		}
	
	}
	
  return {
		change:function($scope, e, d){
			_change($scope, e, d);
		}
	
  };
})
