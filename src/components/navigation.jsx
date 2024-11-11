import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <nav className='h-24 bg-gray-800 p-4 flex justify-between items-center'>
                <div>
                    <span className='text-xl text-white font-medium'>Logo</span>
                </div>
                <div>
                    <ul className='flex gap-4 text-white'>
                        <li><Link to={'/user'}>Users</Link></li>
                        <li><Link to={'/'} >List Product</Link></li>
                        <li><Link to={'/dashboard/produit/new'} href="">Ajouter</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navigation;
