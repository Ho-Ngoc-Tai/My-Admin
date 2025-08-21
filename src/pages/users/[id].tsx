// import { useEffect, useState } from "react";
// import { useRouter } from "next/router";
// import { getUserById, User } from "@/services/api";
// import { Typography } from "@mui/material";

// export default function UserDetail() {
//     const router = useRouter();
//     const { id } = router.query;
//     const [user, setUser] = useState<User | null>(null);

//     useEffect(() => {
//         if (!id) return;
//         getUserById(id).then((res) => setUser(res.data));
//     }, [id]);

//     if (!user) return <p>Loading...</p>;

//     return (
//         <div>
//             <Typography variant="h4">{user.name}</Typography>
//             <Typography>Email: {user.email}</Typography>
//             <Typography>Phone: {user.phone}</Typography>
//             <Typography>Website: {user.website}</Typography>
//         </div>
//     );
// }
