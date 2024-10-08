import { commentOnAnnouncement, annoucement, subjectTopic, landingFeature, dropdownButton, page, user } from "@/interfaces";

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

export const TeacherPages: page[] = [
    {
        href: "/dashboard/subject/[subjectId]/teacher/announcements",
        icon: "home",
        name: "Anuncios de clase"
    },
    {
        href: "/dashboard/subject/[subjectId]/teacher/content",
        icon: "folder_copy",
        name: "Contenido"
    },
    {
        href: "/dashboard/subject/[subjectId]/teacher/evidences",
        icon: "description",
        name: "Evidencias"
    },
    {
        href: "/dashboard/subject/[subjectId]/teacher/scores",
        icon: "credit_score",
        name: "Calificaciones"
    },
    {
        href: "/dashboard/subject/[subjectId]/teacher/classroom",
        icon: "videocam",
        name: "Salón de clases"
    },
    {
        href: "/dashboard/subject/[subjectId]/teacher/test",
        icon: "quiz",
        name: "Evaluaciones"
    },
    {
        href: "/dashboard/subject/[subjectId]/teacher/students",
        icon: "person_edit",
        name: "Estudiantes"
    },
    {
        href: "/dashboard/subject/[subjectId]/teacher/assists",
        icon: "check",
        name: "Asistencias"
    }
];

export const LandingFeatures: landingFeature[] = [
    {
        img1src: "/workspace-example.png",
        img2src: "/activiti-teacher-example.png",
        title: "Gestión integral de clases",
        description: "Organiza y administra tus clases con facilidad. Crea horarios, asigna tareas, y lleva un seguimiento detallado del progreso de tus estudiantes."
    },
    {
        img1src: "/scores-example.png",
        img2src: "/next-test-example.jpg",
        title: "Evaluaciones y calificaciones",
        description: "Crea y administra exámenes y cuestionarios en línea. Automatiza la calificación y proporciona retroalimentación instantánea a tus estudiantes."
    },
    {
        img1src: "/subject-content-example.png",
        img2src: "/privacy-example.png",
        title: "Seguridad y privacidad",
        description: "Protege la información de tus estudiantes y garantiza un entorno de aprendizaje seguro con nuestras medidas privacidad dentro de las clases."
    }
];

export const mainPages: page[] = [
    {
        href: "/dashboard/subjects",
        icon: "home",
        name: "Inicio"
    },
    {
        href: "/dashboard/act",
        icon: "menu_book",
        name: "Actividades"
    },
    {
        href: "/dashboard/classroom",
        icon: "background_replace",
        name: "Salón de clases"
    },
    {
        href: "/dashboard/evaluations",
        icon: "description",
        name: "Evaluaciones"
    },
    {
        href: "/dashboard/calendar",
        icon: "calendar_month",
        name: "Calendario"
    }
];

export const dropdownButtons: dropdownButton[] = [
    { name: "Configuración", icon: "settings" },
    { name: "Notificaciones", icon: "notifications" },
    { name: "Modo oscuro", icon: "dark_mode" },
    { name: "Ayuda", icon: "help" },
];

export const FakeStudents:user[] = [
    {
        email:"Weldon_Gerhold5@yahoo.com",
        fullname:"Darla Wuckert MD",
        profileImage:"https://images.pexels.com/photos/2083751/pexels-photo-2083751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        email:"Catherine.Schaden14@gmail.com",
        fullname:"Velma Glover",
        profileImage:"https://images.pexels.com/photos/1844547/pexels-photo-1844547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        email:"Daisy24@hotmail.com",
        fullname:"Nellie Mills",
        profileImage:"https://images.pexels.com/photos/3799786/pexels-photo-3799786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        email:"Clay29@gmail.com",
        fullname:"Constance Runolfsson",
        profileImage:"https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        email:"Delia_Goyette8@gmail.com",
        fullname:"Alan Kunde",
        profileImage:"https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        email:"Jessyca24@hotmail.com",
        fullname:"Charlotte Hudson",
        profileImage:"https://images.pexels.com/photos/262391/pexels-photo-262391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        email:"Shad_Kuhn@hotmail.com",
        fullname:"Tasha Mraz",
        profileImage:"https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
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

export const FakeSubjectsTopics: subjectTopic[] = [
    {
        topic: "Unidad 1. Sistemas de ecuaciones lineales",
        topicContent: [
            "Ecuacione lineales",
            "Sistemas de ecuaciones lineales",
            "Métodos de solución de sistemas de ecuaciones lineales",
            "El método de eliminación de Gauss Jordan",
            "Tipos de soluciones en los sistemas de ecuacione lineales",
            "Sistemas de ecuaciones lineales homogéneos",
            "Ejercicios con Python, GNU-Octave"
        ]
    },
    {
        topic: "Unidad 2. Matrices",
        topicContent: [
            "Introducción",
            "Operaciones con matrices",
            "Transpuesta de una matriz y sus propiedades",
            "Matrices diagonales, triangulares y simétricas",
            "Aplicación de matrices",
            "Ejercicios con Python, GNU-Octave"
        ]
    },
    {
        topic: "Unidad 3. Determinantes e inversas",
        topicContent: [
            "La función determinante.",
            "Teoremas en determinantes.",
            "Evaluación de determinantes por reducción de renglones.",
            "Desarrollo por cofactores.",
            "Regla de Cramer.",
            "La inversa de una matriz por medio de cofactores.",
            "La inversa de una matriz por medio del método Gauss-Jordan.",
            "Teorema en la inversa de una matriz cuadrada.",
            "Ejercicios con Python, GNU-Octave."
        ]
    },
    {
        topic: "Unidad 4. Vectores en 2 y 3 dimensiones",
        topicContent: [
            "Vectores en el plano.",
            "Aritmética vectorial.",
            "Producto punto y proyecciones.",
            "Producto cruz.",
            "Rectas y planos en el espacio tridimensional.",
            "Operaciones con vectores en el espacio.",
            "Ejercicios con Python, GNU-Octave."
        ]
    }
]