export interface user {
    fullname: string
    profileImage: string
    email: string
}

export interface annoucement {
    user: user
    content: string
    comments: commentOnAnnouncement[]
}

export interface commentOnAnnouncement {
    user: user
    comment: string
}

export interface subjectTopic {
    topic: string
    topicContent: string[]
}

export interface studentInClass {
    user: user
    activitiesScore: number
    assistantScore: number
}

export interface landingFeature {
    img1src: string
    img2src: string
    title: string
    description: string
}

export interface dropdownButton {
    name: string
    icon: string
}

export interface page {
    href: string
    icon: string
    name: string
}