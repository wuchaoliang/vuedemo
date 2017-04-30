<template>
  <div class="cartcontrol">
    <transition name="cart">
      <div @click="minusCart" class="cart-decrease" v-show="food.count>0">
        <span class="icon-remove_circle_outline"></span>
      </div>
    </transition>
    <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
    <div @click="addCart" class="cart-add icon-add_circle"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue';
  export default {
    props: {
      food: {
        type: Object
      }
    },
    methods: {
      minusCart(event) {
        console.log('cli');
        if (!event._constructed) {
          return;
        }
        if (!this.food.count) {
          Vue.set(this.food, 'count', 1);
        } else {
          this.food.count--;
        }
      },
      addCart(event) {
        console.log('cli');
        if (!event._constructed) {
          return;
        }
        if (!this.food.count) {
          Vue.set(this.food, 'count', 1);
        } else {
          this.food.count++;
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .cartcontrol
    font-size: 0
    display: inline-block
    .cart-decrease
      display: inline-block
      padding: 4px
      line-height: 24px
      font-size: 24px
      color: rgb(0, 160, 220)
      &.cart-enter-active, &.cart-leave-active
        transition: all 0.5s
      &.cart-enter, &.cart-leave-active
        opacity: 0
        background: rgba(7, 17, 27, 0)
    .cart-count
      display: inline-block
      vertical-align: top
      width: 12px
      padding-top: 6px

      line-height: 24px
      text-align: center
      font-size: 10px
      color: rgb(147, 153, 159)
    .cart-add
      display: inline-block
      padding: 6px
      line-height: 24px
      font-size: 24px
      color: rgb(0, 160, 220)
</style>
