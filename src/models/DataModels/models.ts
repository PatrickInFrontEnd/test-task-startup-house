interface PostModel {
    userId?: number
    id: number
    title: string
    body: string
}

export interface PostCommentModel {
    postId: string | number
    id: string | number
    name: string
    email: string
    body: string
}

export default PostModel
