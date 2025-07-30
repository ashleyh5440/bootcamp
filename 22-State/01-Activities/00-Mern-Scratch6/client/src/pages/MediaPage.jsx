import './MediaStyle.css';

function MediaPage() {
  const styles={
    header: {
      textAlign: "center"
    }
  }
  return (
    <>
      <h1>MediaPage</h1>
      <div className="container">
        <div className="box-container">
          <div className="box box-1">
            <h1 style={styles.header}>Website Title</h1>
          </div>
          <div className="box box-2">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
        </div>
        <div className="box box-3 footer">Footer</div>
      </div>
    </>
  )
}

export default MediaPage;