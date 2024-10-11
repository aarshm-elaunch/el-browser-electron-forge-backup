import { Box } from '@mui/material'
import { FC } from 'react'
import CircularProgress, {
  circularProgressClasses,
  CircularProgressProps,
} from '@mui/material/CircularProgress';

interface LoaderProps {

}

const Loader = (props: CircularProgressProps) => {
  return (
    <CircularProgress
      variant="indeterminate"
      disableShrink
      sx={(theme) => ({
        color: '#1a90ff',
        animationDuration: '550ms',
        [`& .${circularProgressClasses.circle}`]: {
          strokeLinecap: 'round',
        },
        ...theme.applyStyles('dark', {
          color: '#308fe8',
        }),
      })}
      size={36}
      thickness={4}
      {...props}
    />
  )
}

export default Loader