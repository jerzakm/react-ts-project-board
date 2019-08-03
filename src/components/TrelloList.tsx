import React from 'react'
import TrelloCard, { ITrelloCard } from './TrelloCard'
import TrelloActionButton from './TrelloActionButton'

const TrelloList = ({ title, cards, listID }: any) => {
  return (
    <div style={styles.container}>
      <h4>{title}</h4>
      {cards.map((card: any) => (
        <TrelloCard key={card.id} text={card.text} />
      ))}
      <TrelloActionButton listID={listID} />
    </div>
  )
}

const styles = {
  container: {
    backgroundColor: '#dfe3e6',
    borderRadius: 3,
    width: 300,
    padding: 8,
    height: '100%',
    marginRight: 8
  }
}

export default TrelloList

export interface ITrelloList {
  title: string
  id: string
  cards: ITrelloCard[]
}
