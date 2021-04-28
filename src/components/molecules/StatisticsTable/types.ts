export interface StatisticsTableProps {
  readonly members: any[];
  readonly projectPK?: any;
  onGetStatistics(id: any): any;
  projectStatisticsData?: any;
  chartType?: any;
  onChangeTimeFrame?: any;
  readonly data: any;
}
