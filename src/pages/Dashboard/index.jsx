import React, { useState } from 'react';
import { Box, Card, Grid, Typography } from '@mui/material';
import StatCard from '../../components/Cards/StatCard';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import CreateNewFolderOutlinedIcon from '@mui/icons-material/CreateNewFolderOutlined';
import SalesChart from '../../components/Charts/SalesChart';
import InsightsChart from '../../components/Charts/InsightsChart';
import ProjectsTable from '../../components/ProjectsTable';
import SortableList from '../../components/SortableList';
import SortableListItem from '../../components/SortableList/SortableListItem';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';

const statCards = [
  { name: 'Earnings', value: '$7,000', icon: PaymentsOutlinedIcon },
  { name: 'Spendings', value: '$2,500', icon: AttachMoneyOutlinedIcon },
  { name: 'Sales', value: '$10,000', icon: TrendingUpOutlinedIcon },
  { name: 'New Clients', value: '10', icon: PeopleOutlineOutlinedIcon },
  { name: 'New Projects', value: '12', icon: CreateNewFolderOutlinedIcon },
];

const taskList = [
  { id: 1, name: 'Meeting 1', completed: true },
  { id: 2, name: 'Meeting 2', completed: false },
  { id: 3, name: 'Meeting 3', completed: false },
  { id: 4, name: 'Meeting 4', completed: false },
  { id: 5, name: 'Meeting 5', completed: false },
  { id: 6, name: 'Meeting 6', completed: false },
];

const Dashboard = () => {
  const [tasks, setTasks] = useState(taskList);

  return (
    <>
      <Box sx={{ flex: '1' }}>
        <Box sx={{ mb: 2 }}>
          <Grid container spacing={2}>
            {statCards.map((card, index) => {
              const { name, value, icon } = card;
              return (
                <Grid item xs={12} md={4} lg={2.4} key={index}>
                  <StatCard title={name} value={value} icon={icon} />
                </Grid>
              );
            })}
          </Grid>
        </Box>
        <Box sx={{ mb: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12} lg={7}>
              <SalesChart />
            </Grid>
            <Grid item xs={12} md={12} lg={5}>
              <InsightsChart />
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ mb: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12} lg={8}>
              <ProjectsTable />
            </Grid>
            <Grid item xs={12} md={12} lg={4}>
              <Card sx={{ borderRadius: 4, p: 2, height: '100%' }}>
                <Typography variant='h6' fontWeight={700} mb={1.5}>
                  Tasks
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1.5,
                  }}
                >
                  <SortableList listItems={tasks} onEvent={setTasks}>
                    {tasks.map((task) => (
                      <SortableListItem id={task.id} key={task.id}>
                        <Card
                          variant='outlined'
                          elevation={0}
                          sx={{
                            p: 1,
                            borderRadius: 2,
                            cursor: 'grab',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                          }}
                        >
                          <DragIndicatorIcon fontSize='small' />
                          <Typography>{task.name}</Typography>
                        </Card>
                      </SortableListItem>
                    ))}
                  </SortableList>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
