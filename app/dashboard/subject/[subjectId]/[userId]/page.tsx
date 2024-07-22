import { redirect } from "next/navigation";

interface Props {
    params: { subjectId: string, userId: string }
}

async function getUserTypeById(subjectId: string, userId: string): Promise<"teacher" | "student" | "unknown"> {
    // TODO: query db to know if the user is a teacher in the class or is a student

    // This is necesary because user can change the url by putting "/dashboard/[subjectId]/[userId]".
    // in that case i would like that the app redirect the user knowing if is a student or a teacher

    return "student";
}

export default async function RedirectPage({ params }: Props) {

    const userType = await getUserTypeById(params.subjectId, params.userId);

    if (userType === "teacher") redirect(`/dashboard/subject/${params.subjectId}/${params.userId}/teacher/announcements`);
    if (userType === "student") redirect(`/dashboard/subject/${params.subjectId}/${params.userId}/student/announcements`);
    if (userType === "unknown") redirect(`/dashboard/subjects`)
}