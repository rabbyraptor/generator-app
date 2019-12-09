<template>
  <div class="page-container" :style="pageBackground(this.activeTab)">
    <h1 class="title">Music</h1>
    <program :artists="this.artists" v-if="activeTab == 'program'"></program>
    <lineup :artists="this.artists" v-if="activeTab == 'lineup'"></lineup>
    <playlists :artists="this.artists" v-if="activeTab == 'playlists'"></playlists>
    <hoved-sponsor />
    <v-ons-bottom-toolbar class="music-toolbar">
      <ul>
        <li
          v-for="tab in tabs"
          :label="tab.label"
          :key="tab.key"
          @click="activeTab = tab.key"
          :style="isActiveTab(tab.key)"
        >{{ tab.label }}</li>
      </ul>
    </v-ons-bottom-toolbar>
  </div>
</template>

<script>
import program from "../components/program";
import lineup from "../components/lineup";
import playlists from "../components/playlists";

export default {
  methods: {
    isActiveTab(key) {
      if (this.activeTab == key) {
        return "color: " + this.brandColors.red.hex;
      }
      return null;
    },
  },
  data() {
    return {
      activeTab: "lineup",
      tabs: [
        {
          label: "Line-up",
          key: "lineup"
        },
        {
          label: "Program",
          key: "program"
        },
        {
          label: "Playlists",
          key: "playlists"
        }
      ],
      artists: [
        {
          title: "Busy doin' nothing",
          time: "17:00",
          venue: "Main Stage",
          favorite: false,
          imageUrl: "busy_doing_nothing",
          info:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus molestie nunc non blandit. Euismod lacinia at quis risus sed vulputate odio. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Placerat in egestas erat imperdiet sed euismod nisi."
        },
        {
          title: "Vkation",
          time: "18:30",
          venue: "Main Stage",
          favorite: false,
          imageUrl: "vkation",
          info:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus molestie nunc non blandit. Euismod lacinia at quis risus sed vulputate odio. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Placerat in egestas erat imperdiet sed euismod nisi."
        },
        {
          title: "Hedegaard",
          time: "19:30",
          venue: "Main Stage",
          favorite: false,
          imageUrl: "hedegaard",
          info:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus molestie nunc non blandit. Euismod lacinia at quis risus sed vulputate odio. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Placerat in egestas erat imperdiet sed euismod nisi."
        },
        {
          title: "Nonsens",
          time: "20:30",
          venue: "Main Stage",
          favorite: false,
          imageUrl: "nonsens",
          info:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus molestie nunc non blandit. Euismod lacinia at quis risus sed vulputate odio. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Placerat in egestas erat imperdiet sed euismod nisi."
        },
        {
          title: "Emil Stabil",
          time: "21:30",
          venue: "Main Stage",
          favorite: false,
          imageUrl: "emil_stabil",
          info:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus molestie nunc non blandit. Euismod lacinia at quis risus sed vulputate odio. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Placerat in egestas erat imperdiet sed euismod nisi."
        },
        {
          title: "Faustix",
          time: "22:00",
          venue: "Main Stage",
          favorite: false,
          imageUrl: "faustix",
          info:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus molestie nunc non blandit. Euismod lacinia at quis risus sed vulputate odio. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Placerat in egestas erat imperdiet sed euismod nisi."
        },
        {
          title: "Noah Carter",
          time: "23:15",
          venue: "Main Stage",
          favorite: false,
          imageUrl: "noah_carter",
          info:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus molestie nunc non blandit. Euismod lacinia at quis risus sed vulputate odio. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Placerat in egestas erat imperdiet sed euismod nisi."
        },
        {
          title: "Martin Jensen",
          time: "00:00",
          venue: "Main Stage",
          favorite: false,
          imageUrl: "martin_jensen",
          info:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus molestie nunc non blandit. Euismod lacinia at quis risus sed vulputate odio. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Placerat in egestas erat imperdiet sed euismod nisi."
        }  
      ]
    };
  },
  components: {
    program,
    lineup,
    playlists
  }
};
</script>

<style>
.tabbar {
  z-index: 4;
  position: fixed;
}

.ons-tabbar {
  z-index: 4 !important;
}

.music-toolbar {
  position: fixed;
  z-index: 2147483648;
}

.music-toolbar ul {
  text-align: center;
  text-transform: uppercase;
  width: 100%;
  padding: 12px;
  list-style: none;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr !important;
}
</style>
