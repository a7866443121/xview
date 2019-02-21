<template>
    <svg class="rx-icon" aria-hidden="true" :name="name" @click="$emit('click',$event)">
        <use :xlink:href="'#' + name"></use>
    </svg>
</template>

<script>
export default {
    name:'xIcon',
    props:{
        name:{
            type:String
        }
    }
}
</script>

<style>
    .rx-icon {
       width: 1em;
       height: 1em;
       vertical-align: -0.15em;
       fill: currentColor;
       overflow: hidden;
    }
</style>
