import Vue from 'vue'
import VueI18n from 'vue-i18n'
import iviewEn from 'view-design/dist/locale/en-US'
import iviewZh from 'view-design/dist/locale/zh-CN'
import zh from '@/i18n/lang/zh-CN'
import en from '@/i18n/lang/en-US'

Vue.use(VueI18n)

// 自动根据浏览器系统语言设置语言
const navLang = navigator.language
const localLang = (navLang === 'zh-CN' || navLang === 'en-US') ? navLang : false
let lang = window.localStorage.lang || localLang || 'zh-CN'

Vue.config.lang = lang

const messages = {
  'zh-CN': Object.assign(zh, iviewZh),
  'en-US': Object.assign(en, iviewEn)
}

const i18n = new VueI18n({
  locale: lang,
  messages
})

export default i18n
