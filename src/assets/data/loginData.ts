interface login_message_data {
  title: string;
  tabs: {
    login: string;
    register: string;
  };
  control_account: {
    remember_password: string;
    forget_password: string;
  };
  btn_login: string;
}

export const login_message_data: login_message_data = {
  title: '个人博客文章管理站点',
  tabs: {
    login: '账号登录',
    register: '手机登录'
  },
  control_account: {
    remember_password: '记住密码',
    forget_password: '忘记密码'
  },
  btn_login: '登录',
}
