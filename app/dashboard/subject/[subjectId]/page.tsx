import { redirect } from "next/navigation";

interface Props {
    params: { subjectId: string, userId: string }
}

export default function RedirectPage({ params }: Props) {
    redirect(`/dashboard/subject/${params.subjectId}/${params.userId}`);
}