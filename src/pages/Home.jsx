import React, { useState } from 'react'
import { Loader, FormField, Card } from '../components'
const RenderCards=({data, title})=>{ //creating another component for displaying the images
    if(data?.length>0){
        return data.map((post)=>{
            return <Card key={post._id} {...post}/>
        })
    }
    return (
        <h2 className='mt-5 font-bold text-[#6449ff] text-xl uppercase'>{title}</h2>
    )
}
const Home = () => {
    const [loading, setLoading]=useState(false);
    const [allPosts, setAllPosts]=useState(null);
    const [searchText, setSearchText]=useState('Swarnava')

    return (
    <section className='max-w-7xl mx-auto'>
        <div>
            <h1 className='font-extrabold text-[#222328] text-[32px]'>
                The Community Showcase
            </h1>
            <p className='mt-2 text-[#666e75] text-[16px] max-w [500px]'>Browse through a collection of imaginative and visually stunnig images generated by DALLE 2.0</p>
        </div>
        <div className='mt-16'>
            <FormField />
        </div>
        <div className='mt-10'>
            {loading ? (
                <div className='flex justify-center items-center'>
                    <Loader />
                </div>
            ):(
                <>
                    {searchText && (
                        <h2 className='font-medium text-[#666e75]'>Searching results for {searchText}</h2>
                    )}
                    <div className='grid lg-grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3'>
                        {searchText?(
                           <RenderCards data={[]} title="Search result not found" /> 
                        ):(
                            <RenderCards data={[]} title="No posts result found" />
                        )}
                    </div>
                </>
            )}
        </div>
    </section>
  )
}

export default Home