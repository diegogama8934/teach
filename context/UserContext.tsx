"use client"
import { usePathname, useRouter } from "next/navigation";
import { createContext, useEffect, useState } from "react";

interface User {
    name: string
    email: string
}

interface UserContext {
    user?: User
    logout: () => void
    login: (token: string) => void
}

export const UserContext = createContext<UserContext>({
    user: undefined,
    login: () => { },
    logout: () => { }
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | undefined>();
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            if (user) {
                if (pathname == "/login") router.push("/dashboard/subjects");
            } else {
                login(token);
            }
        } else {
            if (pathname.includes("dashboard")) router.push("/login");
        }
    }, [user, pathname]);

    async function logout() {
        localStorage.removeItem("token");
        setUser(undefined);
    }

    async function login(token: string) {
        localStorage.setItem("token", token);
        setUser({
            email: "diegogama8934@gmail.com",
            name: "Diego Martínez García"
        });
    }

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    );
}