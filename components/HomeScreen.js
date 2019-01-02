import React from 'react';
import { SafeAreaView, ImageBackground } from 'react-native';
import { Text, Card, Button, Slider } from 'react-native-elements';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Don't Fret!"
  };

  constructor(props) {
    super(props);
    this.state = {
      startFret: 0,
      numFrets: 12
    };
  }

  render() {
    const { navigation, update } = this.props;
    const { startFret, numFrets } = this.state;
    return (
      <ImageBackground
        source={require('../images/fretboard.jpeg')}
        style={{ width: '100%', height: '100%' }}
      >
        <SafeAreaView
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly'
          }}
        >
          <Card style={{ flex: 3 }}>
            <Text h5 style={{ marginBottom: 16 }}>
              When you learn your way around the fretboard, it is like finding a
              map to a brand new world.
            </Text>
            <Slider
              value={startFret}
              step={1}
              animateTransitions
              minimumValue={0}
              maximumValue={12}
              onValueChange={value => this.setState({ startFret: value })}
            />
            <Text>Start At Fret: {startFret}</Text>
            <Slider
              value={numFrets}
              step={1}
              animateTransitions
              minimumValue={0}
              maximumValue={12}
              onValueChange={value => this.setState({ numFrets: value })}
            />
            <Text>Frets to Train: {numFrets}</Text>
            <Button
              backgroundColor="#03A9F4"
              buttonStyle={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0,
                marginTop: 36
              }}
              title="TRAIN NOW"
              raised
              rightIcon={{ name: 'flight-takeoff' }}
              onPress={() => {
                update({ startFret, numFrets });
                navigation.navigate('Fretboard', {});
              }}
            />
            <Button
              small
              title="Change Settings"
              onPress={() => navigation.navigate('Settings', {})}
              rightIcon={{ name: 'settings' }}
            />
          </Card>
        </SafeAreaView>
      </ImageBackground>
    );
  }
}
