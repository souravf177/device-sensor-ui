export interface IDataSet {
  label?: string // device_id
  data: number[] // temp
  borderColor?: string
}

export interface IChartData {
  labels: string[] // time
  dataSets: IDataSet[]
}
