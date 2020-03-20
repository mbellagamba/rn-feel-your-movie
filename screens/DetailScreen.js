import React from 'react';
import {Text, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import RoundedButton from '../components/RoundedButton';

const DetailScreen = ({navigation, route}) => (
  <SafeAreaView>
    <ScrollView>
      <Text>Detail screen</Text>
      <Text>{route.params?.message}</Text>
      <Text>{route.params?.missingMessage}</Text>
      <RoundedButton
        title="Back"
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      />
    </ScrollView>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  backButton: {
    backgroundColor: 'gray',
  },
});

export default DetailScreen;
