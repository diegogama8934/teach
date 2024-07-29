"use client"
import { usePathname, useRouter } from "next/navigation";
import { createContext, useEffect, useState } from "react";

interface Subject {
    id: string
    name: string
}
interface User {
    name: string
    email: string
    subjects: Subject[]
}

interface UserContext {
    user?: User
    logout: () => void
    login: (token: string) => void
    getUserRolInSubject: (subjectId: string) => "student" | "teacher" | void
}

export const UserContext = createContext<UserContext>({
    user: undefined,
    login: () => { },
    logout: () => { },
    getUserRolInSubject: (subjectId) => { }
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
                // TODO: Logic to protect routes of /student and /teacher
            } else {
                login(token);
            }
        } else {
            if (pathname.includes("dashboard")) router.push("/");
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
            name: "Diego Martínez García",
            subjects: []
        });
    }

    function getUserRolInSubject(subjectId: string): ("student" | "teacher") {
        // TODO: End function
        return "teacher";
    }

    return (
        <UserContext.Provider value={{ user, login, logout, getUserRolInSubject }}>
            {children}
        </UserContext.Provider>
    );
}