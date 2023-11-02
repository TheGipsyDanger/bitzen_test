import {metrics} from '~/styles';

export const useDefineContentHeight = () => {
  function withPercentage(percentage: number): number {
    return Math.round((metrics.height / 100) * percentage);
  }
  return {withPercentage};
};
