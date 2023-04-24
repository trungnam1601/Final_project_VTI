import React from 'react';
import { Box, Button, Grid, Typography, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import Input from './../../common/components/input/input';

function Register() {
    return (
        <>
            <Container component="main" maxWidth="sm">
                <Box
                    sx={{
                        boxShadow: 3,
                        borderRadius: 2,
                        px: 4,
                        py: 6,
                        marginTop: 20,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography component="h1" variant="h5" sx={{ fontSize: 20 }}>
                        Đăng Ký Tài Khoản
                    </Typography>
                    <Box component="form" noValidate sx={{ mt: 2 }}>
                        <Input label={'Họ và Tên'} width={235} />
                        <Input label={'Avatar'} width={235} ml={2} />
                        <Input label={'Tên Đăng Nhập'} fullWidth={true} />
                        <Input label={'Mật Khẩu'} fullWidth={true} />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2, fontSize: 16, textTransform: 'capitalize' }}
                        >
                            Đăng Ký
                        </Button>
                        <Grid container>
                            <Grid item>
                                <Link to="/login">{'Bạn đã có tài khoản? Đăng nhập'}</Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </>
    );
}

export default Register;
