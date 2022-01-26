import React from 'react'
import styled from 'styled-components'

export const DisplayWrapper = styled.div`
  color: black;
  background-color: grey;
  height: 70vh;
  width: 60vw;
  border-radius: 15px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2em;
  text-align: center;
`
export const SearchBar = styled.input`
  cursor: text;
  width: 25vw;
  height: 5vh;
  border: 2px black solid;
  font-size: 0.7em;
`
export const SelectionMenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  height: 7vh;
  border-top: black 2px solid;
  border-bottom: black 2px solid;
  margin-top: 3vh;
`
export const DailyButton = styled.div`
  cursor: pointer;
`
export const HourlyButton = styled.div`
  cursor: pointer;
`
export const SevenDayButton = styled.div`
  cursor: pointer;
`
export const RadarButton = styled.div`
  cursor: pointer;
`
export const WeatherSelection = styled.div`
  height: 45vh;
  width: 50vw;
  border: black 2px solid;
  margin-left: 5vw;
  margin-top: 4vh;
`
