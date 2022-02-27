const Panel = ({ children, padding }) => {
  return (
    <div className='hotspot' style={{ padding }}>
      <div className='hotspot-bg'></div>
      <img src='/close.svg' alt='' className='hotspot-close' />
      {/* <button className='hotspot-close'> */}
      {/* </button> */}
      {/* <main className='info'>{children}</main> */}
      {children}
    </div>
  );
};

export default Panel;
