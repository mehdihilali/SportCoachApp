import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, Text, View } from 'react-native';
import CustomButton from '../components/CustomButton';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import {images} from '../constants';

export default function App() {
  return (
    <SafeAreaView className="w-full bg-primary">
        <ScrollView contentContainerStyle={{height: '100%'}}>
            <View className="w-full justify-center items-center min-h-[90vh] px-4">
                <Image
                    source={images.logoSport}
                    className="w-[200px] h-[100px] right-48 mb-40"
                    resizeMode='contain'
                />
                <Image
                    source={images.powerFitness}
                    className="max-w-[500px] h-[450px] mb-10"
                    resizeMode='contain'
                />
                <View className="relative mt-5">
                    <Text className="text-[40px] text-white font-bold text-center">
                        Découvrez des Possibilités{"\n"}
                        Infinies et Transformez Votre Vie{"\n"}
                        avec{" "}
                        <Text className="text-purple-600">SportCoach</Text>
                    </Text>
                </View>
                {/* <Text className="text-base font-psemibold text-white pt-7 text-center mt-7">Votre Coach Sportif Personnel et Sur-Mesure</Text> */}
                <StatusBar style="auto" />
                <CustomButton 
                    title="Continuez avec Email"
                    handlePress={() => router.push('/sign-in')}
                    containerStyles="w-[550px] h-[80px] mt-20"
                />
            </View>
        </ScrollView>
    </SafeAreaView>
    
  );
}
