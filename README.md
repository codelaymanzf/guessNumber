## 猜数字游戏
`react native`入门

## 查看效果
- 切换到根目录
- `yarn android`或者`yarn react-native run-android` （有效，此版本只配置了android环境）
- `yarn ios`或者`yarn react-native run-ios`

## 问题
- Q: 如何按回车就提交
- A: `TextInput`组件添加`onSubmitEditing`事件

- Q: 如何避免输入非数字?
- A: `TextInput`组件添加` keyboardType={'numeric'}`类型

- Q: 点击两次按钮才失去焦点，如何解决?
- A：参考 https://reactnative.cn/docs/scrollview.html#keyboardshouldpersisttaps
  <br>用`ScrollView`作为`Textinput`的外层，在`ScrollView上`使用`keyboardShouldPersistTaps={'always'}`