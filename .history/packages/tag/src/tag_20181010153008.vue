<template>
  <transition name="x-fade">
    <div class="x-tag" :class="['x-tag-'+color, {'is-hover': ishover}]">
      <span class="x-tag-desc"><slot></slot></span>
      <i class="icon-close x-tag-close" v-if="closable"></i>
    </div>
  </transition>
</template>

<script>
  export default{
    name: 'xTag',
    props: {
      closable: Boolean,
      ishover:Boolean,
      color: {
        type: String,
        default: 'primary'
      }
    },
    data () {
      return {

      }
    },
    methods: {
      
    }
  }
</script>
