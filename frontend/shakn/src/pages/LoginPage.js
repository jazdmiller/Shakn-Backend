import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FormControl, 
         InputLabel, 
         Input, 
         Box, 
         Paper,
         Grid,
         TextField,
         Button,
         Alert
} from '@mui/material'
import { useDispatch, useSelector} from 'react-redux'
import { login } from '../actions/userActions'
import { useNavigate } from 'react-router-dom'



function LoginPage({ history }) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const userLogin = useSelector(state => state.userLogin)
  const { error, loading, userInfo } = userLogin
  const navigate = useNavigate()

  useEffect(() => {
      if(userInfo){
        navigate('/')
      }
  }, [userInfo])
  
  const handleSubmit = (e) => {
      e.preventDefault()
      dispatch(login(email, password))
  }
  return (
    <div>
        {error && <Alert severity="error">{error}</Alert>}
        <Grid container style={{ minHeight: '100vh' }}>
            <Grid item xs={12} sm={6}>
                <img src="./images/login-photo.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover'}} alt="" />
            </Grid>
            
            <Grid container item xs={12} sm={6} alignItems="center" justifyContent="space-between" direction="column" style={{ padding: 10, backgroundColor: '#9A6249'}}>
           
                <div style={{ display: "flex", flexDirection: "column", maxWidth: 400, minWidth: 300}}>
                    <Grid container justify="center">
                       <img src="./images/login-logo.png" width={300} alt="logo"  />
                    </Grid>
                    <TextField label="Email"
                               value={email}
                               onChange={(e) => setEmail(e.target.value)}
                               margin="normal" 
                               variant="standard" 
                               sx={{ color: 'white'}} />

                    <TextField label="Password"
                               margin="normal" 
                               variant="standard"
                               value={password}
                               onChange={(e) => setPassword(e.target.value)}
                                />
                    <div style={{ height: 20}} />
                    <Button onClick={handleSubmit} variant="contained">
                        Log In
                    </Button>
                    <div style={{ height: 20}} />
                    <Button><Link to='/register'>Sign Up</Link></Button>
                </div>
                <div />
            </Grid>
           
        </Grid>
 
    </div>
  )
}

export default LoginPage