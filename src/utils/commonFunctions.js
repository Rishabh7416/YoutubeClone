import {Animated} from 'react-native';
import Share from 'react-native-share';

const Sharing = (url, successCallback, failureCallback) => {
  Share.open({
    url: url,
  })
    .then(response => successCallback(response))
    .catch(error => failureCallback(error));
};

const showMoreLess = (ref, state) => {
  Animated.timing(ref, {
    toValue: state ? 0 : 1,
    duration: 500,
    useNativeDriver: true,
  }).start();
};

export const commonFunctions = {
  ShareContent: Sharing,
  showAnimation: showMoreLess,
};
