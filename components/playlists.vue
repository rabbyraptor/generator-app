<template>
  <div>
    <h2 class="title">Playlists</h2>
    <div class="playlists">
      <div class="playlist-grid">
        <a
          v-for="artist in artists"
          :key="artist.key"
          href="https://open.spotify.com/playlist/37i9dQZF1DXaXB8fQg7xif"
          target="_blank"
          class="playlist-link"
        >
          <div class="playlist" :style="backgroundImage(artist.imageUrl)">
            <div class="playlist-icon">
              <v-ons-icon icon="spotify" />
            </div>
          </div>
        </a>
      </div>
    </div>
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
      return "background-image: url(/img/artists/" + image + ".png)";
    }
  },
  props: ["artists"]
};
</script>

<style>
.playlist-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.playlist {
  width: 100%;
  height: auto;
  background-size: cover;
  background-position: center;
  position: relative;
  padding: 8px;
  padding-bottom: 100%;
}

.playlist-icon {
  top: 0;
  right: 0;
  font-size: 42px !important;
  display: inline;
  position: absolute;
  padding: 0px 4px !important;
  margin: 8px !important;
  color: white;
}

.playlist-link {
  height: 100%;
  width: 100%;
}
</style>
