<template>
  <div @click="addArtistFavorite()">
    <ios-heart-icon v-if="this.activeartist.favorite" />
    <ios-heart-empty-icon v-else />
  </div>
</template>
<script>
export default {
  props: [
    'activeartist'
  ],
  methods: {
    addArtistFavorite() {
            console.log(this.activeartist);
            
            this.activeartist.favorite = !this.activeartist.favorite;
            if (this.activeartist.favorite == true) {
                this.$ons.notification.toast('+ ' + this.activeartist.title + ' was added to your favorites!', { timeout: 1000, animation: 'fall' })
            }
            else {
                this.$ons.notification.toast('- ' + this.activeartist.title + ' was removed from your favorites!', { timeout: 1000, animation: 'fall' })
            }
        }
  },
}
</script>
