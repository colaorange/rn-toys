import { useCallback, useState } from "react";
import { Button, Image, Text, useWindowDimensions, View } from "react-native";

export default function Index() {
    const [count, setCount] = useState(0)
    const onPress = useCallback(() => {
        setCount((c) => c + 1)
    }, [])

    const dim = useWindowDimensions()
    const size = Math.min(dim.width, dim.height)

    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                gap: 4
            }}
        >
            <Image source={require('@assets/images/icon.png')} style={{ width: size, height: size, resizeMode: 'stretch' }} />
            <Button onPress={onPress} title={`Count`} />
            <Text>{count}</Text>
        </View>
    );
}