<template>
  <div v-if="isclosed" class="x-tag" :class="[
    'x-tag-' + size, 
    {'x-tag-sole': isSole}, 
    {'x-tag-round': isRound}
  ]" :style="{'color': setColor}">
    <div class="x-tag-inner" :style="{'color': setColor}"><slot></slot></div>
    <div class="x-tag-close" v-if="closable" @click="hiddenTag"><i class="icon-iconset0127"></i></div>
    <div class="x-tag-bg" :style="{'background-color': color}"></div>
  </div>
</template>

<script>
  export default{
    name: 'xTag',
    props: {
      closable: Boolean,
      isSole: Boolean,
      isRound: Boolean,
      size: {
        type: String,
        default: 'default'
      },
      color: {
        type: String,
        default: 'rgba(0,0,0,0.65)'
      },
      value:{
        type: null
      }
    },
    computed: {
      setColor(){
        return this.isSole ? '#fff' : this.color;
      }
    },
    data () {
      return {
        isclosed: true
      }
    },
    methods: {
      hiddenTag (e) {
        this.$emit('onClose');
        this.isclosed = false;
      }
    }
  }
</script>
