import { useState } from "react";
import { useRouter } from "next/router";
import { TextField, Typography, Paper, Box, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { loginRequest } from "@/store/reducer/loginReducer";

export default function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
    const dispatch = useDispatch();

    // Lấy state từ Redux
    const { loading, error, isAuthenticated } = useSelector(
        (state: RootState) => state.login
    );
    // Khi login thành công => chuyển hướng
    if (isAuthenticated) {
        router.push("/users");
    }

    const handleLogin = () => {
        dispatch(loginRequest({ username, password }));
    };

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh",
                bgcolor: "#f4f6f8",
            }}
        >
            <Paper
                elevation={6}
                sx={{
                    p: 4,
                    width: 400,
                    borderRadius: 3,
                    textAlign: "center",
                }}
            >
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                    Đăng nhập Admin
                </Typography>

                <TextField
                    label="Tên đăng nhập"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Mật khẩu"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    fullWidth
                    margin="normal"
                />

                {error && (
                    <Typography color="error" variant="body2" sx={{ mt: 1 }}>
                        {error}
                    </Typography>
                )}

                <Button
                    variant="contained"
                    fullWidth
                    sx={{ mt: 3, py: 1.2, fontWeight: "bold" }}
                    onClick={handleLogin}
                    disabled={loading}
                >
                    {loading ? "Đang đăng nhập..." : "Đăng nhập"}
                </Button>

                <Button
                    variant="outlined"
                    fullWidth
                    sx={{ py: 1.2, my: 1.5 }}
                    onClick={() => router.push("/register")}
                >
                    Chưa có tài khoản? Đăng ký
                </Button>
            </Paper>
        </Box>
    );
}
