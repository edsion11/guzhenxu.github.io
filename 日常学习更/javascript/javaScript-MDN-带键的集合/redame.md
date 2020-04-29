## 集合

[https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Keyed_collections][map]
[https://developer.mozilla.org/zh-cn/docs/web/javascript/reference/global_objects/map][map]

### 使用 for..of 方法迭代 Map

```javascript
for (let [key, value] of myMap) {
  console.log(key + ' = ' + value)
}
```

### 使用 forEach() 方法迭代 Map

```javascript
myMap.forEach(function (value, key) {
  console.log(key + ' = ' + value)
})
```
