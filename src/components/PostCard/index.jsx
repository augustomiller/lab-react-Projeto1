export const PostCard = ({ title, cover, body, id }) => {

    return (
        <div className="post">
            <img src={cover} alt={title} />
            <div className="post-content" >
                <h1>{title}</h1>
                <p>{body}</p>
            </div>
        </div>
    );
}