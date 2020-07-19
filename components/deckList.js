import React from 'react';
import {FlatList} from 'react-native';
import DeckItem from './deckItem';
import {useStoreContextValue} from '../reducers/store-context';

const DeckList = props => {
  console.log('[DeckList component]: init');
  const {navigation} = props;
  const {state} = useStoreContextValue();
  console.log(state);
  return (
    <FlatList
      style={{marginTop: 5}}
      data={state.deck.deckList.map(d => {
        return {...d, key: d._id};
      })}
      renderItem={({item}) => <DeckItem deck={item} navigation={navigation} />}
    />
  );
};

export default DeckList;
