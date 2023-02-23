import React from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import {eventPanelStyles} from './styles';

/**
 *
 * @param {*} param0
 * @returns EventPanel
 */
export default React.memo(function EventPanel({...props}) {
  /**
   *
   * @param {*} param0
   * @returns
   */
  const _renderitem = ({item}) => {
    return (
      <TouchableOpacity
        style={eventPanelStyles.renderItemStyle}
        activeOpacity={0.7}>
        <Image source={item.icon} />
        <Text style={eventPanelStyles.desc}>{item.description}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{alignItems: 'center', ...props.panelStyle}}>
      <FlatList
        data={[
          {
            id: 0,
            icon: require('../../utils/assets/images/like(1)_2.png'),
            description: '10',
          },
          {
            id: 1,
            icon: require('../../utils/assets/images/like(1).png'),
            description: '50',
          },
          {
            id: 2,
            icon: require('../../utils/assets/images/noun_Share_3304093.png'),
            description: 'Share',
          },
          {
            id: 3,
            icon: require('../../utils/assets/images/noun_Heart_2553737.png'),
            description: 'Favorite',
          },
          {
            id: 4,
            icon: require('../../utils/assets/images/money.png'),
            description: 'Donate',
          },
        ]}
        horizontal
        bounces={false}
        scrollEnabled={false}
        renderItem={_renderitem}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={eventPanelStyles.contentContainerStyle}
        keyExtractor={(item, index) => `${item.id}-${index}`}
      />
    </View>
  );
});
