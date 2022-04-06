import React from 'react';
import { Link } from 'react-router-dom';

const Article = (props) => {
    return(
        <article id={props.art.id}>
            <h4>
            <Link to={'/articles/' + props.art.slug}>
                {props.art.titre}
            </Link>
            </h4>
            <p>{props.art.contenu}</p>
            <ul>
                <li>{props.art.date_creation}</li>
                <li>{props.art.prenom}</li>
                <li>{props.art.nom.toUpperCase()}</li>
            </ul>

        </article>
    )

}
export default Article;