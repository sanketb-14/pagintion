import React from 'react'
import {FaGithubAlt} from 'react-icons/fa'


function Followers({avatar_url,html_url,login,}) {
    const style = {fontSize:'2.5rem',left:'10%'}
  return <article className="card">
      <img src={avatar_url} alt={login} />
     <div className="content">
          <h4>{login}</h4>
      <a href={html_url} className="btn">View Profile 
      <span className="ficon"><FaGithubAlt style={style}/></span></a>
      
     
      

     </div>

  </article>
}

export default Followers