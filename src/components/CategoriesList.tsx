import {FlatList} from 'react-native';
import React from 'react';
import {Category} from '../models';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {appColors} from '../constants/appColors';
import {KnifeFork, KnifeFork_Color} from '../assets/svgs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TagComponent from './TagComponents';

interface Props {
  isFill?: boolean;
}

const CategoriesList = (props: Props) => {
  const {isFill} = props;
  const categories: Category[] = [
    {
      key: 'sports',
      label: 'Sports',
      icon: (
        <FontAwesome5
          name="basketball-ball"
          color={isFill ? appColors.white : '#F0635A'}
          size={20}
        />
      ),
      color: '#F0635A',
    },
    {
      key: 'mucsic',
      label: 'Music',
      icon: (
        <FontAwesome5
          name="music"
          color={isFill ? appColors.white : '#F59762'}
          size={20}
        />
      ),
      color: '#F59762',
    },
    {
      key: 'food',
      label: 'Food',
      icon: isFill ? (
        <KnifeFork color={isFill ? appColors.white : '#29D697'} />
      ) : (
        <KnifeFork_Color color={isFill ? appColors.white : '#29D697'} />
      ),
      color: '#29D697',
    },
    {
      key: 'art',
      label: 'Art',
      icon: (
        <Ionicons
          name="color-palette"
          size={20}
          color={isFill ? appColors.white : '#46CDFB'}
        />
      ),
      color: '#46CDFB',
    },
    {
      key: 'fair',
      label: 'Fair',
      icon: (
        <FontAwesome5
          size={20}
          name="shopping-bag"
          color={isFill ? appColors.white : '#7949eb'}
        />
      ),
      color: '#7949eb',
    },
    {
      key: 'charity',
      label: 'Charity',
      icon: (
        <FontAwesome5
          size={20}
          name="hand-holding-heart"
          color={isFill ? appColors.white : '#f536d2'}
        />
      ),
      color: '#f536d2',
    },
  ];
  return (
    <FlatList
      style={{paddingHorizontal: 16}}
      horizontal
      showsHorizontalScrollIndicator={false}
      data={categories}
      renderItem={({item, index}) => (
        <TagComponent
          styles={{
            marginRight: index === categories.length - 1 ? 28 : 12,
            minWidth: 82,
          }}
          bgColor={isFill ? item.color : appColors.white}
          onPress={() => {}}
          icon={item.icon}
          label={item.label}
          textColor={isFill ? appColors.white : appColors.text2}
        />
      )}
    />
  );
};

export default CategoriesList;
