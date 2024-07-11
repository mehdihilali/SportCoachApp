import React from 'react';
import { View, Text } from 'react-native';
import { Controller } from 'react-hook-form';
import FormField from '../components/FormField'

const NumericQuestion = ({ control, question, errors }) => (
  <Controller
    control={control}
    name={`question${question.id}`}
    rules={{
      required: 'Ce champ est obligatoire',
      validate: value => parseFloat(value) >= 0 || 'La valeur doit être supérieure ou égale à 0'
    }}
    render={({ field: { onChange, value } }) => (
      <View className="w-full">
        <FormField
          value={value || ''}
          placeholder="Votre réponse"
          handleChangeText={(text) => onChange(text)}
          keyboardType='numeric'
          otherStyles="mb-8 justify-center"
        />
        {errors[`question${question.id}`] && (
          <Text className="text-red-500 mt-2 font-psemibold">{errors[`question${question.id}`].message}</Text>
        )}
      </View>
    )}
  />
);

export default NumericQuestion;