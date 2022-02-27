const Panel = ({ children }) => {
  return (
    <div className='hotspot'>
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
