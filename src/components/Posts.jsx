import postData from '../data/post-data.json';
import LoveImg from '../assets/love.png';
import CommentImg from '../assets/comment.png';

export default function Posts() {
    const posts = postData.posts;
    return (
      <>
        {posts.map((post, index) => {
          const tabIndexStart = index * 6 + 4;
          return (
            <div className='card-item' tabIndex={tabIndexStart} key={post.id}>
              <div className="card-author" alt='authors name and profile picture'>
                <div className='interaction-pfp' tabIndex={tabIndexStart + 1}>
                  <img src={post.authorProfilePictureSrc} alt="Author's porfile picture" />
                </div>
                {post.authorName}
              </div>
              <div tabIndex={tabIndexStart + 2}>
                <img className='post-img' src={post.postImageSrc} alt={post.altName} />
              </div>
              <div className="card-postInfo" tabIndex={tabIndexStart + 3}>
                {post.postComment}
              </div>
              <div className="card-interaction" tabIndex={tabIndexStart + 4}>
                <div tabIndex={tabIndexStart + 5}><img className='interaction-like' src={LoveImg} alt="like button" /></div>
                <div tabIndex={tabIndexStart + 6}><img className='interaction-comment' src={CommentImg} alt="comment button"/></div>
              </div>
            </div>
          );
        })}
      </>
    );
  }