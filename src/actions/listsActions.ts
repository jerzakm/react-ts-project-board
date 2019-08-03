import { CONSTANTS } from '.';

export const addList = (title: any) => {
  return {
    type: CONSTANTS.ADD_LIST,
    payload: title
  };
};
