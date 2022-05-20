import React from "react";
import {View, Image, Text, StyleSheet, SafeAreaView, Linking, StatusBar, Pressable} from 'react-native';

const colorGithub='#010409';
const colorFontgit = '#c9d1d9';
const colorFOntDarkgit = '#4f565e'

const imgProfilegit =
'https://avatars.githubusercontent.com/u/7879993?v=4';

const urlMyGithub = 'https://github.com/alex-almeida12';

const App = () => {

    const handlePressgotoGithub = async () => {
        
        console.log("Verificando Link");
        const res = await Linking.canOpenURL(urlMyGithub);

        if (res){
            console.log("Abrindo Link");
            await Linking.openURL(urlMyGithub);
        }

    }

    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={colorGithub} barStyle={'light-content'}/>
            <View style = {style.content}>
                <Image
                    accessibilityLabel="FOTO Alex Almeida" 
                    style={style.avatar} 
                    source={{url:imgProfilegit}}/>

                <Text
                accessibilityLabel="NOME Alex Almeida" 
                style = {[style.defautText, style.name]}>
                    Alex Almeida
                </Text>
                <Text 
                accessibilityLabel="Nickname Alex Almeida"
                style = {[style.defautText, style.nickname]}>
                    alex-almeida12
                </Text>                
                <Text 
                accessibilityLabel="Descrição Alex Almeida"
                style = {[style.defautText, style.description]}>
                    Dev Full Stak | Dev Javascritp | Dev Phyton
                </Text>
                <Pressable onPress={handlePressgotoGithub}>

                    <View style = {[style.button]}>
                        <Text style = {[style.defautText, style.textButton]}>Open in Github</Text>
                    </View>
                
                </Pressable>
              
            
            </View>
              
                
        </SafeAreaView>
    );
} 

export default App;

const style = StyleSheet.create({
    container: {
        backgroundColor: colorGithub,
        flex:1, //expandir para tela inteira.
        justifyContent: "center",
    
    },
    
    content: {
        alignItems: "center",
        padding: 20,
    },

    avatar: {
        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2,
    },

    defautText: {
        color: colorFontgit,
    },

    name: {
        marginTop: 20,
        fontSize: 26,
        fontWeight: 'bold',
    },

    nickname:{
        fontSize:16,
        color: colorFOntDarkgit,
    },

    description:{
        fontSize: 14,
        fontbold: 'bold',

    },

    button:{
        marginTop: 10,
        backgroundColor: colorFOntDarkgit,
        borderRadius:10,
        padding:20,
    },

    
    textButton:{
        fontSize: 14,
        fontbold: 'bold',
    },

});