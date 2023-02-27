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

const timeFormater = (trackTime, conditionalValues) => {
  var timeInMin = Math.floor(trackTime / 59);
  var timeInSec =
    timeInMin >= 1
      ? Math.round(trackTime) - timeInMin * 60
      : Math.round(trackTime);
  if (timeInMin == -1) {
    timeInMin = 0;
  }
  if (timeInSec == -1) {
    timeInSec = 0;
  }
  var result =
    timeInSec % 60 === 0
      ? `${timeInMin}:00`
      : timeInSec > 9
      ? `0${timeInMin}:${timeInSec}`
      : `0${timeInMin}:0${timeInSec}`;
  return result;
};

const formatTime = time => {
  const minutes = time >= 60 ? Math.floor(time / 60) : 0;
  const seconds = Math.floor(time % 60);

  return `${minutes >= 10 ? minutes : '0' + minutes}:${
    seconds >= 10 ? seconds : '0' + seconds
  }`;
};

export const commonFunctions = {
  ShareContent: Sharing,
  timeFormat: timeFormater,
  formattingTime: formatTime,
  showAnimation: showMoreLess,
};
