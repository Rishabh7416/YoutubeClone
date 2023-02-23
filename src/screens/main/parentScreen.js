import React from 'react';
import {useDispatch} from 'react-redux';
import {mainScreenStyle} from './styles';
import mockData from '../../utils/mockData';
import Card from '../../components/customCards/card';
import {normalize, vh} from '../../utils/dimensions';
import {useNavigation} from '@react-navigation/native';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';

export default function ParentScreen() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [currIndex, setCurrIndex] = React.useState(0);

  const currentItemIn = index => setCurrIndex(index);

  const _renderItem = ({item, index}) => {
    switch (currIndex) {
      case 0:
      case 1:
        return (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              dispatch({type: 'INFO', payload: item});
              navigation.navigate('screen', {currentIndex: index});
            }}>
            <Card
              title={item.title}
              thumbnail={item.thumb}
              channelIcon={item.channelIcon}
            />
          </TouchableOpacity>
        );
      case 2:
    }
  };

  const data = () => {
    switch (currIndex) {
      case 0:
        return [''];
      case 1:
        return mockData.categories[0].videos;
      case 2:
        return [''];
    }
  };

  const flatlistData = data();

  const topBar = () => (
    <View style={{backgroundColor: 'white'}}>
      <View style={mainScreenStyle.contentStyle}>
        {[{title: 'Channel'}, {title: 'Videos'}, {title: 'Articles'}].map(
          (item, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => currentItemIn(index)}
                style={
                  currIndex === index
                    ? mainScreenStyle.buttonContainer
                    : {
                        height: normalize(35),
                        width: vh(90),
                        justifyContent: 'center',
                      }
                }>
                <Text
                  style={
                    currIndex === index
                      ? mainScreenStyle.titleStyle
                      : [mainScreenStyle.titleStyle, {color: 'grey'}]
                  }>
                  {item.title}
                </Text>
              </TouchableOpacity>
            );
          },
        )}
      </View>
    </View>
  );

  const listEmpty = () => <ShimmerComponent />;

  return (
    <FlatList
      bounces={false}
      data={flatlistData}
      renderItem={_renderItem}
      stickyHeaderIndices={[0]}
      ListHeaderComponent={topBar}
      ListEmptyComponent={listEmpty}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={mainScreenStyle.contentContainerStyle}
    />
  );
}
