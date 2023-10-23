import React from 'react'
import ViewCategory from '../../components/frontend/collections/ViewCategory';
import Banner from './Banner';


function Home() {

  return (
    <>
      <ViewCategory />
      <div className="container-fluid p-0">
        <Banner />
      </div>
    </>
  )
}

export default Home