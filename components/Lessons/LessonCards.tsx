import { View, Text, SafeAreaView, Pressable, Button } from 'react-native'
import React, {useState} from 'react'

type Props = {
}

const LessonCards = (prop: Props) => {

  return (
    <SafeAreaView>
        <Pressable style={{ height: 100, backgroundColor: '#DDD', opacity: .5}} />
        <View className='bg-white/95 h-full'>
            <Button title='Hide' />
        </View>
    </SafeAreaView>
  )
}

export default LessonCards