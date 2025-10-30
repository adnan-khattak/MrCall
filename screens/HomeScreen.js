import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  const [userName, setUserName] = useState('');
  const [callID, setCallID] = useState('');

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      <Text style={{ fontSize: 22, marginBottom: 20 }}>Join or Start a Call</Text>

      <TextInput
        placeholder="Enter your name"
        value={userName}
        onChangeText={setUserName}
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          width: '100%',
          padding: 10,
          borderRadius: 5,
          marginBottom: 10,
        }}
      />

      <TextInput
        placeholder="Enter Call ID (room code)"
        value={callID}
        onChangeText={setCallID}
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          width: '100%',
          padding: 10,
          borderRadius: 5,
          marginBottom: 20,
        }}
      />

      <Button
        title="Join Call"
        onPress={() => {
          if (!userName || !callID) {
            alert('Please enter your name and Call ID');
            return;
          }
          navigation.navigate('CallScreen', { userName, callID });
        }}
      />
    </View>
  );
}
