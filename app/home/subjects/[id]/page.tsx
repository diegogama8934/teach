import { redirect } from "next/navigation";

interface Props {
    params: { id: string }
}

export default function SimpleSubjectPage({ params }: Props) {
    const { id: subjectId } = params;
    redirect(`/home/subjects/${subjectId}/announcements`);
}