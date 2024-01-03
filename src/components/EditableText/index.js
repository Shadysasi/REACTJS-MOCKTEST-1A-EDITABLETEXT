import {Component} from 'react'
import {
  AppContainer,
  EditingContainer,
  EditHeading,
  EditTextContainer,
  EditButton,
  EditedText,
  UserInput,
} from './StyledComponents'

class EditableText extends Component {
  state = {userInput: '', isButtonClicked: false}

  onChangeUserInput = event => {
    this.setState({userInput: event.target.value})
  }

  onClickButton = () => {
    this.setState(prevState => ({isButtonClicked: !prevState.isButtonClicked}))
  }

  render() {
    const {isButtonClicked, userInput} = this.state
    const buttonText = isButtonClicked ? 'Edit' : 'Save'
    return (
      <AppContainer>
        <EditingContainer>
          <EditHeading>Editable Text Input</EditHeading>
          <EditTextContainer>
            {isButtonClicked ? (
              <EditedText>{userInput}</EditedText>
            ) : (
              <UserInput
                type="text"
                value={userInput}
                onChange={this.onChangeUserInput}
              />
            )}

            <EditButton type="button" onClick={this.onClickButton}>
              {buttonText}
            </EditButton>
          </EditTextContainer>
        </EditingContainer>
      </AppContainer>
    )
  }
}

export default EditableText
