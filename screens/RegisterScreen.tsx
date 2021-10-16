// adopted from https://docs.nativebase.io/login-signup-forms
import React from 'react';
import { Heading, VStack, FormControl, Input, Button } from 'native-base';
import Screen from '../components/common/Screen';
import { t } from '../utils';

export default function RegisterScreen() {
  return (
    <Screen title={t('register.title')} showBackButton>
      <Heading mt="1" color="coolGray.600" fontWeight="medium" size="xs">
        {t('register.subtitle')}
      </Heading>

      <VStack space={3} mt="5">
        <FormControl>
          <FormControl.Label
            _text={{ color: 'muted.700', fontSize: 'xs', fontWeight: 500 }}
          >
            {t('register.displayNameLabel')}
          </FormControl.Label>
          <Input />
        </FormControl>
        <FormControl>
          <FormControl.Label
            _text={{ color: 'muted.700', fontSize: 'xs', fontWeight: 500 }}
          >
            {t('register.emailLabel')}
          </FormControl.Label>
          <Input />
        </FormControl>
        <FormControl>
          <FormControl.Label
            _text={{ color: 'muted.700', fontSize: 'xs', fontWeight: 500 }}
          >
            {t('register.passwordLabel')}
          </FormControl.Label>
          <Input type="password" />
        </FormControl>
        <Button mt="2" colorScheme="indigo" _text={{ color: 'white' }}>
          Sign up
        </Button>
      </VStack>
    </Screen>
  );
}
