function PostPage({ params } : { params: { id: string }}){
    return (
        <>
        <h2 className="text-lg">PostPage</h2>
        <div>post ID: {params.id}</div>
        </>
    )
}

export default PostPage