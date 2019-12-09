<template>
  <div class="page-container" :style="pageBackground(this.$route.name)">
    <h1 class="title">Info</h1>
    <v-ons-list>
      <v-ons-list-item
        v-for="tab in info"
        :key="tab.label"
        expandable
        :expanded.sync="tab.isExpanded"
      >
        <div class="center" style="padding:12px;">
          <h3>{{ tab.label }}</h3>
        </div>
        <div class="expandable-content">
          <div class="info-tab-content">
            <h3>{{ tab.title }}</h3>
            <div v-html="tab.content"/>
          </div>
        </div>
      </v-ons-list-item>
    </v-ons-list>
    <hoved-sponsor />
  </div>
</template>

<script>
export default {
  data() {
    return {
      modalVisible: false,
      activeArtist: null,
      info: [
        {
          label: "About",
          title: "About Generator Festival",
          imageUrl: "busy_doing_nothing",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus molestie nunc non blandit. Euismod lacinia at quis risus sed vulputate odio. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Placerat in egestas erat imperdiet sed euismod nisi.",
          isExpanded: false
        },
        {
          label: "Neighbour",
          title: "Neighbour contact",
          imageUrl: "busy_doing_nothing",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus molestie nunc non blandit. Euismod lacinia at quis risus sed vulputate odio. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Placerat in egestas erat imperdiet sed euismod nisi.",
          isExpanded: false
        },
        {
          label: "Volunteer",
          title: "Volunteer at Generator",
          imageUrl: "busy_doing_nothing",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus molestie nunc non blandit. Euismod lacinia at quis risus sed vulputate odio. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Placerat in egestas erat imperdiet sed euismod nisi.",
          isExpanded: false
        },
        {
          label: "FAQ",
          title: "FAQ",
          imageUrl: "busy_doing_nothing",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus molestie nunc non blandit. Euismod lacinia at quis risus sed vulputate odio. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Placerat in egestas erat imperdiet sed euismod nisi.",
          isExpanded: false
        },
        {
          label: "Contact",
          title: "Contact",
          imageUrl: "busy_doing_nothing",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus molestie nunc non blandit. Euismod lacinia at quis risus sed vulputate odio. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Placerat in egestas erat imperdiet sed euismod nisi.",
          isExpanded: false
        },
        {
          label: "Social",
          title: "Social",
          imageUrl: "busy_doing_nothing",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus molestie nunc non blandit. Euismod lacinia at quis risus sed vulputate odio. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Placerat in egestas erat imperdiet sed euismod nisi.",
          isExpanded: false
        },
        {
          label: "Benefits",
          title: "Benefits",
          imageUrl: "busy_doing_nothing",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus molestie nunc non blandit. Euismod lacinia at quis risus sed vulputate odio. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Placerat in egestas erat imperdiet sed euismod nisi.",
          isExpanded: false
        },
        {
          label: "Sponsors",
          title: "Sponsors of Generator",
          imageUrl: "busy_doing_nothing",
          content:
            "<img class='odense-albani-logo' src='/img/sponsor-logos-double.png' />",
          isExpanded: false
        }
      ]
    };
  },
  methods: {
    backgroundImage(image) {
      return "background-image: url(/img/artists/" + image + ".png)";
    },
    showModal(artist) {
      this.modalVisible = true;
      this.activeArtist = artist;
    }
  },
  props: ["artists"]
};
</script>

<style>
.info-tab-content{
  padding: 12px;
  border-bottom:1px solid #c7c7cc;
}
.info-tab-content h3{
  margin-top:0;
}

.list-item,
.list-item__center {
  padding: 0;
}

.list-item__expandable-content {
  padding:0;
}
</style>