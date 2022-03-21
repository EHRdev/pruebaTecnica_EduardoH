/* eslint-disable prettier/prettier */
import React, { Component, Fragment } from 'react';
import { Image, LogBox, ScrollView } from 'react-native';
import {
    Appbar,
    List,
    DataTable,
 } from 'react-native-paper';
import 'react-native-gesture-handler';
import 'react-native-gesture-handler';
import styles from '../components/styles'
import AsyncStorage from '@react-native-async-storage/async-storage';

//------- Globals ------|
LogBox.ignoreAllLogs();
//----------------------|

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favorites: [],
            flag: this.props.route.params.flag,
        };
    }

    componentDidMount() {
        this.getFavorites();
    }

    showDetail = (item) => {
        this.setState({
            launchItemFav: true,
            heroFavInfo: item
        });
    }

    goBack = () => {
        this.state.flag === 1 ? this.props.navigation.navigate('Home') : this.props.navigation.navigate('ListHeroes')
    }

    deleteFavs = async () => {
        let keys = [];
        try {
          keys = await AsyncStorage.getAllKeys();
          await AsyncStorage.multiRemove(keys);
          this.getFavorites();
        } catch (e) {
          // remove error
        }
      }

    getFavorites = async () => {
        let keys = [];
        let values;

        try {
            keys = await AsyncStorage.getAllKeys();
            //console.log('keys: ', keys);
            raw_values = await AsyncStorage.multiGet(keys);
            //console.log('raw_values: ', raw_values);
            let values = raw_values.map(item => {
                return JSON.parse(item[1]);
            });
            console.log('values: ', values);
            this.setState({ favorites: values })
        } catch (e) {
            // read error
        }
    }

    render() {
        console.log(this.state);
        const { favorites } = this.state;

        return (
            <Fragment>
                <Appbar.Header style={styles.appBarCustom}>
                    <Appbar.BackAction onPress={() => this.goBack()} />
                    <Appbar.Content title="Favorite Heroes" />
                    <Appbar.Action icon="delete" color="#16A59B" onPress={() => this.deleteFavs()} />
                </Appbar.Header>
                <ScrollView>
                    {favorites.map((item, index) => (
                        <List.Accordion
                        key={index}
                        title={item.name}
                        titleStyle={styles.titleFav}
                        description={'Name: ' + item.biography.fullName + ' || Race: ' + item.appearance.race + ' || ♂ ♀ ⚤ ' + item.appearance.gender + ' || Height: ' + item.appearance.height }
                        descriptionStyle={styles.descFav}
                        style={styles.listFavorites}
                        left={props => <Image style={styles.avatarFav} source={{ uri: item.images.sm }} />}>
                            <DataTable style={styles.tableCustom}>
                                <DataTable.Header>
                                    <DataTable.Title>🧠</DataTable.Title>
                                    <DataTable.Title>🔮</DataTable.Title>
                                    <DataTable.Title>⚡</DataTable.Title>
                                    <DataTable.Title>🛡️</DataTable.Title>
                                    <DataTable.Title>✨</DataTable.Title>
                                    <DataTable.Title>💪</DataTable.Title>
                                </DataTable.Header>

                                <DataTable.Row>
                                    <DataTable.Cell>{item.powerstats.intelligence}</DataTable.Cell>
                                    <DataTable.Cell>{item.powerstats.strength}</DataTable.Cell>
                                    <DataTable.Cell>{item.powerstats.speed}</DataTable.Cell>
                                    <DataTable.Cell>{item.powerstats.durability}</DataTable.Cell>
                                    <DataTable.Cell>{item.powerstats.power}</DataTable.Cell>
                                    <DataTable.Cell>{item.powerstats.combat}</DataTable.Cell>
                                </DataTable.Row>
                            </DataTable>
                      </List.Accordion>
                    ))}
                </ScrollView>
                </Fragment>
        );
    }
}