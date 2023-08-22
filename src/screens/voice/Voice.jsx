import {View, Text} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import Footer from './molecules/footer/Footer';
import styles from './style';
import ChatList from './organizer/chatList/ChatList';
import Voice from '@react-native-voice/voice';
import {Configuration, OpenAIApi} from 'openai';

const configuration = new Configuration({
  apiKey: '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',
});
const openai = new OpenAIApi(configuration);
const VoiceScreen = () => {
  const [pitch, setPitch] = useState('');
  const [error, setError] = useState('');
  const [end, setEnd] = useState('');
  const [started, setStarted] = useState(false);
  const [results, setResults] = useState([]);
  const [partialResults, setPartialResults] = useState([]);

  const chatListRef = useRef()

  useEffect(() => {
    sendMessageToChatGpt('hi');
    //Setting callbacks for the process status
    Voice.onSpeechStart = onSpeechStart;
    Voice.onSpeechEnd = onSpeechEnd;
    Voice.onSpeechError = onSpeechError;
    Voice.onSpeechResults = onSpeechResults;
    Voice.onSpeechPartialResults = onSpeechPartialResults;
    Voice.onSpeechVolumeChanged = onSpeechVolumeChanged;

    return () => {
      //destroy the process after switching the screen
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const onSpeechStart = e => {
    //Invoked when .start() is called without error
    // console.log('onSpeechStart: ', e);
    setStarted(true);
  };
  const onSpeechEnd = e => {
    //Invoked when SpeechRecognizer stops recognition
    // console.log('onSpeechEnd: ', e);
    setEnd('√');
  };

  const onSpeechError = e => {
    //Invoked when an error occurs.
    // console.log('onSpeechError: ', e);
    setError(JSON.stringify(e.error));
  };

  const onSpeechResults = e => {
    //Invoked when SpeechRecognizer is finished recognizing
    console.log('onSpeechResults: ', e);
    setResults(e.value);
    chatListRef.current.loadNewData(e)
  };

  const onSpeechPartialResults = e => {
    // console.log("ee",e)
    //Invoked when any results are computed
    // console.log('onSpeechPartialResults: ', e);
    // setPartialResults(e.value);
  };

  const onSpeechVolumeChanged = e => {
    //Invoked when pitch that is recognized changed
    // console.log('onSpeechVolumeChanged: ', e);
    setPitch(e.value);
  };
  const startRecognizing = async () => {
    //Starts listening for speech for a specific locale
    try {
      await Voice.start('en-US');
      setPitch('');
      setError('');
      setStarted(true);
      setResults([]);
      setPartialResults([]);
      setEnd('');
    } catch (e) {
      //eslint-disable-next-line
      console.error(e);
    }
  };


  const stopRecognizing = async () => {
    //Stops listening for speech
    try {
      await Voice.stop();
    } catch (e) {
      //eslint-disable-next-line
      console.error(e);
    }
    setStarted(false)
  };

  const sendMessageToChatGpt = async messages => {
    // try {
    //   const chatCompletion = await openai.createChatCompletion({
    //     model: 'gpt-3.5-turbo',
    //     messages: [{role: 'user', content: 'Hello world'}],
    //   });
    //   console.log(chatCompletion.data.choices[0].message);
    // } catch (error) {
    //   throw error;
    // }
  };

  return (
    <View style={styles.container}>
      <ChatList ref={chatListRef}/>
      <Footer startRecognizing={startRecognizing} stopRecognizing={stopRecognizing} started={started}/>
    </View>
  );
};

export default VoiceScreen;
