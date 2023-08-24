import styles from "../../styles/Feed.module.css"
import { useRouter } from "next/router";
import { Toolbar } from "../../../components/Toolbar";

export const Feed =({pageNumber, articles}) =>{
    const router = useRouter();
    return(<>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2227002292527901"
     crossorigin="anonymous"></script>
     <div class="col-sm-4">
 <div className="page-container">
    <Toolbar />
   <div className={styles.main}>
    {articles.map((article, index) =>(
       <div key={index} className={styles.post}>
        <h1 onClick={() => (window.location.href = article.url)}>{article.title}</h1>
        <p>{article.description}</p>
        {!!article.urlToImage && <img src={article.urlToImage} />}
       </div> 
    ))}
    </div>

    <div className={styles.paginator}>
        <div onClick={() =>{
            if(pageNumber > 1){
                router.push(`/feed/${pageNumber - 1}`)
            }
        }} className={ pageNumber ===1 ? styles.disabled : styles.active}>
            Previous Page
        </div>
        <div>#{pageNumber}</div>
        <div onClick={() =>{
            if(pageNumber < 5){
                router.push(`/feed/${pageNumber + 1}`)
            }
        }} className={ pageNumber === 5 ? styles.disabled : styles.active}>
            Next Page
        </div>
    </div>
   </div>
   </div>
    </>)
};

export const getServerSideProps = async pageContext =>{
    const pageNumber = pageContext.query.pageId;

    if(!pageNumber || pageNumber <1 || pageNumber >5){
        return{
            props: {
                articles: [],
                pageNumber: 1,
            }
        }
    }

    const url = `https://newsapi.org/v2/top-headlines?country=in&pageSize=5&page=${pageNumber}`;    
    const apiResponse = await fetch(url
        ,{
            headers: {
                Authorization: `Bearer ${process.env.NEWS_API_KEY}`,
            },
        },
        );

const apiJson = await apiResponse.json();
      const { articles } = apiJson;

      return {
        props:{
            articles,
            pageNumber: Number.parseInt(pageNumber)
        }
      }
}

export default Feed;
