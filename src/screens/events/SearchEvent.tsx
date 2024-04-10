import {View, Text} from 'react-native';
import React from 'react';
import {ContainerComponent} from '../../components';

const SearchEvents = ({navigation, route}: any) => {
  const {isFilter}: {isFilter: boolean} = route.params;

  console.log('isFilter', isFilter);

  return (
    <ContainerComponent isImageBackground isScroll back>
      <View>
        <Text>SearchEvents</Text>
      </View>
    </ContainerComponent>
  );
};

export default SearchEvents;
