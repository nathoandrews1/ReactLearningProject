import React from 'react';
import BookModel from '../../../models/BookModel';

export const ReturnBook: React.FC<{book: BookModel}> = (book) => {
    return (
        <>
            <div className="col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-3">
                <div className="text-center">

                    {book.book.img ?
                     <img src={book.book.img} width="151" height="233" alt="book" />
                     :
                     <img src={require('./../../../Images/BooksImages/book-luv2code-1000.png')} width="151" height="233" alt="book" />
                    }

                    <h6 className="mt-2">{book.book.title}</h6>
                    <p>{book.book.author}</p>
                    <a className="btn main-color text-white" href="#">Reserve</a>
                 </div>
             </div>
        </>
    );
}

// export default function ReturnBook({img, title, author}: {img: string; title: string; author: string}) {
//     return (
//         <>
//             <div className="col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-3">
//                 <div className="text-center">
//                     <img src={img} width="151" height="233" alt="book" />
//                     <h6 className="mt-2">{title}</h6>
//                     <p>{author}</p>
//                     <a className="btn main-color text-white" href="#">Reserve</a>
//                 </div>
//             </div>
//         </>
//     );
// }
