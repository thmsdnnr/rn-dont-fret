import React from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import { ListItem, Card } from 'react-native-elements';

export default function Settings(props) {
  const list = [
    {
      title: 'Settings',
      icon: 'settings'
    },
    {
      title: 'Explore',
      icon: 'explore'
    },
    {
      title: 'Train',
      icon: 'train'
    },
    {
      title: 'My Achievements',
      icon: 'star'
    }
  ];

  const renderItem = ({ item }) => (
    <ListItem
      key={item.title}
      title={item.title}
      leftIcon={{ name: item.icon }}
    />
  );

  return (
    <SafeAreaView>
      <Card title="Settings">
        <FlatList
          data={list}
          renderItem={renderItem}
          keyExtractor={item => item.title}
        />
      </Card>
    </SafeAreaView>
  );
}
