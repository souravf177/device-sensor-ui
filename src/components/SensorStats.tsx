/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { Spinner } from 'react-bootstrap'
import { chartDates } from '../constansts/ChartDate'
import { colors } from '../constansts/Colors'
import { useSensorStats } from '../hooks/useSensorStats'
import { IChartData, IDataSet } from '../Interfaces/IChartData'
import LineChart from './common/LineChart'

const SensorStats = () => {
  const { data, isLoading, isError, error } = useSensorStats()

  //   const chartData: IChartData = {
  //     labels: [],
  //     dataSets: [],
  //   }

  const labels: string[] = chartDates
  const dataSets: IDataSet[] = []

  data?.data.results.forEach((_: any) => {
    const dataSet: IDataSet = {
      label: '',
      data: [],
    }
    dataSet.label = _.device_id.substring(4)
    _.stats.forEach((stat: { time: string; temp: number }, index: number) => {
      dataSet.data.push(stat.temp)
      dataSet.borderColor = colors[index]
    })
    dataSets.push(dataSet)
  })
  if (isLoading) {
    return (
      <Spinner
        animation='border'
        variant='secondary'
        style={{ display: 'block', margin: 'auto' }}
      />
    )
  }
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'SENSOR TEMPERATURE',
      },
    },
    scales: {
      y: {
        max: 35,
        min: 15,
        ticks: {
          stepSize: 5,
        },
      },
    },
  }
  return (
    <div style={{ width: '80vw', margin: 'auto' }}>
      <LineChart labels={labels} dataSets={dataSets} options={options} />
    </div>
  )
}

export default SensorStats
