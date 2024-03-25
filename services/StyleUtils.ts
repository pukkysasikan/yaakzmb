import { InputBase,  } from '@mui/material'
import { styled } from '@mui/material/styles'

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: 10,
  
  height: 40,
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}))


const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const SelectInputBase = styled(InputBase)(({ theme }) => ({
    fontSize: '16px',
    
    backgroundColor: '#FFFFFF',
    '& .MuiInputBase-input': {
      padding: theme.spacing(0, 0, 0, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(0)})`,
      transition: theme.transitions.create('width'),
    },
  }))



export { SearchIconWrapper,SelectInputBase,Search}