<template>
  <div>
    <h2 class="title">Line-up</h2>
    <div class="lineup">
      <div class="lineup-grid">
        <div
          class="lineup-artist"
          v-for="artist in artists"
          :key="artist.key"
          :style="backgroundImage(artist.imageUrl)"
          @click="showModal(artist)"
        >
          <h3 class="lineup-artist-title">{{ artist.title }}</h3>
        </div>
      </div>
    </div>

    <!-- MODAL -->
    <transition name="fade">
      <v-ons-card class="modal" v-if="modalVisible">
        <div class="close-btn" @click="modalVisible = false">
          <ios-close-circle-icon></ios-close-circle-icon>
        </div>
        <div class="artist-info">
          <div class="artist-info-image" :style="backgroundImage(activeArtist.imageUrl)"></div>
          <div class="artist-info-wrapper">
            <h3 class="artist-info-title">{{ activeArtist.title }}</h3>
            <div class="artist-info-top">
              <p>
                {{ activeArtist.time }}
                <br />
                {{ activeArtist.venue }}
              </p>
              <div class="fav-heart" @click="activeArtist.favorite = !activeArtist.favorite">
                <ios-heart-icon v-if="activeArtist.favorite" />
                <ios-heart-empty-icon v-else />
              </div>
            </div>
            <div class="artist-info-text">
              <p>{{ activeArtist.info }}</p>
            </div>
            <div class="artist-info-some">
              <div class="circle">
                <v-ons-icon icon="facebook" />
              </div>
              <div class="circle">
                <v-ons-icon icon="instagram" />
              </div>
              <div class="circle">
                <v-ons-icon icon="twitter" />
              </div>
              <div class="circle">
                <v-ons-icon icon="youtube" />
              </div>
            </div>
            <img
              class="logo"
              width="100%"
              style="margin-top:32px; opacity:0.3;"
              src="/img/city_of_odense_albani.png"
            />
          </div>
        </div>
      </v-ons-card>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isExpanded: true,
      modalVisible: false,
      activeArtist: null
    };
  },
  methods: {
    backgroundImage(image) {
      return "background-image: url(/img/artists/" + image + ".jpg)";
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
.lineup-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.lineup-artist {
  width: 100%;
  height: auto;
  background-size: cover;
  background-position: center;
  position: relative;
  padding: 8px;
  padding-bottom: 100%;
}

.lineup-artist-title {
  bottom: 0;
  display: inline;
  position: absolute;
  background-color: #1a17ac;
  padding: 0 3px !important;
  margin: 8px 0 !important;
  color: white;
}
</style>
