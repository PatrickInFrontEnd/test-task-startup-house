import React, { useEffect, useContext } from 'react'
import styled from 'styled-components'
import PostPageTemplateProps from '../../models/PostPageTemplate/models'
import { PropsTheme } from '../../providers/ThemeProvider/models'
import { flexColumn, marginToChildren } from '../mixins'
import PostModel, { PostCommentModel } from '../../models/DataModels/models'
import useFetch from '../../utils/hooks'
import breakpoints from '../../utils/breakpoints'
import { bcContext } from '../../providers/BreadCrumbProvider'
import PostCommentTemplate from '../PostCommentTemplate/PostComment.template'
import SEO from '../SEO/SEO.component'

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
        line-height: 160%;

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

            h6 {
                font-size: ${({ theme }: PropsTheme) => theme.fSize?.miniS};
            }

            p {
                line-height: 160%;
            }

            ${breakpoints.phone} {
                max-width: 100%;
            }
        }
    }
`

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

    const postCommentElements = comments?.map(({ email, body, id }) => (
        <PostCommentTemplate authorName={email} content={body} key={id} />
    ))

    const { setPath } = useContext(bcContext)

    useEffect(() => {
        if (currentPost) {
            setPath(currentPost?.title)
        }
    }, [currentPost])

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
        <SEO
            title={`Blog post: ${currentPost?.title}`}
            description={currentPost?.body}
        >
            <Wrapper>
                <h3>{currentPost?.title}</h3>
                <p>{currentPost?.body}</p>
                <h4>Comments</h4>

                {errorComments && (
                    <h4>Something went wrong. Could not load comments.</h4>
                )}

                {loadingComments ? (
                    <h4>Loading comments...</h4>
                ) : (
                    <ul>{postCommentElements}</ul>
                )}
            </Wrapper>
        </SEO>
    )
}

export default PostPageTemplate
