import { Star, StarHalf } from 'lucide-react';
import React from 'react'

const RenderStar=({rating})=>{
    const star=[];
    const fullStar=Math.floor(rating)
    const halfStar=rating%1>=0.25 && rating%1<=0.75;
    const totalStar=5;

    for(let i=1;i<=totalStar;i++){
        if(i<=fullStar){
            star.push(<Star key={i} className='fill-amber-400 stroke-amber-400'/>)
        }else if(i===fullStar+1 && halfStar){
            star.push(<StarHalf key={i} className='fill-amber-400 stroke-amber-400'/>)
        }else{
            star.push(<Star key={i}/>)
        }
    }
    return star;

}

export default RenderStar;