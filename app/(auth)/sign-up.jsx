import { View, Text, ScrollView, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { Link, router } from 'expo-router'

import {images} from '../../constants/images'

const SignUp = () => {

    const [form, setForm] = useState({
        username: "",
        email: "",
        password: "",
      });

      const submit = async () => {
        if (form.username === "" || form.email === "" || form.password === "") {
          Alert.alert("Error", "Please fill in all fields");
        } else {
            router.replace("/home");
        }
          
      };

    return (
        <SafeAreaView className="bg-primary h-full">
          <ScrollView>
            <View className="w-full justify-center min-h-[90vh] px-4 my-7">
              {/* <Image 
                source={images.logo}
                resizeMode='contain'
                className="w-[115px] h-[35px]"
              /> */}
              <Text className="text-white text-2xl font-psemibold py-5">Sign Up to SportCoachApp</Text>
              <FormField
                title="Username"
                value={form.username}
                handleChangeText={(e) => setForm({ ...form, username: e })}
                otherStyles="mt-10"
              />
              <FormField
                title="Email"
                value={form.email}
                handleChangeText={(e) => setForm({ ...form, email: e })}
                otherStyles="mt-7"
                keyboardType="email-address"
              />
              <FormField
                title="Password"
                value={form.password}
                handleChangeText={(e) => setForm({ ...form, password: e })}
                otherStyles="mt-7"
              />
               <CustomButton
                title="Sign Up"
                handlePress={submit}
                containerStyles="mt-7"
              />
              <View className="justify-center pt-5 flex-row gap-2">
                <Text className="text-lg text-gray-100 font-pregular">
                  Have an account already ?
                </Text>
                <Link href="/sign-in" className='text-lg font-psemibold text-secondary'>Login</Link>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      )
}

export default SignUp