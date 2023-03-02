import React from 'react';
import {screenStyle} from './styles';
import mockData from '../utils/mockData';
import {useRoute} from '@react-navigation/native';
import Card from '../components/customCards/card';
import {useDispatch, useSelector} from 'react-redux';
import VideoPlayer from '../components/video/videoPlayer';
import VideoInfo from '../components/videoInfo/videoInfo';
import EventPanel from '../components/eventPanel/eventPanel';
import ChannelInfo from '../components/channelInfo/channelInfo';
import {View, FlatList, Text, TouchableOpacity} from 'react-native';

export default function Screen() {
  const route = useRoute();
  const dispatch = useDispatch();
  const {currentIndex} = route.params;
  const topScroll = React.useRef(null);
  const flatlistData = mockData.categories[0].videos;
  const {payload} = useSelector(store => store.informationReducer);
  const videos = payload.sources[0];
  const {mode} = useSelector(state => state.themeReducer);

  const styles = screenStyle;

  const modeState = mode == 'light';

  /**
   * @returns
   */
  const listHeader = () => {
    return (
      <React.Fragment>
        <View style={screenStyle.renderContainer}>
          <VideoInfo title={payload.title} desc={payload.description} />
          <EventPanel panelStyle={screenStyle.eventPanelStyle} />
        </View>
        <ChannelInfo
          subscribers={'15k Subscribers'}
          channelName={'Technical Guruji'}
          channelIcon={payload.thumb}
        />
        <Text
          style={
            modeState
              ? styles.similarVideoText.lightMode
              : styles.similarVideoText.darkMode
          }>
          {'Similar Videos'}
        </Text>
      </React.Fragment>
    );
  };

  /**
   * @param {*} item
   */
  const onPressEvent = item => {
    dispatch({type: 'INFO', payload: item});
    topScroll.current.scrollToOffset({animated: true, offset: 0});
  };

  /**
   * @return filter item for flatList data
   */
  const filteredData = React.useMemo(
    () =>
      flatlistData
        .filter((item, index) => {
          if (currentIndex !== index) {
            if (payload.id !== item.id) {
              return item;
            }
          }
        })
        .splice(0, 5),
    [payload],
  );

  /**
   * @param {*} param0
   * @returns
   */
  const _renderItem = React.useCallback(({item}) => {
    return (
      <TouchableOpacity onPress={() => onPressEvent(item)} activeOpacity={0.9}>
        <Card title={item.title} thumbnail={item.thumb} />
      </TouchableOpacity>
    );
  }, []);

  /**
   * @main return
   */
  return (
    <View
      style={
        modeState ? styles.container.lightMode : styles.container.darkMode
      }>
      <VideoPlayer videos={videos} />
      <FlatList
        bounces={false}
        ref={topScroll}
        data={filteredData}
        renderItem={_renderItem}
        ListHeaderComponent={listHeader}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
      />
    </View>
  );
}
