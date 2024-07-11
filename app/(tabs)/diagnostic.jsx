import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useForm } from 'react-hook-form';
import NumericQuestion from '../../components/NumericQuestion';
import SelectQuestion from '../../components/SelectQuestion';
import YesNoQuestion from '../../components/YesNoQuestion';
import questions from '../../components/questions/questions';

const Diagnostic = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState({});
  const { control, handleSubmit, reset, formState: { errors } } = useForm();

  const onNext = (data) => {
    const questionKey = `question${questions[currentQuestionIndex].id}`;
    setResponses({ ...responses, [questionKey]: data[questionKey] });

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      reset();
    } else {
      const finalResponses = { ...responses, [questionKey]: data[questionKey] };
      console.log('Questionnaire terminé', finalResponses);
    }
  };

  const onPrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      reset();
    }
  };

  const renderQuestion = () => {
    const question = questions[currentQuestionIndex];
    switch (question.type) {
      case 'numeric':
        return <NumericQuestion control={control} question={question} errors={errors} />;
      case 'select':
        return <SelectQuestion control={control} question={question} errors={errors} />;
      case 'yesno':
        return <YesNoQuestion control={control} question={question} errors={errors} />;
      default:
        return null;
    }
  };

  return (
    <View className="flex-1 p-6 justify-center items-center bg-primary">
      <Text className="text-gray-100 font-psemibold text-3xl mb-12 text-center">
        {questions[currentQuestionIndex].text}
      </Text>
      {renderQuestion()}
      <View className="flex-row justify-between w-full mt-8">
        <TouchableOpacity
          style={{ flex: 1, marginRight: 8 }}
          className={`px-6 py-3 rounded-full shadow-lg ${currentQuestionIndex === 0 ? 'bg-gray-300' : 'bg-purple-700'}`}
          onPress={onPrevious}
          disabled={currentQuestionIndex === 0}
        >
          <Text className={`text-xl font-psemibold ${currentQuestionIndex === 0 ? 'text-gray-500' : 'text-white'}`}>
            Précédent
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ flex: 1, marginLeft: 350 }}
          className="px-6 py-3 rounded-full shadow-lg bg-purple-700"
          onPress={handleSubmit(onNext)}
        >
          <Text className="text-xl text-white font-psemibold text-center">
            {currentQuestionIndex < questions.length - 1 ? "Suivant" : "Terminer"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Diagnostic;