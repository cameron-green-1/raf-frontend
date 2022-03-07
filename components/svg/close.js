import styles from '../../styles/Close.module.css';

const Close = ({ colour = '#0097d1' }) => {
  return (
    <svg
      className='close hotspot-close'
      id='Close_Button'
      data-name='Close Button'
      xmlns='http://www.w3.org/2000/svg'
      width='40'
      height='40'
      viewBox='0 0 24 24'
    >
      <circle
        id='Ellipse_2'
        data-name='Ellipse 2'
        cx='12'
        cy='12'
        r='12'
        fill={colour}
      />
      <g id='Group_28' data-name='Group 28' transform='translate(-307 -341)'>
        <line
          id='Line_2'
          data-name='Line 2'
          x1='9'
          y2='9'
          transform='translate(314.5 348.5)'
          fill='none'
          stroke='#fff'
          strokeLinecap='round'
          strokeWidth='2'
        />
        <line
          id='Line_3'
          data-name='Line 3'
          x1='9'
          y2='9'
          transform='translate(323.5 348.5) rotate(90)'
          fill='none'
          stroke='#fff'
          strokeLinecap='round'
          strokeWidth='2'
        />
      </g>
    </svg>
  );
};

export default Close;
