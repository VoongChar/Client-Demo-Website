import React from 'react'
import NewsPost from '../NewsPost'

export default function News() {
    return (
        <div className="container my-5">
            <h1 className="pb-2"> News </h1>

            <div className="pb-2">
                <NewsPost />
            </div>
            <div className="pb-2">
                <NewsPost />
            </div>
            <div>
                <NewsPost />
            </div>
        </div>
    
    )
}
