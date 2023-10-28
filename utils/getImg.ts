import { config } from './../utils/config'

export const getImg = (type = config.default) => {
    if (type == 'alipay' || type == 'wechatpay' || type == 'qq' || type == 'wechat') {
        return {
            img: config[type],
            type
        }
    }
    return {
        img: null,
        type
    }
}
