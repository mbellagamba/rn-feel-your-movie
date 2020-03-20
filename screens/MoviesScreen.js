import React from 'react';
import {SafeAreaView, Text, StyleSheet, View} from 'react-native';
import {useHttp} from '../http/useHttp';
import {FlatList} from 'react-native-gesture-handler';

const MoviesScreen = () => {
  const {data = []} = useHttp(
    'https://raw.githubusercontent.com/vega/vega/master/docs/data/movies.json',
  );
  return (
    <SafeAreaView>
      <FlatList
        data={data}
        keyExtractor={item => `${item.Title}${item.Release_Date}`}
        renderItem={({item}) => (
          <View style={styles.row}>
            <View>
              <Text style={styles.title}>{item.Title}</Text>
              <Text>{item.Distributor}</Text>
            </View>
            <Text style={styles.rating}>{item.IMDB_Rating}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  title: {
    fontSize: 16,
  },
  rating: {
    fontSize: 24,
    color: 'dodgerblue',
  },
});

export default MoviesScreen;
