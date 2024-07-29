"use client";
import { useContext } from "react";
import { UserContext } from "@/context/UserContext";
import { useParams, useRouter } from "next/navigation";

// TODO: Make this a server component

export default function RedirectPage() {
    const params = useParams();
    const router = useRouter();
    const { getUserRolInSubject } = useContext(UserContext);
    const userRolInSubject = getUserRolInSubject(params.subjectId as string);

    if (userRolInSubject == "teacher") { router.push(`/dashboard/subject/${params.subjectId as string}/teacher/announcements`); }
    if (userRolInSubject == "student") { router.push(`/dashboard/subject/${params.subjectId as string}/student/announcements`); }
}