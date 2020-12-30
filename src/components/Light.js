import React from 'react';
import {Switch} from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';

const switchSize=82;
export const IOSSwitch = withStyles((theme) => ({
    root: {
      width: switchSize+'px',
      height: 50/switchSize*switchSize+'px',
      padding: 1,
      margin: theme.spacing(1),
    },
    switchBase: {
      padding: 1,
      '&$checked': {
        transform: `translateX(${32/switchSize*switchSize}px)`,
        color: theme.palette.common.white,
        '& + $track': {
          backgroundColor: '#52d869',
          opacity: 1,
          border: 'none',
        },
      },
      '&$focusVisible $thumb': {
        color: '#52d869',
        border: '6px solid #fff',
      },
    },
    thumb: {
      width: 48/switchSize*switchSize+'px',
      height: 48/switchSize*switchSize+'px',
    },
    track: {
      borderRadius:  26/switchSize*switchSize+'px',
      backgroundColor: '#D0D0D0',
      opacity: 1,
      transition: theme.transitions.create(['background-color', 'border']),
    },
    checked: {},
    focusVisible: {},
  }))(({ classes, ...props }) => {
    return (
      <Switch
        focusVisibleClassName={classes.focusVisible}
        disableRipple
        classes={{
          root: classes.root,
          switchBase: classes.switchBase,
          thumb: classes.thumb,
          track: classes.track,
          checked: classes.checked,
        }}
        {...props}
      />
    );
  } );
