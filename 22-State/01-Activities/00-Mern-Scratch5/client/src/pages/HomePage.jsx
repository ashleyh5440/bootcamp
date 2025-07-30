import { ME_QUERY } from '../utils/queries';
import './HomePage.css';
import { useQuery } from '@apollo/client';


function HomePage() {
  const {loading, data} = useQuery(ME_QUERY, {
    variables: { data: "fake_data"}
  }); // need to add cache management to query as needed
  const username = data?.me.username || '';
  return (
    <>
      <h1>HomePage</h1>
      
      <div class="parent">
        <div className="red backbox">
          <div className="red hoverbox"></div>
        </div>
        <div className="blue backbox">
          <div className="blue hoverbox"></div>
          
        </div>
      </div>

      { username.length > 0 ? (

        <h2>
        Hello {username}!
        </h2>
      ): (
        
        <h2>
          Not logged in!
        </h2>
      )}
    </>
  )
}

export default HomePage;