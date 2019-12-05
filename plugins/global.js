import Vue from 'vue'
import favHeartButton from "../components/favHeartButton";

Vue.mixin({
    components: {
        favHeartButton
    },
    methods: {

    },
    data() {
        return {
            brandColors: {
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
        }
    }

})