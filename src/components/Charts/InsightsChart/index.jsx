import { useTheme } from '@mui/material/styles';
import { Card } from '@mui/material';
import ReactEcharts from 'echarts-for-react';

const InsightsChart = () => {
  const theme = useTheme();

  const style = {
    minHeight: '25rem',
    // height: 'calc((100vh - 200px) / 5)',
    width: '100%',
    // fontSize: '10px',
  };

  const option = {
    backgroundColor: 'transparent',
    title: {
      text: 'Insights',
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    grid: {
      left: '2%',
      right: '2%',
      bottom: '2%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      data: ['Earnings', 'Spendings', 'Sales', 'Clients', 'Projects'],
    },
    yAxis: {
      type: 'value',
      boundaryGap: [0, 0.01],
    },
    series: [
      {
        name: '2022',
        type: 'bar',
        data: [78, 55, 88, 64, 55],
      },
      {
        name: '2023',
        type: 'bar',
        data: [92, 40, 95, 75, 69],
      },
    ],
  };
  return (
    <Card sx={{ borderRadius: 4, p: 2 }}>
      <ReactEcharts
        option={option}
        theme={theme.palette.mode === 'dark' && 'dark'}
        style={style}
      />
    </Card>
  );
};

export default InsightsChart;
