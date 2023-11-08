import React from 'react'
import ChefCard from './ChefCard'

function ChefSection() {
    const chefs = [
        {
            name: 'Gordon Ramsay',
            img:'/img/top-chefs/img1.jpg',
            recipesCount: '100',
            cuisine:'Western'
        },
        {
            name: 'Chris Brown',
            img:'/img/top-chefs/img2.jpg',
            recipesCount: '56',
            cuisine:'American'
        },
        {
            name: 'Justin Bieber',
            img:'/img/top-chefs/img3.jpg',
            recipesCount: '70',
            cuisine:'Canadian'
        },

        {
            name: 'Rhett Marcelo',
            img:'/img/top-chefs/img4.jpg',
            recipesCount: '169',
            cuisine:'Filipino'
        },

        {
            name: 'Linh Nguyen',
            img:'/img/top-chefs/img5.jpg',
            recipesCount: '69',
            cuisine:'Asian'
        },
        {
            name: 'Tien Nguyen',
            img:'/img/top-chefs/img6.jpg',
            recipesCount: '69',
            cuisine:'Vietnamese'
        }
    ]
  return (
    <div className='section chef'>
        <h1 className='title'> Our Top Chefs</h1>
        <div className='top-chef-container'>
           {/*
           <ChefCard/>
            <ChefCard/>
            <ChefCard/>
            <ChefCard/>
            <ChefCard/>
            <ChefCard/>
           */ } 
           {chefs.map(chef => <ChefCard key={chef.name} chef={chef}/>)}
        </div>
      
    </div>
  )
}

export default ChefSection
