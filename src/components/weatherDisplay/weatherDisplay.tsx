import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {
  DailyButton,
  DisplayWrapper,
  HourlyButton,
  RadarButton,
  SearchBar,
  SelectionMenuWrapper,
  SevenDayButton,
  WeatherSelection,
} from './weatherDisplay.styles'
let currentCity = ''
const WeatherDisplay = () => {
  const [search, setSearch] = useState<string>()
  const [results, setResults] = useState<any>()

  const displayCityData: {
    city: string
    country: string
    temp: number
    weather: string
    image: any
    forecast: any
  }[] = []
  const display7DayData: {
    '0': { date: any; temp: any }
    '1': { temp: any }
  }[] = []

  const weatherData = async () => {
    try {
      const axios = require('axios')

      const API_URL =
        (process.env.REACT_APP_API_KEY as string) + `=${currentCity}&aqi=no`

      const data = await axios.get(API_URL).then(function (response: any) {
        return displayCityData.push({
          city: response.data.location.name,
          country: response.data.location.country,
          temp: response.data.current.temp_f,
          weather: response.data.current.condition.text,
          image: response.data.current.condition.icon,
          forecast: response.data.forecast,
        })
      })
      return displayCityData
    } catch (error) {
      console.log(error)
    }
  }
  const sevenDayData = async () => {
    try {
      const axios = require('axios')
      const API_URL =
        (process.env.REACT_APP_CURRENT_API_KEY as string) +
        `=${currentCity}&days=7&aqi=no&alerts=no`

      const data = await axios.get(API_URL).then(function (response: any) {
        return display7DayData.push({
          '0': {
            date: response.data.forecast.forecastday[0].date,
            temp: response.data.forecast.forecastday[0].day.avgtemp_f,
          },
          '1': {
            temp: response.data.forecast.forecastday[1].day.avgtemp_f,
          },
        })
      })
      return display7DayData
    } catch (error) {
      console.log(error)
    }
  }
  const handleChange = (e: any) => {
    e.preventDefault()
    setSearch(e.target.value)
  }
  const handleKeyPress = async (e: any) => {
    if (e.code === 'Enter') {
      currentCity = search as string
      await weatherData()
      setSearch('')
      console.log(displayCityData)

      setResults(
        `${displayCityData[0].city}, ${displayCityData[0].country}, ${displayCityData[0].temp}F`
      )
    }
  }
  const sevenDayOnClick = async () => {
    await sevenDayData()
    console.log(currentCity)
    console.log(display7DayData)
    // setResults(
    //   `${display7DayData[0].date}, ${display7DayData[0].temp}F, ${display7DayData[1].temp}FF 7 days`
    // )
  }
  return (
    <DisplayWrapper>
      <SearchBar
        id="search"
        onKeyPress={handleKeyPress}
        onChange={handleChange}
        value={search}
        placeholder="Search Your City"
      />
      <SelectionMenuWrapper>
        <DailyButton>Daily</DailyButton>
        <HourlyButton>Hourly</HourlyButton>
        <SevenDayButton onClick={sevenDayOnClick}>7 Day</SevenDayButton>
        <RadarButton>Radar</RadarButton>
      </SelectionMenuWrapper>
      <WeatherSelection>{results}</WeatherSelection>
    </DisplayWrapper>
  )
}

export default WeatherDisplay
