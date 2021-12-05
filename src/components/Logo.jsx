import React from 'react'
import bannerLogo from './Banner/Banner1440X300.png'

export default function logo() {
    return (
        <div className="container m-0 p-0" id="bannerLogo">
            <img className="img-fluid" src={bannerLogo} id="bannnerImg" alt="Banner JadeKingfisher Eyes staring at you" />
        </div>
    )
}
