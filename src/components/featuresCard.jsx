import * as React from 'react'

const FeaturesCard=({title,content,children})=>{
    return(
        <div className='rounded-md w-[340px] h-[75px] flex drop-shadow-lg bg-purple-500 items-center justify-around hover:scale-105'>
            {children}
            <div className="  max-w-[250px]">
                <h6 className="font-['urbanist'] font-extrabold text-lg text-purple-300">{title}</h6>
                <p className="font-['urbanist'] font-semibold text-ms text-purple-300">{content}</p>
            </div>
        </div>
    )
}

export default FeaturesCard;