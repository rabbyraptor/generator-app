import Vue from 'vue'
import favHeartButton from "../components/favHeartButton";
import Cookies from 'js-cookie'

Vue.mixin({
    components: {
        favHeartButton,
        Cookies
    },
    mounted(){
        this.checkLogin();
    },
    methods: {
        checkLogin(){
            if(Cookies.get('loggedIn') == undefined)
            {
                Cookies.set('loggedIn', 'false')
            }
            else if(Cookies.get('loggedIn') == 'false'){
                return false;
            }
            else if(Cookies.get('loggedIn') == 'true'){
                return true;
            }
        }
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