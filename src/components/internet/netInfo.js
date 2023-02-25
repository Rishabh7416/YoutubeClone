import React from 'react';
import Modal from 'react-native-modal';
import {StyleSheet} from 'react-native';
import NetworkIssue from './netwrokIssue';
import NetInfo from '@react-native-community/netinfo';

export default function NetInfo() {
  const [connected, setConnected] = React.useState(true);

  React.useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setConnected(state.isConnected);
    });
    return () => unsubscribe();
  }, []);

  if (connected) {
    return null;
  }

  return (
    <Modal
      coverScreen
      avoidKeyboard
      isVisible={!connected}
      animationInTiming={600}
      animationOutTiming={300}
      animationOut="fadeOutDown"
      style={styles.modalContainer}>
      <NetworkIssue />
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
  },
});
