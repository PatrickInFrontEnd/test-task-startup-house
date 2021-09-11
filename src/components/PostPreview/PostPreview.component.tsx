import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import PostPreviewProps from '../../models/PostPreview/models'
import { flexColumn } from '../mixins'
import { PropsTheme } from '../../providers/ThemeProvider/models'
import LinkComponent from '../LinkComponent/LinkComponent'
import breakpoints from '../../utils/breakpoints'

const PostContainer = styled.div`
    ${flexColumn};
    align-items: flex-start;
    justify-content: flex-start;
    width: 40%;
    max-width: 600px;
    min-width: 300px;
    padding: 15px;
    border: 2px solid ${({ theme }: PropsTheme) => theme.color?.black};
    margin: 20px;

    h6 {
        font-size: ${({ theme }: PropsTheme) => theme.fSize?.miniS};
    }

    p {
        margin-top: 10px;
    }

    & > a {
        margin-top: 20px;
        align-self: flex-end;
    }

    ${breakpoints.phone} {
        width: 100%;
        min-width: unset;
        margin: 20px auto;
    }
`

const BlogPreviewComponent: React.FC<PostPreviewProps> = ({
    title,
    description,
    postId,
}: PostPreviewProps) => (
    <PostContainer className="blog-box">
        <h6>{title}</h6>
        <p>{description}</p>
        <LinkComponent as={Link} to={`/posts/${postId}`}>
            Full version
        </LinkComponent>
    </PostContainer>
)
export default BlogPreviewComponent
