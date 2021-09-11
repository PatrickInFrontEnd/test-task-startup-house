import React from 'react'
import styled from 'styled-components'
import { flexCenter, flexColumn } from '../../components/mixins'
import useFetch from '../../utils/hooks'
import SEO from '../../components/SEO/SEO.component'
import PostModel from '../../models/DataModels/models'
import PostPreview from '../../components/PostPreview/PostPreview.component'
import breakpoints from '../../utils/breakpoints'

const Wrapper = styled.div`
    ${flexCenter};
    width: 100%;
    min-height: 100vh;
    padding: 40px 60px;

    & > a {
        margin: 15px;
    }

    ${breakpoints.phone} {
        padding: 40px 0;
    }
`
const PostsContainer = styled.div`
    ${flexCenter};
    ${flexColumn};
    flex-wrap: wrap;
    width: 100%;
    padding: 0 50px;
`

const MainPage: React.FC = () => {
    const {
        data: posts,
        loading,
        error,
    } = useFetch<PostModel[]>('https://jsonplaceholder.typicode.com/posts')

    const postElements = posts?.map(({ id, title, body }) => (
        <PostPreview title={title} description={body} key={id} postId={id} />
    ))

    if (error) {
        return (
            <SEO title="Blog Startup">
                <Wrapper>
                    <h2>Something went wrong. Could not load posts.</h2>
                </Wrapper>
            </SEO>
        )
    }

    return (
        <SEO title="Blog Startup">
            <Wrapper>
                <PostsContainer>
                    {loading ? <h2>Loading...</h2> : postElements}
                </PostsContainer>
            </Wrapper>
        </SEO>
    )
}
export default MainPage
