import Toast from './components/toast/toast'
import Alert from './components/alert/alert'
import Loading from './components/loading/loading'
import Load from './components/load/load'
var visiableBase = 'http://sports.qq.com/fansact/worldcup2018.htm';
var dataShare = {
		title: '寻找2018世界杯预测帝 你会是下一个章鱼保罗吗？',
		desc:'寻找2018世界杯预测帝 你会是下一个章鱼保罗吗？',
		image: 'http://img1.gtimg.com/sports/pics/hv1/70/242/2279/148253755.jpg',
		url: visiableBase
	}
var offOn = true;
function getAction(server, params, fun1, fun2) {
	if(offOn){
		var api = 'http://matchweb.sports.qq.com/';//http://matchweb.sports.qq.com
	}else{
		var api = '/api/';
	}
	$.ajax({
		type: "get",
		url:api+server,
		dataType: 'json',
		data: params,
		xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
		success: function(result) {
			if($.isFunction(fun1)) {
				fun1(result);
			}
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			if($.isFunction(fun2)) {
				fun2(XMLHttpRequest);
			}
		}
	});
}

	function postAction(server, params, fun1, fun2) {
		if(offOn){
		var api = 'http://matchweb.sports.qq.com/';//http://matchweb.sports.qq.com
		}else{
			var api = '/api/';
		}
		var _params = '';
		for (var i in params) {
			_params += i + "=" + params[i] + "&";
		}
		var options = {
			url: api+server,
			type: 'post',
			dataType: 'json',
			data: _params,
			xhrFields: {
	            withCredentials: true
	        },
        	crossDomain: true,
			success: function(result) {
				if ($.isFunction(fun1)) {
					fun1(result);
				}
			},
			error: function(XMLHttpRequest, textStatus, errorThrown) {
				if ($.isFunction(fun2)) {
					fun2(XMLHttpRequest);
				}
			}

		};
		$.ajax(options);
	}
var isclick = false;
/*防止多次点击*/
function isClick(callBack) {
			if (isclick == false) {
				isclick = true;
				setTimeout(function() {
					isclick = false;
				}, 500);
				callBack&&callBack();
			}
		}
/*判断是否为微信浏览器*/
function isweixin() {
   const ua = window.navigator.userAgent.toLowerCase();
   if(ua.match(/MicroMessenger/i) == 'micromessenger'){
     return true;
   } else {
     return false;
   }
 }
/*设置储存的值*/
function setsessionStorage(keys, value) {
	if(sessionStorage) {
		var jsom = sessionStorage['jsom'];
		var mp = {};
		if(jsom && jsom != '') {
			mp = JSON.parse(jsom);
		}
		mp[keys] = value;
		jsom = JSON.stringify(mp);
		sessionStorage['jsom'] = jsom;
	}
	return '';
}

/*删除储存的值*/
function removesessionStorage(keys) {
	if(sessionStorage) {
		var jsom = sessionStorage['jsom'];
		if(jsom && jsom != '') {
			var mp = JSON.parse(jsom);
			var _mp = {};
			if(keys === undefined) {
				for(var i in mp) {
					if(i === '_key' || i === 'uname') {
						_mp[i] = mp[i];
					}
				}
			} else {
				for(var i in mp) {
					if(i !== keys) {
						_mp[i] = mp[i];
					}
				}
			}

			_mp = JSON.stringify(_mp);
			sessionStorage['jsom'] = _mp;
		}
		return '';
	}
}
/*
	 *获取url参数信息
	 *name:参数名称
	 */
	function getQueryString(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
		var r = window.location.search.substr(1).match(reg);
		if (r != null) {
			return unescape(r[2]);
		}
		return null;
	}
