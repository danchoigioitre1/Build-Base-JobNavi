


const lang = {
    lang: 'vi'
}
const changeLanguagesReducer = (state = lang, action: any) => {
    switch (action.type) {
        case 'changeLanguages':
            {

                return {
                   
                    lang: action.payload
                }
            }


        default:
            return state
    }

}

export default changeLanguagesReducer;