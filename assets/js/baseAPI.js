// 每次调用$.get()或$.post()或$.ajax()的时候
// 会先调用ajaxPrefilter 这个函数
// 在这函数中 可以拿到我们给Ajax提供的配置对象
$.ajaxPrefilter(function(options) {
	console.log(options.url);
	// 再发起真正的Ajax请求之前 同一拼接请求的根路径
	options.url = 'http://api-breakingnews-web.itheima.net' + options.url;
});