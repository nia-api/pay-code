export interface Config {
    default: 'wechat' | 'alipay' | 'qq' | 'wechatpay'
    alipay: null | string
    wechat: null | string
    qq: null | string
    wechatpay: null | string
}
