import * as React from 'react';
import {Image} from 'react-native';
import {Div, Spacing, Text} from '~/components/Atomics';
import {Controller} from 'react-hook-form';
import {Header, Distribution, LinearImage, FormInput} from '~/components';
import {useHome} from '~/pages/MainNavigator/Home/Home.model';
import {IHome} from '~/pages/MainNavigator/Home/Home.types';
import * as Icons from '~/assets/svgs';

export const Home = (props: IHome.IView) => {
  const {control, handleSubmit, errors, trigger, isValid} = useHome(props);
  return (
    <Div flex={1} bg="neutral_100" testID={`Home`}>
      <Header.Internal />
      <Distribution>
        <Spacing space={4}>
          <Controller
            control={control}
            name="query"
            defaultValue=""
            render={({field: {onChange, onBlur, value, name}}) => (
              <FormInput
                mt={4}
                prepend={
                  <Div mr={2}>
                    <Icons.Search color="#737373" />
                  </Div>
                }
                placeholder="Pesquisar um pet"
                {...{onChange, onBlur, value, name, trigger, errors}}
              />
            )}
          />
          <Div>
            <LinearImage url="https://www.petz.com.br/blog//wp-content/uploads/2021/11/enxoval-para-gato-Copia.jpg" />
            <LinearImage url="https://www.petz.com.br/blog//wp-content/uploads/2021/11/enxoval-para-gato-Copia.jpg" />
            <LinearImage url="https://www.petz.com.br/blog//wp-content/uploads/2021/11/enxoval-para-gato-Copia.jpg" />
          </Div>
        </Spacing>
      </Distribution>
    </Div>
  );
};
