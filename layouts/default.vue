<template>
  <div>
    <client-only>
      <v-ons-splitter class="white">
        <!-- LEFT SIDE MENU -->
        <v-ons-splitter-side
          swipeable
          width="75%"
          height="100vh"
          style="background-color:#fff"
          collapse
          side="left"
          :open.sync="openSide"
        >
          <v-ons-list style="display:flex; flex-flow:column;" id="nav-menu">
            <div style="padding:12px; margin-left:-5px">
              <nuxt-link to="/">
                <img
                  src="/img/generator_logo_2020.png"
                  width="100%"
                  height="auto"
                  @click="openSide = false"
                />
              </nuxt-link>
            </div>
            <nuxt-link class="nuxt-link" :to="page.url" v-for="page in pages" :key="page.index">
              <v-ons-list-item tappable modifier="chevron" @click="openSide = false">
                <div class="center" style="margin-left:12px;">{{ page.title }}</div>
              </v-ons-list-item>
            </nuxt-link>
          </v-ons-list>
          <img class="odense-albani-logo" src="/img/albani_cityodense.png" />
        </v-ons-splitter-side>

        <!-- RIGHT SIDE MENU -->
        <v-ons-splitter-side
          swipeable
          width="75%"
          height="100vh"
          style="background-color:#fff"
          collapse
          side="right"
          :open.sync="openRightSide"
        >
          <div class="right-side-menu-top-grid">
            <p class="fb-btn" v-if="loggedIn" @click="toggleFacebookLogin()">
              <v-ons-icon icon="facebook" style="margin-right:6px;"></v-ons-icon>Logout from Facebook
            </p>
            <p class="fb-btn" v-else @click="toggleFacebookLogin()">
              <v-ons-icon icon="facebook" style="margin-right:6px;"></v-ons-icon>Connect to Facebook
            </p>
            <v-ons-icon @click="showModal()" class="settings-btn" icon="sliders-h"></v-ons-icon>
          </div>
          <h4 style="margin:12px 0 12px 12px;">Messages</h4>
          <v-ons-card v-for="message in messages" tappable :key="message.index">
            <b>{{ message.title }}</b>
            <p>{{ message.content }}</p>
          </v-ons-card>
          <!-- SETTINGS MODAL -->
          <transition name="rtl-slide">
            <v-ons-card class="modal" id="settings-modal" v-if="modalVisible">
              <div class="settings-info">
                <v-ons-list>
                  <v-ons-list-header>Languages</v-ons-list-header>
                  <v-ons-list-item>English</v-ons-list-item>
                </v-ons-list>
                <v-ons-list>
                  <v-ons-list-header>Favorites</v-ons-list-header>
                  <v-ons-list-item>No reminders are active</v-ons-list-item>
                </v-ons-list>
                <v-ons-list>
                  <v-ons-list-header>Notifications</v-ons-list-header>
                  <v-ons-list-item>Notifications are currently disabled</v-ons-list-item>
                </v-ons-list>
                <v-ons-list>
                  <v-ons-list-header>Privacy</v-ons-list-header>
                  <v-ons-list-item>
                    <div id="use-of-data">
                      <div>Allow use of data</div>
                      <div>
                        <label class="switch">
                          <input type="checkbox" class="switch__input" checked />
                          <div class="switch__toggle">
                            <div class="switch__handle"></div>
                          </div>
                        </label>
                      </div>
                    </div>
                  </v-ons-list-item>
                </v-ons-list>
              </div>
            </v-ons-card>
          </transition>
        </v-ons-splitter-side>

        <!-- PAGE CONTENT -->
        <v-ons-splitter-content>
          <v-ons-toolbar>
            <div class="left" @click="openSide = !openSide">
              <ios-menu-icon style="font-size:40px; margin-left:7px; margin-top:1px;"></ios-menu-icon>
            </div>
            <div class="center">
              <img src="/img/lyn_logo_white.png" width="auto" height="44px" style="padding:4px 0;" />
            </div>
            <div class="right" @click="openRightSide = !openRightSide">
              <ios-contact-icon
                style="font-size:37px; float:right; margin-right:9px; margin-top:3px;"
              ></ios-contact-icon>
            </div>
          </v-ons-toolbar>
          <v-ons-page class="main-wrapper">
            <nuxt />
          </v-ons-page>
        </v-ons-splitter-content>
      </v-ons-splitter>
    </client-only>
  </div>
