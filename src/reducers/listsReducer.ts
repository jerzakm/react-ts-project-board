import { ITrelloList } from '../components/TrelloList'
import { CONSTANTS } from '../actions'
import { ITrelloCard } from '../components/TrelloCard'

let listID = 2
let cardID = 2

const initialState: ITrelloList[] = [
  {
    title: 'TestList1',
    id: '0',
    cards: [{ id: '1', text: 'Una mattina' }, { id: '2', text: 'bella ciao' }]
  },
  {
    title: 'TestList2',
    id: '1',
    cards: [{ id: '1', text: 'Una mattina' }, { id: '2', text: 'bella ciao' }]
  }
]

const listsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CONSTANTS.ADD_LIST:
      const newList: ITrelloList = {
        title: action.payload,
        cards: [],
        id: `${listID}`
      }
      listID += 1
      return [...state, newList]
    case CONSTANTS.ADD_CARD:
      const newCard: ITrelloCard = {
        text: action.payload.text,
        id: `${cardID}`
      }
      cardID++

      const newState = state.map(list => {
        if (list.id == action.payload.listID) {
          return {
            ...list,
            cards: [...list.cards, newCard]
          }
        } else {
          return list
        }
      })

      return newState
    default:
      return state
  }
}

export default listsReducer
