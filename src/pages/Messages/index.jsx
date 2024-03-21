import { useEffect, useRef, useState } from 'react';
import {
  Avatar,
  Box,
  IconButton,
  InputBase,
  Paper,
  Typography,
  styled,
} from '@mui/material';
import AutoSizer from 'react-virtualized-auto-sizer';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import SendIcon from '@mui/icons-material/Send';
import { formatDateTime } from '../../utils/formatDateTime';

const imgURL = 'https://picsum.photos/800/800?random=';

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role='tabpanel'
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <>{children}</>}
    </Box>
  );
};

const a11yProps = (index) => {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
};

const CustomStyledInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.mode === 'light' ? '#F3F6F9' : '#1A2027',
    border: '1px solid',
    borderColor: theme.palette.mode === 'light' ? '#E0E3E7' : '#2D3843',
    fontSize: 16,
    padding: '10px 12px',
    transition: theme.transitions.create(['border-color', 'background-color']),
  },
}));

const users = [
  {
    name: 'Chris',
    imgUrl: `${imgURL}10`,
    userId: 'CboL3SFYFZNy6D8j9ty6',
  },
  {
    name: 'Tyler',
    imgUrl: `${imgURL}11`,
    userId: 'hoPQMYBSPaM7v35CXLEf',
  },
  {
    name: 'Minnie',
    imgUrl: `${imgURL}12`,
    userId: 'By76ndw8Aqv7XCdZFJI',
  },
  {
    name: 'Leonard',
    imgUrl: `${imgURL}13`,
    userId: 'cfg4DaZo08jTSUz2JD',
  },
  {
    name: 'Me',
    imgUrl: `${imgURL}20`,
    userId: 'zf6XgjDlQ4cZ3JdIe',
  },
];

const getUserDetails = (userId) => {
  const user = users.find((user) => user.userId === userId);
  if (user) {
    return { name: user.name, imgUrl: user.imgUrl };
  } else {
    return { name: 'Unknown', imgUrl: '' };
  }
};

