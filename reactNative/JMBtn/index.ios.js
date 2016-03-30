/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  StyleSheet,
  Component ,
  Text,
  View,
TouchableOpacity
} from 'react-native';
import Button from './sre/component/Button';
class JMBtn extends Component {
  //构造
  constructor(props)
  {
    super(props);
  //  初始状态
    this.state= {status:1};

  }
  customPressHandler = () =>
  {

    alert('你按下了按钮,当前状态是'+this.state.status);
  }
  fetchData = (enable)=>
  {
    
    // alert('正在获取');
    this.timer = setTimeout(() =>
    {
      enable();

    },3000);


  }
  render() {
    return (
      <View style={styles.container}>
        {/*props属性*/}
        { /* <Button text=" 确定" beijingse="red" dete="2016-03-30" object={{a:'b'}} />
         <Button text="取消" beijingse="gray" dianjishijian={()=>{alert('你点击了取消')}} /> */}
        {/*ref就相当于id,标记和引用组件 ref="Button"*/}
        <Button  onPress = {this.fetchData} text="提交" beijingse="red"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({


  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});

AppRegistry.registerComponent('JMBtn', () => JMBtn);
