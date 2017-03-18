<template>
	<div class="header">
		<div class="content_wrapper">
      <div class="avatar">
        <img width="64" height="64" :src="seller.avatar">
      </div>
      <div class="bulletin-wrapprt"></div>
    </div>
	</div>
</template>

<script type="text/ecmascript-6">
	export default {
	    props: {
        seller: {
	            type: Object
          }
      }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
