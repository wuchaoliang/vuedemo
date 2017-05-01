<template>
  <div>
  		<v-header :seller="seller"></v-header>
		<div class="tab border-1px">
			<div class="tab-items">
				<router-link to="/goods"><div>商品</div></router-link>
			</div>
			<div class="tab-items">
				<router-link to="/ratings"><div>评价</div></router-link>
			</div>
			<div class="tab-items">
				<router-link to="/sellers"><div>商家</div></router-link>
			</div>
		</div>
    <router-view :seller="seller"></router-view>
  </div>
</template>

<script>
import header from 'components/header/header.vue'
export default {
  name: 'app',
  components: {
    'v-header': header
  },
  data() {
    return {
      seller: {}
    }
  },
  created() {
    this.$http.get('/api/seller').then((response) => {
      response = response.body
    if (response.errno === 0) {
      this.seller = response.data;

      console.log(this.seller)
    }
    })
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "./common/stylus/mixin.styl"
  .tab
    display: flex
    width: 100%
    height: 40px
    line-height: 40px
    //border-bottom:1px solid rgba(7,17,27,0.1)
    border-1px(rgba(7,17,27,0.1))
  		.tab-items
  			flex: 1
  			text-align: center
  			font-size: 14px
  			color: rgb(77,85,93)
  			.active
  				color: rgb(240,20,20)
</style>
