import * as React from 'react';
import {Div, Screen, Spacing, Text} from '~/components/Atomics';
import {ITest} from '~/pages/Test/Test.types';
import * as Icon from '~/assets/svgs';

export const Test = (props: ITest.IView) => (
  <Screen.Default>
    <Div flex={1} testID={`Test`}>
      <Div>
        <Text>{'Black Icons'}</Text>
        <Spacing space={4}>
          <Div flexDirection={'row'} justifyContent="space-between">
            <Icon.ArrowLeft />
            <Icon.ArrowRight />
            <Icon.Search />
            <Icon.Bell />
            <Icon.ChevDown />
            <Icon.ChevRight />
          </Div>
          <Div flexDirection={'row'} justifyContent="space-between">
            <Icon.Heart />
            <Icon.Filter />
            <Icon.Home />
            <Icon.Pin />
            <Icon.User />
            <Icon.Phone />
          </Div>
          <Div flexDirection={'row'} justifyContent="space-between">
            <Icon.Pet />
            <Icon.Male />
            <Icon.Female />
            <Icon.Chat />
            <Icon.CheckCircle />
            <Icon.Eye />
          </Div>
          <Div flexDirection={'row'} justifyContent="space-between">
            <Icon.Close />
            <Icon.Check />
            <Icon.Share />
            <Icon.Calendar />
            <Icon.Help />
            <Icon.Password />
          </Div>
          <Div flexDirection={'row'} justifyContent="space-between">
            <Icon.Logout />
            <Icon.Edit />
            <Icon.Camera />
            <Icon.Ruler />
            <Icon.Site />
            <Icon.Exclamation />
          </Div>
          <Div flexDirection={'row'} justifyContent="space-between">
            <Icon.Trash />
            <Icon.PlusCircle />
            <Icon.Upload />
            <Icon.ArrowTopSquare />
            <Icon.Funnel />
            <Icon.Download />
          </Div>
          <Div flexDirection={'row'} justifyContent="space-between">
            <Icon.Settings />
            <Icon.Doc />
            <Icon.Plus />
            <Icon.ShareNetwork />
            <Icon.Copy />
            <Icon.Copy color="transparent" />
          </Div>
        </Spacing>
      </Div>
      <Div bg="red">
        <Text color="white">{'White Icons'}</Text>
        <Spacing space={4}>
          <Div flexDirection={'row'} justifyContent="space-between">
            <Icon.ArrowLeft color="white" />
            <Icon.ArrowRight color="white" />
            <Icon.Search color="white" />
            <Icon.Bell color="white" />
            <Icon.ChevDown color="white" />
            <Icon.ChevRight color="white" />
          </Div>
          <Div flexDirection={'row'} justifyContent="space-between">
            <Icon.Heart color="white" />
            <Icon.Filter color="white" />
            <Icon.Home color="white" />
            <Icon.Pin color="white" />
            <Icon.User color="white" />
            <Icon.Phone color="white" />
          </Div>
          <Div flexDirection={'row'} justifyContent="space-between">
            <Icon.Pet color="white" />
            <Icon.Male color="white" />
            <Icon.Female color="white" />
            <Icon.Chat color="white" />
            <Icon.CheckCircle color="white" />
            <Icon.Eye color="white" />
          </Div>
          <Div flexDirection={'row'} justifyContent="space-between">
            <Icon.Close color="white" />
            <Icon.Check color="white" />
            <Icon.Share color="white" />
            <Icon.Calendar color="white" />
            <Icon.Help color="white" />
            <Icon.Password color="white" />
          </Div>
          <Div flexDirection={'row'} justifyContent="space-between">
            <Icon.Logout color="white" />
            <Icon.Edit color="white" />
            <Icon.Camera color="white" />
            <Icon.Ruler color="white" />
            <Icon.Site color="white" />
            <Icon.Exclamation color="white" />
          </Div>
          <Div flexDirection={'row'} justifyContent="space-between">
            <Icon.Trash color="white" />
            <Icon.PlusCircle color="white" />
            <Icon.Upload color="white" />
            <Icon.ArrowTopSquare color="white" />
            <Icon.Funnel color="white" />
            <Icon.Download color="white" />
          </Div>
          <Div flexDirection={'row'} justifyContent="space-between">
            <Icon.Settings color="white" />
            <Icon.Doc color="white" />
            <Icon.Plus color="white" />
            <Icon.ShareNetwork color="white" />
            <Icon.Copy color="white" />
            <Icon.Copy color="transparent" />
          </Div>
        </Spacing>
      </Div>
    </Div>
  </Screen.Default>
);
