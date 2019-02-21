<template>
  <div class="x-toast" :class="type">
    <!-- 内容 -->
    <transition appear name="fade" @after-enter="afterEnter" @after-leave="afterLeave">
      <div class="x-toast-box" v-if="show">
          <!-- 图标 -->
          <x-icon v-if="icon" :name="icon"/>
          <!-- 提示消息 -->
          {{message}}
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name:'toast',
  props: {
    message: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    },
    times:{
      type: Number,
      default: 3000
    },
    icon: {
      type: String,
      default: ''
    },
  },
  data(){
    return{
      show:true
    }
  },
  methods: {
    afterEnter() {
      // this.show=false;
    },
    afterLeave() {
      //销毁dom
      // this.$emit('destroy');
    },
  },
  mounted() {
    console.log(this.message)
  },
};
</script>
