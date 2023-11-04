import {ISchema, ISearchForm} from '~/utils/interfaces';

import * as yup from 'yup';

const exec = (): ISchema<ISearchForm<string>, ISearchForm<any>> => {
  return yup.object().shape({
    query: yup.string(),
  });
};

export const searchSchema = exec();
