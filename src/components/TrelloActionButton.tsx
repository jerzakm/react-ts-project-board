import * as React from 'react'
import Icon from '@material-ui/core/Icon'
import Card from '@material-ui/core/Card'
import Textarea from 'react-textarea-autosize'
import Button from '@material-ui/core/Button'
import { connect } from 'react-redux'
import { addList, addCard } from '../actions'

export interface TrelloActionButtonProps {
  list?: boolean
  dispatch?: any
  listID?: any
}

class TrelloActionButton extends React.Component<TrelloActionButtonProps> {
  state = {
    formOpen: false,
    text: ''
  }

  openForm = () => {
    this.setState({
      formOpen: true
    })
  }

  closeForm = () => {
    this.setState({
      formOpen: false
    })
  }

  handleInputChange = (e: any) => {
    this.setState({
      text: e.target.value
    })
  }

  handleAddList = () => {
    const { dispatch } = this.props
    const { text } = this.state

    if (text) {
      dispatch(addList(text))
      this.setState({ text: '' })
    }

    return
  }

  handleAddCard = () => {
    const { dispatch, listID } = this.props
    const { text } = this.state
    if (text) {
      dispatch(addCard(listID, text))
      this.setState({ text: '' })
    }
  }

  renderAddButton = () => {
    const { list } = this.props
    const buttonText = list ? `Add another list` : `Add another card`

    const buttonTextOpacity = list ? 1 : 0.5
    const buttonTextColor = list ? 'white' : 'inherit'
    const buttonTextBackground = list ? 'rgba(0,0,0,0.15)' : 'inherit'

    return (
      <div
        onClick={() => this.openForm()}
        style={{
          ...styles.openFormButtonGroup,
          opacity: buttonTextOpacity,
          color: buttonTextColor,
          backgroundColor: buttonTextBackground
        }}
      >
        <Icon>add</Icon>
        <p>{buttonText}</p>
      </div>
    )
  }

  renderForm = () => {
    const { list } = this.props
    const placeholder = list
      ? 'Enter list title...'
      : 'Enter a title for this card...'
    const buttonTitle = list ? 'Add List' : 'Add Card'

    return (
      <div>
        <Card
          style={{
            minHeight: 60,
            minWidth: 272,
            padding: '6px 8px 2px'
          }}
        >
          <Textarea
            placeholder={placeholder}
            autoFocus
            onBlur={this.closeForm}
            value={this.state.text}
            onChange={this.handleInputChange}
            style={{
              resize: 'none',
              width: '100%',
              outline: 'none',
              border: 'none',
              overflow: ' hidden'
            }}
          />
        </Card>
        <div style={styles.formButtonGroup}>
          <Button
            onMouseDown={list ? this.handleAddList : this.handleAddCard}
            variant="contained"
            style={{ color: 'white', backgroundColor: '#5aac44' }}
          >
            {buttonTitle}
          </Button>
          <Icon
            style={{
              marginLeft: 8,
              cursor: 'pointer'
            }}
          >
            close
          </Icon>
        </div>
      </div>
    )
  }

  public render() {
    return this.state.formOpen ? this.renderForm() : this.renderAddButton()
  }
}

const styles = {
  openFormButtonGroup: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    borderRadius: 3,
    height: 36,
    width: 272,
    paddingLeft: 10
  },
  formButtonGroup: {
    marginTop: 8,
    display: 'flex',
    alignItems: 'center'
  }
}

export default connect()(TrelloActionButton)
