import { InputAdornment, MenuItem, Select } from "@material-ui/core";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CredentialsModel from "../../../Models/CredentialsModel";
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import loginImage from "../../../Assets/Images/Login.jpg";
import CssBaseline from '@material-ui/core/CssBaseline';
import { loginAction } from "../../../Redux/AuthState";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import notify from "../../../Services/Notification";
import TextField from '@material-ui/core/TextField';
import UserModel from "../../../Models/UserModel";
import Checkbox from '@material-ui/core/Checkbox';
import globals from "../../../Services/Globals";
import { useHistory } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { useForm } from "react-hook-form";
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import store from "../../../Redux/Store";
import Box from '@material-ui/core/Box';
import axios from "axios";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@material-ui/icons";

interface LoginState {
    showPassword: boolean;
}

function Login(): JSX.Element {

    let { register, handleSubmit, formState: { errors } } = useForm<CredentialsModel>({ mode: "all" });
    const [state, setState] = useState<LoginState>({ showPassword: false });
    const classes = useStyles();
    const history = useHistory();

    const handleClickShowPassword = () => {
        setState({ ...state, showPassword: !state.showPassword });
    };

    async function send(credentials: CredentialsModel) {
        try {
            const response = await axios.post<UserModel>(globals.urls.login, credentials);
            store.dispatch(loginAction(response.data));
            notify.success("You have been successfully logged in!");
            if (response.data.clientType === "ADMIN") {
                history.push("/admin");
            } else if (response.data.clientType === "COMPANY") {
                history.push("/company");
            } else if (response.data.clientType === "CUSTOMER") {
                history.push("/customer");
            }
        }
        catch (err) {
            notify.error(err);
        }
    }

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />

            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>

                <div className={classes.paper}>

                    <Avatar className={classes.avatar}>
                        {/* <LockOutlinedIcon /> */}
                    </Avatar>

                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>

                    <form onSubmit={handleSubmit(send)} className={classes.form} noValidate>

                        <TextField
                            label="Email Address"
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            type="email"
                            autoComplete="email"
                            inputProps={{ pattern: "/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/", }}
                            {...register("email", {
                                required: { value: true, message: "Missing email." },
                                pattern: { value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, message: "Email is not valid." }
                            })}
                            error={!!errors.email}
                            helperText={errors.email?.message}
                        />

                        <TextField
                            label="Password"
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            autoComplete="current-password"
                            inputProps={{ pattern: "/^[a-zA-Z0-9]+$/gi", minLength: 4, }}
                            {...register("password", {
                                required: { value: true, message: "Missing password." },
                                minLength: { value: 4, message: "Password too short, should be at least 4 characters." },
                                pattern: { value: /^[a-zA-Z0-9]+$/gi, message: "Password is not valid, only letters and numbers are permitted." }
                            })}
                            type={state.showPassword ? 'text' : 'password'}
                            // InputProps={{
                            //     endAdornment:
                            //         <InputAdornment position="end">
                            //             <IconButton
                            //                 aria-label="toggle password visibility"
                            //                 onClick={handleClickShowPassword} edge="end">
                            //                 {showPassword ? <Visibility /> : <VisibilityOff />}
                            //             </IconButton>
                            //         </InputAdornment>,
                            // }}
                            error={!!errors.password}
                            helperText={errors.password?.message}
                        />

                        <br />
                        <br />

                        <TextField
                            name="clientType"
                            fullWidth
                            select
                            required
                            className="mui-input"
                            label="Client type" variant="outlined"
                            defaultValue={"clientType"}
                            SelectProps={{ native: true }}
                            {...register("clientType", {
                                required: { value: true, message: "Missing client type." }
                            })}
                            error={!!errors.clientType}
                            helperText={errors.clientType?.message}
                        >
                            <option value=""></option>
                            <option value="ADMIN">Admin</option>
                            <option value="COMPANY">Company</option>
                            <option value="CUSTOMER">Customer</option>
                        </TextField>

                        <br />
                        <br />

                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}>
                            Sign In
                        </Button>

                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="/register" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>

                        <Box mt={5}>
                            <Copyright />
                        </Box>

                    </form>
                </div>
            </Grid>
        </Grid>
    );
}

export default Login;

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="http://chellyiz-portfolio.s3-website-eu-west-1.amazonaws.com/" target="_blank">
                Click Here To See My Personal Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: `url(${loginImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '(100vh - 40px)',
        width: 400,
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '(100vh - 40px)',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.primary.main,
    },
    form: {
        width: '90%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));