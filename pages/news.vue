<template>
  <div class="page-container" :style="pageBackground(this.$route.name)">
    <h1 class="title">News</h1>
    <v-ons-list>
      <v-ons-list-item v-for="news in news" :key="news.title">
        <div class="news-grid">
          <div class="news-image" :style="backgroundImage(news.imageUrl)" @click="showModal(news)"></div>
          <div class="news-content" @click="showModal(news)">
            <p style="font-weight:bold;" v-html="news.title" />
            <p>{{ news.content.slice(0, 75) }} ...</p>
          </div>
          <div class="fav-heart" @click="news.favorite = !news.favorite">
            <ios-heart-icon v-if="news.favorite" />
            <ios-heart-empty-icon v-else />
          </div>
        </div>
      </v-ons-list-item>
    </v-ons-list>

    <!-- MODAL -->
    <transition name="fade">
      <v-ons-card class="modal" v-if="modalVisible">
        <div class="close-btn" @click="modalVisible = false">
          <ios-close-circle-icon></ios-close-circle-icon>
        </div>
        <div class="news-info">
          <div class="news-info-image" :style="backgroundImage(activeNews.imageUrl)"></div>
          <div class="news-info-wrapper">
            <h3 class="news-info-title">{{ activeNews.title }}</h3>
            <div class="news-info-top">
              <p>
                Published {{ activeNews.time }}
                <br />
                Written by {{ activeNews.writer }}
              </p>
              <div class="fav-share-icons">
                <fav-heart-button class="fav-heart" :activeartist="activeNews"/>
                <v-ons-icon icon="md-share" @click.native="shareButton(activeNews)"></v-ons-icon>
              </div>
            </div>
            <div class="news-info-text">
              <p>{{ activeNews.content }}</p>
              <br />
              <p>Links and sources:</p>
            </div>
            <div class="news-info-some"></div>
            <img class="odense-albani-logo" src="/img/city_of_odense_albani.png" />
          </div>
        </div>
      </v-ons-card>
    </transition>

    <hoved-sponsor />
    <v-ons-bottom-toolbar class="news-toolbar">
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
  methods: {
    isActiveTab(key) {
      if (this.activeTab == key) {
        return "color: " + this.brandColors.red.hex;
      }
      return null;
    },
    showModal(news) {
      this.modalVisible = true;
      this.activeNews = news;
    },
    backgroundImage(image) {
      return "background-image: url(/img/artists/" + image + ".jpg)";
    },
    shareButton(news) {
      if (navigator.share) {
        console.log("Congrats! Your browser supports Web Share API");
        navigator
          .share({
            title: news.title,
            text: news.content.slice(0, 100) + " ... Read more: ",
            url: window.location.href
          })
          .then(function() {
            console.log("Sharing successful");
          })
          .catch(function() {
            console.log("Sharing failed");
          });
      } else {
        console.log("Sorry! Your browser does not support Web Share API");
      }
    }
  },
  data() {
    return {
      modalVisible: false,
      activeTab: "latest",
      tabs: [
        {
          label: "Popular",
          key: "popular"
        },
        {
          label: "Latest",
          key: "latest"
        },
        {
          label: "Oldest",
          key: "oldest"
        }
      ],
      news: [
        {
          title: "News title 1",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget egestas purus viverra accumsan in nisl nisi scelerisque eu. In aliquam sem fringilla ut morbi tincidunt. Nunc vel risus commodo viverra maecenas accumsan lacus. Pretium quam vulputate dignissim suspendisse in est ante in nibh.",
          time: "Aug 7 2019",
          writer: "Generator",
          favorite: false,
          imageUrl: "faustix"
        },
        {
          title: "News title 2",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget egestas purus viverra accumsan in nisl nisi scelerisque eu. In aliquam sem fringilla ut morbi tincidunt. Nunc vel risus commodo viverra maecenas accumsan lacus. Pretium quam vulputate dignissim suspendisse in est ante in nibh.",
          time: "Aug 11 2019",
          writer: "Generator",
          favorite: true,
          imageUrl: "faustix"
        },
        {
          title: "News title 3",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget egestas purus viverra accumsan in nisl nisi scelerisque eu. In aliquam sem fringilla ut morbi tincidunt. Nunc vel risus commodo viverra maecenas accumsan lacus. Pretium quam vulputate dignissim suspendisse in est ante in nibh.",
          time: "Aug 15 2019",
          writer: "Generator",
          favorite: false,
          imageUrl: "faustix"
        },
        {
          title: "News title 4",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget egestas purus viverra accumsan in nisl nisi scelerisque eu. In aliquam sem fringilla ut morbi tincidunt. Nunc vel risus commodo viverra maecenas accumsan lacus. Pretium quam vulputate dignissim suspendisse in est ante in nibh.",
          time: "Aug 16 2019",
          writer: "Generator",
          favorite: false,
          imageUrl: "faustix"
        },
        {
          title: "News title 5",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget egestas purus viverra accumsan in nisl nisi scelerisque eu. In aliquam sem fringilla ut morbi tincidunt. Nunc vel risus commodo viverra maecenas accumsan lacus. Pretium quam vulputate dignissim suspendisse in est ante in nibh.",
          time: "Aug 26 2019",
          writer: "Generator",
          favorite: false,
          imageUrl: "faustix"
        },
        {
          title: "News title 6",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget egestas purus viverra accumsan in nisl nisi scelerisque eu. In aliquam sem fringilla ut morbi tincidunt. Nunc vel risus commodo viverra maecenas accumsan lacus. Pretium quam vulputate dignissim suspendisse in est ante in nibh.",
          time: "Sep 2 2019",
          writer: "Generator",
          favorite: false,
          imageUrl: "faustix"
        }
      ]
    };
  },
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

.news-info {
  color: #000000;
  display: flex;
  justify-content: center;
  justify-items: center;
  flex-flow: column;
  width: 100%;
  position: relative;
}

.news-info-image {
  background-size: cover;
  background-position: center;
  display: grid;
  width: 100%;
  height: auto;
  padding-bottom: 100%;
  max-height: 200px !important;
}

.news-info-wrapper {
  padding: 16px;
  width: 100%;
}

.news-info-top {
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 20px;
  align-items: center;
  margin-bottom: 16px;
  font-size: 18px;
}

.news-info-title {
  font-size: 32px !important;
  margin: 0.2em 0 !important;
}

.news-info-text {
  word-break: break-word;
  white-space: normal;
}

.news-info-some {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}

.news-info-some .circle {
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

.news-info-some .circle:last-of-type {
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

.news-grid {
  display: grid;
  width: 100%;
  grid-template-rows: 100%;
  grid-template-columns: 100px 1fr 30px;
  align-items: center;
}

.news-image {
  height: 100px;
  width: 100px;
  background-size: cover;
  background-position: center;
}

.news-content {
  padding: 12px;
}

.fav-share-icons {
  display: flex;
  flex-flow: column;
  font-size: 20px;
}

/* TABBAR */
.tabbar {
  z-index: 4;
  position: fixed;
}

.ons-tabbar {
  z-index: 4 !important;
}

.news-toolbar {
  position: fixed;
  z-index: 2147483648;
}

.news-toolbar ul {
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
