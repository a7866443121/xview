# Button 按钮
----
### 基础用法
只有一个 Button 的样式。

<div class="demo-block">
    <x-button>一个按钮</x-button>
</div>

::: demo
```html

<div>
  <x-button>一个按钮</x-button>
</div>

```
:::

### 禁用状态

按钮不可用状态。

<div class="demo-block">
  <div>
    <x-button class="disabled">被禁用的按钮</x-button>
  </div>
</div>

::: demo
```html

<div>
  <x-button class="disabled">被禁用的按钮</x-button>
</div>

  
```
:::

### 图标按钮
非多色的话图标建议使用unicode,当然足够的自主是必须的,symbol也随意
<div class="demo-block">
  <x-button><i class="iconfont">&#xe68b;</i>搜索</x-button>
</div>

::: demo
```html

<x-button><i class="iconfont">&#xe68b;</i>搜索</x-button>

```
:::


### 暴露的方法
非多色的话图标建议使用unicode,当然足够的自主是必须的,symbol也随意

::: demo
```html

@click="$emit('click')"

```
:::