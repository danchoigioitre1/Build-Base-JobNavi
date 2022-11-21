export const lang: object = {
    resources: {
        en: {
            translation: {
                'Admin': 'Admin',
                'EnterPrise': 'Enterprise',
                'Home': 'Home',
                'User': 'User',
            }
        }

        ,

        vi: {

            translation: {
                'Admin': 'Quản lí',
                'EnterPrise': 'Doanh nghiệp',
                'Home': 'Trang chủ',
                'User': 'Người dùng',

            }
        },

    },

    lng: "vi", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
        escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
}