const MessageCard = ({ data }) => {
  const { userID, mssg, timeStamp } = data;
  const userDetails = getUserDetails(userID);

  const messageRef = useRef(null);

  useEffect(() => {
    messageRef.current?.scrollIntoView({ behavior: 'smooth' });
    return () => {};
  }, []);

  return (
    <Box
      ref={messageRef}
      sx={{ display: 'flex', mb: 1, '&:last-child': { mb: 0 } }}
    >
      <Box
        sx={{
          display: 'flex',
          maxWidth: 'calc(100% - 45%)',
          ...(userDetails.name == 'Me' && { ml: 'auto' }),
        }}
      >
        {userDetails.name != 'Me' && (
          <Box sx={{ mr: 1 }}>
            <Avatar
              alt={userDetails.name}
              src={userDetails.imgUrl}
              sx={{ width: 32, height: 32 }}
            />
          </Box>
        )}
        <Box
          component={Paper}
          elevation={0}
          variant='outlined'
          sx={{
            paddingBlock: 1,
            paddingInline: 2,
            borderRadius: 1.5,
            width: '100%',
          }}
        >
          <Typography>{mssg}</Typography>
          <Typography variant='caption'>{formatDateTime(timeStamp)}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

const Messages = () => {
  const [tabValue, setTabValue] = useState(0);
  const [chatsList, setChatsList] = useState([
    {
      id: 'CboL3SFYFZNy6D8j9ty6',
      messages: [
        {
          id: 1710884113,
          userID: 'CboL3SFYFZNy6D8j9ty6',
          mssg: 'Hello there Jhon!',
          timeStamp: 1710884113,
        },
        {
          id: 1710884136,
          userID: 'zf6XgjDlQ4cZ3JdIe',
          mssg: 'Hey Chris!',
          timeStamp: 1710884136,
        },
        {
          id: 1710884159,
          userID: 'CboL3SFYFZNy6D8j9ty6',
          mssg: 'Did you made the budget for the CAPAX project?',
          timeStamp: 1710884159,
        },
      ],
    },
    {
      id: 'hoPQMYBSPaM7v35CXLEf',
      messages: [],
    },
    {
      id: 'By76ndw8Aqv7XCdZFJI',
      messages: [],
    },
    {
      id: 'cfg4DaZo08jTSUz2JD',
      messages: [],
    },
  ]);
  const [messageInput, setMessageInput] = useState('');

  const handleTabChange = (event, newTabValue) => {
    setTabValue(newTabValue);
  };

  console.table(chatsList);

  const sendMessage = (chatIndex) => {
    const newChatsList = [...chatsList];
    const newMessage = {
      id: Date.now(),
      userID: 'zf6XgjDlQ4cZ3JdIe',
      mssg: messageInput,
      timeStamp: Date.now(), // Timestamp of the message
    };
    newChatsList[chatIndex].messages.push(newMessage);
    setChatsList(newChatsList);
    setMessageInput(''); // Resetting the message input after sending
  };

  const renderMessages = (chatIndex) => {
    return chatsList[chatIndex].messages.map((message, index) => {
      return <MessageCard key={index} data={message} />;
    });
  };

  return (
    <>
      <Box
        sx={{
          flex: '1 1 auto',
          margin: (theme) => theme.spacing(-3),
        }}
      >
        <AutoSizer disableWidth>
          {({ height }) => (
            <Box
              sx={{
                display: 'flex',
                flexGrow: 1,
                height: `calc(${height}px - 1px)`,
                // bgcolor: 'background.paper',
              }}
            >
              <Tabs
                orientation='vertical'
                variant='scrollable'
                scrollButtons={false}
                value={tabValue}
                onChange={handleTabChange}
                aria-label='Vertical chat tabs'
                sx={{
                  borderRight: 1,
                  borderColor: 'divider',
                  width: '240px',
                  flexShrink: 0,
                  bgcolor: 'background.paper',
                }}
              >
                {chatsList.map((chat, index) => {
                  const userDetails = getUserDetails(chat.id);
                  return (
                    <Tab
                      key={index}
                      icon={
                        <Avatar
                          alt={userDetails.name}
                          src={userDetails.imgUrl}
                        />
                      }
                      iconPosition='start'
                      label={userDetails.name}
                      {...a11yProps(index)}
                      sx={{
                        justifyContent: 'flex-start',
                        width: '100%',
                        textTransform: 'capitalize',
                        fontSize: (theme) => theme.typography.body1,
                        borderBottom: 1,
                        borderColor: 'divider',
                        '&:last-child': { border: 0 },
                      }}
                    />
                  );
                })}
              </Tabs>
              {chatsList.map((chat, index) => {
                const userDetails = getUserDetails(chat.id);
                return (
                  <TabPanel
                    key={index}
                    value={tabValue}
                    index={index}
                    sx={{
                      flex: '1 1 auto',
                      position: 'relative',
                    }}
                  >
                    {/* chat header */}
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        borderBottom: 1,
                        borderColor: 'divider',
                        position: 'absolute',
                        bgcolor: 'background.paper',
                        top: 0,
                        insetInline: 0,
                        paddingInline: (theme) => theme.spacing(2),
                        paddingBlock: (theme) => theme.spacing(1),
                      }}
                    >
                      <Avatar
                        alt={userDetails.name}
                        src={userDetails.imgUrl}
                        sx={{ mr: (theme) => theme.spacing(1) }}
                      />
                      <Typography variant='body1' fontWeight={600}>
                        {userDetails.name}
                      </Typography>
                    </Box>

                    {/* chat messages */}
                    <AutoSizer disableWidth>
                      {({ height }) => (
                        <Box
                          sx={{
                            mt: '57px',
                            mb: '62px',
                            padding: (theme) => theme.spacing(2),
                            // background: 'green',
                            // height: height,
                            height: `calc(${height}px - (62px + 57px))`,
                            overflow: 'hidden',
                            overflowY: 'auto',
                          }}
                        >
                          {renderMessages(index)}
                        </Box>
                      )}
                    </AutoSizer>

                    {/* chat inputs */}
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        borderTop: 1,
                        borderColor: 'divider',
                        position: 'absolute',
                        bgcolor: 'background.paper',
                        bottom: 0,
                        insetInline: 0,
                        paddingInline: (theme) => theme.spacing(2),
                        paddingBlock: (theme) => theme.spacing(1),
                        columnGap: 1,
                      }}
                    >
                      <CustomStyledInput
                        fullWidth
                        value={messageInput}
                        onChange={(e) => setMessageInput(e.target.value)}
                      />
                      <IconButton
                        aria-label='send'
                        disabled={messageInput.trim() === ''}
                        onClick={() => sendMessage(index)}
                      >
                        <SendIcon />
                      </IconButton>
                    </Box>
                  </TabPanel>
                );
              })}
            </Box>
          )}
        </AutoSizer>
      </Box>
    </>
  );
};

export default Messages;
