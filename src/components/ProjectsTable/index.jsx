import React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import BorderLinearProgress from '../BorderLinearProgress';
import GroupAvatars from '../GroupAvatars';

const tableHeaders = [
  { id: 1, name: 'Project' },
  { id: 2, name: 'Members' },
  { id: 3, name: 'Budget' },
  { id: 4, name: 'Progress' },
];

const tableRows = [
  {
    id: 1,
    project: 'Fix countdown issue',
    members: [1, 2, 3, 4],
    budget: 'Not set',
    progress: 65,
  },
  {
    id: 2,
    project: 'New POS UI design',
    members: [1, 2, 3],
    budget: '$18,000',
    progress: 35,
  },
  {
    id: 3,
    project: 'Development of Shop Helper V2.0',
    members: [1, 2, 3, 4, 5, 6],
    budget: '$30,000',
    progress: 50,
  },
  {
    id: 4,
    project: 'Redisign landing page',
    members: [1, 2, 3],
    budget: '$10,000',
    progress: 20,
  },
  {
    id: 5,
    project: 'Launch Shop Helper Mobile App',
    members: [1, 2, 3, 4],
    budget: '$25,000',
    progress: 75,
  },
  {
    id: 6,
    project: 'Fix checkout process errors',
    members: [1, 2],
    budget: 'Not set',
    progress: 10,
  },
];

const ProjectsTable = () => {
  return (
    <>
      <Card sx={{ borderRadius: 4, p: 2 }}>
        <Typography variant='h6' fontWeight={700} mb={1.5}>
          Projects
        </Typography>
        <TableContainer>
          <Table
            size='small'
            sx={{ minWidth: 650 }}
            aria-label='projects table'
          >
            <TableHead>
              <TableRow>
                {tableHeaders.map((header) => {
                  const { id, name } = header;
                  return (
                    <TableCell sx={{ fontWeight: 600 }} key={id}>
                      {name}
                    </TableCell>
                  );
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {tableRows.map((row) => {
                const { id, project, members, budget, progress } = row;
                return (
                  <TableRow
                    key={id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component='th' scope='row'>
                      {project}
                    </TableCell>
                    <TableCell>
                      <GroupAvatars data={members} />
                    </TableCell>
                    <TableCell>{budget}</TableCell>
                    <TableCell>
                      <BorderLinearProgress value={progress} />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </>
  );
};

export default ProjectsTable;
