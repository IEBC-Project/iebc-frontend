import React, { useState } from 'react';
import { View, TextInput, Text, TextInputProps } from 'react-native';
import { formatCPF, formatPhone, formatName } from '../../molecules/input/formatters';
import { getInputConfig, InputType } from '../../molecules/input/inputConfig';

interface CustomInputProps extends TextInputProps {
  label: string;
  error?: string;
  inputType?: InputType;
}

export default function CustomInput({
  label,
  error,
  inputType = 'name',
  value,
  onChangeText,
  ...props
}: CustomInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const inputConfig = getInputConfig(inputType);

  const handleTextChange = (text: string) => {
    let formattedText = text;

    switch (inputType) {
      case 'cpf':
        formattedText = formatCPF(text);
        break;
      case 'phone':
        formattedText = formatPhone(text);
        break;
      case 'name':
        formattedText = formatName(text);
        break;
      case 'email':
      case 'password':
      default:
        formattedText = text;
    }

    onChangeText && onChangeText(formattedText);
  };

  return (
    <View>
      <Text>{label}</Text>
      <TextInput
        value={value}
        onChangeText={handleTextChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        keyboardType={inputConfig.keyboardType}
        maxLength={inputConfig.maxLength}
        autoCapitalize={inputConfig.autoCapitalize}
        secureTextEntry={inputConfig.secureTextEntry}
        {...props}
      />
      {error && <Text>{error}</Text>}
    </View>
  );
}