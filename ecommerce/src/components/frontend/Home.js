import React from 'react'
import ViewCategory from '../../components/frontend/collections/ViewCategory';
import Banner from './Banner';
import Mobile from './products/mobile';


function Home() {

  return (
    <>
      <ViewCategory />
      <div className="container-fluid p-0">
        <Banner />
        <Mobile />
      </div>
    </>
  )
}

export default Home