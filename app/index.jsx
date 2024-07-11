import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, Text, View } from 'react-native';
import CustomButton from '../components/CustomButton';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

/* import { images } from "../constants" */

export default function App() {
  return (
    <SafeAreaView className="w-full bg-primary">
        <ScrollView contentContainerStyle={{height: '100%'}}>
            <View className="w-full justify-center items-center min-h-[90vh] px-4">
                {/* <Image 
                    source={images.powerF}
                    className="w-[130px] h-[84px]"
                    resizeMode='contain'
                /> */}
                <Text className="font-psemibold text-3xl text-gray-100">This is Your Virtual Coach App!</Text>
                <StatusBar style="auto" />
                <CustomButton 
                    title="Continue with Email"
                    handlePress={() => router.push('/sign-in')}
                    containerStyles="w-full mt-7"
                />
            </View>
        </ScrollView>
    </SafeAreaView>
    
  );
}
