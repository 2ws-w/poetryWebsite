import { createI18n } from 'vue-i18n'
import chs from './chs'
import tc from './tc'
const i18n = createI18n({
    legacy: false,
    locale:'chs',
    messages:{
        chs,
        tc
    }
})

export default i18n