/*获取储存的值*/
function getsessionStorage(keys) {
	if(sessionStorage && sessionStorage['jsom'] != undefined) {
		var jsom = sessionStorage['jsom'];
		if(jsom && jsom != '') {
			var mp = JSON.parse(jsom);
			if(mp[keys] && mp[keys] != '') {
				return mp[keys];
			} else {
				return "";
			}
		}
	} else {
		return "";
	}
}
//倒计时
function countDownNum(obj) {
	if(obj.codeNum < 61 && obj.codeNum >= 1) {
		obj.codeNum -= 1;
		if(obj.codeNum < 10) {
			obj.codeMsg = '重新获取(0' + obj.codeNum + ')';
		} else {
			obj.codeMsg = '重新获取(' + obj.codeNum + ')';
		}
		if(obj.codeNum == 0) {
			obj.codeActive = false;
			obj.codeMsg = '重新获取';
			clearInterval(obj.timer);
			obj.timer = 0;
			obj.codeNum = 60;
		}
	}
}
function getTime(time, sp, istrue) {
		var b;
		if (time.length == 10) {
			time = time + "000";
		}
		var a = parseInt(time);
		if (time == '') {
			b = new Date();
		} else {
			b = new Date(a);
		}
		var year = b.getFullYear();
		var mouth = b.getMonth() + 1;
		var day = b.getDate();
		var h = b.getHours();
		var m = b.getMinutes();
		var s = b.getSeconds();
		var c = year + sp + two(mouth) + sp + two(day);
		if (istrue) {
			c = c + " " + two(h) + ":" + two(m) + ":" + two(s);
			return c;
		} else {
			return c;
		}
	}
	
	function two(n){
		return n<10?'0'+n:''+n;
	}
/*公共弹框*/
var $toast;
function toast(msg,pos,time) {
	$toast =Toast({
			message:msg,
			position: pos? pos:'middle',
			duration: time ? time : 2000
		})
	return $toast;
}
function hidetoast(){
	return $toast.close();
}
var $loading;
function loading(msg,pos,time) {
	$loading = Loading({
		message:msg,
		position: pos? pos:'middle',
		duration:time ? time : 1500
	})
	return $loading;
}
function hideloading(){
	return $loading.close();
}
var $load;
function load(msg,time) {
	$load = Load({
		message:msg,
		position: 'middle',
		duration:time ? time : 1500
	})
	return $load;
}
function hideload(){
	return $load.close();
}
function alert(title,msg) {
	Alert.show({
		title:title,
		message:msg,
		type:'inform'
	});
}
function confirm(title,msg,params,fun1,fun2) {
	Alert.confirm({
		title:title,
		message:msg,
		type:'confirm',
		context:params,
		sureBtn:fun1,
		cancelBtn:fun2
	});
}


