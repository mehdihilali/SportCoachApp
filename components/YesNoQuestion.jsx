import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Controller } from 'react-hook-form';

const YesNoQuestion = ({ control, question, errors }) => {
  const handleSelectOption = (onChange, option) => {
    onChange(option);
  };

  return (
    <Controller
      control={control}
      name={`question${question.id}`}
      rules={{ required: 'Ce champ est obligatoire' }}
      render={({ field: { onChange, value } }) => (
        <View className="flex-row justify-between w-full mb-4">
          <TouchableOpacity
            className={`p-4 rounded-lg shadow-lg w-1/2 mx-1 ${value === 'Oui' ? 'bg-purple-100' : 'bg-white'}`}
            onPress={() => handleSelectOption(onChange, 'Oui')}
          >
            <Text className={`text-lg text-center ${value === 'Oui' ? 'text-purple-700 font-semibold' : 'text-gray-700'}`}>
              Oui
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className={`p-4 rounded-lg shadow-lg w-1/2 mx-1 ${value === 'Non' ? 'bg-purple-100' : 'bg-white'}`}
            onPress={() => handleSelectOption(onChange, 'Non')}
          >
            <Text className={`text-lg text-center ${value === 'Non' ? 'text-purple-700 font-semibold' : 'text-gray-700'}`}>
              Non
            </Text>
          </TouchableOpacity>
          {errors[`question${question.id}`] && (
            <Text className="text-red-500 mt-2 font-psemibold">{errors[`question${question.id}`].message}</Text>
          )}
        </View>
      )}
    />
  );
};

export default YesNoQuestion;