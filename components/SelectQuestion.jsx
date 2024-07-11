import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Controller } from 'react-hook-form';

const SelectQuestion = ({ control, question, errors }) => {
  const handleSelectOption = (onChange, option) => {
    onChange(option);
  };

  return (
    <Controller
      control={control}
      name={`question${question.id}`}
      rules={{ required: 'Ce champ est obligatoire' }}
      render={({ field: { onChange, value } }) => (
        <View className="w-full">
          {question.options.map((option, index) => (
            <TouchableOpacity
              key={index}
              className={`p-4 mb-4 rounded-lg shadow-lg ${value === option ? 'bg-purple-100' : 'bg-white'}`}
              onPress={() => handleSelectOption(onChange, option)}
            >
              <Text className={`text-lg text-center ${value === option ? 'text-purple-700 font-semibold' : 'text-gray-700'}`}>
                {option}
              </Text>
            </TouchableOpacity>
          ))}
          {errors[`question${question.id}`] && (
            <Text className="text-red-500 mt-2 font-psemibold">{errors[`question${question.id}`].message}</Text>
          )}
        </View>
      )}
    />
  );
};

export default SelectQuestion;