import React from 'react' 
import { Link } from 'react-router-dom';
const SideNavBar=()=>{
    return(<ul className='flex flex-col gap-2 p-2   '>
        <li className='p-2'><Link>Men's Fashion</Link></li>
        <li className='p-2'><Link>Women's Fashion</Link></li>
        <li className='p-2'><Link>Electronics</Link></li>
        <li className='p-2'><Link>Home & life'style</Link></li>
        <li className='p-2'><Link>Medicine</Link></li>
        <li className='p-2'><Link>Sports & outdoor</Link></li>
        <li className='p-2'><Link>Baby's & Toys</Link> </li>
        <li className='p-2'><Link>Groceries & pets</Link></li>
        <li className='p-2'><Link>Health & Beauty</Link></li>

    </ul>)
}

export default SideNavBar;