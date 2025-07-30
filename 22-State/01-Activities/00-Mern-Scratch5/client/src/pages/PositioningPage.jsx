import './PositioningStyle.css'

function PositioningPage() {
  return (
    <>
      <h1>PositioningDisplayPage</h1>
      <div className="container-fluid">
        <div className="display-block box box-1">block</div>
        <div className="display-block box box-2"></div>
        <div className="display-block box box-3"></div>
      </div>
      
      <div className="container-fluid">
        No box rules like margin or padding on inline (or least it doesn't exact work right)
        <div className="display-inline box box-1">inline</div>
        <div className="display-inline box box-2">text</div>
        <div className="display-inline box box-3">only</div>
      </div>
      <div className="container-fluid">
        With other text
        <div className="display-inline-block box box-1">inline-block</div>
        <div className="display-inline-block box box-2">text</div>
        <div className="display-inline-block box box-3">only</div>
        the text will still follow
      </div>
    </>
  )
}

export default PositioningPage;