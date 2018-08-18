import http from './public'
import moment from 'moment'
import md5 from 'md5'


function randomTime() {
  return  md5(moment().format("YYYYMMDDHHmmss")+Math.random()*65535%10000);
}

//验证码验证   ok

export const check_verify = (params) => {
  
  return http.fetchPost('/api.php/home/tool/check_verify', params)
}
// 登陆   ok
export const login = (params) => {
  return http.fetchPost('/api.php/home/user/login', params)
}
// 退出登陆   ok
export const logOut = (params) => {
  return http.fetchGet('/api.php/home/user/logout', params)
}
// 注册   ok
export const regist = (params) => {
  return http.fetchPost('/api.php/home/user/register', params)
}
// 获取手机验证码
export const sms = (params) => {
  return http.fetchPost('/api.php/home/tool/sms', params)
}
//验证码验证
export const check_sms = (params) => {
  return http.fetchPost('/api.php/home/tool/sms_check', params)
}
//转账

// 总单    ok
export const getAllAccounts = (params) => {
  return http.fetchPost('/api.php/home/bill/buy', params)
}

//查总单   ok
export const checkAllAccounts = (params) => {
  return http.fetchPost('/api.php/home/bill/buy_list', params)
}
//查分单    ok   ----
export const getOneAccounts = (params) => {
  return http.fetchPost('/api.php/home/bill/sub_buy', params)
}
//查分单详细信息  ok  ----------
export const getOneAccountsDetail = (params) => {
  return http.fetchPost('/api.php/home/bill/sub_buy_info', params)
}
 
//可用余额获取   ok
export const getResMoney = (params) => {
  return http.fetchGet('/api.php/home/user/available_money', params)
}
//贷款

// 贷款提交总单    ok
export const loanAllaccounts = (params) => {
  return http.fetchPost('/api.php/home/bill/sell', params)
}

// 贷款查询总单    ok   -----
export const checkLoanAllaccounts = (params) => {
  return http.fetchPost('/api.php/home/bill/sell_list', params)
}
// 贷款分单    ok   ------
export const loanOneAccounts = (params) => {
  return http.fetchPost('/api.php/home/bill/sub_sell', params)
}
//分单详细信息   ok   ------------
export const loanOneAccountsDetail = (params) => {
  return http.fetchPost('/api.php/home/bill/sub_sell_info', params)
}



//理财   ok  -----
export const financialBuy = (params) => {
  return http.fetchPost('/api.php/home/bill/financial_buy', params)
}

//我的   ok   ----
export const userInfo = (params) => {
  return http.fetchGet('/api.php/home/user/info', params)
}

//借贷收益表   ok
export const tradeItems = (params) => {
  return http.fetchPost('/api.php/home/bill/trade_items', params)
}


//理财收益表        ok  -----
export const financialItems = (params) => {
  return http.fetchPost('/api.php/home/bill/financial_items', params)
}
//理财收益表//详情        ok
export const financialObtain = (params) => {
  return http.fetchPost('/api.php/home/bill/financial_obtain', params)
}

//设置
////收款查询     ok  --------
export const account = (params) => {
  return http.fetchGet('/api.php/home/set/account', params)
}

//收款更改   ok
export const accountSave = (params) => {
  return http.fetchPost('/api.php/home/set/account_save', params)
}
//修改资料--获取    ok
export const changeNickname = (params) => {
  return http.fetchGet('/api.php/home/set/nickname', params)
}
//修改资料--修改   ok
export const nicknameSave = (params) => {
  return http.fetchPost('/api.php/home/set/nickname_save', params)
}
//修改密码   ok
export const passwdSave = (params) => {
  return http.fetchPost('/api.php/home/set/passwd_save', params)
}
//获取团队   ok  -----------
export const getGroup = (params) => {
  return http.fetchPost('/api.php/home/user/group', params)
}
//推荐二维码  ok
export const referee = (params) => {
  return http.fetchGet('/api.php/home/user/referee', params)
}
//推荐-手机号  ok
export const refereePhone= (params) => {
  return http.fetchPost('/api.php/home/user/referee_phone', params)
}

//上传凭证   ok
export const uploadImg= (params) => {
  return http.fetchPost('/api.php/home/bill/upload_server', params)
}
// 确认收款   ok
export const confirmGetMoney= (params) => {
  return http.fetchPost('/api.php/home/bill/sell_confirm', params)
}
// 拒绝收款   ok
export const refuseGetMoney= (params) => {
  return http.fetchPost('/api.php/home/bill/sell_refuse', params)
}
// 拒绝付款   ok
export const refusePayMoney= (params) => {
  return http.fetchPost('/api.php/home/bill/buy_refuse', params)
}
// 获取图片的url   ok
export const getImgUrl= (params) => {
  return http.fetchPost('/api.php/home/bill/imgurl', params)
}
//昨日收益总和  OK
export const yesterdayGet = (params) => {
  return http.fetchGet('/api.php/home/bill/financial_sum', params)
}
//借贷总单列表  -------
export const getloanAndAccounts= (params) => {
  return http.fetchPost('/api.php/home/bill/total_bill_list', params)
}
//信誉积分
export const credit = (params) => {
  return http.fetchGet('/api.php/home/credit/index', params)
}


