<template>
<div style="margin-bottom:49px; overflow:hidden; min-height:100vh;">
    <h1 class="title">Music</h1>
      <program v-if="activeTab == 'program'"></program>
      <lineup v-if="activeTab == 'lineup'"></lineup>
      <playlists v-if="activeTab == 'playlists'"></playlists>
    <v-ons-tabbar position="bottom">
      <v-ons-tab
        v-for="(tab, index) in tabs"
        :label="tab.label"
        :badge="tab.badge"
        :icon="tab.icon"
        :key="tab.key"
        @click="activeTab = tab.key"
        :active="isActiveTab(tab.key)"
      ></v-ons-tab>
    </v-ons-tabbar>
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
        return true;
      }
      return false;
    }
  },
  data() {
    return {
      activeTab: "program",
      tabs: [
        {
          label: "Program",
          key: "program"
        },
        {
          label: "Line-up",
          key: "lineup"
        },
        {
          label: "Playlists",
          key: "playlists"
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
.tabbar{
  z-index: 4;
  position: fixed;
}

.ons-tabbar{
  z-index: 4!important;
}
</style>
