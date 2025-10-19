import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import * as Haptics from 'expo-haptics';
import { CountryInfo } from '../types';
import { countryPickerStyles } from '../styles/countryPickerStyles';
import { colors } from '../theme/tokens';

interface CountryPickerProps {
  selectedCountry: string;
  countries: CountryInfo[];
  isLoading: boolean;
  isLoadingCountries: boolean;
  onCountryChange: (countryCode: string) => void;
}

export const CountryPicker: React.FC<CountryPickerProps> = ({
  selectedCountry,
  countries,
  isLoading,
  isLoadingCountries,
  onCountryChange,
}) => {
  const handleCountryChange = async (countryCode: string) => {
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    onCountryChange(countryCode);
  };

  if (isLoadingCountries) {
    return <ActivityIndicator size="large" color={colors.primary.start} style={countryPickerStyles.loadingIndicator} />;
  }

  return (
    <View style={countryPickerStyles.inputContainer}>
      <Text style={countryPickerStyles.inputLabel}>Country</Text>
      <View style={countryPickerStyles.pickerContainer}>
        <Picker
          selectedValue={selectedCountry}
          onValueChange={handleCountryChange}
          style={countryPickerStyles.picker}
          enabled={!isLoading}
        >
          {countries.map((country, index) => (
            <Picker.Item
              key={`${country.iso_code}-${index}`}
              label={`${country.flag_emoji} ${country.country_name}`}
              value={country.iso_code}
            />
          ))}
        </Picker>
      </View>
    </View>
  );
};