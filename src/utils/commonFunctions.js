import Share from 'react-native-share';

const Sharing = (url, successCallback, failureCallback) => {
  Share.open({
    url: url,
  })
    .then(response => successCallback(response))
    .catch(error => failureCallback(error));
};

export const commonFunctions = {
  ShareContent: Sharing,
};
