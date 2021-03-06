import React from 'react'

import '../../css/login.scss'

import http from '../../utils/httpClient.js'

class LoginComponent extends React.Component{

	state = {
		phone:'',
		pass:''
	}

	goMy(){
		this.props.router.go(-1)	
	}

	uchange(e){
		this.setState({phone:e.target.value})
	}
	pchange(e){
		this.setState({pass:e.target.value})
	}

	login(){
		console.log(666)
		     
		http.post('userlogin',{phone:this.state.phone,password:this.state.pass}).then((res) => {
			console.log(res)

			 if(res.data.state){
			 	window.localStorage.setItem('user',res.data.data)
			 	this.props.router.push({pathname:'my'})
			 	     
			 }
		})

	}

	toRegister(){
		this.props.router.push({pathname:'register'})
	}

	render(){
		return (<div>
					<div className="cgoryTitle">
						<i className="iconfont" onClick={this.goMy.bind(this)} >&#xe635;</i>
						<p>用户登录</p>
					</div>

					<div className="loginUser">
						<p>
							<i className="iconfont">&#xe602;</i>
							<input type="text" placeholder="手机号码" value={this.state.phone} onChange={this.uchange.bind(this)}/>
						</p>
						<p>
							<i className="iconfont">&#xe63e;</i>
							<input type="password" placeholder="密码" value={this.state.pass} onChange={this.pchange.bind(this)}/>
						</p>
						<span className="loginNow" onClick={this.login.bind(this)}>立即登录</span>
						<div className="forget"><span onClick={this.toRegister.bind(this)}>立即注册</span><span>忘记密码</span></div>
					</div>
			</div>)
	}
}

export default LoginComponent;