<template>
  <div style="max-width:400px;">
    <client-only>
      <v-ons-splitter>
        <v-ons-splitter-side swipeable width="66%" collapse side="left" :open.sync="openSide">
          <v-ons-list>
            <div style="padding:12px; margin-left:-5px"><img src="../assets/img/generator_logo_uden_dato.png" width="100%" height="auto"></div>
            <v-ons-list-item
              v-for="(page, index) in pages"
              tappable
              modifier="chevron"
              @click="openSide = false"
              :key="page.index"
            >
              <div class="center">{{ page.title }}</div>
            </v-ons-list-item>
          </v-ons-list>
        </v-ons-splitter-side>
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
          <div class="center">Title</div>
        </v-ons-toolbar>
          <nuxt />
        </v-ons-splitter-content>
      </v-ons-splitter>
    </client-only>
  </div>
</template>

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
</style>

<script>
export default {
  data() {
    return {
      currentPage: "home",
      pages: {
        Home: {
          title: "Home",
          url: "/"
        },
        Music: {
          title: "Music",
          url: "/"
        },
        Tickets: {
          title: "Tickets",
          url: "/"
        },
        Map: {
          title: "Map",
          url: "/"
        },
        News: {
          title: "News",
          url: "/"
        },
        Atmosphere: {
          title: "Atmosphere",
          url: "/"
        },
        Info: {
          title: "Info",
          url: "/"
        }
      },
      openSide: false
    };
  }
};
</script>