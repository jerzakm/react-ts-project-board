import { CONSTANTS } from '.'

export const addCard = (listID: any, text: any) => {
  return {
    type: CONSTANTS.ADD_CARD,
    payload: { text, listID }
  }
}
