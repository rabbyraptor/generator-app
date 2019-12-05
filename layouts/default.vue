<template>
  <div>
    <client-only>
      <v-ons-splitter>
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
          <v-ons-list style="display:flex; flex-flow:column;">
            <div style="padding:12px; margin-left:-5px">
              <nuxt-link to="/">
                <img
                  src="/img/generator_logo_uden_dato.png"
                  width="100%"
                  height="auto"
                  @click="openSide = false"
                />
              </nuxt-link>
            </div>
            <nuxt-link
              class="nuxt-link"
              :to="page.url"
              v-for="(page, index) in pages"
              :key="page.index"
            >
              <v-ons-list-item tappable modifier="chevron" @click="openSide = false">
                <div class="center" style="margin-left:12px;">{{ page.title }}</div>
              </v-ons-list-item>
            </nuxt-link>
          </v-ons-list>
          <img
            class="odense-albani-logo"
            style="margin-top:0;"
            src="/img/city_of_odense_albani.png"
          />
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
            <p class="fb-btn">
              <v-ons-icon icon="facebook" style="margin-right:6px;"></v-ons-icon>Connect to Facebook
            </p>
            <v-ons-icon class="settings-btn" icon="sliders-h"></v-ons-icon>
          </div>
          <h4 style="margin:12px 0 12px 12px;">Messages</h4>
          <v-ons-card v-for="(message, index) in messages" tappable :key="message.index">
            <b>{{ message.title }}</b>
            <p>{{ message.content }}</p>
          </v-ons-card>
        </v-ons-splitter-side>

        <!-- PAGE CONTENT -->
        <v-ons-splitter-content>
          <v-ons-toolbar>
            <div class="left" @click="openSide = !openSide">
              <ios-menu-icon style="font-size:40px; margin-left:7px; margin-top:1px;"></ios-menu-icon>
            </div>
            <div class="center">
              <img src="/img/lyn_logo.png" width="auto" height="44px" style="padding:4px 0;" />
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
export default {
  data() {
    return {
      openSide: false,
      openRightSide: false,
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
  methods: {
    
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
  text-align: center;
}

.right-side-menu-top-grid .settings-btn {
  justify-self: flex-end;
}
</style>
