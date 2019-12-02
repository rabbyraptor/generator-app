<template>
  <div>
    <h2 class="title">Program</h2>
    <v-ons-list>
      <v-ons-list-item expandable :expanded.sync="isExpanded">
        <div class="center" style="padding:12px; z-index:3;">
          <h3 style="font-size:24px;">Thursday Sep. 3rd</h3>
        </div>
        <div class="expandable-content">
          <v-ons-list-item v-for="artist in artists" :key="artist.title">
            <div class="artist-grid">
              <div class="artist-image" :style="{backgroundColor:artist.backgroundColor}"></div>
              <div class="artist-content">
                <p style="font-weight:bold;" v-html="artist.title" />
                <p v-html="artist.time" />
                <p v-html="artist.venue" />
              </div>
              <div class="fav-heart" @click="artist.favorite = !artist.favorite">
                <ios-heart-icon v-if="artist.favorite" />
                <ios-heart-empty-icon v-else />
              </div>
            </div>
          </v-ons-list-item>
        </div>
      </v-ons-list-item>
      <v-ons-list-item>
        <div class="center" style="padding:12px; line-height:1; z-index:3;">
          <h3 style="font-size:24px;">Friday Sep. 4th</h3>
        </div>
      </v-ons-list-item>
      <v-ons-list-item>
        <div class="center" style="padding:12px; line-height:1; z-index:3;">
          <h3 style="font-size:24px;">Saturday Sep. 5th</h3>
        </div>
      </v-ons-list-item>
    </v-ons-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isExpanded: true,
      artists: {
        artist1: {
          title: "Artist Name 1",
          time: "16:00",
          venue: "Venue 1",
          favorite: false,
          backgroundColor: "blue"
        },
        artist2: {
          title: "Artist Name 2",
          time: "18:30",
          venue: "Venue 2",
          favorite: true,
          backgroundColor: "red"
        },
        artist3: {
          title: "Artist Name 3",
          time: "19:00",
          venue: "Venue 3",
          favorite: false,
          backgroundColor: "black"
        },
        artist4: {
          title: "Artist Name 4",
          time: "19:30",
          venue: "Venue 4",
          favorite: false,
          backgroundColor: "blue"
        },
        artist5: {
          title: "Artist Name 5",
          time: "21:00",
          venue: "Venue 5",
          favorite: false,
          backgroundColor: "red"
        },
        artist6: {
          title: "Artist Name 6",
          time: "22:00",
          venue: "Venue 6",
          favorite: false,
          backgroundColor: "black"
        }
      }
    };
  }
};
</script>

<style>
.list-item,
.list-item__center {
  padding: 0;
}

.list-item__expandable-content{
  padding:0;
}

.artist-grid {
  display: grid;
  width:100%;
  grid-template-columns: 100px minmax(100px, 1fr) 30px;
  align-items: center;
}

.artist-image {
  height: 100px;
  width: 100px;
}

.artist-content {
  padding: 0 12px;
  font-size:20px;
}

.fav-heart {
  font-size: 20px;
}
</style>
