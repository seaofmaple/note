AJAX请求超时与网络异常

xhr.timeout  = 2000;//2s后取消请求

网络超时

xhr.ontimeout = function(){

//提醒信息

}

网络异常

xhr.onerror= function(){

//提醒信息

}