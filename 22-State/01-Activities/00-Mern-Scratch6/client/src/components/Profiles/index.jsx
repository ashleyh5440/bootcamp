import AllProfiles from "../AllProfiles";
import { useQuery } from "@apollo/client";
import { QUERY_ALL_PROFILES } from "../../utils/queries";

function Profiles() {
  // do the query and send data to render to child
  const {loading, data } = useQuery(QUERY_ALL_PROFILES);

  console.log({data});

  const profiles = data?.profiles || [];
  // const profiles = [
  //   {
  //     "_id": "65e7cf3edfcfd74d3d671cba",
  //     "name": "Max Kanat-Alexander",
  //     "skills": [
  //       "Java",
  //       "Perl",
  //       "Apache",
  //       "Python"
  //     ]
  //   }
  // ];
  return (
    <>
      <h1>Profiles</h1>
      { loading ? (
        <h1>Still loading</h1>
      ) : (
        <AllProfiles profiles={profiles} />
      )
      }
    </>
  )
}

export default Profiles;