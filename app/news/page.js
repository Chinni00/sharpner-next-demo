import Link from "next/link"


const NewsPage = ({params}) => {
  return (
    <div>
        NewsPage
        <Link href={`news/1`} >1</Link><br/>
        <Link href={`news/2`} >2</Link><br/>
        <Link href={`news/3`} >3</Link>
        </div>
  )
}

export default NewsPage