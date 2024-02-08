import React, {Component} from 'react'
import {
  EdibleTextInputContainer,
  Heading,
  CardContent,
  InputButton,
  Para,
  Input,
  Button,
} from './styledComponents.js'

class EdibleTextInput extends Component {
  state = {
    inputValue: '',
    inputText: 'Initial Text',
    toggleButon: false,
  }

  onChangeInput = event => {
    this.setState({
      inputValue: event.target.value,
    })
  }

  onClickButton = () => {
    const {inputValue} = this.state
    this.setState(prev => ({
      toggleButon: !prev.toggleButon,
      inputText: inputValue,
    }))
  }

  render() {
    const {inputText, toggleButon, inputValue} = this.state
    const mode = toggleButon ? 'Edit' : 'Save'
    return (
      <EdibleTextInputContainer>
        <CardContent onSubmit={this.onSubmitForm}>
          <Heading>Editable Text Input</Heading>
          <InputButton>
            {toggleButon ? (
              <Para>{inputText}</Para>
            ) : (
              <Input
                type="text"
                onChange={this.onChangeInput}
                value={inputValue}
              />
            )}

            <Button onClick={this.onClickButton}>{mode}</Button>
          </InputButton>
        </CardContent>
      </EdibleTextInputContainer>
    )
  }
}

export default EdibleTextInput
