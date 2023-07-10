import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import {Movie} from '../api/moviesResponseType';
import {getImageUrl} from '../constants/apiHelper';
import {useSelector, useDispatch} from 'react-redux';
import {fetchMovieList} from '../redux/action';
import Animated from 'react-native-reanimated';
import {useNavigation} from '@react-navigation/native';
const windowWidth = Dimensions.get('window').width;

const HomeScreens = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const {movies, loading, error} = useSelector(store => store.movie);

  useEffect(() => {
    dispatch(fetchMovieList());
  }, []);

  const renderMovieItem = ({item}: {item: Movie}) => {
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          navigation.navigate('Details', {item});
        }}>
        <View style={styles.movieItem}>
          <Animated.Image
            sharedTransitionTag={`movies_poster_${item.id}`}
            accessibilityHint="Poster"
            resizeMode="cover"
            style={[styles.posterImage]}
            resizeMode="cover"
            source={{uri: getImageUrl(item.poster_path)}}
          />
          <View style={styles.ratingPatch}>
            <Text style={styles.ratingText}>
              {item.vote_average.toFixed(1)}
            </Text>
          </View>

          <View style={styles.movieInfo}>
            <Text style={styles.title}>{item.title}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      {movies.length > 0 ? (
        <FlatList
          data={movies}
          renderItem={renderMovieItem}
          keyExtractor={item => item.id.toString()}
          numColumns={2}
        />
      ) : (
        <Text>Loading</Text>
      )}
    </View>
  );
};

export default HomeScreens;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  movieItem: {
    flex: 1,
    marginBottom: 16,
    marginHorizontal: 8,
    alignItems: 'center',
    width: (windowWidth - 32) / 2,
  },
  posterImage: {
    width: '100%',
    aspectRatio: 2 / 3,
    borderRadius: 12,
    marginBottom: 8,
  },
  movieInfo: {
    marginTop: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  overview: {
    fontSize: 14,
    color: '#777',
  },
  ratingPatch: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    borderTopLeftRadius: 12,
    borderBottomEndRadius: 12,
    backgroundColor: '#ff9800',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
});
