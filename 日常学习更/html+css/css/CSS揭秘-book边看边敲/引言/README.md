# 引言

## 减少代码重复

- 保持软件可维护

```css
padding: 6px 16px;
border: 1px solid #446d88;
border-radius: 4px;
background: #58a linear-gradient(#77a0bb, #58a);
box-shadow: 0 1px 5px gray;
color: white;
text-shadow: 0 -1px 1px #335116;
font-size: 20px;
line-height: 30px;
```

这段代码在可维护方面存在问题

- 先改变字号

```css
font-size: 20px;
line-height: 1.5;
```

将更多的绝对值定义的数据改为百分比或者`em`单位

```css
.button2 {
  padding: 0.3em 0.8em;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: #58a linear-gradient(hsla(0, 0%, 100%, 0.2), transparent);
  border-radius: 0.2em;
  box-shadow: 0 0.05em 0.25em rgba(0, 0, 0, 0.5);
  color: white;
  text-shadow: 0 -0.05em 0.05em rgba(0, 0, 0, 0.5);
  font-size: 125%;
  line-height: 1.5;
}
.button2.cancel {
  background-color: #c00;
}
```

- 代码易维护 vs 代码少
- currentColor
- 继承(inherit)
