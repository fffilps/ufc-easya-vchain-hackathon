
import Connect from '@/components/Connect';
import { Logo } from '@/components/Icons';
import { Text, View } from '@/components/Themed';
import '@/global.css'
import RootProvider from '@/providers';
import { Web3Modal } from '@web3modal/wagmi-react-native';
import { StatusBar } from 'expo-status-bar';

export default function TabOneScreen() {
  return (
    <RootProvider>
    <View className="App">
      <StatusBar style='auto' />
      <Web3Modal />
      <Logo className='w-auto h-10 mx-auto' />
      <Text className='H1'>VeChain EasyA Hackathon</Text>
      <Text className='Text'>Demostrating how to build mobile dApps</Text>
      <Connect />

    </View>
    </RootProvider>
  );
}

