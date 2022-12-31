import styled from 'styled-components'

export const TextEditorBgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #25262c;
  height: 100vh;
  font-family: 'roboto';
`
export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #1b1c22;
  width: 85%;
  height: 80%;
  padding: 20px;
`
export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
`
export const MainHeading = styled.h1`
  color: #f8fafc;
  font-size: 25px;
  font-family: 'roboto';
`
export const WebsiteImage = styled.img`
  height: 250px;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #25262c;
  width: 50%;
  border-radius: 8px;
  border: 1px solid #f1f5f9;
`
export const TextEditors = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const ListItem = styled.li`
  list-style: none;
`

export const BoldLetter = styled.button`
  color: ${props => (props.isBold ? '#faff00' : '#f1f5f9')};
  font-size: 20px;
  margin-right: 15px;
  background-color: transparent;
  border: 0px;
`
export const ItalicLetter = styled.button`
    color: ${props => (props.isItalic ? '#faff00' : '#f1f5f9')}
    font-size: 20px;
    margin-right: 15px;
    font-style: italic;
     background-color: transparent;
    border: 0px;
`
export const UnderLineLetter = styled.button`
    color: ${props => (props.isUnderline ? '#faff00' : '#f1f5f9')}
    font-size: 20px;
    text-decoration: underline;
    margin-right: 15px;
    background-color: transparent;
    border: 0px;
`
export const HorizontalLine = styled.hr`
  color: #f1f5f9;
  width: 100%;
  height: 1px;
`
export const TextArea = styled.textarea`
  background-color: transparent;
  color: #f1f5f9;
  border: 0px;
  padding: 10px;
  font-weight: ${props => (props.isBold ? 'bold' : 'normal')};
  font-style: ${props => (props.isItalic ? 'italic' : 'normal')};
  text-decoration: ${props => (props.isUnderline ? 'underline' : 'normal')};
`
