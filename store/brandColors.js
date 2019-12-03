export const state = () => ({
    colors: {
        red:
        {
            hex: "#F5201B",
        },
        blue:
        {
            hex: "#1A17AC",
        },
        white:
        {
            hex: "#FFFFFF"
        },
        black:
        {
            hex: "#000000"
        },
    }
})

export const getters = {
    getColors: (state) => {
        return state.colors;
    },
}

export const actions = {
}

export const mutations = {
}