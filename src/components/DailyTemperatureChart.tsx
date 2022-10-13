/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { Card } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { chartDates } from '../constansts/ChartDate'
import { useSensorWeeklyAvgStats } from '../hooks/useSensorWeeklyAvgStats'
import { IDataSet } from '../Interfaces/IChartData'
import LineChart from './common/LineChart'

const DailyTemperatureChart = () => {
  const { id = '' } = useParams()
  const { data, isLoading, isError, error } = useSensorWeeklyAvgStats(id)

  const labels: string[] = chartDates
  const dataSets: IDataSet[] = []

  data?.data.results.forEach((_: any) => {
    const dataSet: IDataSet = {
      label: '',
      data: [],
    }
    dataSet.label = _.sensor_id
    _.stats.forEach((stat: { time: string; temp: number }) => {
      dataSet.data.push(stat.temp)
    })
    dataSets.push(dataSet)
  })
  return (
    <Card>
      <h3>TEMPERATURE DAILY</h3>
      <LineChart labels={labels} dataSets={dataSets} />
    </Card>
  )
}

export default DailyTemperatureChart
