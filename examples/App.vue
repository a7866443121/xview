<template>
  <div id="app">
    <mainHeader></mainHeader>
    <div class="container" v-if="!isIndex">
      <sideNav class="nav"></sideNav>
      <router-view class="view"></router-view>
    </div>
    <router-view class="page" v-else></router-view>
  </div>
</template>

<script>
  import mainHeader from './components/header.vue'
  import sideNav from './components/side-nav.vue'

  export default {
    name: 'app',
    data () {
      return {
        init: false,
        isIndex: true
      }
    },
    watch: {
      $route () {
        this.isIndex = this.$route.name === 'index'
      }
    },
    mounted () {
      //  这里模拟数据请求
      setTimeout(() => {
        this.init = true
      }, 250)
    },
    components: {
      mainHeader,
      sideNav
    }
  }
</script>

<style lang="scss">
  @import "./assets/scss/index.scss";
	#app{
		width: 100%;
		height: 100%;
		.container {
			width: 100%;
		  padding: 20px 40px;
		  background-color: #fff;
		  box-shadow: 0 4px 30px 0 rgba(223, 225, 230, 0.5);
		  height: calc(100% - 80px);
		  .nav {
		    float: left;
		    display: inline-block;
		    width: 210px;
		    height: calc(100% - 80px);
		    overflow: auto;
		  }
		  .view {
		    float: left;
		    display: inline-block;
		    width: calc(100% - 215px);
		    height: 100%;
		    overflow: auto;
		    padding: 32px 48px 48px;
		    box-sizing: border-box;
		  }
		}

		.container:after {
		  content: "";
		  clear: both;
		  display: block;
		}
		
	}
</style>
