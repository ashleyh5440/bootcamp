import './PositioningStyle2.css'

function PositioningPage2() {
  return (
    <>
      <h1>PositioningPage2</h1>
      <div>
        position: static - default position (starting point)
        <div class="box box-1">Box 1</div>
        <div class="box box-2">Box 2</div>
        <div class="box box-3">Box 3</div>
      </div>
      <div>
        position: relative - moved based on the static position
        <div class="box-relative box-1">relative Box 1</div>
        <div class="box-relative box-2" style={{top: "40px", zIndex: "1"}}>relative Box 2</div>
        <div class="box-relative box-3">relative Box 3</div>
      </div>
      <div>
        position: absolute
        <div class="box-absolute-parent">
          <div class="box-absolute box-1">Absolute Box 1</div>
          <div class="box-absolute box-2" style={{bottom: "-20px", right: "0"}}>Absolute Box 2</div>
          <div class="box-absolute box-3" style={{bottom: "0"}}>Absolute Box 3</div>
        </div>
      </div>
      <div>
        position: fixed
          <div class="box-fixed box-1" style={{top: "-20px", right: "0"}}>Fixed Box 1</div>
          <div class="box-fixed box-2" style={{bottom: "-20px", right: "0"}}>Fixed Box 2</div>
          <div class="box-fixed box-3" style={{bottom: "0"}}>Fixed Box 3</div>
      </div>
    </>
  )
}

export default PositioningPage2;