/**
 * 郝建明 20160329
 */

import React, {
    StyleSheet,
    Component ,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

 export default class Button extends Component {
    //构造
    constructor(props)
    {
        super(props);
        //  初始状态
        this.state= {
            disabled:false,

        };

    }
    customPressHandler = () =>
{
// const {dianjishijian} = this.props;
//     dianjishijian();
        this.disable();
        const {onPress} =this.props;
        onPress(this.enable);
}
     enable = () =>
     {
         this.setState({
         disabled:false,
         })
     }
     disable = () =>
     {
         this.setState({
             disabled:true,
         })
     }


render() {
    //解构 一次取出多个属性
    const {text,beijingse } =this.props;
    //基本等于
    // const text = this.props.text;
    return (
        <View style={styles.container}>

    <TouchableOpacity
        disabled = {this.state.disabled}
        style = {[styles.button,{backgroundColor:beijingse} ,this.state.disabled && styles.disabled]}
     onPress = {this.customPressHandler}
>
<Text
    style={styles.buttonText}
>{this.props.text}</Text>
    </TouchableOpacity>
    </View>
);
}
}

const styles = StyleSheet.create({
    button:
    {
        //   按钮的高度
        height:40,
        //按钮的宽度
        width:100,
        //按钮的圆角
        borderRadius:20,
        //按钮的背景颜色
        backgroundColor:'green',
        justifyContent:'center',
        overflow:'hidden'
    },
    buttonText:{

        textAlign:'center',
        color:'white'
    },
    disabled:
    {
        backgroundColor:'gray'
    }
});

