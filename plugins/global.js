import Vue from 'vue'
import favHeartButton from "../components/favHeartButton";
import hovedSponsor from "../components/hovedSponsor";
import Cookies from 'js-cookie'

Vue.mixin({
    components: {
        favHeartButton,
        Cookies,
        hovedSponsor
    },
    mounted() {
        this.checkLogin();
    },
    methods: {
        checkLogin() {
            if (Cookies.get('loggedIn') == undefined) {
                Cookies.set('loggedIn', 'false')
            }
            else if (Cookies.get('loggedIn') == 'false') {
                return false;
            }
            else if (Cookies.get('loggedIn') == 'true') {
                return true;
            }
        },
        pageBackground(page) {
            if(page == 'news' || page == 'playlists' || page == 'info' || page == 'map' || page == 'atmosphere'){
                return "backgroundColor: #1F1F21"
            }
            return "backgroundImage: url('/img/bg/dark/" + page + ".jpg')"
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
    },

})