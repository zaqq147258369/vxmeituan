// 封装请求：get，post
// 面向对象封装es6，promise封装

// 引进提示
import {errdata} from './errdata.js'

// GET请求
// new Promise => .then(正确结果) .catch(错误结果)
let listing = function(urling){
	return new Promise((resolve,reject)=>{
		uni.request({
			url:urling,
			method:'GET',
		})
		.then((res)=>{
			resolve(res)
		})
		.catch((err)=>{
			let errs = '服务器错误，请稍后再试！'
			errdata.errlist(errs)
			reject(err)
		})
	})
}

export{
	listing
}