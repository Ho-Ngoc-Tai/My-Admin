import { ReactNode } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { Box } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import { useRouter } from 'next/router';

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    const router = useRouter();

    return (
        <Box sx={{ display: 'flex', height: '100vh', minWidth: 0 }}>
            {/* Sidebar width cố định */}
            <Box sx={{ width: 240, flexShrink: 0 }}>
                <Sidebar />
            </Box>
            {/* Nội dung bên phải, không tràn ngang */}
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        backgroundColor: '#fff',
                        boxShadow: 1,
                        width: '70%',
                        minWidth: 0,
                    }}
                >
                    <Header />
                    <IconButton
                        color="primary"
                        onClick={() => router.push('/login')}
                        sx={{ ml: 2 }}
                    >
                        <AccountCircleIcon fontSize="large" />
                    </IconButton>
                </Box>
                <Box sx={{ p: 3, backgroundColor: '#f5f5f5', flex: 1, minWidth: 0, width: '100%', maxWidth: '100%' }}>
                    {children}
                </Box>
            </Box>
        </Box>
    );
}