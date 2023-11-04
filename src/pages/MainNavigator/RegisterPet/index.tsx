import * as React from 'react';
import {Div, Spacing, Text} from '~/components/Atomics';
import {Header, Distribution, ImageImput, Card, FormInput} from '~/components';
import {IRegisterPet} from '~/pages/MainNavigator/RegisterPet/RegisterPet.types';
import {useRegisterPet} from '~/pages/MainNavigator/RegisterPet/RegisterPet.model';
import {Controller} from 'react-hook-form';

export const RegisterPet = (props: IRegisterPet.IView) => {
  const {control, trigger, errors} = useRegisterPet(props);
  return (
    <Div flex={1} bg="neutral_100" testID={`RegisterPet`}>
      <Header.Default />
      <Distribution bg="neutral_100">
        <Spacing space={8}>
          <Spacing space={4}>
            <Text variant="titleBold">{`Foto`}</Text>
            <ImageImput />
          </Spacing>
          <Spacing space={4}>
            <Text variant="titleBold">{`Informações`}</Text>
            <Card>
              <Spacing space={4}>
                <Controller
                  control={control}
                  name="name"
                  defaultValue=""
                  render={({field: {onChange, onBlur, value, name}}) => (
                    <FormInput
                      placeholder="Nome"
                      {...{onChange, onBlur, value, name, trigger, errors}}
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="color"
                  defaultValue=""
                  render={({field: {onChange, onBlur, value, name}}) => (
                    <FormInput
                      placeholder="Cor"
                      {...{onChange, onBlur, value, name, trigger, errors}}
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="birth"
                  defaultValue=""
                  render={({field: {onChange, onBlur, value, name}}) => (
                    <FormInput
                      placeholder="Data"
                      {...{onChange, onBlur, value, name, trigger, errors}}
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="about"
                  defaultValue=""
                  render={({field: {onChange, onBlur, value, name}}) => (
                    <FormInput
                      placeholder="Sobre o pet"
                      {...{onChange, onBlur, value, name, trigger, errors}}
                    />
                  )}
                />
              </Spacing>
            </Card>
          </Spacing>
        </Spacing>
      </Distribution>
    </Div>
  );
};
