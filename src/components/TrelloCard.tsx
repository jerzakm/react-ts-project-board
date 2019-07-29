import React from 'react'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import CardContent from '@material-ui/core/CardContent'

const TrelloCard = ({ text }:any)=> {
  return (
    <Card style={styles.cardContainer}>
      <CardContent>
        <Typography gutterBottom>{text}</Typography>
      </CardContent>
    </Card>
  )
}

export default TrelloCard

const styles = {
  cardContainer: {
    marginBottom: 8
  }
}

export interface ITrelloCard {
  id: string,
  text: string
}