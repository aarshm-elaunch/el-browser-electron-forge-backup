import { Box, Button, Grid2, Tab, Tabs, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Search from '../components/common/Search';
import { IconLock, ThemeIcon } from '../components/icons';
import EnableTwoFactorAuthModal from '../components/modals/EnableTwoFactorAuthModal';
import { RootState } from '../redux/store';
import { User } from '../types/data';
import DisableTwoFactorAuthModal from '../components/modals/DisableTwoFactorAuthModal';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ background: '#F1F3F4B2', borderRadius: '24px' }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const SettingsPage = () => {
  const [value, setValue] = useState(0);
  const [openEnable2FAModal, setOpenEnable2FAModal] = useState(false);
  const [openDisable2FAModal, setOpenDisable2FAModal] = useState(false);
  const { userInfo } = useSelector((state: RootState) => state.auth);
  const { twoFactorEnabled } = userInfo as User

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid2 container spacing={2} >
          <Grid2 size={{ xs: 0, md: 2 }}>
            <Box sx={{ bgcolor: "", height: '100vh' }}>
              <Typography sx={{ color: (theme) => theme.palette.primary.dark, fontSize: 28, fontWeight: 600, py: '8px', paddingLeft: '28px' }}>Setting</Typography>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
                sx={{
                  color: 'white',
                  '& .MuiTabs-scroller': {
                    paddingRight: '24px',
                    '.MuiTabs-flexContainer': {
                      flexDirection: 'column',
                      ".MuiButtonBase-root": {
                        display: 'flex',
                        alignItems: 'center',
                        borderRadius: '0 24px 24px 0',
                        paddingLeft: '28px',
                        textTransform: 'capitalize',
                        flexDirection: 'row',
                        justifyContent: 'start',
                        gap: '12px',
                        minHeight: 'unset',
                        py: '12px',
                        "svg": {
                          fill: '#656565',
                          marginBottom: '0px'
                        },
                        "&.Mui-selected": {
                          backgroundColor: '#E4E4E4',
                          color: '#000000',
                        },
                        "&:hover": {
                          backgroundColor: '#E4E4E4',
                        }
                      }
                    },
                    ".MuiTabs-indicator": {
                      display: 'none'
                    }
                  }
                }}
              >
                <Tab icon={<IconLock />} label="Security" {...a11yProps(0)} />
                <Tab icon={<ThemeIcon />} label="Theme" {...a11yProps(1)} />
              </Tabs>
            </Box>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 10 }}>
            <Box sx={{ maxWidth: { md: '60%', xs: '85%' }, flexGrow: 1 }} mx={'auto'}>
              <Search placeholder="Search Setting" filter={false} />
              <Box sx={{}}>
                <CustomTabPanel value={value} index={0}>
                  <Box>
                    <Box sx={{ p: 2, borderBottom: '1px solid #E4E4E4' }}>
                      <Typography sx={{ color: (theme) => theme.palette.primary.dark, fontSize: 18, fontWeight: 500 }}>Security</Typography>
                    </Box>
                    <Box sx={{ p: 2 }}>
                      <Box>
                        <Typography sx={{ color: (theme) => theme.palette.primary.dark, fontSize: 16, fontWeight: 500, pb: '6px' }}>Two-factor authentication</Typography>
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'start',
                            justifyContent: 'space-between',
                            gap: '12px',
                            background: '#fff',
                            padding: '12px',
                            borderRadius: '12px'
                          }}>
                          <Box
                            sx={{
                              display: 'flex',
                              flexDirection: 'column',
                              gap: '4px'
                            }}>
                            <Typography sx={{ color: (theme) => theme.palette.primary.dark, fontSize: 15, fontWeight: 500 }}>Secure your Account</Typography>
                            <Typography sx={{ color: (theme) => theme.palette.primary.dark, fontSize: 14, fontWeight: 400 }}>Enable two-factor authentication to add and extra layer of Security</Typography>
                          </Box>
                          {
                            twoFactorEnabled ? (
                              <Button
                                variant="outlined"
                                sx={{
                                  textTransform: "none",
                                  boxShadow: 'none',
                                  lineHeight: 'normal',
                                  p: '8px 10px',
                                  fontSize: '14px',
                                  flexShrink: '0',
                                  border: "1px solid #e3e3e3",
                                  color: "#282828"
                                }}
                                onClick={() => setOpenDisable2FAModal(true)}
                              >
                                Disable 2FA
                              </Button>
                            ) : (
                              <Button
                                variant="contained"
                                sx={{
                                  backgroundColor: '#22b142',
                                  textTransform: "none",
                                  boxShadow: 'none',
                                  lineHeight: 'normal',
                                  p: '8px 10px',
                                  fontSize: '14px',
                                  flexShrink: '0',
                                  '&:hover': {
                                    backgroundColor: '#199735',
                                    boxShadow: 'none',
                                  }
                                }}
                                onClick={() => setOpenEnable2FAModal(true)}
                              >
                                Enable 2FA
                              </Button>
                            )
                          }
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                  <Box>
                    <Box sx={{ p: 2, borderBottom: '1px solid #E4E4E4' }}>
                      <Typography sx={{ color: (theme) => theme.palette.primary.dark, fontSize: 16, fontWeight: 500 }}>Theme</Typography>
                    </Box>
                    <Box sx={{ p: 2 }}>
                      Security
                    </Box>
                  </Box>
                </CustomTabPanel>
              </Box>
            </Box>
          </Grid2 >
        </Grid2 >
      </Box >
      <EnableTwoFactorAuthModal open={openEnable2FAModal} onClose={() => setOpenEnable2FAModal(false)} />
      <DisableTwoFactorAuthModal open={openDisable2FAModal} onClose={() => setOpenDisable2FAModal(false)} />
    </>
  )
}

export default SettingsPage