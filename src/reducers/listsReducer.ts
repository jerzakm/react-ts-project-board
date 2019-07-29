import { ITrelloList } from "../components/TrelloList";

const initialState:ITrelloList[] = [
  {
    title: 'TestList1',
    id: '1',
    cards: [
      {id: '1', text: 'Una matina'},
      {id: '2', text: 'bella ciao'}
    ]
  }
]

const listsReducer = (state = initialState, action: any) => {
  switch(action.type) {
    default:
        return state
  }
}

export default listsReducer