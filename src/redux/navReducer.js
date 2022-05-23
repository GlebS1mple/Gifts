const SET_NAV_LINK = "NAV/SET_NAV_LINK"


let initialState = {
    links: [
        { id: 1, text: "Наборы", path: "/main" },
        { id: 2, text: "Все товары", path: "/catalog" },
    ],
    currentNavPage: "/main",
}

let navReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NAV_LINK:
            return {
                ...state,
                currentNavPage: action.currentNavPage
            }
        default: return state
    }
}

export const setNavLink = (currentNavPage) => {
    return {
        type: SET_NAV_LINK,
        currentNavPage
    }
}

export default navReducer;