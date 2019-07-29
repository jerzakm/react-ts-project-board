import React from 'react'
import TrelloCard, { ITrelloCard } from './TrelloCard';


const TrelloList = ({title}: any)=> {
  return(
    <div style={styles.container}>
      <h4>{title}</h4>
      <TrelloCard/>
    </div>
  )
}

const styles = {
  container: {
    backgroundColor: '#ccc',
    borderRadius: 3,
    width: 300,
    padding: 8
  }
}

export default TrelloList

export interface ITrelloList {
  title: string,
  id: string,
  cards: ITrelloCard[]
}