import { StyleSheet } from 'react-native';
import { windowWidth, windowHeight } from './colors';
import { appDark } from './colors';

const styles = StyleSheet.create({
    appBarCustom: {
        backgroundColor: appDark,
        height: 75
    },
    //-------------Scroll Custom
    gridScroll: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        alignItems: 'center',
    },
    //-------------Item List
    heroBox: {
        width: (windowWidth / 3) - 16,
        margin: 8,
        alignItems: 'center',
    },
    heroImgBox: {
    },
    heroImgElement: {
        width: (windowWidth / 3) - 16,
        height: 190,
        resizeMode: 'cover',
        alignSelf: 'center',
    },
    titleList: {
        fontSize: 14,
        letterSpacing: 0,
        //lineHeight: 16,
        //paddingLeft: 5,
    },
    showFullBox: {
        width: windowWidth,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 25
    },
    fab: {
        marginTop: 10,
        marginBottom: 5,
    },
    //-------------Badges
    badgeBox: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    badgeChild1: {
        backgroundColor: '#0B3C77',
        borderRadius: 0,
    },
    badgeChild2: {
        backgroundColor: '#7A081D',
        borderRadius: 0,
    },

    //------------- Item, Portal, Modal, Card

    opacityModal: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        marginTop: 0,
    },
    cardView: {
        width: windowWidth - 32,
        height: 450,
        margin: 16,
    },
    heroSelectedBox: {
        flexDirection: 'row'
    },
    heroSelectedBio: {
        width: (windowWidth / 2) - 32,
        margin: 4
    },
    heroSelectedCoverBox: {
        width: (windowWidth / 2) - 32,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    heroSelectedImg: {
        width: (windowWidth / 2) - 32,
        height: 250,
        //resizeMode: 'cover',
        //alignSelf: 'center',
    },
    subheading: {
        fontSize: 11,
        fontWeight: 'bold',
        color: '#F97340'
    },
    heroSelectedName: {
        fontSize: 14,
        fontWeight: 'bold',
        letterSpacing: 1,
        textAlign: 'center',
    },
    bioParagraph: {
        fontSize: 10,
        letterSpacing: 0,
        lineHeight: 15,
    },
    actionsCard: {
        maxHeight: 160,
        justifyContent: 'center',
        alignItems: 'center',
    },
//------------------------ Title Surfaces
  downloadTitleBox: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  downloadTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 11,
    letterSpacing: 8,
    lineHeight: 20,
    textAlign: 'center',
  },
    //----------------------Surfaces
    powersList: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    surface: {
        width: 100,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 4,
        margin: 5,
      },
      miniTxt: {
        fontSize: 9,
        textAlign: 'center'
      },
      //------------------Add Hero to Fav
    saveFavBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 165,
        height: 38,
        marginTop: 10,
    },
    saveFavLabel: {
        fontSize: 11,
        fontWeight: 'bold',
        letterSpacing: 2,
    },
// ------------------------------- >one Favorites
    titleFav: {
        fontSize: 16
    },
    descFav: {
        fontSize: 11
    },
    listFavorites: {
        height: 95,
    },
    tableCustom: {
        width: windowWidth,
    },
    avatarFav: {
        width: 80,
        height: 80,
        resizeMode: 'cover',
        alignSelf: 'center',
        borderRadius: 100
    },

});

export default styles;