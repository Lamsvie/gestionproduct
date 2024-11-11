import React from 'react';

const Listproduit = () => {
    return (
        <div className='p-4'>
            <div className='flex flex-col gap-2'>
                <h1>List Produit</h1>
                <div className='flex items-center justify-between'>
                    <input className='border-2 p-2 rounded-md' type="search" placeholder='Search product...' />
                    <button className='bg-gray-600 py-1 px-3 text-white rounded-md'>Add Product</button>
                </div>
            </div>
            <div>
                <table className='w-full'>
                    <thead>
                        <tr className='border-b'>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Categoriy</th>
                            <th>Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='border-b'>
                            <td className='bg-blue-400'>1</td>
                            <td>Mac</td>
                            <td>Electro</td>
                            <td>2000£</td>
                            <td>
                                <button className='bg-green-300'>Update</button>
                                <button className='bg-red-300'>Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Listproduit;
