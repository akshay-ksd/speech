import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        height:"90%",
        width:"100%"
    },
    chatBubble: {
        padding: 10,
        borderRadius: 15,
        maxWidth: '80%',
        marginBottom: 10,
      },
      currentUserBubble: {
        alignSelf: 'flex-end',
        backgroundColor: 'purple', // Blue color for the current user's messages
      },
      otherUserBubble: {
        alignSelf: 'flex-start',
        backgroundColor: '#f0f0f0', // Light gray color for other user's messages
      },
      chatText: {
        color: '#fff', // White text color for the current user's messages
      },
});

export default styles;