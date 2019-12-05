<template>
  <div>
    <h2 class="title">Program</h2>
    <v-ons-list>
      <v-ons-list-item expandable :expanded.sync="isExpanded">
        <div class="center" style="padding:12px;">
          <h3 style="font-size:24px;">Thursday Sep. 3rd</h3>
        </div>
        <div class="expandable-content">
          <v-ons-list-item v-for="artist in artists" :key="artist.title">
            <div class="artist-grid">
              <div
                class="artist-image"
                :style="backgroundImage(artist.imageUrl)"
                @click="showModal(artist)"
              ></div>
              <div class="artist-content" @click="showModal(artist)">
                <p style="font-weight:bold;" v-html="artist.title" />
                <p v-html="artist.time" />
                <p v-html="artist.venue" />
              </div>
              <fav-heart-button class="fav-heart" :activeartist="artist"/>
            </div>
          </v-ons-list-item>
        </div>
      </v-ons-list-item>
      <v-ons-list-item>
        <div class="center" style="padding:12px; line-height:1;">
          <h3 style="font-size:24px;">Friday Sep. 4th</h3>
        </div>
      </v-ons-list-item>
      <v-ons-list-item>
        <div class="center" style="padding:12px; line-height:1;">
          <h3 style="font-size:24px;">Saturday Sep. 5th</h3>
        </div>
      </v-ons-list-item>
    </v-ons-list>

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
              <fav-heart-button class="fav-heart" :activeartist="activeArtist"/>
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
            <img class="odense-albani-logo" src="/img/city_of_odense_albani.png" />
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
.modal {
  background-color: #ffffff;
  position: fixed;
  height: 100%;
  width: 100%;
  width: auto;
  top: 44px;
  margin: 0;
  max-height: calc(100% - 88px);
  overflow-y: auto;
  overflow-x: hidden;
  padding: 0;
  border-radius: 0;
}

.artist-info {
  color: #000000;
  display: flex;
  justify-content: center;
  justify-items: center;
  flex-flow: column;
  width: 100%;
  position: relative;
}

.artist-info-image {
  background-size: cover;
  background-position: center;
  display: grid;
  width: 100%;
  height: auto;
  padding-bottom: 100%;
  max-height: 200px !important;
}

.artist-info-wrapper {
  padding: 16px;
  width: 100%;
}

.artist-info-top {
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 30px;
  align-items: center;
  margin-bottom: 16px;
  font-size: 22px;
}

.artist-info-title {
  font-size: 32px !important;
  margin: 0.2em 0 !important;
}

.artist-info-text {
  word-break: break-word;
  white-space: normal;
}

.artist-info-some {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}

.artist-info-some .circle {
  font-size: 28px;
  text-align: center;
  width: 42px;
  color: #ffffff;
  display: inline-block;
  background-color: #000000;
  border-radius: 50px;
  padding: 4px;
  margin-right: 12px;
}

.artist-info-some .circle:last-of-type {
  margin-right: 0;
}

.close-btn {
  position: sticky;
  display: flex;
  justify-content: center;
  align-content: center;
  top: 0px;
  width: 100%;
  background-color: #fff;
  padding: 8px 12px 6px 12px;
  font-size: 24px;
  z-index: 5;
  border-bottom: 1px solid #b2b2b2;
}

/* MODAL ANIMATION */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s ease-out;
}
.fade-enter, .fade-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0.8;
  transform: translateY(100%);
}

.list-item,
.list-item__center {
  padding: 0;
}

.list-item__expandable-content {
  padding: 0;
}

.artist-grid {
  display: grid;
  width: 100%;
  grid-template-columns: 100px minmax(100px, 1fr) 40px;
  align-items: center;
}

.artist-image {
  height: 100px;
  width: 100px;
  background-size: cover;
}

.artist-content {
  padding: 0 12px;
  font-size: 20px;
}

.ion {
  display: flex;
  align-items: center;
}
</style>
