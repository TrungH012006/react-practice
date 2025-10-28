function Backdrop (props) {
  // Our own components don't have 'built-in' props, we have to configure outrselves
  return <div className='backdrop' onClick={props.onClick} />
}

export default Backdrop;