function Encrypt(str, pwd) {    
    if(str=="")return "";    
    str = escape(str);    
    if(!pwd || pwd==""){ var pwd="1234"; }    
    pwd = escape(pwd);    
      if(pwd == null || pwd.length <= 0) {    
        alert("Please enter a password with which to encrypt the message.");    
          return null;    
      }    
      var prand = "";    
      for(var I=0; I<pwd.length; I++) {    
        prand += pwd.charCodeAt(I).toString();
      }    
      var sPos = Math.floor(prand.length / 5);    
      var mult = parseInt(prand.charAt(sPos) + prand.charAt(sPos*2) + prand.charAt(sPos*3) + prand.charAt(sPos*4) + prand.charAt(sPos*5));    
      var incr = Math.ceil(pwd.length / 2);    
      var modu = Math.pow(2, 31) - 1;    
      if(mult < 2) {    
        alert("Algorithm cannot find a suitable hash. Please choose a different password. /nPossible considerations are to choose a more complex or longer password.");    
        return null;    
      }    
      var salt = Math.round(Math.random() * 1000000000) % 100000000;    
      prand += salt;    
      while(prand.length > 10) {    
        prand = (parseInt(prand.substring(0, 10)) + parseInt(prand.substring(10, prand.length))).toString();    
      }    
      prand = (mult * prand + incr) % modu;    
    var enc_chr = "";    
    var enc_str = "";    
    for(var I=0; I<str.length; I++) {    
        enc_chr = parseInt(str.charCodeAt(I) ^ Math.floor((prand / modu) * 255));    
        if(enc_chr < 16) {    
            enc_str += "0" + enc_chr.toString(16);    
        }else    
            enc_str += enc_chr.toString(16);    
        prand = (mult * prand + incr) % modu;    
    }    
      salt = salt.toString(16);    
      while(salt.length < 8)salt = "0" + salt;    
    enc_str += salt;    
    return enc_str;    
}    
function Decrypt(str, pwd) {    
    if(str=="")return "";    
    if(!pwd || pwd==""){ var pwd="1234"; }    
    pwd = escape(pwd);    
      if(str == null || str.length < 8) {    
        alert("A salt value could not be extracted from the encrypted message because it's length is too short. The message cannot be decrypted.");    
        return;    
      }    
      if(pwd == null || pwd.length <= 0) {    
        alert("Please enter a password with which to decrypt the message.");    
        return;    
      }    
      var prand = "";    
      for(var I=0; I<pwd.length; I++) {    
        prand += pwd.charCodeAt(I).toString();    
      }    
      var sPos = Math.floor(prand.length / 5);    
      var mult = parseInt(prand.charAt(sPos) + prand.charAt(sPos*2) + prand.charAt(sPos*3) + prand.charAt(sPos*4) + prand.charAt(sPos*5));    
      var incr = Math.round(pwd.length / 2);    
      var modu = Math.pow(2, 31) - 1;    
      var salt = parseInt(str.substring(str.length - 8, str.length), 16);    
      str = str.substring(0, str.length - 8);    
      prand += salt;    
      while(prand.length > 10) {    
        prand = (parseInt(prand.substring(0, 10)) + parseInt(prand.substring(10, prand.length))).toString();    
      }    
      prand = (mult * prand + incr) % modu;    
      var enc_chr = "";    
      var enc_str = "";    
    for(var I=0; I<str.length; I+=2) {    
        enc_chr = parseInt(parseInt(str.substring(I, I+2), 16) ^ Math.floor((prand / modu) * 255));    
        enc_str += String.fromCharCode(enc_chr);    
        prand = (mult * prand + incr) % modu;    
    }    
    return unescape(enc_str);    
}   
function isLandscape(callback){
	var supportOrientation = (typeof window.orientation === 'number' &&typeof window.onorientationchange === 'object');
	var init = function() {
		var orientation;
		var updateOrientation = function() {
			if(supportOrientation) {
				orientation = window.orientation;
				switch(orientation) {
					case 90:
					case -90:
						orientation = true;
						
						break;
					default:
						orientation = false;
						break;
				}
			} else {
				orientation = (window.innerWidth > window.innerHeight) ? true : false;
			}
			callback&&callback(orientation);
		};
		if(supportOrientation) {
			console.log(11)
			window.addEventListener('orientationchange', updateOrientation, false);
		} else {
			//监听resize事件
			console.log(22)
			window.addEventListener('resize', updateOrientation, false);
		}
		console.log(33)
		updateOrientation();
	};
	window.addEventListener('DOMContentLoaded',init,false);
}
export default {
	toast: toast,
	alert:alert,
	confirm:confirm,
	loading:loading,
	load:load,
	visiableBase:visiableBase,
	dataShare:dataShare,
	Encrypt:Encrypt,
	Decrypt:Decrypt,
	hideloading:hideloading,
	hideload:hideload,
	hidetoast:hidetoast,
	getTime:getTime,
	isweixin:isweixin,
	isClick:isClick,
	isLandscape:isLandscape,
	getAction: getAction,
	postAction:postAction,
	getQueryString:getQueryString,
	countDownNum: countDownNum,
	setsessionStorage: setsessionStorage,
	getsessionStorage: getsessionStorage

}