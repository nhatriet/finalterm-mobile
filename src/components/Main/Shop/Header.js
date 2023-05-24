
import React, { Component } from 'react';
import { 
    Text,
    View,
    TouchableOpacity, Dimensions, Image,
} from 'react-native';

import icLogo from '../../../media/appIcon/ic_logo.png'
import icMenu from '../../../media/appIcon/ic_menu.png'

const { height } = Dimensions.get('window');

export default class Header extends Component {

    render() {
        const { wrapper, row1, iconStyle, titleStyle } = styles;
        return (
            <View style={wrapper}>
                <View style={row1}>
                    <TouchableOpacity onPress={this.props.onOpen}>
                        <Image source={icMenu} style={iconStyle} />
                    </TouchableOpacity>
                    <Text style={titleStyle}>AMOUR</Text>
                    <Image source={icLogo} style={iconStyle} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: { 
        height: height / 8, 
        backgroundColor: '#34B089', 
        padding: 10, 
        justifyContent: 'space-around' 
    },
    row1: { flexDirection: 'row', justifyContent: 'space-between' },
    titleStyle: { color: '#FFF', fontFamily: 'Avenir', fontSize: 20 },
    iconStyle: { width: 25, height: 25 }
});