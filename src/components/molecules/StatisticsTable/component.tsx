import React, { useEffect, useState } from 'react';
import { LineChart, CartesianGrid, XAxis, YAxis, Legend, Tooltip, Line } from 'recharts';
import { strokeColors } from './consts';
import { StatisticsTableProps } from './types';
import { connect } from 'react-redux';
import projectActions from 'store/project/actions';
import SizeTag from 'components/atoms/SizeTag/component';

function StatisticsTable(props: StatisticsTableProps): JSX.Element {
  const { data, chartType, members, onChangeTimeFrame } = props;
  const [timeFrame, setTimeFrame] = useState<string>('1 week');

  useEffect(() => {
    if (timeFrame === '1 week') {
      onChangeTimeFrame('1_week');
    }
    if (timeFrame === '2 weeks') {
      onChangeTimeFrame('2_weeks');
    }
    if (timeFrame === '1 month') {
      onChangeTimeFrame('1_month');
    }
    if (timeFrame === '3 months') {
      onChangeTimeFrame('3_months');
    }
    if (timeFrame === '6 months') {
      onChangeTimeFrame('6_months');
    }
    if (timeFrame === '12 months') {
      onChangeTimeFrame('12_months');
    }
  }, [timeFrame]);
  //
  // useEffect(() => {
  //   projectPK && onGetStatistics && onGetStatistics({ pk: projectPK, time_frame: '1_week' });
  // }, []);

  // const membersArray = projectStatisticsData?.members;

  // const y_axis =
  //   projectStatisticsData?.yAxis?.Git && Object.keys(projectStatisticsData?.yAxis?.Git);
  //
  // const resultArray: any[] = [];
  //
  // const helperFunction = (tableData: any) => {
  //   const members = projectStatisticsData?.members;
  //   y_axis.forEach((y) => {
  //     const dataEntry: {
  //       [key: string]: string;
  //     } = {};
  //     dataEntry['name'] = y;
  //     members.forEach((m: string) => {
  //       const memberObjData = tableData.find((obj: any) => obj.hasOwnProperty(m));
  //       dataEntry[m] = memberObjData[m][chartType][y];
  //     });
  //     resultArray.push(dataEntry);
  //   });
  // };
  //
  // projectStatisticsData &&
  //   projectStatisticsData.state &&
  //   helperFunction(projectStatisticsData.state);

  const time_frames = [
    { name: '1 week', value: '1_week' },
    { name: '2 weeks', value: '2_weeks' },
    { name: '1 month', value: '1_month' },
    { name: '3 months', value: '2_months' },
    { name: '6 months', value: '6_months' },
    { name: '12 months', value: '12_months' },
  ];

  const handleClickSize = (time: any) => {
    if (timeFrame === time) {
      setTimeFrame('');
    } else {
      setTimeFrame(time);
    }
    console.log('the size isss: ', timeFrame);
  };

  console.log('data :', data);

  return (
    <div>
      {data && data.length > 0 && (
        <div>
          <div style={{ textAlign: 'center' }}> {chartType} Chart </div>
          <div
            style={{
              marginTop: '20px',
              marginBottom: '20px',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            {time_frames &&
              time_frames.map((time: any, i: number) => (
                <div style={{ marginRight: '8px' }} key={i}>
                  <SizeTag
                    size={time.name}
                    isSelected={timeFrame === time.name}
                    onClickSize={(time: any) => handleClickSize(time)}
                  />
                </div>
              ))}
          </div>
          <LineChart
            width={730}
            height={250}
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            {members &&
              members.map((m: any, i: number) => (
                <Line key={m} type="monotone" dataKey={m} stroke={strokeColors[i]} />
              ))}
          </LineChart>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    projectMembersState: state.projectReducer.projectMembers.data,
    projectStatisticsData: state.projectReducer.projectStatistics.data,
  };
};

const mapDispatchToProps = {
  onGetStatistics: projectActions.getStatistics,
};

export default connect(mapStateToProps, mapDispatchToProps)(StatisticsTable);
