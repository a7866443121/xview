<template>
  <transition name="x-fade">
    <div class="x-tag" :class="['x-tag-'+color, {'is-hover': hover}]">
      <span class="x-tag-desc"><slot></slot></span>
      <i class="icon-close x-tag-close" v-if="closable" @click="hiddenTag"></i>
    </div>
  </transition>
</template>

<script>
  export default{
    name: 'xTag',
    props: {
      closable: Boolean,
      hover:Boolean,
      color: {
        type: String,
        default: 'primary'
      }
    },
    data () {
      return {
        isclosed: false
      }
    },
    methods: {
      hiddenTag () {
        this.isclosed = true
        this.$emit('close')
      }
    }
  }
</script>
