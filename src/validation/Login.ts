import type { FormRules } from 'element-plus'

export const AccountRules:FormRules = {
  username: [
    {
      required: true,
      message: '请输入用户名',
      trigger: "blur"
    },
    {
      min: 6,
      max: 16,
      message: '长度在 6 到 16 个字符',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '请输入密码',
      trigger: 'blur'
    },
    {
      min: 6, max: 20,
      message: '长度在 6 到 20 个字符',
      trigger: 'blur'
    }
  ]
}


export const phoneRules:FormRules = {
  phone: [
    {
      required: true,
      message: '请输入电话号码',
      trigger: 'blur'
    },
    {
      min: 11,
      max: 11,
      message: '请输入11位电话号码',
      trigger: 'blur'
    }
  ],
  code: [
    {
      required: true,
      message: '请输入验证码',
      trigger: 'blur'
    },
    {
      min: 6,
      max: 6,
      message: '请输入6位验证码',
      trigger: 'blur'
    }
  ]
}
