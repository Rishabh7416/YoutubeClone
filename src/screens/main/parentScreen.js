import {
  View,
  Text,
  FlatList,
  NativeModules,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import dataMap from './dataMap';
import {useDispatch} from 'react-redux';
import colors from '../../utils/colors';
import {mainScreenStyle} from './styles';
import mockData from '../../utils/mockData';
import Card from '../../components/customCards/card';
import {useNavigation} from '@react-navigation/native';
import ShimmerComponent from '../../components/customShimmer/shimmerComponent';

export default function ParentScreen() {
  const emptyData = [''];
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [page, setPage] = React.useState(1);
  const _data = mockData.categories[0].videos;
  const [loader, setLoader] = React.useState(false);
  const currentItemIn = index => setCurrIndex(index);
  const [currIndex, setCurrIndex] = React.useState(1);
  const {HEIGHT} = NativeModules?.StatusBarManager;

  /**
   *
   * @param {*} item
   * @param {*} index
   */
  const cardAction = (item, index) => {
    dispatch({type: 'INFO', payload: item});
    navigation.navigate('screen', {currentIndex: index});
  };

  /**
   *
   */
  React.useEffect(() => {
    setLoader(false);
  }, [page]);

  const _renderItem = React.useCallback(({item, index}) => {
    switch (currIndex) {
      case 0:
      case 1:
        return (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => cardAction(item, index)}>
            <Card
              title={item.title}
              thumbnail={item.thumb}
              channelIcon={item.channelIcon}
            />
          </TouchableOpacity>
        );
      case 2:
    }
  }, []);

  /**
   *
   * @returns different data
   */
  const _paginationData = page == 1 ? _data.slice(0, 5) : _data;
  const data = () => {
    switch (currIndex) {
      case 0:
        return emptyData;
      case 1:
        return _paginationData;
      case 2:
        return emptyData;
    }
  };
  const flatlistData = data();

  /**
   *
   */
  const _onEndReached = () => {
    if (page < 2) {
      setLoader(true);
      setTimeout(() => setPage(prev => prev + 1), 1000);
    }
  };

  /**
   *
   * @returns loader
   */
  const _listFooterComponent = () => (
    <ActivityIndicator animating={loader} size="large" />
  );

  /**
   *
   * @returns shimmer
   */
  const listEmpty = () => <ShimmerComponent />;

  /**
   *
   * @returns
   */
  const TopBar = () => (
    <View style={mainScreenStyle.container}>
      <View style={mainScreenStyle.contentStyle}>
        {dataMap.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => currentItemIn(index)}
            style={
              currIndex === index
                ? mainScreenStyle.buttonContainer
                : mainScreenStyle.buttonContainerChange
            }>
            <Text
              style={
                currIndex === index
                  ? mainScreenStyle.titleStyle
                  : [mainScreenStyle.titleStyle, {color: colors.grey}]
              }>
              {item.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );

  return (
    <View style={[mainScreenStyle.mainContainer, {paddingTop: HEIGHT}]}>
      <FlatList
        bounces={false}
        data={flatlistData}
        renderItem={_renderItem}
        stickyHeaderIndices={[0]}
        onEndReached={_onEndReached}
        ListHeaderComponent={TopBar}
        ListEmptyComponent={listEmpty}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={_listFooterComponent}
        contentContainerStyle={mainScreenStyle.contentContainerStyle}
      />
    </View>
  );
}
