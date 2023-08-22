import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:"10%",
        alignItems:"center",
        justifyContent:"center",
    },
    imageButton: {
        width: 40,
        height: 40,
    },
    button:{
        width:80,
        height:80,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:60,
        elevation:1,
        backgroundColor:"white",
        borderWidth:0.5,
        borderColor:"purple"
    }
});

export default styles;