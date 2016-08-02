/* Defines the jobs entity */
export interface IJob {
    id: number,
    title: {
        rendered: string
    },
    content: {
        rendered: string
    },
    date: Date
}