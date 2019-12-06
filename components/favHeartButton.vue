<template>
  <div @click="checkLoginStatus()">
    <ios-heart-icon v-if="this.activeartist.favorite" />
    <ios-heart-empty-icon v-else />
  </div>
</template>
<script>
import Cookies from "js-cookie";
export default {
  props: ["activeartist"],
  methods: {
    checkLoginStatus() {
      if (Cookies.get("loggedIn") != 'true') {
        this.$ons.notification
          .confirm(
            "You need to be logged in to save your favorites. Log in now?"
          )
          .then(response => {
            if (response == 1) {
              Cookies.set("loggedIn", 'true');
              this.$ons.notification.toast("Login successful.", {
                timeout: 1000,
                animation: "fall"
              });
              this.addArtistFavorite();
            }
          });
      } else {
        this.addArtistFavorite();
      }
    },
    addArtistFavorite() {
      this.activeartist.favorite = !this.activeartist.favorite;
      if (this.activeartist.favorite == true) {
        this.$emit('emit-add-favorite', this.activeartist)
        this.$ons.notification.toast(
          "+ " + this.activeartist.title + " was added to your favorites!",
          { timeout: 1000, animation: "fall" }
        );
      } else {
        this.$ons.notification.toast(
          "- " + this.activeartist.title + " was removed from your favorites!",
          { timeout: 1000, animation: "fall" }
        );
      }
    }
  }
};
</script>
