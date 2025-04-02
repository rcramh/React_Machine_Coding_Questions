
const NestedComments = ({comments}) => {
    return (
        <>
            {comments?.map((comment)=>(
                <div key={comment.id} >
                <div key={comment.id} className="comment_container">
                    <div className="image-container">
                    <img src={"https://buffer.com/resources/content/images/2024/11/free-stock-image-sites.png"} alt="image" />
                    </div>
                    <div className="commenter_name_container">
                    {comment.name}
                    </div>
                    <div className="comment-text_container">
                    {comment.comment}
                    </div>
                </div>
                {
                    comment.nestedComments.length > 0 &&
                    <div className="sub-comment_container">
                        <NestedComments comments={comment.nestedComments}/>
                    </div>
                }
                
                </div>
            ))}
        </>
    )
}

export default NestedComments;