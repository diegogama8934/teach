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