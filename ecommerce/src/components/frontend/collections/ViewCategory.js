import axios from 'axios'
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ViewCategory() {

  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    let isMounted = true;
    axios.get(`/api/getCategory`).then(res=>{
      if(isMounted){
        if(res.data.status === 200){
          setCategory(res.data.category);
          setLoading(false);
        }
      }
    });
    return()=>{
      isMounted = false;
    }
  }, []);

  if(!loading){
    var showCategoryList = '';
    showCategoryList = category.map((item, idx)=>{
      return (
        <div className="col-md-2 mb-2" key={idx}>
          <Link to={`/collections/${item.slug}`} className="text-decoration-none shadow d-flex flex-wrap pt-1 bg-light text-dark">
              {/* <img src='' alt={item.name} className='w-100 m-auto text-center border' /> */}
            <div className="card-body">
                <h6 className='text-center'>{item.name}</h6>
            </div>
          </Link>
        </div>
      )
    })
  }



  return (
    <div>
      <div className="py-3 bg-warning">
        <div className="container-fluid">
          <div className="row">
            {showCategoryList}

          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewCategory