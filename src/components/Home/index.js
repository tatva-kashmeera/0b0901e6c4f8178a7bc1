/* eslint-disable react-hooks/exhaustive-deps */
import React, {Component} from 'react';
import {
  Text,
  View,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';

//Utility
import styles from './styles';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loader: true,
      postData: [],
      flatListData: [],
      totalCount: 0,
      isTimer: false,
      page: 0,
    };
  }
  componentDidMount() {
    this.getPostData();
  }

  getPostData = () => {
    const {isTimer} = this.state;
    if (!isTimer) {
      const {page, postData} = this.state;
      axios
        .get(
          `https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${page}`,
        )
        .then((result) => {
          this.setState(
            {
              loader: false,
              isTimer: true,
              page: page + 1,
              postData: [...postData, ...result.data.hits],
              flatListData: [...postData, ...result.data.hits],
              totalCount: result.data.hits.length,
            },
            () => {
              this.getPostData();
            },
          );
        });
    } else {
      setTimeout(() => {
        const {page, postData, totalCount} = this.state;
        if (page < 50) {
          axios
            .get(
              `https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${page}`,
            )
            .then((result) => {
              this.setState({
                page: page + 1,
                postData: [...postData, ...result.data.hits],
                totalCount: totalCount + result.data.hits.length,
              });
            });
        }
      }, 10000);
    }
  };

  loadMore = () => {
    const {page, postData} = this.state;
    axios
      .get(
        `https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${page}`,
      )
      .then((result) => {
        this.setState(
          {
            loader: false,
            isTimer: true,
            page: page + 1,
            postData: [...postData, ...result.data.hits],
            flatListData: [...postData, ...result.data.hits],
            totalCount: result.data.hits.length,
          },
          () => {
            this.getPostData();
          },
        );
      });
  };

  renderList = ({item}) => {
    const date = new Date(item?.created_at);
    const fullDate = date.getMonth() + '/' + date.getFullYear();
    return (
      <TouchableOpacity
        style={{paddingVertical: 8}}
        onPress={() => this.props.navigation.navigate('Details', {data: item})}>
        <View style={styles.textView}>
          <Text style={styles.titleText}>{'Title: '}</Text>
          <Text style={styles.valueText}>{item?.title}</Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.titleText}>{'URL: '}</Text>
          <Text style={styles.valueText}>{item?.url}</Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.titleText}>{'Created_at: '}</Text>
          <Text style={styles.valueText}>{fullDate}</Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.titleText}>{'Author: '}</Text>
          <Text style={styles.valueText}>{item?.author}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    const {postData, flatListData, loader} = this.state;
    if (loader) {
      return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <ActivityIndicator size="large" color="grey" />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <View>
          <Text
            style={
              styles.header
            }>{`Available Posts are: ${postData?.length}`}</Text>
        </View>
        <FlatList
          data={flatListData}
          renderItem={(item, index) => this.renderList(item, index)}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          keyExtractor={(item, index) => item.objectID}
          onEndReached={this.loadMore}
        />
      </View>
    );
  }
}

export default Home;
