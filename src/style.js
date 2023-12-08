import styled from 'styled-components'

export const TagsButton = styled.button`
  background-color: ${props => (props.isActive ? '#f3aa4a' : 'transparent')};
  color: #ffffff;
  height: 35px;
  width: 120px;
  padding: 5px;
  border-radius: 10px;
  border-color: #f3aa4a;
`

export const Heading = styled.h1`
  color: #ffffff;
`
