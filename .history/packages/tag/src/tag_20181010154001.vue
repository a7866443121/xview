<template>
  <transition name="x-fade">
    <div v-if="isclosed" class="x-tag" :class="['x-tag-'+color, {'is-hover': ishover}]">
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
      ishover:Boolean,
      color: {
        type: String,
        default: 'primary'
      },
      name
    },
    data () {
      return {
        isclosed: true
      }
    },
    methods: {
      hiddenTag (e) {
        this.isclosed = false;
        this.$emit('on-close',[e,name]);
      }
    }
  }
</script>
