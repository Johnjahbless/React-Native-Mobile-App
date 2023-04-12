import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Modal } from 'react-native';
import { FloatingAction } from 'react-native-floating-action';
import { actions } from './Actions';


export default function MyFloatingButton() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
       <FloatingAction
    actions={actions}
    color='#505A8D'
    onPressItem={name => {
      console.log(`selected button: ${name}`);
    }}
  />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    marginBottom: 50,
  },
  button: {
    backgroundColor: '#009688',
    borderRadius: 50,
    height: 60,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  modalContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1,
    position: 'absolute',
    right: 0,
    padding: 20,
  },
  modalButton: {
    backgroundColor: '#212121',
    borderRadius: 50,
    height: 60,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
});
