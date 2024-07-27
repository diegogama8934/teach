import { page } from "@/interfaces/pages";
import { commentOnAnnouncement, annoucement } from "@/interfaces";

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

export const FakeComments: commentOnAnnouncement[] = [
    {
        user: {
            email: "email@email.com",
            fullname: "Jorge Ramos Balderas",
            profileImage: "https://www.wikihow.com/images/thumb/9/90/What_type_of_person_are_you_quiz_pic.png/1200px-What_type_of_person_are_you_quiz_pic.png"
        },
        comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At minus a ullam earum. Vero molestiae, sit rem debitis officiis nam ea, similique iste, consectetur odio voluptas aut quas non asperiores."
    },
    {
        user: {
            email: "email@email.com",
            fullname: "Eva Delgado González",
            profileImage: "https://gracedgirl.com/wp-content/uploads/2022/08/how-to-be-a-personable-person-scaled.jpeg"
        },
        comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At minus a ullam earum. Vero molestiae, sit rem debitis officiis nam ea, similique iste, consectetur odio voluptas aut quas non asperiores."
    },
    {
        user: {
            email: "email@email.com",
            fullname: "Antonio Vázquez Ramírez",
            profileImage: "https://sourcesofinsight.com/wp-content/uploads/2015/06/image27.png"
        },
        comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At minus a ullam earum. Vero molestiae, sit rem debitis officiis nam ea, similique iste, consectetur odio voluptas aut quas non asperiores."
    }
]

export const FakeAnnoucements: annoucement[] = [
    {
        user: {
            email: "correo@correo.com",
            fullname: "Ruth Corona Moreno",
            profileImage: "https://images.pexels.com/photos/3772511/pexels-photo-3772511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        comments: FakeComments,
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pulvinar, erat rutrum interdum blandit, nulla erat vehicula mi, a
          pretium magna augue a lorem. Sed et metus id est dictum tincidunt sit amet a felis. Aliquam vitae lacinia lorem. In aliquam
          fermentum nulla, at vulputate ipsum placerat in. Cras elementum suscipit malesuada. Sed ullamcorper ac elit ac elementum.
          Suspendisse sollicitudin porttitor libero, quis porta mi lobortis id. Sed sed leo massa. Nullam in tempus orci. Donec ligula
          risus, consectetur vel nisi ac, semper tristique lectus.
          <br />
          <br />
          Curabitur consectetur lectus ex, ut mollis risus egestas dictum. In sed lorem eu arcu sagittis commodo non mollis massa.
          Vivamus egestas posuere lacus a accumsan. Quisque et risus facilisis, imperdiet leo eu, suscipit lacus. Donec sed cursus
          nunc, a viverra magna. Vestibulum imperdiet vitae diam et blandit. Curabitur et pellentesque lectus. Sed non lacus ac justo
          ullamcorper maximus quis et urna. Vivamus eget enim felis. Proin convallis orci diam, ac placerat arcu aliquet non.`
    },
    {
        user: {
            email: "correo@correo.com",
            fullname: "Ruth Corona Moreno",
            profileImage: "https://images.pexels.com/photos/3772511/pexels-photo-3772511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        comments: FakeComments,
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pulvinar, erat rutrum interdum blandit, nulla erat vehicula mi, a
          pretium magna augue a lorem. Sed et metus id est dictum tincidunt sit amet a felis. Aliquam vitae lacinia lorem. In aliquam
          fermentum nulla, at vulputate ipsum placerat in. Cras elementum suscipit malesuada. Sed ullamcorper ac elit ac elementum.
          Suspendisse sollicitudin porttitor libero, quis porta mi lobortis id. Sed sed leo massa. Nullam in tempus orci. Donec ligula
          risus, consectetur vel nisi ac, semper tristique lectus.
          <br />
          <br />
          Curabitur consectetur lectus ex, ut mollis risus egestas dictum. In sed lorem eu arcu sagittis commodo non mollis massa.
          Vivamus egestas posuere lacus a accumsan. Quisque et risus facilisis, imperdiet leo eu, suscipit lacus. Donec sed cursus
          nunc, a viverra magna. Vestibulum imperdiet vitae diam et blandit. Curabitur et pellentesque lectus. Sed non lacus ac justo
          ullamcorper maximus quis et urna. Vivamus eget enim felis. Proin convallis orci diam, ac placerat arcu aliquet non.`
    }, {
        user: {
            email: "correo@correo.com",
            fullname: "Ruth Corona Moreno",
            profileImage: "https://images.pexels.com/photos/3772511/pexels-photo-3772511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        comments: FakeComments,
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pulvinar, erat rutrum interdum blandit, nulla erat vehicula mi, a
          pretium magna augue a lorem. Sed et metus id est dictum tincidunt sit amet a felis. Aliquam vitae lacinia lorem. In aliquam
          fermentum nulla, at vulputate ipsum placerat in. Cras elementum suscipit malesuada. Sed ullamcorper ac elit ac elementum.
          Suspendisse sollicitudin porttitor libero, quis porta mi lobortis id. Sed sed leo massa. Nullam in tempus orci. Donec ligula
          risus, consectetur vel nisi ac, semper tristique lectus.
          <br />
          <br />
          Curabitur consectetur lectus ex, ut mollis risus egestas dictum. In sed lorem eu arcu sagittis commodo non mollis massa.
          Vivamus egestas posuere lacus a accumsan. Quisque et risus facilisis, imperdiet leo eu, suscipit lacus. Donec sed cursus
          nunc, a viverra magna. Vestibulum imperdiet vitae diam et blandit. Curabitur et pellentesque lectus. Sed non lacus ac justo
          ullamcorper maximus quis et urna. Vivamus eget enim felis. Proin convallis orci diam, ac placerat arcu aliquet non.`
    }
]