import { page } from "@/interfaces/pages";

export const StudentPages: page[] = [
    {
        href: "/dashboard/subject/[subjectId]/student/announcements",
        icon: "home",
        name: "Anuncios de clase"
    },
    {
        href: "/dashboard/subject/[subjectId]/student/content",
        icon: "folder_copy",
        name: "Contenido"
    },
    {
        href: "/dashboard/subject/[subjectId]/student/evidences",
        icon: "description",
        name: "Evidencias"
    },
    {
        href: "/dashboard/subject/[subjectId]/student/work",
        icon: "work",
        name: "Mi trabajo"
    },
    {
        href: "/dashboard/subject/[subjectId]/student/classroom",
        icon: "videocam",
        name: "Salón de clases"
    },
    {
        href: "/dashboard/subject/[subjectId]/student/tests",
        icon: "quiz",
        name: "Evaluaciones"
    }
];