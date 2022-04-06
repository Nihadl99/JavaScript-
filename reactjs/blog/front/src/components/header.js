import React from 'react';
import {Link} from "react-router-dom";

const Header = () =>{
    return(
        <header>
            <h1> Mon Blog</h1>
            <div>
                <ul>
                    <li>
                        <button>
                            <Link to ="/admin/articles">
                                Admin Article
                            </Link>
                        </button>
                    </li>
                </ul>
            </div>
        </header>
    )

}
export default Header;