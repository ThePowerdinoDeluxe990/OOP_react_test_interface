import "./Posts.css"

interface props1{
    title:string    
    img:string
    message:string
}

export default function Posts({title,img,message}:props1){
   
    return(
    <div className="container">
        <div className="Post">
            <h1>{title}</h1>
            <img src={img}/>
            <p>{message}</p>

        </div>
    </div>
    )
}