import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View,Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';

export default function App() {
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView contentContainerStyle={{height: '100%'}}>
        {/* <View className='w-full  h-full px-[16px]s justify-center items-center '>
          <Text className='font-pblack '>Lobo!</Text>
          <StatusBar style="auto" />
          <Link href={"/home"}>Go to Profile</Link>
        </View> */}

        <View className='w-full  h-full px-[16px]  items-center '>
          <Image
            source={images.logo}
            resizeMode='contain'
            className='w-[130px] h-[84px] ' 
          />

          <Image
            source={images.cards}
            resizeMode='contain'
            className='max-w-[380px] w-full max-h-[300px] '
          />

          <View className='relative mt-[20px]'>
            <Text className='text-3xl text-white font-bold text-center'>
              <Text>
                Discover Endless Possibilties with{' '} <Text className='text-secondary-200'>Aora</Text>
              </Text>
            </Text>

            <Image
              source={images.path}
              resizeMode='contain'
              className='w-[136px] h-[15px] absolute bottom-[50px] -right-0'
            />

            <Text className='text-sm font-pregular text-gray-100 mt-[20px] text-center'>Where creativity meets innovation:
            embark on a journey of limitless exploration with Aora</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
    
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
