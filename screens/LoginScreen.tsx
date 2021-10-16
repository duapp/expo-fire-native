// adopted from https://docs.nativebase.io/login-signup-forms
import React from 'react';
import {
  Heading,
  VStack,
  FormControl,
  Input,
  Button,
  HStack,
} from 'native-base';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Screen from '../components/common/Screen';
import { t } from '../utils';
import { GuestNavigatorParamList } from '../navigators/GuestNavigator';

export default function LoginScreen({
  navigation,
}: NativeStackScreenProps<GuestNavigatorParamList, 'Login'>) {
  return (
    <Screen>
      <Heading size="lg" fontWeight="600" color="coolGray.800">
        {t('login.headline')}
      </Heading>
      <Heading mt="1" color="coolGray.600" fontWeight="medium" size="xs">
        {t('login.subtitle')}
      </Heading>

      <VStack space={3} mt="5">
        <FormControl isRequired>
          <FormControl.Label
            _text={{
              color: 'coolGray.800',
              fontSize: 'xs',
              fontWeight: 500,
            }}
          >
            {t('login.emailLabel')}
          </FormControl.Label>
          <Input />
        </FormControl>
        <FormControl isRequired>
          <FormControl.Label
            _text={{
              color: 'coolGray.800',
              fontSize: 'xs',
              fontWeight: 500,
            }}
          >
            {t('login.passwordLabel')}
          </FormControl.Label>
          <Input type="password" />
        </FormControl>
        <Button mt="2" colorScheme="indigo" _text={{ color: 'white' }}>
          {t('login.login')}
        </Button>
        <HStack mt="6" justifyContent="center">
          <Button
            variant="link"
            colorScheme="indigo"
            onPress={() => navigation.navigate('Register')}
          >
            {t('login.register')}
          </Button>
        </HStack>
      </VStack>
    </Screen>
  );
}
