<style>
  .x-tag{
    margin: 10px;
  }
</style>

# Tag 标签
----
### 基础用法
由`type`属性来选择tag的类型，也可以通过`color`属性来自定义背景色。

<div class="demo-block">
	<div>
    <x-tag>标签一</x-tag>
	  <x-tag color="#243CFF">标签二</x-tag>
	  <x-tag color="#F16969">标签三</x-tag>
	  <x-tag color="#A839CA">标签四</x-tag>
	</div>
  <div>
  <div>
	  <x-tag isSole>单色标签</x-tag>
    <x-tag isRound>圆端标签</x-tag>
	  <x-tag isSole isRound>单色圆端</x-tag>
	  <x-tag isSole color="#F16969">色值单色</x-tag>
	  <x-tag isRound color="#F16969">色值圆端</x-tag>
	  <x-tag isSole isRound color="#F16969">综合标签</x-tag>
 	</div>
  <div>
    <x-tag isRound isSole>默认标签</x-tag>
	  <x-tag isRound isSole size="medium">中等标签</x-tag>
	  <x-tag isRound isSole size="small">小型标签</x-tag>
	  <x-tag isRound isSole size="mini">超小标签</x-tag>
 	</div>
</div>

::: demo
```html

<div>
  <x-tag>标签一</x-tag>
  <x-tag color="#243CFF">标签二</x-tag>
  <x-tag color="#F16969">标签三</x-tag>
  <x-tag color="#A839CA">标签四</x-tag>
</div>
<div>
  <x-tag isSole>单色标签</x-tag>
  <x-tag isRound>圆端标签</x-tag>
  <x-tag isSole isRound>单色圆端</x-tag>
  <x-tag isSole color="#F16969">色值单色</x-tag>
  <x-tag isRound color="#F16969">色值圆端</x-tag>
  <x-tag isSole isRound color="#F16969">综合标签</x-tag>
</div>
<div>
  <x-tag isRound isSole>默认标签</x-tag>
  <x-tag isRound isSole size="medium">中等标签</x-tag>
  <x-tag isRound isSole size="small">小型标签</x-tag>
  <x-tag isRound isSole size="mini">超小标签</x-tag>
</div>

```
:::



### 可移除标签
设置```closable```属性可以定义一个标签是否可移除。默认的标签移除时会附带渐变动画，它接受一个Boolean，true 为关闭。
<div class="demo-block">
<x-tag
  :key="tag.name"
  v-for="(tag, index) in dynamicTags" 
  closable 
  :color="tag.color" 
  :isRound="tag.isRound" 
  :isSole="tag.isSole" 
  :size="tag.size"
  @onClose="handleClose(tag)">
  {{tag.name}}
</x-tag>
</div>
<script>
export default {
    data() {
      return {
        dynamicTags: [{
           name: '标签一',
           color:'#409EFF',
           isRound: true,
        },{
           name: '标签二',
           color: '#67c23a',
           isSole: true,
        }, {
           name: '标签三',
           color: '#909399',
           size: 'mini',
        }, {
           name: '标签四',
           color: '#e6a23c',
           size: 'small',         
        }, {
            name: '标签五',
            color: '#f56c6c'
        }]
      };
    },
    methods: {
      handleClose(tag) {
        console.log(tag);
      }
    }
  }
</script>


::: demo
```html

<template>
  <x-tag
    :key="tag.name"
    v-for="(tag, index) in dynamicTags" 
    closable 
    :color="tag.color" 
    :isRound="tag.isRound" 
    :isSole="tag.isSole" 
    :size="tag.size"
    @onClose="handleClose(tag)"
  >
    {{tag.name}}
</x-tag>
</template>
<script>
export default {
    data() {
      return {
        dynamicTags: [{
           name: '标签一',
           color:'#409EFF',
           isRound: true,
        },{
           name: '标签二',
           color: '#67c23a',
           isSole: true,
        }, {
           name: '标签三',
           color: '#909399',
           size: 'mini',
        }, {
           name: '标签四',
           color: '#e6a23c',
           size: 'small',         
        }, {
            name: '标签五',
            color: '#f56c6c'
        }]
      };
    },
    methods: {
      handleClose(tag) {
        console.log(tag);
      }
    }
  }
</script>

```
:::

## API

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| name | 用于触发关闭事件时的回调 | Boolean | — | false |
| color | 色值 | String |  `具体的色值` | #333333 |
| isSole | 是否是单色背景 | Boolean | — | false |
| isRound | 是否两端圆型 | Boolean | — | false |
| closable | 是否可关闭 | Boolean | — | false |
| size | 大小 | String | `medium`, `small`, `mini` | null |

## Tag 事件

| 事件名称      | 说明          | 回调参数  |
|---------- |-------------- |---------- |
| onClose | 点击关闭按钮时触发 | - |
