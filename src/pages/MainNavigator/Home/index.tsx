import * as React from 'react';
import {ActivityIndicator, FlatList} from 'react-native';
import {Conditional, Div, Text} from '~/components/Atomics';
import {Controller} from 'react-hook-form';
import {Header, FormInput} from '~/components';
import {useHome} from '~/pages/MainNavigator/Home/Home.model';
import {IHome} from '~/pages/MainNavigator/Home/Home.types';
import * as Icons from '~/assets/svgs';

export const Home = (props: IHome.IView) => {
  const {
    control,
    handleSubmit,
    errors,
    trigger,
    isValid,
    pets,
    keyExtractor,
    renderItem,
    isLoading,
  } = useHome(props);
  return (
    <Div flex={1} bg="neutral_100" testID={`Home`}>
      <Header.Internal />
      <Div flex={1} px={4}>
        <Div mb={4}>
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
        </Div>
        <Conditional render={isLoading}>
          <Div flex={1} center>
            <ActivityIndicator size="large" />
          </Div>
          <Div flex={1}>
            <FlatList
              style={{
                flex: 1,
              }}
              ListEmptyComponent={() => (
                <Div flex={1} center>
                  <Text>{`Nenhum pet encontrado`}</Text>
                </Div>
              )}
              data={pets}
              extraData={pets}
              renderItem={renderItem}
              keyExtractor={keyExtractor}
              showsVerticalScrollIndicator={false}
            />
          </Div>
        </Conditional>
      </Div>
    </Div>
  );
};
