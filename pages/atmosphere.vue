<template>
  <div class="page-container">
    <h1 class="title">Atmosphere</h1>
    <div class="instagram-section" v-if="activeTab == 'images'">
      <vue-instagram :token="igToken" :count="imagesToGet" mediaType="images" class="ig-grid">
        <template slot="feeds" slot-scope="props">
          <a :href="props.feed.link" target="_blank" class="ig-img">
            <img :src="props.feed.images.low_resolution.url" />
          </a>
        </template>
      </vue-instagram>
    </div>
    <img class="odense-albani-logo" src="/img/city_of_odense_albani.png" />
    <v-ons-bottom-toolbar class="atmosphere-toolbar">
      <ul>
        <li
          v-for="(tab, index) in tabs"
          :label="tab.label"
          :badge="tab.badge"
          :icon="tab.icon"
          :key="tab.key"
          @click="activeTab = tab.key"
          :style="isActiveTab(tab.key)"
        >{{ tab.label }}</li>
      </ul>
    </v-ons-bottom-toolbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      igToken: "7544361227.1677ed0.f5432be5691c4271a8e3cf73ef4103c7",
      imagesToGet: 3,
      activeTab: "images",
      tabs: [
        {
          label: "Images",
          key: "images"
        },
        {
          label: "Videos",
          key: "videos"
        }
      ]
    };
  },
  methods: {
    isActiveTab(key) {
      if (this.activeTab == key) {
        return "color: " + this.brandColors.red.hex;
      }
      return null;
    }
  }
};
</script>

<style>
.instagram-section {
  text-align: center;
  padding: 12px 12px 12px 12px;
}

.ig-grid {
  display: flex;
  flex-flow: column;
}

.ig-img {
  margin: 12px 0 0 0;
  background-color: white;
  display: flex;
  overflow: hidden;
  border: 1px solid white;
}

.ig-img:first-of-type {
  margin-top: 0;
}

.ig-img img {
  align-self: center;
  width: 100%;
  height: auto;
}

.atmosphere-toolbar {
  position: fixed;
  z-index: 2147483648;
}

.atmosphere-toolbar ul {
  text-align: center;
  text-transform: uppercase;
  width: 100%;
  padding: 12px;
  list-style: none;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr !important;
}
</style>
