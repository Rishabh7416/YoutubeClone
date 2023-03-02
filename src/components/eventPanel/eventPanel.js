import React from 'react';
import {useSelector} from 'react-redux';
import {eventPanelStyles} from './styles';
import eventPanelData from './eventPanelData';
import {commonFunctions} from '../../utils/commonFunctions';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';

/**
 *
 * @param {*} param0
 * @returns EventPanel
 */
export default React.memo(function EventPanel({...props}) {
  const {payload} = useSelector(store => store.informationReducer);
  const urlForShare = payload.sources[0];

  /**
   *
   * @param {*} param0
   * @returns
   */
  const _renderitem = React.useCallback(({item, index}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => actionOnButton(index)}
        style={eventPanelStyles.renderItemStyle}>
        <Image source={item.icon} style={eventPanelStyles.eventPanelIcons} />
        <Text style={eventPanelStyles.desc}>{item.description}</Text>
      </TouchableOpacity>
    );
  }, []);

  /**
   * sharingAction
   */
  const shareEvent = () => {
    commonFunctions.ShareContent(
      urlForShare,
      successResponse => {
        console.log(successResponse);
      },
      errorResponse => {
        console.log(errorResponse);
      },
    );
  };

  /**
   *
   * @param {*} currentIndex
   * @returns JSX for an individual icon
   */
  const actionOnButton = currentIndex => {
    switch (currentIndex) {
      case 0:
        return alert('like');
      case 1:
        return alert('dislike');
      case 2:
        return shareEvent();
      case 3:
        return alert('favorite');
      case 4:
        return alert('donate');
    }
  };

  /**
   *
   * @param {*} item
   * @param {*} index
   * @returns unique indentity to the items
   */
  const keyExtractor = (item, index) => `${item.id}-${index}`;

  return (
    <View style={[eventPanelStyles.container, props.panelStyle]}>
      <FlatList
        horizontal
        bounces={false}
        scrollEnabled={false}
        data={eventPanelData}
        renderItem={_renderitem}
        keyExtractor={keyExtractor}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={eventPanelStyles.contentContainerStyle}
      />
    </View>
  );
});
