import React from 'react'
import { useParams } from 'react-router-dom'
import PostParamsType from './models'
import PostPageTemplate from '../../components/PostPageTemplate/PostPageTemplate.template'

const PostPage: React.FC = () => {
    const { id } = useParams<PostParamsType>()

    return <PostPageTemplate id={id} />
}
export default PostPage
