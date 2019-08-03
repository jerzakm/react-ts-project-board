import React, { Component } from 'react'
import TrelloList, { ITrelloList } from './TrelloList'
import { connect } from 'react-redux'
import TrelloActionButton from './TrelloActionButton'

class App extends Component {
  render() {
    const { lists }: any = this.props
    return (
      <div className="App">
        <h1>Project board</h1>
        <div style={styles.listsContainer}>
          {lists.map((list: ITrelloList) => (
            <TrelloList
              listID={list.id}
              key={list.id}
              title={list.title}
              cards={list.cards}
            />
          ))}
          <TrelloActionButton list listID={lists.id} />
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

const mapStateToProps = (state: any) => ({
  lists: state.lists
})

export default connect(mapStateToProps)(App)
