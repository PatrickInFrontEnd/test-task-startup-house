import React from 'react'
import styled from 'styled-components'
import PostPageTemplateProps, {
    PostCommentTemplateProps,
} from '../../models/PostPageTemplate/models'
import { PropsTheme } from '../../providers/ThemeProvider/models'
import { flexColumn, marginToChildren } from '../mixins'
import PostModel, { PostCommentModel } from '../../models/DataModels/models'
import useFetch from '../../utils/hooks'
import breakpoints from '../../utils/breakpoints'

const Wrapper = styled.div`
    ${flexColumn};
    width: 100%;
    margin: 80px auto;
    padding: 0 40px;

    & > h3 {
        display: inline-flex;
        max-width: 50%;

        ${breakpoints.phone} {
            max-width: 90%;
            font-size: ${({ theme }: PropsTheme) => theme.fSize?.L};
        }
    }

    & > p {
        display: inline-flex;
        max-width: 50%;

        ${breakpoints.phone} {
            max-width: 90%;
        }
    }

    ${marginToChildren()};

    h4 {
        margin-top: 80px;
    }

    ul {
        list-style: none;

        li {
            ${flexColumn};
            margin: 20px 0;
            ${marginToChildren('0 0 10px 0')};
            max-width: 60%;

            ${breakpoints.phone} {
                max-width: 100%;
            }
        }
    }
`

const PostCommentTemplate: React.FC<PostCommentTemplateProps> = ({
    name,
    content,
}: PostCommentTemplateProps) => (
    <li>
        <h6>{name}</h6>
        <p>{content}</p>
    </li>
)

const PostPageTemplate: React.FC<PostPageTemplateProps> = ({
    id,
}: PostPageTemplateProps) => {
    const {
        data: currentPost,
        loading: loadingPost,
        error: errorPost,
    } = useFetch<PostModel>(`https://jsonplaceholder.typicode.com/posts/${id}`)

    const {
        data: comments,
        loading: loadingComments,
        error: errorComments,
    } = useFetch<PostCommentModel[]>(
        `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    )

    const postCommentElements = comments?.map(({ name, body, id }) => (
        <PostCommentTemplate name={name} content={body} key={id} />
    ))

    if (errorPost) {
        return (
            <Wrapper>
                <h2>Something went wrong. Could not load this post.</h2>
            </Wrapper>
        )
    }

    if (loadingPost) {
        return (
            <Wrapper>
                <h2>Loading...</h2>
            </Wrapper>
        )
    }

    return (
        <Wrapper>
            <h3>{currentPost?.title}</h3>
            <p>{currentPost?.body}</p>
            <h4>Comments</h4>

            {loadingComments ? (
                <h4>Loading comments...</h4>
            ) : (
                <ul>{postCommentElements}</ul>
            )}
        </Wrapper>
    )
}

export default PostPageTemplate
