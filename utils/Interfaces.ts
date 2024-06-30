export interface subjectData {
    name: string
    textColor: string
    backgroundColor: string
    tags: tag[]
    onTimeActs?: number
    lessTimeActs?: number
    lowTimeActs?: number
}

export interface tag {
    id?: string
    name: string
    value: string
}