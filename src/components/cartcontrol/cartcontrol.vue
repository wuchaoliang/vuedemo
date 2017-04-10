<template>
  <div class="cartcontrol">
    <div class="cart-decrease icon-remove_circle_outline" v-show="food.count>0"></div>
    <div class="cart-count" v-show="food.count>0"></div>
    <div class="cart-add icon-add_circle"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      food: {
        type: Object
      }
    },
    created() {
      console.log(this.food);
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .cartcontrol
    font-size: 0
    display: inline-block
    .cart-decrease
      display: inline-block
      line-height: 24px
      font-style: 24px
      padding: 6px
    .cart-count
      display: inline-block
    .cart-add
      display: inline-block
      line-height: 24px
      font-style: 24px
      padding: 6px
</style>
