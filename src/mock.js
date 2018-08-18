const Mock = require('mockjs');
// Mock.mock('', {

// })
Mock.mock('/api.php/home/bill/total_bill_list', {
    'succ': 1,
    'data': [{
        'bill_id': '1234569',
        'status': '1',
        date: new Date(),
        money: 200,
        type: 1
    }, {
        'bill_id': '1234568',
        'status': '2',
        date: new Date(),
        money: 3030,
        type: 2
    }, {
        'bill_id': '1234567',
        'status': '3',
        date: new Date(),
        money: 212,
        type: 1
    }, {
        'bill_id': '1234560',
        'status': '100',
        date: new Date(),
        money: 55,
        type: 2
    }, {
        'bill_id': '1235211',
        'status': '0',
        date: new Date(),
        money: 554,
        type: 1
    }]
});

Mock.mock('/api.php/home/bill/sub_buy', {
    succ: 1,
    data: [{
        status: '1',
        from: '张三',
        to: '李四',
        type: 1,
        money: 200,
        sub_bill_id: '12345698',
        time: new Date()
    }, {
        status: '2',
        from: '张三',
        to: '李四',
        type: 1,
        money: 200,
        sub_bill_id: '12345698',
        time: new Date()
    }, {
        status: '100',
        from: '张三',
        to: '李四',
        type: 1,
        money: 200,
        sub_bill_id: '12345698',
        time: new Date()
    }, {
        status: '4',
        from: '张三',
        to: '李四',
        type: 1,
        money: 200,
        sub_bill_id: '12345698',
        time: new Date()
    }, {
        status: '0',
        from: '张三',
        to: '李四',
        type: 1,
        money: 200,
        sub_bill_id: '12345698',
        time: new Date()
    }]
})
Mock.mock('/api.php/home/bill/sub_sell', {
    succ: 1,
    data: [{
        status: '1',
        from: '张三',
        to: '李四',
        type: 1,
        money: 200,
        sub_bill_id: '12345698',
        time: new Date()
    }, {
        status: '2',
        from: '张三',
        to: '李四',
        type: 1,
        money: 200,
        sub_bill_id: '12345698',
        time: new Date()
    }, {
        status: '100',
        from: '张三',
        to: '李四',
        type: 1,
        money: 200,
        sub_bill_id: '12345698',
        time: new Date()
    }, {
        status: '4',
        from: '张三',
        to: '李四',
        type: 1,
        money: 200,
        sub_bill_id: '12345698',
        time: new Date()
    }, {
        status: '0',
        from: '张三',
        to: '李四',
        type: 1,
        money: 200,
        sub_bill_id: '12345698',
        time: new Date()
    }]
})
Mock.mock('/api.php/home/bill/sub_buy_info', {
    succ: 1,
    data: {
        status: '1',
        user_buy: 'cryingbat',
        phone_buy: 15129935565,
        referee_buy: 15109245454,
        user_sell: 'cryingcat',
        phone_sell: 15129935565,
        referee_sell: 15129935565,
        truename: '增长三',
        account_val: '621************4875',
        account_belong: '最大的银行'
    }
})
Mock.mock('/api.php/home/bill/sub_sell_info', {
    succ: 1,
    data: {
        status: '2',
        user_buy: 'cryingbat',
        phone_buy: 15129935565,
        referee_buy: 15109245454,
        user_sell: 'cryingcat',
        phone_sell: 15129935565,
        referee_sell: 15129935565,
        truename: '增长三',
        account_val: '621************4875',
        account_belong: '最大的银行'
    }
})
Mock.mock('/api.php/home/bill/sell_list', {
    succ: 1,
    data: [{
        status: '1',
        bill_id: '12312313',
        date: new Date(),
        type: 1,
        money: 500,

    }, {
        status: '2',
        bill_id: '12312313',
        date: new Date(),
        type: 1,
        money: 500,
    }, {
        status: '3',
        bill_id: '12312313',
        date: new Date(),
        type: 1,
        money: 500,
    }, {
        status: '100',
        bill_id: '12312313',
        date: new Date(),
        type: 1,
        money: 500,
    }, {
        status: '0',
        bill_id: '12312313',
        date: new Date(),
        type: 1,
        money: 500,
    }]
})

Mock.mock('/api.php/home/user/info', {
    succ: 1,
    data: {
        header_url: '',
        nickname: 'cryingbat',
        bank_val: 700,
        available_money: 500000,
        financial_money: 1000000,
    }
})
Mock.mock('/api.php/home/credit/index', {
    succ: 1,
    data: {
        header_url: '',
        credit_money: 110500,
        credit_val: 200,
        evual_time: '2018-8-15',
        credit_msg: '您很守信',
        nickname: 'cryingbat',

    }
})
Mock.mock('/api.php/home/bill/financial_buy', {
    succ: 1,
})
Mock.mock('/api.php/home/bill/financial_items', {
    succ: 1,
    'data|4': [{
        bill_id: Mock.Random.string(7, 10),
        money: Mock.Random.float(60, 100, 3),
        time: new Date(),
        obtain: 0.5,
    }]
})
Mock.mock('/api.php/home/bill/trade_items', {
    succ: 1,
    'data|4': [{
        type: '余利宝',
        obtain: 20,
        money: 200,
        time: new Date(),
        bill_id: "1564465"
    }]
})
Mock.mock('/api.php/home/bill/financial_obtain', {
    succ: 1,
    'data|4': [{
        obtain: 20,
        money: 200,
        time: new Date(),
        buytime: new Date(),
        bill_id: "1564465"
    }]
})
Mock.mock('/api.php/home/set/account', {
    succ: 1,
    data: {
        account_name:'cryingbat',
        account_val: '610124************1213',
        account_belong: '雇资银行'
    }
})

Mock.mock('/api.php/home/user/group', {
    succ: 1,
    'data|1-3': [{
        header_url:'./static/u414.png',
        phone: '15129935565',
        nickname: 'cryingbat',
    }]
})
