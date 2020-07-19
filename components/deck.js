import React from 'react';
import {View} from 'react-native';
import DeckList from './deckList';

const Decks = props => {
  return (
    <View style={{flex: 1}}>
      <DeckList navigation={props.navigation} />
    </View>
  );
};

export default Decks;
