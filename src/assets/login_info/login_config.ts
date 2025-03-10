interface loginConfigCode {
    username: string;
    password: string;
}

interface LoginConfigPhone {
    phone: string;
    code: string;
}

export const loginConfigCode: loginConfigCode = {
    username: 'juwenzhang',
    password: '451674jh'
}

export const loginConfigPhone: LoginConfigPhone = {
    phone: '17323451211',
    code: ''
}
