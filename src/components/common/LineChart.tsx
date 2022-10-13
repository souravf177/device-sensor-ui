import { IChartData, IDataSet } from '../../Interfaces/IChartData'
import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

interface IProps {
  labels: string[]
  dataSets: IDataSet[]
  // eslint-disable-next-line @typescript-eslint/ban-types
  options?: {}
}

const LineChart: React.FC<IProps> = ({ labels, dataSets, options = {} }) => {
  return (
    <>
      <Line
        data={{
          labels: [...labels],
          datasets: [...dataSets],
        }}
        options={options}
      />
    </>
  )
}

export default LineChart
