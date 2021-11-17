import React, {useEffect,useState} from 'react'
import * as moment from 'moment'
import { Button } from '@chakra-ui/button';
import {Pagination} from 'react-laravel-paginex'
import Zoom from  'react-reveal/Zoom'
import { Link } from 'react-router-dom';


const options = {
    containerClass: 'flex items-center text-center w-300 mx-auto',
    prevButtonClass: 'text-2xl text-yellow-700',
    prevButtonText: '<',
    nextButtonText: '>',
    nextButtonClass: 'text-3xl text-yellow-700',
    activeClass: 'bg-yellow-700 text-white',
    numberButtonClass: 'mx-1 h-6 w-6 text-center rounded-full text-lg'
}
function Blog() {
    const [articles, setArticles] = useState({});
    const [data,setData] = useState({});

    const getData = async (d)=>{
    const res = await  fetch('/api/article?page=' + d?.page);
    const response = await res.json();
    setData(d)
   setArticles(response)
 }
   useEffect(() => {
       getData(data)
       return () => {
           return null;
       }
   }, [data])
    return (
      <>
<section className="bg-white">
    <div className="w-full px-5 py-6 mx-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16 max-w-7xl">
         <Zoom>
            <div className="flex flex-col items-center sm:px-5 md:flex-row">
            <div className="w-full md:w-1/2">
                <a href="#_" className="block">
                    <img className="object-cover w-full h-full rounded-lg max-h-64 sm:max-h-96" src="https://cdn.devdojo.com/images/may2021/cupcakes.jpg" />
                </a>
            </div>
            <div className="flex flex-col items-start justify-center w-full h-full py-6 mb-6 md:mb-0 md:w-1/2">
                <div className="flex flex-col items-start justify-center h-full space-y-3 transform md:pl-10 lg:pl-16 md:space-y-5">
                    <div className="bg-pink-500 flex items-center pl-2 pr-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white">
                        <svg className="w-3.5 h-3.5 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <span>Featured</span>
                    </div>
                    <h1 className="text-4xl font-bold leading-none lg:text-5xl xl:text-6xl"><a href="#_">Savory Templates. Sweet Designs.</a></h1>
                    <p className="pt-2 text-sm font-medium">Par <a href="#_" className="mr-1 underline">g@llisDev</a> · <span className="mx-1">April 23rd, 2021</span> · <span className="mx-1 text-gray-600">5 min. read</span></p>
                </div>
            </div>
        </div> 
         </Zoom>
        

        <div className="grid grid-cols-12 pb-10 sm:px-5 gap-x-8 gap-y-16">
          {articles?.data?.map((article,index)=> (
              <Zoom key={index}>
                  <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
                <a href="#_" className="block">
                    <img className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56" src={article.image} />
                </a>
                <div className="bg-purple-500 flex items-center px-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white">
                    <span>{article.title}</span>
                </div>
                <h2 className="text-lg font-bold sm:text-xl md:text-2xl"><a href="#_">Creating a Future Worth Living</a></h2>
                <p className="text-sm text-gray-500">{article.description}</p>
                <p className="pt-2 text-xs font-medium"><a href="/" className="mr-1 underline">@gallisDev</a> · <span className="mx-1">Publié le { moment(article.created_at).locale('fr').format('DD MMMM YYYY') }</span> · <span className="mx-1 text-gray-600">3 min. read</span></p>
                <Link to={`/blog/${article.slug}`}>
                <Button colorScheme="blue" variant='solid'>voir l'article</Button>
                </Link>
                
            </div>
              </Zoom>
            
          ))}
           

        </div>
         
        <Pagination changePage={getData} data={articles} options={options}/>
    </div>
</section>

      </>
//         <div>
//          
//            <section className="text-gray-600 body-font">
//   <div className="container px-5 py-24 mx-auto">
//     <div className="flex flex-wrap -m-4">
//      {articles?.map((article,index) => (
//        <div className="p-4 md:w-1/3" key={index}>
//         <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
//           <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={article?.image} alt="blog" />
//           <div className="p-6">
//             <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{article?.title}</h2>
//             <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
//             <p className="leading-relaxed mb-3">{article?.content}</p>
//           </div>
//         </div>
//       </div>  
//      ))}
      
//     </div>
//   </div>
// </section>
//         </div>
    )
}

export default Blog
