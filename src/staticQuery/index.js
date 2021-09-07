import { useStaticQuery, graphql } from 'gatsby'

const AyoQuery = () => {
  const data = useStaticQuery(
    graphql`
    query AyoQuery {
      allFile {
        nodes {
          relativePath
        }
      }
    }
    `
  )
  return data.allFile.nodes
}

export default AyoQuery