</template>

<script>
import Cookies from "js-cookie";
export default {
  data() {
    return {
      loggedIn: false,
      openSide: false,
      openRightSide: false,
      modalVisible: false,
      pages: {
        home: {
          title: "Home",
          url: "/"
        },
        music: {
          title: "Music",
          url: "/music"
        },
        tickets: {
          title: "Tickets",
          url: "/tickets"
        },
        map: {
          title: "Map",
          url: "/map"
        },
        news: {
          title: "News",
          url: "/news"
        },
        atmosphere: {
          title: "Atmosphere",
          url: "/atmosphere"
        },
        info: {
          title: "Info",
          url: "/info"
        }
      },
      messages: {
        home: {
          title: "Program update",
          content:
            "Updates from the festival! These kind of updates are nice to have! A direct message from Generator Festival!"
        },
        music: {
          title: "Events",
          content:
            "Concert is about to begin! Get updates about your favorite artists!"
        },
        tickets: {
          title: "Tickets are going fast",
          content:
            "This is a sample message. A direct message from Generator Festival!"
        }
      }
    };
  },
  watch: {
    isLoggedIn() {
      if (this.checkLogin == true) {
        this.loggedIn = true;
      } else {
        this.loggedIn = false;
      }
    }
  },
  methods: {
    showModal() {
      this.modalVisible = !this.modalVisible;
    },
    toggleFacebookLogin() {
      if (this.loggedIn == true) {
        Cookies.set("loggedIn", "false");
        this.loggedIn = false;
        this.$ons.notification.toast("You have been logged out.", {
          timeout: 1000,
          animation: "fall"
        });
      } else {
        Cookies.set("loggedIn", "true");
        this.loggedIn = true;
        this.$ons.notification.toast("Login successful.", {
          timeout: 1000,
          animation: "fall"
        });
      }
    }
  }
};
</script>


<style>
/* RIGHT SIDE MENU */
.right-side-menu-top-grid {
  display: grid;
  grid-template-columns: minmax(10%, 1fr) 20%;
  grid-template-rows: 20px;
  padding: 12px;
  align-items: center;
}

.right-side-menu-top-grid .fb-btn {
  font-size: 11px;
  color: #fff;
  background-color: #4267b2;
  padding: 4px 6px;
  border-radius: 50px;
  width: 90%;
  max-width:150px;
  text-align: center;
}

.right-side-menu-top-grid .settings-btn {
  justify-self: flex-end;
}

/* SETTINGS MODAL */
#settings-modal{
  position: absolute;
  top:44px;
  padding:0;
}

.settings-info {
  color: #000000;
  display: flex;
  justify-content: center;
  justify-items: center;
  flex-flow: column;
  width: 100%;
  position: relative;
}

.settings-info-wrapper {
  padding: 0 12px 12px 12px;
  width: 100%;
}

.settings-info-title {
  font-size: 24px !important;
  margin: 0.2em 0 !important;
}

.settings-info-text {
  word-break: break-word;
  white-space: normal;
}

#use-of-data {
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 52px;
  align-items: center;
  padding-right: 12px;
}

.settings-info .list-item,
.settings-info .list-item__center {
  padding: 0 0 0 12px;
}

.settings-info .list-item div,
.settings-info .list-item__center,
.settings-info .list-header {
  font-family: -apple-system, "Helvetica Neue", "Helvetica", "Arial",
    "Lucida Grande", sans-serif;
  font-size: 12px;
}

/* MODAL ANIMATION */
.rtl-slide-enter-active,
.rtl-slide-leave-active {
  transition: all 0.4s ease-out;
}
.rtl-slide-enter, .rtl-slide-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0.8;
  transform: translateX(100%);
}
</style>
