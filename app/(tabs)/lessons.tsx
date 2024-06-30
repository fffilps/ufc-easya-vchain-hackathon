import React, {Component, useState} from 'react';
import {StyleSheet} from 'react-native';
import {
  View,
  Text,
  Constants,
  GridList,
  Card,
  Spacings,
  BorderRadiuses,
  GridListProps,
  GridListItem,
  TouchableOpacity,
  Modal
} from 'react-native-ui-lib';
import products from '@/data/products';
import workouts from '@/data/workouts'
import {renderBooleanOption, renderMultipleSegmentOptions} from '@/components/Demo/ExampleScreenPresenter';
import { SafeAreaView } from 'react-native-safe-area-context';
import LessonCards from '@/components/Lessons/LessonCards';
import { Link } from 'expo-router';


class GridListScreen extends Component {
  state = {
    orientation: Constants.orientation,
    useGridListItem: false,
    horizontalAlignment: GridListItem.horizontalAlignment.left,
    overlayText: false,
    alignToStart: false,
    visible: false
  };


  


  renderItem: GridListProps<(typeof workouts)[0]>['renderItem'] = ({item}) => {
    const {useGridListItem, horizontalAlignment, overlayText, alignToStart} = this.state;

    if (useGridListItem) {
      return (
        <GridListItem
          // containerStyle={{width: '100%', borderWidth: 1}}
          itemSize={{width: '100%', height: 200}}
          // imageProps={{source: {uri: item.mediaUrl}}}
          title="Title"
          subtitle="Subtile"
          alignToStart={alignToStart}
          overlayText={overlayText}
          horizontalAlignment={horizontalAlignment}
        />
      );
    } else {
      return (
        <Link href={{pathname: '/lessons/[slug]', params: {slug: item.name, difficulty: item.difficulty, rewards: item.reward, type: item.type, muscle: item.muscle, equipment: item.equipment, instructions: item.instructions, image: item.image}}} asChild>
          <TouchableOpacity onPress={() => {}}>
        <Card flex>
          <Card.Section imageSource={{uri: item.image}} imageStyle={styles.itemImage}/>
          <View padding-s2>
            <Text $textDefault>{item.name}</Text>
            <View flex row spread className='py-2 bg-slate-300 rounded px-1 justify-center items-center'>
            <Text $textDefault className='capitalize'>{item.difficulty}</Text>
            <View className='bg-orange-500 rounded-md px-2 py-1'>
            <Text>{item.reward}</Text>
            </View>
            </View>
          </View>
        </Card>
          </TouchableOpacity>
          </Link>
      );
    }
  };
  

  render() {

    return (
      <View>
      <GridList<(typeof workouts)[0]>
        data={workouts}
        renderItem={this.renderItem}
        numColumns={2}
        // maxItemWidth={140}
        itemSpacing={Spacings.s3}
        listPadding={Spacings.s5}
        // keepItemSize
        contentContainerStyle={styles.list}
      />
      <SafeAreaView>
      <Modal visible={false} animationType='slide' transparent>
        <LessonCards />
      </Modal>
      </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    paddingTop: Spacings.s5
  },
  itemImage: {
    width: '100%',
    height: 85,
    borderRadius: BorderRadiuses.br10
  }
});

export default GridListScreen;