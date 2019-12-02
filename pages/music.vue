<template>
  <div>
    <h1 class="title">Music</h1>
    <program></program>
    <lineup></lineup>
    <playlists></playlists>

    <v-ons-tabbar>
      <v-ons-tab
        v-for="(tab, i) in tabs"
        :icon="tabs[i].icon"
        :label="tabs[i].label"
        :badge="tabs[i].badge"
        :key="tab.i"
        @click="activeTab = tab.i"
      ></v-ons-tab>
    </v-ons-tabbar>
  </div>
</template>

<script>
import program from "../components/program";
import lineup from "../components/lineup";
import playlists from "../components/playlists";

export default {
  data() {
    return {
      activeTab: 0,
      tabs: [
        {
          label: "Program",
          key: "homePage"
        },
        {
          label: "Line-up",
          page: "lineup",
          key: "newsPage"
        },
        {
          label: "Playlists",
          key: "settingsPage"
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
</style>
