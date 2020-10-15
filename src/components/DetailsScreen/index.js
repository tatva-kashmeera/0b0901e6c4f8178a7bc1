/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {Text, View, Button} from 'react-native';

//Utility
import styles from './styles';

const Detail = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.detailsText}>{JSON.stringify(props.route.params.data)}</Text>
    </View>
  );
};

export default Detail;
