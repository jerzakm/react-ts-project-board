import React, { Component } from "react"
import TrelloList from "./TrelloList"
import { connect } from 'react-redux'

class App extends Component {
  render(){
    const { lists }:any = this.props
    return (
      <div className="App">
        <h1>Project board</h1>
        <div style={styles.listsContainer}>
          { lists.map((list: { title: any; cards: any; }) =>
            <TrelloList title={list.title} cards={list.cards}/>
          )}
        </div>
      </div>
    )
  }
}

const styles = {
  listsContainer: {
    display: 'flex',
    'flex-direction': 'row',
    marginRight: 8
  }
}

const mapStateToProps = (state:any) => ({
  lists: state.lists
})

export default connect(mapStateToProps) (App)