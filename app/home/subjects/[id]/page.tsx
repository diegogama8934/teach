import { redirect } from "next/navigation";

interface props {
    params: { id: string }
}

export default function SimpleSubjectPage({ params }: props) {
    const { id: subjectId } = params;
    redirect(`/home/subjects/${subjectId}/announcements`);
}