import React from 'react'
import { PostCommentTemplateProps } from '../../models/PostPageTemplate/models'

const PostCommentTemplate: React.FC<PostCommentTemplateProps> = ({
    authorName,
    content,
}: PostCommentTemplateProps) => (
    <li>
        <h6>{authorName}</h6>
        <p>{content}</p>
    </li>
)
export default PostCommentTemplate
