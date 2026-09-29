import { Ingredients } from "./ingredients"
import ReactMarkdown from "react-markdown"

export function Recipe(props){
    return(
     <>
        {props.recipe!=="" && <section className="suggested-recipe-container">
                <ReactMarkdown>{props.recipe}</ReactMarkdown>
        </section>}
     </>
    )
}