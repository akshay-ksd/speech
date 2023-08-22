import {View, Text, FlatList} from 'react-native';
import React, {useState, forwardRef, useImperativeHandle} from 'react';
import styles from './style';

const ChatList = (props, ref) => {
  const [data, setData] = useState([]);

  useImperativeHandle(ref, () => ({
    loadNewData: d => {
      let msg = d?.value.join(' ');
      loadNewData(d?.value[0]);
    },
  }));

  const loadNewData = message => {
    // Assuming "message" is the new message to be added
    setData(prevData => [...prevData, {msg: message}]);
  };

  const renderItem = ({item}) => {
    return (
      <View
        style={[
          styles.chatBubble,styles.currentUserBubble,
        ]}>
        <Text style={styles.chatText}>{item?.msg}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index}
        style={{padding:10}}
      />
    </View>
  );
};

export default forwardRef(ChatList);
