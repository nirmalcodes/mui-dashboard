import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Card } from '@mui/material';
import ReactEcharts from 'echarts-for-react';

const SalesChart = () => {
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
      text: 'Sales Overview',
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985',
        },
      },
    },
    grid: {
      left: '2%',
      right: '2%',
      bottom: '2%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      },
    ],
    yAxis: [
      {
        type: 'value',
      },
    ],
    series: [
      {
        smooth: true,
        name: 'Product Sales',
        type: 'line',
        stack: 'Total',
        areaStyle: {},

        data: [80, 232, 201, 100, 330, 210],
      },
      {
        smooth: true,
        name: 'Service',
        type: 'line',
        stack: 'Total',
        areaStyle: {},

        data: [220, 182, 234, 290, 330, 300],
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

export default SalesChart;
