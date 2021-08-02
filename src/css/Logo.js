import React from 'react'
const Logo = ({
  activeColor,
  className,
  color,
  desc,
  focusColor,
  height,
  hoverColor,
  title,
  width,
}) => {
  const css = `
    ${hoverColor ? `svg[data-hover="${hoverColor}"]:hover {
      fill: ${hoverColor};
    }` : ''}
    ${focusColor ? `svg[data-focus="${focusColor}"]:focus {
      fill: ${focusColor};
    }` : ''}
    ${activeColor ? `svg[data-active="${activeColor}"]:active {
      fill: ${activeColor};
    }` : ''}
  `
  return (
    <React.Fragment>
      <style>
        {css}
      </style>
      <svg
        {...{ className }}
        data-hover={hoverColor}
        data-focus={focusColor}
        data-active={activeColor}
        width={width ? width : height ? undefined : "182"}
        height={height ? height : undefined}
        viewBox="0 0 182 43" 
        fill={color || "black"}
        xmlns="http://www.w3.org/2000/svg"
      >
        {!!title && <title>{title}</title>}
        {!!desc && <desc>{desc}</desc>}
        <path fillRule="evenodd" clipRule="evenodd" d="M10.9017 41.4028H0V0.584314H10.9017V5.92661H10.985C14.2305 2.00336 18.6411 0 23.135 0C28.461 0 32.7052 2.00336 35.1186 6.42745H35.285C38.6138 2.17031 43.6902 0 49.5155 0C58.2536 0 63.8293 5.25882 63.8293 17.7798V41.4028H52.9275V20.3675C52.9275 13.8566 50.9303 9.76639 45.8539 9.76639C41.2768 9.76639 37.532 13.6896 37.532 21.0353V41.4028H26.6302V20.3675C26.6302 13.8566 24.4665 9.76639 19.4733 9.76639C14.5634 9.76639 10.9017 13.6896 10.9017 21.0353V41.4028ZM101.781 21.5639C101.781 25.375 98.6917 28.4644 94.8807 28.4644C91.0697 28.4644 87.9803 25.375 87.9803 21.5639C87.9803 17.7529 91.0697 14.6635 94.8807 14.6635C98.6917 14.6635 101.781 17.7529 101.781 21.5639ZM115.582 21.5639C115.582 32.997 106.314 42.2653 94.8807 42.2653C83.4477 42.2653 74.1793 32.997 74.1793 21.5639C74.1793 10.1309 83.4477 0.862545 94.8807 0.862545C106.314 0.862545 115.582 10.1309 115.582 21.5639ZM132.833 7.76301C132.833 11.574 129.744 14.6635 125.933 14.6635C122.122 14.6635 119.033 11.574 119.033 7.76301C119.033 3.95199 122.122 0.862545 125.933 0.862545C129.744 0.862545 132.833 3.95199 132.833 7.76301ZM154.096 41.4028H143.185V0.584314H154.096V5.84313H154.263C157.512 2.00336 162.176 0 167.257 0C175.92 0 182 4.67451 182 17.1955V41.4028H171.088V19.9501C171.088 12.1871 168.34 9.76639 163.259 9.76639C157.761 9.76639 154.096 13.6062 154.096 20.9518V41.4028Z" />
      </svg>
    </React.Fragment>
  )
}
export default Logo
