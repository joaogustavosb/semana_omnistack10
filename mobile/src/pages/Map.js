import React, { useEffect } from 'react'
import { StyleSheet } from 'react-native'
import MapView from 'react-native-maps'
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location'
function Map() {

    useEffect(() => {
        async function loadInitalLocaltion() {
            const { granted } = await requestPermissionsAsync();
            if (granted) {
                console.log("permissão  permitida")
            } else {
                console.log("permissão não permitida")
            }
        }
    }, [])


    return <MapView  />
}


// Estilização

const styles = StyleSheet.create({
    map: {
        flex: 1
    }
})

export default Map