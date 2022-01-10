import { createClient } from 'contentful'
import RecipeCard from '../components/RecipeCard'

export async function getStaticProps() {

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

  const res = await client.getEntries({ content_type: "posts" })

  return {
    props: {
      posts: res.items,
    },
    revalidate: 1
  }
}

export default function Recipes({ posts }) {
  console.log(posts)

  return (
    <div className="recipe-list">
      {posts.map(post => (
        <RecipeCard key={post.sys.id} post={post} />
      ))}

      <style jsx>{`
        .recipe-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 20px 60px;
        }
      `}</style>
    </div>
  )
}