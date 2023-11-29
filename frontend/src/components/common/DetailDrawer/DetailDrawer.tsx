import { Button } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Drawer from '@material-ui/core/Drawer';
import { Fab } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { useLocation } from 'react-router-dom';
// import { useParams } from 'react-router-dom';
import { setDetailDrawerOpen } from '../../../redux/drawerModeSlice';
import { useTypedSelector } from '../../../redux/reducers/reducers';

export interface DetailDrawerProps {
  // isOpen: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
}

export default function DetailDrawer({ children }: DetailDrawerProps) {
  const dispatch = useDispatch();

  const isDetailDrawerOpen = useTypedSelector(state => state.drawerMode.isDetailDrawerOpen);
  console.log('OFF SETTINGS isDetailDrawerOpen', isDetailDrawerOpen);

  const [openDetailDrawer, changeOpenDetailDrawer] = useState<boolean>(isDetailDrawerOpen);
  console.log('openDetailDrawer', openDetailDrawer);

  useEffect(() => {
    console.log('Toggle Open Drawer', openDetailDrawer);
    dispatch(setDetailDrawerOpen(openDetailDrawer));
  }, [openDetailDrawer]);

  // * Trying to find a way to get the path and params to determine if it should be rendered within the iframe
  const location = window.location.pathname;

  console.log('WINDOW', window.location);

  const pathDetails = ['/pods/'];

  useEffect(() => {
    for (let i = 0; i < pathDetails.length; i++) {
      if (location.includes(pathDetails[i])) {
        console.log('URL PAIR MATCHED', pathDetails[i], location);
      }
    }
  }, [window.location.href]);

  // * DOES NOT WORK, WILL PRINT '{}' WHEN CONSOLE LOG params
  // const location = useLocation();
  // const params = useParams();

  useEffect(() => {
    console.log('location changed');
    console.log('LOCATION', location);

    // console.log('PARAMS', params);
  }, [location]);

  function toggleOpenDrawer() {
    changeOpenDetailDrawer(!openDetailDrawer);
  }

  return (
    <>
      {!openDetailDrawer && (
        <>
          <Box p={2}>
            <Fab
              style={{
                position: 'fixed',
                bottom: '20px',
                right: '20px',
                padding: '0 20px',
                borderRadius: '1em',
              }}
              color="primary"
              variant="extended"
              onClick={toggleOpenDrawer}
            >
              Open Drawer
            </Fab>
          </Box>
        </>
      )}

      {openDetailDrawer && (
        <>
          <Drawer hideBackdrop variant="temporary" anchor="right" open onClose={toggleOpenDrawer}>
            <Box width={600} p={2}>
              {/* <DetailDrawer /> */}
              <Button onClick={toggleOpenDrawer}>Close Drawer</Button>
              {children}
            </Box>
          </Drawer>
        </>
      )}
    </>
  );
}

// * the drawer is not opening in minimized mode? persistent drawer fix maybe - https://mui.com/material-ui/react-drawer/#persistent-drawer
