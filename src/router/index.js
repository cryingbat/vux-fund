import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/', //根
      name: 'root',
      component(resolve) {
        require.ensure(['@/common/confirm'], () => {
          resolve(require('@/common/confirm'));
        });
      }
    },
    {
      path: '/login', //登录
      name: 'login',
      component(resolve) {
        require.ensure(['@/components/login/login'], () => {
          resolve(require('@/components/login/login'));
        });
      }
    },
    {
      path: '/regist', //注册
      component(resolve) {
        require.ensure(['@/components/regist/regist'], () => {
          resolve(require('@/components/regist/regist'));
        });
      }
    },
    {
      path: '/home', //首页
      name: 'home',
      component(resolve) {
        require.ensure(['@/components/home/home'], () => {
          resolve(require('@/components/home/home'));
        });
      },
      children: [{
          path: '/home/set', //设置
          name: 'set',
          component(resolve) {
            require.ensure(['@/components/set/set'], () => {
              resolve(require('@/components/set/set'));
            });
          }
        },
        {
          path: '/home/qrcode', //设置推荐二维码
          name: 'qrcode',
          component(resolve) {
            require.ensure(['@/components/set/qrcode/qrcode'], () => {
              resolve(require('@/components/set/qrcode/qrcode'));
            })
          }
        },
        {
          path: '/home/team', //查询团队信息
          name: 'team',
          component(resolve) {
            require.ensure(['@/components/set/team/team'], () => {
              resolve(require('@/components/set/team/team'));
            })
          }
        },
        {
          path: '/home/repass', //修改密码
          name: 'repass',
          component(resolve) {
            require.ensure(['@/components/set/repass/repass'], () => {
              resolve(require('@/components/set/repass/repass'));
            })
          }
        },
        {
          path: '/home/setAccount', //开设账户
          name: 'setAccount',
          component(resolve) {
            require.ensure(['@/components/set/setAccount/setAccount'], () => {
              resolve(require('@/components/set/setAccount/setAccount'));
            })
          }
        },
        {
          path: '/home/resetInfo', //修改资料
          name: 'resetInfo',
          component(resolve) {
            require.ensure(['@/components/set/resetInfo/resetInfo'], () => {
              resolve(require('@/components/set/resetInfo/resetInfo'));
            })
          }
        },
        {
          path: '/home/avatar', //修改资料//修改头像
          name: 'avatar',
          component(resolve) {
            require.ensure(['@/components/set/resetInfo/setAvatar'], () => {
              resolve(require('@/components/set/resetInfo/setAvatar'));
            })
          },
        },
        {
          path: '/home/nickname', //修改资料//修改昵称
          name: 'nickname',
          component(resolve) {
            require.ensure(['@/components/set/resetInfo/setNickname'], () => {
              resolve(require('@/components/set/resetInfo/setNickname'));
            })
          }

        },

        {
          path: '/home/gathering', //收款账户
          name: 'gathering',
          component(resolve) {
            require.ensure(['@/components/set/gathering/gathering'], () => {
              resolve(require('@/components/set/gathering/gathering'));
            })
          }
        },
        {
            path: '/home/credit', //我的/资产
            name: 'credit',
            component(resolve) {
              require.ensure(['@/components/me/credit'], () => {
                resolve(require('@/components/me/credit'));
              });
            }
          },
        {
          path: '/home/me', //我的
          name: 'me',
          component(resolve) {
            require.ensure(['@/components/me/me'], () => {
              resolve(require('@/components/me/me'));
            });
          },
          children: [{
              path: '/home/me/a-bank', //我的/信用
              component(resolve) {
                require.ensure(['@/components/me/a-bank/index'], () => {
                  resolve(require('@/components/me/a-bank/index'));
                });
              }
            },
            {
              path: '/home/me/b-bank', //我的/资产
              name: 'b-bank',
              component(resolve) {
                require.ensure(['@/components/me/b-bank/index'], () => {
                  resolve(require('@/components/me/b-bank/index'));
                });
              }
            },
            {
              path: '/home/me/b-bank/balanceDetail', //我的/资产详情
              name: 'balanceDetail',
              component(resolve) {
                require.ensure(['@/components/me/balanceDetail'], () => {
                  resolve(require('@/components/me/balanceDetail'));
                });
              },
              children: [{
                  path: '/home/me/b-bank/balanceDetail/balanceWidthAccounts', //我的/资产详情/借贷
                  name: 'balanceWidthAccounts',
                  component(resolve) {
                    require.ensure(['@/components/me/balanceWidthAccounts'], () => {
                      resolve(require('@/components/me/balanceWidthAccounts'));
                    });
                  }
                },
                {
                  path: '/home/me/b-bank/balanceDetail/balanceWidthMoney', //我的/资产详情/收益
                  name: 'balanceWidthMoney',
                  component(resolve) {
                    require.ensure(['@/components/me/balanceWidthMoney'], () => {
                      resolve(require('@/components/me/balanceWidthMoney'));
                    });
                  }
                }
              ]
            }
          ]
        },
        {
          path: '/home/index', //首页三个按钮                        改动  /page/page  改为  /page/prepage
          name: "index",
          component(resolve) {
            require.ensure(['@/components/page/prePage'], () => {
              resolve(require('@/components/page/prePage'));
            });
          },
          children: [{
            path: '/home/index/accounts',
            name: 'indexAccount',
            component(resolve) {
              require.ensure(['@/components/page/accounts/accounts'], () => {
                resolve(require('@/components/page/accounts/accounts'));
              });
            }
          },
          {
            path: '/home/index/loanAndAccounts',
            name: 'loanAndAccounts',
            component(resolve) {
              require.ensure(['@/components/page/loan/loanAndAccounts'], () => {
                resolve(require('@/components/page/loan/loanAndAccounts'));
              });
            }
          }]
        },
        {
          path: '/home/page',
           name: "page",
           component(resolve) {
            require.ensure(['@/components/page/page'], () => {
              resolve(require('@/components/page/page'));
            });
          },
          children: [{
              path: '/home/page/accounts', //转账
              name: "accounts",
              component(resolve) {
                require.ensure(['@/components/page/accounts/accounts'], () => {
                  resolve(require('@/components/page/accounts/accounts'));
                });
              }
            },
            {
              path: '/home/page/faccounts', // 转账填写页面
              component(resolve) {
                require.ensure(['@/components/page/accounts/accountMoney/accountMoney'], () => {
                  resolve(require('@/components/page/accounts/accountMoney/accountMoney'));
                });
              }
            },
            {
              path: '/home/page/lmoney', //贷款
              name: 'loan',
              component(resolve) {
                require.ensure(['@/components/page/loan/loanMoney/loanMoney'], () => {
                  resolve(require('@/components/page/loan/loanMoney/loanMoney'));
                });
              }
            },
            {
              path: '/home/page/combineOrder', //贷款和转账总共的总单
              name: 'combineOrder',
              component(resolve) {
                require.ensure(['@/components/page/loan/combineOrder/combineOrder'], () => {
                  resolve(require('@/components/page/loan/combineOrder/combineOrder'));
                });
              }
            },
            {
              path: '/home/page/zdlmoney', //贷款总单  ----
              name: 'zdlmoney',
              component(resolve) {
                require.ensure(['@/components/page/loan/loan'], () => {
                  resolve(require('@/components/page/loan/loan'));
                });
              }
            },
            {
              path: '/home/page/dmoney', //理财
              name: 'dmoney',
              component(resolve) {
                require.ensure(['@/components/page/money/dealMoney/dealMoney'], () => {
                  resolve(require('@/components/page/money/dealMoney/dealMoney'));
                });
              }
            },
            {
              path: '/home/page/dmoneyDetail', //理财详情页
              name: 'dmoneyDetail',
              component(resolve) {
                require.ensure(['@/components/page/money/dealMoney/dealMoneyDetail'], () => {
                  resolve(require('@/components/page/money/dealMoney/dealMoneyDetail'));
                });
              }
            },
            {
              path: '/home/page/dmoney/detail', //理财产品信息
              name: 'product',
              component(resolve) {
                require.ensure(['@/components/page/money/dealMoney/productDetail'], () => {
                  resolve(require('@/components/page/money/dealMoney/productDetail'));
                });
              }
            },
            {
              path: '/home/page/zdinfo', //转账总单阅读更多
              name: 'zdinfo',
              component(resolve) {
                require.ensure(['@/common/table'], () => {
                  resolve(require('@/common/table'));
                });
              }
            },
            {
              path: '/home/page/lzdinfo', //贷款总单阅读更多
              name: 'lzdinfo',
              component(resolve) {
                require.ensure(['@/common/loanTable'], () => {
                  resolve(require('@/common/loanTable'));
                });
              }
            },
            {
              path: '/home/page/fdinfo', //转账分单阅读更多
              name: 'fdinfo',
              component(resolve) {
                require.ensure(['@/common/infoDetail'], () => {
                  resolve(require('@/common/infoDetail'));
                });
              }
            },
            {
              path: '/home/page/lfdinfo', //贷款分单阅读更多
              name: 'lfdinfo',
              component(resolve) {
                require.ensure(['@/common/loanInfoDetail'], () => {
                  resolve(require('@/common/loanInfoDetail'));
                });
              }
            }
          ]
        }
      ]
    }
  ]
})
