/* eslint-disable prettier/prettier */
import React, { Component, Fragment } from 'react';
import { View, Image, LogBox, StyleSheet, StatusBar } from 'react-native';
import { Button } from 'react-native-paper';
import 'react-native-gesture-handler';
import baseConfig from '../../base.config'
import { appDark, appGray } from '../components/colors';
import { windowWidth } from '../components/colors';

//------- Globals ------|
LogBox.ignoreAllLogs();
//----------------------|

const cdnSuperHero = baseConfig.cdnRoot;

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      superHeroArray: [],
      loading: false,
    };
  }

  goMyFavorites = () => this.props.navigation.navigate('Favorites', { flag: 1 })

  goViewAllHeroes = () => {
    this.props.navigation.navigate('ListHeroes', {
      superHeroArray: this.state.superHeroArray
    }),
      this.setState({ loading: false });
  }

  searchHero = () => {
    this.setState({ loading: true });

    fetch(cdnSuperHero + '/all.json')
      .then(response => response.json())
      .then((response) => {
        console.log('Response: ', response);
        this.setState({
          superHeroArray: response
        });
        this.goViewAllHeroes();
      })
      .catch((e) => {
        //Error Network
      });
  }

  render() {
    console.log(this.state);
    const { loading } = this.state;

    return (
      <Fragment>
        <StatusBar backgroundColor={appDark} />
        <View style={styles.container}>
          <Image style={styles.heroesLogo} source={require('../../assets/marvel2.gif')} />
          <Button
            style={styles.viewAllBtn}
            mode="contained"
            onPress={this.searchHero}
            loading={loading}
            labelStyle={styles.viewAllLabel}>
            List All Heroes
          </Button>
          <Button
            style={styles.viewMyFavsBtn}
            mode="contained"
            color="#0B052D"
            onPress={this.goMyFavorites}
            labelStyle={styles.viewMyFavsLabel}>
            My Favourites ❤️
          </Button>
        </View>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  appBarCustom: {
    backgroundColor: appDark,
    height: 75,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    //textAlign: 'center',
    alignItems: 'center',
    backgroundColor: appGray,
    margin: 0
  },
  heroesLogoBox: {
    borderWidth: 3,
    borderColor: 'red'
  },
  heroesLogo: {
    width: windowWidth,
    height: 300,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  viewAllBtn: {
    width: 200,
    height: 55,
    margin: 8,
    justifyContent: 'center',
  },
  viewAllLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  viewMyFavsBtn: {
    width: 200,
    height: 55,
    marginTop: 20,
    margin: 8,
    justifyContent: 'center',
  },
  viewMyFavsLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});