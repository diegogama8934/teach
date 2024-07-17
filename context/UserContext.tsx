"use client"
import { usePathname, useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

interface User {
    name: string
    email: string
}

interface UserContext {
    user?: User
    logout: () => void
    login: (token: string) => void
}

export const UserContext = createContext<UserContext | null>(null);

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User>();
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {

            if (user) {
                if (pathname == "/login") router.push("/home/subjects");
            }

            login(token);

        } else {
            if (pathname !== "login") router.push("/login");
        }
    }, [user, pathname, router]);

    async function logout() {
        // quitar del localStorage el token
        // setUser vacío
    }

    async function login(token: string) {
        // fetch para verificar el token y todo eso
        // setUser con datos que vengan de la API
    }

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    );
}