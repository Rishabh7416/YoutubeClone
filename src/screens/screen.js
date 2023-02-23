import React from 'react';
import mockData from '../utils/mockData';
import Card from '../components/customCards/card';
import {useRoute} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import VideoPlayer from '../components/video/videoPlayer';
import VideoInfo from '../components/videoInfo/videoInfo';
import EventPanel from '../components/eventPanel/eventPanel';
import {
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import ChannelInfo from '../components/channelInfo/channelInfo';

export default function Screen() {
  const route = useRoute();
  const dispatch = useDispatch();
  const {currentIndex} = route.params;
  const flatlistData = mockData.categories[0].videos;
  const {payload} = useSelector(store => store.informationReducer);
  const videos = payload.sources[0];

  /**
   *
   * @returns
   */
  const listHeader = () => {
    return (
      <React.Fragment>
        <View style={{marginTop: 30}}>
          <VideoInfo title={payload.title} desc={payload.description} />
          <EventPanel panelStyle={{marginVertical: 25}} />
        </View>
        <ChannelInfo
          subscribers={'15k Subscribers'}
          channelName={'Technical Guruji'}
          channelIcon={payload.thumb}
        />
      </React.Fragment>
    );
  };

  /**
   *
   * @param {*} item
   */
  const onPressEvent = item => {
    dispatch({type: 'INFO', payload: item});
  };

  /**
   *
   */
  const filteredData = React.useMemo(
    () =>
      flatlistData.filter((item, index) => {
        if (currentIndex !== index) {
          return item;
        }
      }),
    [],
  );

  /**
   *
   * @param {*} param0
   * @returns
   */
  const _renderItem = ({item, index}) => {
    return (
      <TouchableOpacity onPress={() => onPressEvent(item)} activeOpacity={0.9}>
        <Card
          title={item.title}
          thumbnail={item.thumb}
          channelIcon={item.thumb}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <VideoPlayer vid={videos} />
      <FlatList
        bounces={false}
        data={filteredData}
        renderItem={_renderItem}
        ListHeaderComponent={listHeader}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
