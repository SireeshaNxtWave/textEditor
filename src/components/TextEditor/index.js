import {Component} from 'react'
import {
  TextEditorBgContainer,
  ResponsiveContainer,
  LogoContainer,
  MainHeading,
  WebsiteImage,
  InputContainer,
  TextEditors,
  BoldLetter,
  ItalicLetter,
  UnderLineLetter,
  HorizontalLine,
  TextArea,
  ListItem,
} from './styledComponents'

class TextEditor extends Component {
  state = {textInput: '', isBold: false, isItalic: false, isUnderline: false}

  onChangeInput = event => {
    this.setState({textInput: event.target.value})
  }

  onClickBold = () => {
    this.setState(prevState => ({isBold: !prevState.isBold}))
  }

  onClickItalic = () => {
    this.setState(prevState => ({isItalic: !prevState.isItalic}))
  }

  onClickUnderline = () => {
    this.setState(prevState => ({isUnderline: !prevState.isUnderline}))
  }

  render() {
    const {textInput, isBold, isItalic, isUnderline} = this.state
    return (
      <TextEditorBgContainer>
        <ResponsiveContainer>
          <LogoContainer>
            <MainHeading>Text Editor</MainHeading>
            <WebsiteImage
              alt="text editor"
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
            />
          </LogoContainer>
          <InputContainer>
            <TextEditors>
              <ListItem>
                <BoldLetter
                  isBold={isBold}
                  onClick={this.onClickBold}
                  data-testid="bold"
                >
                  B
                </BoldLetter>
              </ListItem>
              <ListItem>
                <ItalicLetter
                  isItalic={isItalic}
                  onClick={this.onClickItalic}
                  data-testid="italic"
                >
                  i
                </ItalicLetter>
              </ListItem>
              <ListItem>
                <UnderLineLetter
                  isUnderline={isUnderline}
                  onClick={this.onClickUnderline}
                  data-testid="underline"
                >
                  U
                </UnderLineLetter>
              </ListItem>
            </TextEditors>
            <HorizontalLine />
            <TextArea
              rows="30"
              cols="50"
              isBold={isBold}
              isItalic={isItalic}
              isUnderline={isUnderline}
              onChange={this.onChangeInput}
            >
              {textInput}
            </TextArea>
          </InputContainer>
        </ResponsiveContainer>
      </TextEditorBgContainer>
    )
  }
}
export default TextEditor
