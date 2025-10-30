import React, {useEffect} from 'react';
import { View } from 'react-native';
import * as ZegoUIKit from '@zegocloud/zego-uikit-prebuilt-call-rn';

export default function CallScreen({ route, navigation }) {
  const { userName, callID } = route.params;
  const APP_ID = Add_FROM_ZEGO;
  const APP_SIGN = 'Add_FROM_ZEGO'; // Replace with your actual AppSign
  const userID = String(Math.floor(Math.random() * 10000)); // Unique user ID per device/session

  useEffect(() => {
    console.log('CallScreen mounted with:', {
      APP_ID,
      userName,
      callID,
      userID
    });
  }, []);
  return (
    <View style={{ flex: 1 }}>
       {/* <ZegoUIKit.ZegoUIKitPrebuiltCall
        appID={APP_ID}
        appSign={APP_SIGN}
        userID={userID}
        userName={userName}
        callID={callID}
        config={{
          turnOnCameraWhenJoining: true,
          turnOnMicrophoneWhenJoining: true,
          onHangUp: () => {
            navigation.popToTop();
          },
        }}
      /> */}

<ZegoUIKit.ZegoUIKitPrebuiltCall
        appID={APP_ID}
        appSign={APP_SIGN}
        userID={userID}
        userName={userName}
        callID={callID}
        config={{
          turnOnCameraWhenJoining: true,
          turnOnMicrophoneWhenJoining: true,
          
          // CRITICAL: Force show self view in one-on-one mode
          onOnlySelfInRoom: () => {
            console.log('Alone in call - showing self view');
          },
          
          // Use gallery layout instead of one-on-one to always see yourself
          layout: {
            type: 2, // 2 = gallery layout (always shows all participants including yourself)
          },
          
          // Alternative: Use grid layout
          // layout: {
          //   type: 1, // 1 = grid layout
          // },
          
          onHangUp: () => {
            navigation.popToTop();
          },
        }}
      />
      
          </View>
  );
}
