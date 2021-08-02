import React from 'react'
const StateOffSizeLgIllustratedTrue = ({
  className,
  desc,
  height,
  title,
  width,
}) => {
  return (
      <svg
        {...{ className }}
        width={width ? width : height ? undefined : "111"}
        height={height ? height : undefined}
        viewBox="0 0 111 60" 
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {!!title && <title>{title}</title>}
        {!!desc && <desc>{desc}</desc>}
        <path fillRule="evenodd" clipRule="evenodd" d="M0 29.6C0 13.2524 13.2524 0 29.6 0H81.4C97.7476 0 111 13.2524 111 29.6C111 45.9476 97.7476 59.2 81.4 59.2H29.6C13.2524 59.2 0 45.9476 0 29.6Z" fill="#1F1F1F"/><path d="M46.2808 35.4036C43.8352 40.7824 38.4156 44.4935 32.1404 44.4721C23.5762 44.4428 16.6735 37.4928 16.7028 28.9286C16.7242 22.6534 20.4723 17.2593 25.8677 14.8505C24.9731 16.801 24.4724 18.9503 24.4646 21.2196C24.4354 29.7641 31.338 36.7338 39.9023 36.7631C42.1716 36.7709 44.3242 36.2849 46.2808 35.4036Z" fill="#999CA0"/><circle cx="13.9658" cy="17.5849" r="0.925" transform="rotate(0.195808 13.9658 17.5849)" fill="#999CA0"/><circle cx="33.3876" cy="18.576" r="1.85" transform="rotate(0.195808 33.3876 18.576)" fill="#999CA0"/><circle cx="41.6855" cy="26.9296" r="0.925" transform="rotate(0.195808 41.6855 26.9296)" fill="#999CA0"/><circle cx="12.9638" cy="40.7064" r="1.85" transform="rotate(0.195808 12.9638 40.7064)" fill="#999CA0"/><g filter="url(#filter0_dd)"><path fillRule="evenodd" clipRule="evenodd" d="M81.4002 51.7999C93.6609 51.7999 103.6 41.8606 103.6 29.5999C103.6 17.3392 93.6609 7.3999 81.4002 7.3999C69.1395 7.3999 59.2002 17.3392 59.2002 29.5999C59.2002 41.8606 69.1395 51.7999 81.4002 51.7999Z" fill="white"/></g><defs><filter id="filter0_dd" x="58.2002" y="6.3999" width="46.4" height="51.4" filterUnits="userSpaceOnUse" colorInterpolation-filters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset/><feGaussianBlur stdDeviation="0.5"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feMorphology radius="6" operator="erode" in="SourceAlpha" result="effect2_dropShadow"/><feOffset dy="6"/><feGaussianBlur stdDeviation="3"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.52 0"/><feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/><feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape"/></filter></defs>
      </svg>
  )
}
export default StateOffSizeLgIllustratedTrue
