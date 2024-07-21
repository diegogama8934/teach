export interface subjectCard {
    isCreating?: boolean
    lessTimeActs?: number
    lowTimeActs?: number
    name: string
    onTimeActs?: number
    subjectId?: string
    tags: tag[]
    teacher: string
    accentColor: string
}

export interface tag {
    id?: string
    name: string
    value: string
}