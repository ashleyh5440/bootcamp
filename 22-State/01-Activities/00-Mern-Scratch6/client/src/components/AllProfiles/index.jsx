function AllProfiles({ profiles }) {
  // doing rendering

  return (
    <>
      <h3>AllProfiles</h3>
      <div class="row">
        {profiles.map( profile => (
          <div className="card col-6 col-md-3" key={profile._id}>
            <div className="card-body">
              <h5 className="card-title">{profile.name}</h5>
              <ul>
              {profile.skills.map( (skill, index) => (
                <li className="card-text" key={index}>{skill}</li>
              ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default AllProfiles;