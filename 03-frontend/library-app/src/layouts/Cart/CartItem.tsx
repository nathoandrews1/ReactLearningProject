export default function CartItem({author, title, price}: {author?:string, title?:string, price?:number}) {
    return (
        <>
            <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                    <h6 className="my-0">{title}</h6>
                    <small className="text-muted">{author}</small>
                </div>
                <span className="text-muted">${price}</span>
            </li>
        </>
    );
}