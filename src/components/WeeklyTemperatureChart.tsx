import React from 'react'
import { Card } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { IDataSet } from '../Interfaces/IChartData'
import LineChart from './common/LineChart'
import { useSensorWeeklyStats } from '../hooks/useSensorWeeklyStats'

const WeeklyTemperatureChart = () => {
  const { id = '' } = useParams()
  const { data, isLoading, isError, error } = useSensorWeeklyStats(id)

  const labels: string[] = []
  const dataSet: IDataSet = {
    label: '',
    data: [],
  }

  data?.data.results.forEach((_: { temp: number; time: number }) => {
    const timestamp = _.time
    const a = new Date(timestamp * 1000)
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    const dayOfWeek = days[a.getDay()].slice(0, 3)

    labels.push(a.getDate().toString())
    dataSet.data.push(_.temp)
    // dataSet.label = _.sensor_id
    // _.forEach((stat: { time: string; temp: number }) => {
    //   labels.push(stat.time)
    //   dataSet.data.push(stat.temp)
    // })
    // dataSets.push(dataSet)
  })
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'WEEKLY AVERAGE TEMP',
      },
    },
    scales: {
      y: {
        max: 30,
        min: 0,
        ticks: {
          stepSize: 10,
        },
      },
    },
  }

  return (
    <Card style={{ width: '30rem' }}>
      <LineChart labels={labels} dataSets={[dataSet]} options={options} />
    </Card>
  )
}

export default WeeklyTemperatureChart
