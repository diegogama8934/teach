export interface subjectData {
    name: string
    tags: tag[]
    teacher: string
    onTimeActs?: number
    lessTimeActs?: number
    lowTimeActs?: number
}

export interface tag {
    id?: string
    name: string
    value: string
}