/* eslint-disable prettier/prettier */
import React, { Component, Fragment } from 'react';
import { View, Image, LogBox, ScrollView, Text } from 'react-native';
import {
  Title,
  Subheading,
  HelperText,
  TouchableRipple,
  Badge,
  Appbar,
  FAB,
  Portal,
  Modal,
  Card,
  Button,
  Paragraph,
  Surface,
  Divider,
} from 'react-native-paper';
import 'react-native-gesture-handler';
import styles from '../components/styles'
import AsyncStorage from '@react-native-async-storage/async-storage';

//------- Globals ------|
LogBox.ignoreAllLogs();
//----------------------|

export default class ListHeroes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      superHeroArray: this.props.route.params.superHeroArray,
      loadingShowMore: false,
      limitCurrentItems: 99,
      visibleFAB: true,

      launchItemView: false,
      heroInfo: [],
    };
  }

  // Hiders
  hideModal = () => this.setState({ launchItemView: false });

  // Navigation
  goHome = () => this.props.navigation.navigate('Home');
  goToFavorites = () => this.props.navigation.navigate('Favorites', { flag: 0 })

  // Handles
  handleItem = (item) => {
    this.setState({
      launchItemView: true,
      heroInfo: item
    });
  }

  //LocalStorage System Fav
  storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      let key = value.id;
      let keyString = key.toString();
      await AsyncStorage.setItem(keyString, jsonValue);
      console.log('Key Saved in Store');
      this.hideModal();
      this.goToFavorites();
    } catch (e) {
      console.log('Store error: ', e);
    }
  };

  addFavoriteItem = (myFav) => this.storeData(myFav);

  listAllHeroes = (full) => {
    this.setState({
      limitCurrentItems: full,
      visibleFAB: false
    })
  }

  render() {
    console.log(this.state);
    const { superHeroArray } = this.state;
    let { limitCurrentItems, visibleFAB } = this.state;

    let { launchItemView, heroInfo } = this.state;

    return (
      <Fragment>
        <Appbar.Header style={styles.appBarCustom}>
          <Appbar.BackAction onPress={() => this.goHome()} />
          <Appbar.Content title="Heroes List" subtitle={'Showing ' + limitCurrentItems + ' of ' + superHeroArray.length + ' items'} />
          <Appbar.Action icon="heart" color="#F7574C" onPress={() => this.goToFavorites()} />
        </Appbar.Header>
        {/* -------------------| I T E M |------------------- */}
        {launchItemView ? (
          <Portal>
            <Modal style={styles.opacityModal} visible={launchItemView} onDismiss={this.hideModal}>
              <Card style={styles.cardView}>
                <View style={styles.heroSelectedBox}>
                  <View style={styles.heroSelectedCoverBox}>
                    <Image style={styles.heroSelectedImg} source={{ uri: heroInfo.images.sm }} />
                    <Button
                      style={styles.saveFavBtn}
                      icon="plus"
                      mode="contained"
                      onPress={() => this.addFavoriteItem(heroInfo)}
                      labelStyle={styles.saveFavLabel}>
                      Add Favorite
                    </Button>
                  </View>
                  <View style={styles.heroSelectedBio}>
                    <Title style={styles.heroSelectedName} numberOfLines={1}>{heroInfo.name}</Title>
                    <Subheading style={styles.subheading}>Biography</Subheading>
                    <Paragraph style={styles.bioParagraph}>{'Full Name: ' + heroInfo.biography.fullName}</Paragraph>
                    <Paragraph style={styles.bioParagraph}>{'Gender: ' + heroInfo.appearance.gender}</Paragraph>
                    <Paragraph style={styles.bioParagraph}>{'Race: ' + heroInfo.appearance.race}</Paragraph>
                    <Paragraph style={styles.bioParagraph}>{'Height: ' + heroInfo.appearance.height}</Paragraph>
                    <Paragraph style={styles.bioParagraph}>{'Place of Birth: ' + heroInfo.biography.placeOfBirth}</Paragraph>
                    <Divider />
                    <Paragraph style={styles.bioParagraph}>{'First Appearance: ' + heroInfo.biography.firstAppearance}</Paragraph>
                    <Paragraph style={styles.bioParagraph}>{'Publisher: ' + heroInfo.biography.publisher}</Paragraph>
                    <Paragraph style={styles.bioParagraph}>{'Occupation: ' + heroInfo.work.occupation}</Paragraph>
                  </View>
                </View>
                <Divider />
                <View style={styles.downloadTitleBox}>
                  <Text style={styles.downloadTitle}>POWERS</Text>
                </View>
                <View style={styles.powersList}>
                  <Surface style={styles.surface}>
                    <Paragraph style={styles.miniTxt}>Intelligence</Paragraph>
                    <Paragraph style={{ fontSize: 16, textAlign: 'center', color: '#07F3D3', lineHeight: 15 }}>{heroInfo.powerstats.intelligence}</Paragraph>
                  </Surface>
                  <Surface style={styles.surface}>
                    <Paragraph style={styles.miniTxt}>Strength</Paragraph>
                    <Paragraph style={{ fontSize: 16, textAlign: 'center', color: '#F56396', lineHeight: 15 }}>{heroInfo.powerstats.strength}</Paragraph>
                  </Surface>
                  <Surface style={styles.surface}>
                    <Paragraph style={styles.miniTxt}>Speed</Paragraph>
                    <Paragraph style={{ fontSize: 16, textAlign: 'center', color: '#63C4F5', lineHeight: 15 }}>{heroInfo.powerstats.speed}</Paragraph>
                  </Surface>
                </View>

                <View style={styles.powersList}>
                  <Surface style={styles.surface}>
                    <Paragraph style={styles.miniTxt}>Durability</Paragraph>
                    <Paragraph style={{ fontSize: 16, textAlign: 'center', color: '#79F366', lineHeight: 15 }}>{heroInfo.powerstats.durability}</Paragraph>
                  </Surface>
                  <Surface style={styles.surface}>
                    <Paragraph style={styles.miniTxt}>Power</Paragraph>
                    <Paragraph style={{ fontSize: 16, textAlign: 'center', color: '#D9F366', lineHeight: 15 }}>{heroInfo.powerstats.power}</Paragraph>
                  </Surface>
                  <Surface style={styles.surface}>
                    <Paragraph style={styles.miniTxt}>Combat</Paragraph>
                    <Paragraph style={{ fontSize: 16, textAlign: 'center', color: '#B285ED', lineHeight: 15 }}>{heroInfo.powerstats.combat}</Paragraph>
                  </Surface>
                </View>

              </Card>
            </Modal>
          </Portal>
        ) : null}
        {/* -------------------| L I S T |------------------- */}
        <ScrollView
          contentContainerStyle={styles.gridScroll}
          ref={ref => { this.scrollView = ref }}
          onContentSizeChange={() => this.scrollView.scrollTo({ x: 0, y: 0, animated: true })}
        >
          {superHeroArray.slice(0, limitCurrentItems).map((item, index) => (
            <TouchableRipple key={index} borderless={false} onPress={() => this.handleItem(item)} rippleColor="cyan">
              <View style={styles.heroBox}>
                <View style={styles.heroImgBox}>
                  <Image style={styles.heroImgElement} source={{ uri: item.images.sm }} />
                  <View style={styles.badgeBox}>
                    <Badge size={20} style={styles.badgeChild1}>Power: {item.powerstats.power}</Badge>
                    <Badge size={20} style={styles.badgeChild2}>Speed: {item.powerstats.speed}</Badge>
                  </View>
                </View>
                <Title style={styles.titleList} numberOfLines={2}>{item.name}</Title>
              </View>
            </TouchableRipple>
          ))}
          <View style={styles.showFullBox}>
            <FAB
              style={styles.fab}
              label={'Load full ' + superHeroArray.length + ' items'}
              onPress={() => this.listAllHeroes(superHeroArray.length)}
              visible={visibleFAB}
              theme={{ colors: { accent: '#6CDCA1' } }}
            />
            <HelperText type="error" visible={visibleFAB}>This can take a few seconds</HelperText>
          </View>
        </ScrollView>
      </Fragment>
    );
  }
}