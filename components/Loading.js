import React from 'react';
import { Image, View } from 'react-native';

const Loading = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image 
            source={require('../assets/loading_icon.gif')}
            style={{ width: 100, height: 100 }}
            />
      </View>
    )
}

export default Loading;
