<template>
  <button
    @click="click($event)"
    class="x-button" 
    :disabled="disabled" 
    :class="[
    type ? 'x-button-' + type : '',
    	{
    		'is-round': round,
    		'is-radius': radius,
    		'is-disabled':disabled,
    	},
    ]"
  >
    <slot></slot>
  </button>
</template>
<script>
  export default{
    name: 'xButton',
     props: {
      type: {
        type: String,
        default: ''
      },
      plain: Boolean,
      disabled: Boolean,
      round: Boolean,
      radius:Boolean,
    },
    data () {
      return {}
    },
    methods: {
    	click(e){		    		
    		this.$emit('click',e);
    	}
    }
  }
</script>
