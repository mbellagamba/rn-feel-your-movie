import React from 'react';
import {Text, StyleSheet, ScrollView, Image, SafeAreaView} from 'react-native';
import cinema from '../assets/cinema.jpg';
import RoundedButton from '../components/RoundedButton';

const HomeScreen = ({navigation}) => (
  <SafeAreaView style={styles.safeArea}>
    <ScrollView>
      <Text>Home screen</Text>
      <Image source={cinema} />
      <RoundedButton
        title="Go to details"
        style={styles.button}
        onPress={() =>
          navigation.navigate('Details', {
            message: 'This is a message from home!',
          })
        }
      />
    </ScrollView>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  button: {
    marginVertical: 16,
  },
});

export default HomeScreen;
