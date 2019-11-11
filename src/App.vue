<template>
  <div id="app">
   <router-view></router-view>
   <FooterGuide v-view="$route.meta.showFooter"/>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    FooterGuide
  }
}
</script>

<style lang="stylus" rel="styleshet/stylus">
.app
   width 100%
   height 100%
   background #f5f5f5
</style>
