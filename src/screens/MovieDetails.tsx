import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import Animated from 'react-native-reanimated';

interface MovieDetailsProps {
  route: {
    params: {
      movie: {
        id: number;
        title: string;
        overview: string;
        release_date: string;
        vote_average: number;
        poster_path: string;
      };
    };
  };
}

const MovieDetails: React.FC<MovieDetailsProps> = ({route}) => {
  const {id, title, overview, release_date, vote_average, poster_path} =
    route.params.item;

  const posterUrl = `https://image.tmdb.org/t/p/w500/${poster_path}`;
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Animated.Image
          sharedTransitionTag={`movies_poster_${id}`}
          source={{uri: posterUrl}}
          style={styles.posterImage}
          resizeMode="cover"
        />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.overview}>{overview}</Text>
        <Text style={styles.releaseDate}>Release Date: {release_date}</Text>
        <Text style={styles.voteAverage}>Vote Average: {vote_average}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  posterImage: {
    width: '100%',
    height: Dimensions.get('screen').height - 300,
  },

  detailsContainer: {
    position: 'absolute',
    zIndex: 10,
    top: Dimensions.get('screen').height - 300,
    borderTopLeftRadius: 12,
    borderTopEndRadius: 12,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  overview: {
    fontSize: 16,
    marginBottom: 16,
  },
  releaseDate: {
    fontSize: 14,
    marginBottom: 8,
  },
  voteAverage: {
    fontSize: 14,
  },
});

export default MovieDetails;
