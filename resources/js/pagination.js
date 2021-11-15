import { Link } from 'react-router-dom'
export function pagination({articles=[],page}) {
    return (
        <>
        <div class="flex items-center">
             {page == 1 ? <span class="rounded-l rounded-sm border border-brand-light px-3 py-2 cursor-not-allowed no-underline">&laquo;</span> 
             :
              '<a class="rounded-l rounded-sm border-t border-b border-l border-brand-light px-3 py-2 text-brand-dark hover:bg-brand-light no-underline" href="?page=${page - 1}" rel="prev"> &laquo; </a>'}
              
        </div>
        </>
    );
    // if(articles.length !== 0) {
    //     html = `<div class="flex items-center">`;
    //         if(page === 1) {
    //            html += `<span class="rounded-l rounded-sm border border-brand-light px-3 py-2 cursor-not-allowed no-underline">&laquo;</span>`;
    //         }
    //         else {
    //             html += `<a
    //             class="rounded-l rounded-sm border-t border-b border-l border-brand-light px-3 py-2 text-brand-dark hover:bg-brand-light no-underline"
    //             href="?page=${page - 1}"
    //             rel="prev"
    //         >
    //             &laquo;
    //         </a>`
    //         }
    //         for (let index = 0; index < articles.length / 5; index++) {
               
    //             html+=`<Link to="/blog?page=${index + 1}" class="border-t border-b border-l border-brand-light px-3 py-2 no-underline">${index+1}</Link>`
    //         }
            

    //         if(page < articles.length/ 2) {
    //             html += ` <a class="rounded-r rounded-sm border border-brand-light px-3 py-2 hover:bg-brand-light text-brand-dark no-underline" href="?page=${page + 1 }" rel="next">&raquo;</a>`
    //         }
    //         else {
    //             html += ` <span class="rounded-r rounded-sm border border-brand-light px-3 py-2 hover:bg-brand-light text-brand-dark no-underline cursor-not-allowed">&raquo;</span>`
    //         }

    //         return html;
    // }
}