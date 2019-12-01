<template>
  <div style="max-width:400px;">
    <client-only>
      <v-ons-splitter>
        <!-- LEFT SIDE MENU -->
        <v-ons-splitter-side
          swipeable
          width="66%"
          height="100vh"
          style="background-color:#fff"
          collapse
          side="left"
          :open.sync="openSide"
        >
          <v-ons-list>
            <div style="padding:12px; margin-left:-5px">
              <img src="../assets/img/generator_logo_uden_dato.png" width="100%" height="auto" />
            </div>
            <v-ons-list-item
              v-for="(page, index) in pages"
              tappable
              modifier="chevron"
              @click="openSide = false"
              :key="page.index"
            >
              <nuxt-link class="nuxt-link" :to="page.url">
                <div class="center">{{ page.title }}</div>
              </nuxt-link>
            </v-ons-list-item>
          </v-ons-list>
        </v-ons-splitter-side>

        <!-- RIGHT SIDE MENU -->
        <v-ons-splitter-side
          swipeable
          width="66%"
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
            <v-ons-card v-for="(message, index) in messages" tappable :key="message.index" style="font-size:12px">
              <b>{{ message.title }}</b>
              <p>{{ message.content }}</p>
            </v-ons-card>
        </v-ons-splitter-side>

        <!-- PAGE CONTENT -->
        <v-ons-splitter-content>
          <v-ons-toolbar>
            <div class="left" @click="openSide = !openSide">
              <div class="menuToggle menuToggled" v-if="openSide">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div class="menuToggle" v-else>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div class="center">
              <img
                src="../assets/img/lyn_logo.png"
                width="auto"
                height="100%"
                style="padding:4px 0;"
              />
            </div>
            <div class="right" @click="openRightSide = !openRightSide">
              <v-ons-icon icon="user-circle" size="30px" style="margin-right:11px;"></v-ons-icon>
            </div>
          </v-ons-toolbar>
          <nuxt />
        </v-ons-splitter-content>
      </v-ons-splitter>
    </client-only>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage: "home",
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
          content: "Updates from the festival! These kind of updates are nice to have! A direct message from Generator Festival!"
        },
        music: {
          title: "Events",
          content: "Concert is about to begin! Get updates about your favorite artists!"
        },
        tickets: {
          title: "Tickets are going fast",
          content: "This is a sample message. A direct message from Generator Festival!"
        }
      }
    };
  }
};
</script>


<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

/* LINKS */
a.nuxt-link {
  text-decoration: none;
  color: inherit;
}

/* HAMBURGER MENU */
.menuToggle {
  margin: 11px 0 0 11px;
  -webkit-user-select: none;
  user-select: none;
  transition: margin 0.2s;
}
.menuToggled {
  margin: 11px 0 0 11px;
  -webkit-user-select: none;
  user-select: none;
}

/*
 * Just a quick hamburger
 */
.menuToggle span {
  display: block;
  width: 30px;
  height: 4px;
  margin-bottom: 4px;
  position: relative;

  background: #0e0e0e;

  z-index: 1;

  transform-origin: 4px 0px;

  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
}

.menuToggle span:first-child {
  transform-origin: 0% 0%;
}

.menuToggle span:nth-last-child(2) {
  transform-origin: 0% 100%;
}

/* 
 * Transform all the slices of hamburger
 * into a crossmark.
 */
.menuToggled span {
  opacity: 1;
  transform: rotate(-45deg) translate(-1px, -3px);
  background: #232323;
}

/*
 * But let's hide the middle one.
 */
.menuToggled span:nth-last-child(2) {
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}

/*
 * Ohyeah and the last one should go the other direction
 */
.menuToggled span:nth-last-child(3) {
  transform: rotate(45deg) translate(-1px, -3px);
}

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
  padding: 4px;
  border-radius: 50px;
  width: 90%;
  text-align: center;
}

.right-side-menu-top-grid .settings-btn {
  justify-self: flex-end;
}
</style>
