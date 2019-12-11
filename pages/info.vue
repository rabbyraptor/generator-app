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
          content:
            "GENERATOR is the city’s new festival. And we’re going to start the new semester with a BANG! If you are a new or old student, you are going to enjoy this extraordinary kickass party experience. The festival will show you the streets of Odense like you’ve never seen them before. Good vibes and a party atmosphere will float through the air. Every day, the festival takes over new streets, with new stages and new artists. Come fill the city with life and love and let’s generate the best student party ever!",
          isExpanded: false
        },
        {
          label: "Neighbour",
          title: "Neighbour contact",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus molestie nunc non blandit. Euismod lacinia at quis risus sed vulputate odio. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Placerat in egestas erat imperdiet sed euismod nisi.",
          isExpanded: false
        },
        {
          label: "Volunteer",
          title: "Volunteer at Generator",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus molestie nunc non blandit. Euismod lacinia at quis risus sed vulputate odio. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Placerat in egestas erat imperdiet sed euismod nisi.",
          isExpanded: false
        },
        {
          label: "FAQ",
          title: "Frequently asked questions",
          content:
            "<ul class='faq'><li class='question'>What is the age requirement for attending Generator?</li><li>You must be at least 18 years of age to attend Generator Festival.</li></ul>",
          isExpanded: false
        },
        {
          label: "Contact",
          title: "Contact",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus molestie nunc non blandit. Euismod lacinia at quis risus sed vulputate odio. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Placerat in egestas erat imperdiet sed euismod nisi.",
          isExpanded: false
        },
        {
          label: "Social",
          title: "Social",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus molestie nunc non blandit. Euismod lacinia at quis risus sed vulputate odio. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Placerat in egestas erat imperdiet sed euismod nisi.",
          isExpanded: false
        },
        {
          label: "Benefits",
          title: "Benefits",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus molestie nunc non blandit. Euismod lacinia at quis risus sed vulputate odio. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Placerat in egestas erat imperdiet sed euismod nisi.",
          isExpanded: false
        },
        {
          label: "Sponsors",
          title: "Generator 2020 is powered by:",
          content:
            "<img class='odense-albani-logo' src='/img/sponsor-logos-double-white.png' />",
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

.faq{
  list-style-type: none;
  padding:0;
}

.faq .question{
  text-decoration: underline;
}
</style>