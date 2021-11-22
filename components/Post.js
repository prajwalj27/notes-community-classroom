import Link from 'next/link'

const prefix = '/notes-community-classroom';

export default function Post({ post }) {
    return (
        <div className="card">
            {/* <img src={prefix + post.frontmatter.cover_image} alt='' /> */}
            <img src={post.frontmatter.cover_image} alt='' />
            
            <div className='post-date'>Posted on {post.frontmatter.date}</div>

            <h3>{post.frontmatter.title}</h3>

            <p>{post.frontmatter.excerpt}</p>

            <Link href={`/notes/${post.slug}`}>
                <a className='btn'>View Notes</a>
            </Link>
        </div>
    )
}
