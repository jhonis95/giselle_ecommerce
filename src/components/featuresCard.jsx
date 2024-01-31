import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react'

const FeaturesCard=({title,content,image})=>{
    return(
        <div className=' border rounded-md w-[340px] h-[75px] flex drop-shadow-lg'>
            <StaticImage
                src={image}
            />
            <div>
                <h6>{title}</h6>
                <p>{content}</p>
            </div>
        </div>
    )
}

export default FeaturesCard;