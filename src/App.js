import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import { Navigation, TabPanel } from './components'

import { Characters, Episodes, Locations, MyWatchList } from './pages'
import styles from './assets/scss/general.module.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
}));

const tabIems = [
  { id: 1, name: 'Characters page', link: 'characters' },
  { id: 2, name: 'Episodes page', link: 'episodes' },
  { id: 3, name: 'Locations page', link: 'locations' },
  { id: 4, name: 'My watch list', link: 'my-watch' }
];

function App() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    if (localStorage.getItem('page')) {
      setValue(+localStorage.getItem('page'));
    }
  }, [])

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root, styles.clear}>
      <Navigation value={value} setValue={setValue} tabs={tabIems} />
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Characters />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Episodes />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <Locations />
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <MyWatchList />
        </TabPanel>

      </SwipeableViews>

    </div>
  );
}

export default App;