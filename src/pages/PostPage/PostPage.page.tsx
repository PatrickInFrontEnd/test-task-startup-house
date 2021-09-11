import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import PostParamsType from '../../models/PostPage/models'
import { flexCenter, flexColumn } from '../../components/mixins'
import PostPageTemplate from '../../components/PostPageTemplate/PostPageTemplate.template'

const PostPage: React.FC = () => {
    const { id } = useParams<PostParamsType>()

    return <PostPageTemplate id={id} />
}
export default PostPage
