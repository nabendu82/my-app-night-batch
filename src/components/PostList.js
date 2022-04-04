import React from 'react'
import PostItem from './PostItem'

const PostList = () => {
    // const names = ['John', 'Mark', 'Jane'];
    // return names.map(name => <h1 key={name}>{name}</h1>)
    const posts = [
        {
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati ",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae"
        },
        {
            "id": 2,
            "title": "qui est esse",
            "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores nequ"
        },
        {
            "id": 3,
            "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
            "body": "et iusto sed quo iure"
        },
        {
            "id": 4,
            "title": "eum et est occaecati",
            "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident "
        }
    ]

    return posts.map(post => <PostItem key={post.id} post={post} />)
}

export default PostList