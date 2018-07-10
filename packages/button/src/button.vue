<template>
  <button
    @click="click($event)"
    class="w-button"
  >
    <slot></slot>
  </button>
</template>
<script>
  export default{
    name: 'xButton',
    props: {
      disabled: Boolean,
    },
    data () {
      return {}
    },
    methods{
    	click(e){		
    		this.$emit('click',e);
    	}
    }
  }
</script>
