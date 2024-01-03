import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5d0fe;
  min-height: 100vh;
`
export const EditingContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  width: 40%;
  padding: 20px;
`
export const EditHeading = styled.h1`
  font-size: 32px;
  font-family: 'Roboto';
  font-weight: 700;
  color: #000000;
`
export const EditTextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`
export const EditButton = styled.button`
  background-color: #d946ef;
  color: #ffffff;
  border-radius: 5px;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 10px;
  font-size: 12px;
  margin-left: 20px;
`
export const EditedText = styled.p`
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 500;
  color: #323f4b;
`
export const UserInput = styled.input`
  border: 1px solid #cbd2d9;
  width: 300px;
  height: 32px;

  padding: 5px;
`
