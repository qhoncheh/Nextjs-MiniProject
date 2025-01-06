
interface Post {
    id: number,
    title: string
}

async function PostList(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')

    const data: Post[] = await response.json()

    return(
        <div>
            <ul>
                {data.map((item) => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    )

}

export default PostList