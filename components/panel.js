import Close from './svg/close';

const Panel = ({ children, padding }) => {
  return (
    <div className='hotspot' style={{ padding }}>
      <div className='hotspot-bg'></div>
      {/* <img src='/close.svg' alt='' className='hotspot-close' /> */}
      <Close />
      {/* <button className='hotspot-close'> */}
      {/* </button> */}
      {/* <main className='info'>{children}</main> */}
      {children}
    </div>
  );
};

export default Panel;
