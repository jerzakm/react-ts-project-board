import React from 'react'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'

const TrelloCard = ()=> {
  return (
    <Card>
      <Typography>
        asdassd
      </Typography>
    </Card>
  )
}

export default TrelloCard


export interface ITrelloCard {
  id: string,
  text: string
}