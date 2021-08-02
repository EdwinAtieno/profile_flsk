import React from 'react'
const Popover = ({
  className,
  desc,
  height,
  title,
  width,
}) => {
  return (
      <svg
        {...{ className }}
        width={width ? width : height ? undefined : "519"}
        height={height ? height : undefined}
        viewBox="0 0 519 289" 
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {!!title && <title>{title}</title>}
        {!!desc && <desc>{desc}</desc>}
        <g filter="url(#filter0_ddd)"><path d="M24 61.9535C24 44.062 24 35.1163 29.5582 29.5582C35.1163 24 44.062 24 61.9535 24H469.953C487.845 24 496.791 24 502.349 29.5582C507.907 35.1163 507.907 44.062 507.907 61.9535V194.791C507.907 212.682 507.907 221.628 502.349 227.186C496.791 232.744 487.845 232.744 469.953 232.744H61.9535C44.062 232.744 35.1163 232.744 29.5582 227.186C24 221.628 24 212.682 24 194.791V61.9535Z" fill="white"/><path d="M57.4391 69.9766H60.0223V57.1246H64.3775V54.8189H53.148V57.1246H57.4391V69.9766ZM67.648 58.0212C68.5447 58.0212 69.2705 57.2954 69.2705 56.4201C69.2705 55.5661 68.5447 54.8402 67.648 54.8402C66.7514 54.8402 66.0469 55.5661 66.0469 56.4201C66.0469 57.2954 66.7514 58.0212 67.648 58.0212ZM66.4525 69.9766H68.8436V59.5583H66.4525V69.9766ZM75.2154 70.1474C76.5817 70.1474 77.2435 69.8698 77.8626 69.5282L77.2435 67.4574C76.6884 67.7563 76.112 67.9057 75.7064 67.9057C75.0232 67.9057 74.703 67.5214 74.703 66.454V61.5865H77.7559V59.5583H74.703V55.8436L72.3119 56.0998V59.5583H71.031V61.5865H72.3119V66.6888C72.3119 69.0159 73.4221 70.1474 75.2154 70.1474ZM80.0666 69.9766H82.4576V54.2638H80.0666V69.9766ZM95.2554 64.6394C95.2554 61.6078 93.27 59.4089 90.3452 59.4089C87.2923 59.4089 85.1147 61.5651 85.1147 64.7674C85.1147 68.0338 87.3563 70.1474 90.516 70.1474C92.7576 70.1474 94.0599 69.3147 94.9352 68.1833L93.27 66.7529C92.7363 67.4147 91.8823 67.9698 90.6441 67.9698C89.0216 67.9698 87.8901 67.0731 87.5912 65.5574H95.1914C95.2127 65.3866 95.2554 65.0236 95.2554 64.6394ZM90.3238 61.5651C91.6902 61.5651 92.5441 62.4191 92.843 63.6787H87.6339C87.9755 62.3123 89.0002 61.5651 90.3238 61.5651ZM108.28 70.1474C111.483 70.1474 113.746 67.9484 113.746 64.7888C113.746 61.5865 111.483 59.4089 108.28 59.4089C104.993 59.4089 102.815 61.7146 102.815 64.7888C102.815 67.8417 104.993 70.1474 108.28 70.1474ZM108.28 67.9698C106.487 67.9698 105.249 66.5607 105.249 64.7888C105.249 62.9741 106.466 61.5651 108.28 61.5651C109.988 61.5651 111.312 62.8674 111.312 64.7888C111.312 66.6675 109.967 67.9698 108.28 67.9698ZM116.619 69.9766H119.011V61.5865H121.572V59.5583H119.011V57.9145C119.011 56.783 119.395 56.292 120.121 56.292C120.569 56.292 121.167 56.5054 121.85 56.8257L122.384 54.8189C121.829 54.456 120.932 54.093 119.779 54.093C117.73 54.093 116.619 55.3313 116.619 57.6583V59.5583H115.467V61.5865H116.619V69.9766ZM132.361 70.1474C133.727 70.1474 134.389 69.8698 135.008 69.5282L134.389 67.4574C133.834 67.7563 133.258 67.9057 132.852 67.9057C132.169 67.9057 131.849 67.5214 131.849 66.454V61.5865H134.902V59.5583H131.849V55.8436L129.458 56.0998V59.5583H128.177V61.5865H129.458V66.6888C129.458 69.0159 130.568 70.1474 132.361 70.1474ZM137.063 69.9766H139.454V64.6821C139.454 62.6326 140.521 61.5651 142.251 61.5651C143.681 61.5651 144.514 62.291 144.514 64.3618V69.9766H146.905V63.7427C146.905 60.6258 145.303 59.4089 143.019 59.4089C141.61 59.4089 140.35 59.8999 139.475 60.8606H139.454V54.2638H137.063V69.9766ZM159.344 64.6394C159.344 61.6078 157.358 59.4089 154.433 59.4089C151.381 59.4089 149.203 61.5651 149.203 64.7674C149.203 68.0338 151.445 70.1474 154.604 70.1474C156.846 70.1474 158.148 69.3147 159.023 68.1833L157.358 66.7529C156.824 67.4147 155.971 67.9698 154.732 67.9698C153.11 67.9698 151.978 67.0731 151.679 65.5574H159.28C159.301 65.3866 159.344 65.0236 159.344 64.6394ZM154.412 61.5651C155.778 61.5651 156.632 62.4191 156.931 63.6787H151.722C152.064 62.3123 153.088 61.5651 154.412 61.5651ZM167.522 69.9766H169.913V64.7888C169.913 62.7393 170.981 61.5651 172.411 61.5651C173.82 61.5651 174.482 62.6753 174.482 64.554V69.9766H176.873V64.7888C176.873 62.7393 177.962 61.5651 179.307 61.5651C180.716 61.5651 181.335 62.6753 181.335 64.554V69.9766H183.726V63.9562C183.726 60.8393 182.36 59.4089 180.076 59.4089C178.538 59.4089 177.215 60.0067 176.339 61.1381H176.297C175.678 59.964 174.589 59.4089 173.18 59.4089C171.984 59.4089 170.789 59.964 169.935 60.9887H169.913V59.5583H167.522V69.9766ZM191.528 70.1474C194.731 70.1474 196.994 67.9484 196.994 64.7888C196.994 61.5865 194.731 59.4089 191.528 59.4089C188.241 59.4089 186.063 61.7146 186.063 64.7888C186.063 67.8417 188.241 70.1474 191.528 70.1474ZM191.528 67.9698C189.735 67.9698 188.497 66.5607 188.497 64.7888C188.497 62.9741 189.714 61.5651 191.528 61.5651C193.236 61.5651 194.56 62.8674 194.56 64.7888C194.56 66.6675 193.215 67.9698 191.528 67.9698ZM203.902 70.1474C205.397 70.1474 206.528 69.5709 207.297 68.5675H207.318V69.9766H209.602V54.2638H207.233V60.8393H207.211C206.421 59.8999 205.247 59.4089 203.881 59.4089C201.02 59.4089 198.843 61.6719 198.843 64.8101C198.843 68.0338 201.02 70.1474 203.902 70.1474ZM204.265 67.9698C202.515 67.9698 201.276 66.6675 201.276 64.8315C201.276 62.8247 202.621 61.5651 204.287 61.5651C206.08 61.5651 207.318 62.9741 207.318 64.8315C207.318 66.7102 205.973 67.9698 204.265 67.9698ZM217.12 70.1474C218.571 70.1474 219.682 69.5923 220.429 68.5889L220.472 68.6102V69.9766H222.756V59.5583H220.365V60.8179L220.322 60.8393C219.575 59.8999 218.422 59.4089 217.098 59.4089C214.238 59.4089 212.081 61.6719 212.081 64.8101C212.081 68.0338 214.238 70.1474 217.12 70.1474ZM217.504 67.9698C215.732 67.9698 214.515 66.6675 214.515 64.8315C214.515 62.8247 215.839 61.5651 217.504 61.5651C219.212 61.5651 220.472 62.9741 220.472 64.8315C220.472 66.7102 219.127 67.9698 217.504 67.9698ZM225.922 69.9766H228.314V54.2638H225.922V69.9766Z" fill="#010812"/><path d="M449.791 51.2793L460.465 61.9537M460.465 61.9537L449.791 72.6281M460.465 61.9537L471.14 72.6281M460.465 61.9537L471.14 51.2793" stroke="black" strokeWidth="1.18605" strokeLinecap="round" strokeLinejoin="round"/><line x1="24" y1="99.3137" x2="507.907" y2="99.3137" stroke="#EBEBEB" strokeWidth="1.18605"/><path d="M93.3065 159.467C95.6786 159.467 97.3865 158.385 98.5631 156.924L97.3296 155.88C96.3807 157.076 95.0524 157.911 93.3065 157.911C90.46 157.911 88.3156 155.899 88.3156 152.673C88.3156 149.58 90.2323 147.341 93.2875 147.341C94.8057 147.341 96.191 147.986 97.3106 149.371L98.5441 148.347C97.1208 146.601 95.2232 145.766 93.2875 145.766C88.9798 145.766 86.5887 148.859 86.5887 152.673C86.5887 157.076 89.663 159.467 93.3065 159.467ZM104.82 159.486C107.552 159.486 109.583 157.569 109.583 154.761C109.583 151.952 107.552 150.017 104.82 150.017C101.954 150.017 100.038 152.104 100.038 154.761C100.038 157.417 101.954 159.486 104.82 159.486ZM104.82 158.082C102.903 158.082 101.613 156.601 101.613 154.761C101.613 152.92 102.884 151.421 104.82 151.421C106.604 151.421 108.008 152.787 108.008 154.761C108.008 156.734 106.585 158.082 104.82 158.082ZM111.875 159.372H113.412V154.761C113.412 152.673 114.551 151.421 116.296 151.421C117.644 151.421 118.574 152.161 118.574 154.324V159.372H120.111V153.888C120.111 151.25 118.782 150.017 116.79 150.017C115.367 150.017 114.152 150.681 113.431 151.8H113.412V150.13H111.875V159.372ZM125.408 159.486C126.509 159.486 127.135 159.22 127.648 158.917L127.249 157.569C126.794 157.816 126.224 158.044 125.674 158.044C124.801 158.044 124.555 157.512 124.555 156.393V151.459H127.61V150.13H124.555V146.809L123.017 146.98V150.13H121.822V151.459H123.017V156.62C123.017 158.48 123.776 159.486 125.408 159.486ZM137.438 154.59C137.438 151.952 135.711 150.017 133.187 150.017C130.549 150.017 128.632 151.971 128.632 154.761C128.632 157.588 130.568 159.486 133.301 159.486C135.16 159.486 136.318 158.784 137.115 157.759L136.033 156.848C135.464 157.55 134.591 158.082 133.358 158.082C131.612 158.082 130.397 156.943 130.189 155.216H137.4C137.4 155.102 137.438 154.837 137.438 154.59ZM133.168 151.421C134.686 151.421 135.673 152.446 135.901 153.964H130.227C130.511 152.389 131.688 151.421 133.168 151.421ZM139.691 159.372H141.228V154.761C141.228 152.673 142.367 151.421 144.113 151.421C145.46 151.421 146.39 152.161 146.39 154.324V159.372H147.927V153.888C147.927 151.25 146.599 150.017 144.606 150.017C143.183 150.017 141.969 150.681 141.247 151.8H141.228V150.13H139.691V159.372ZM153.225 159.486C154.326 159.486 154.952 159.22 155.464 158.917L155.066 157.569C154.61 157.816 154.041 158.044 153.491 158.044C152.618 158.044 152.371 157.512 152.371 156.393V151.459H155.426V150.13H152.371V146.809L150.834 146.98V150.13H149.638V151.459H150.834V156.62C150.834 158.48 151.593 159.486 153.225 159.486ZM163.544 148.441C164.171 148.441 164.664 147.948 164.664 147.341C164.664 146.734 164.171 146.24 163.544 146.24C162.918 146.24 162.425 146.734 162.425 147.341C162.425 147.948 162.918 148.441 163.544 148.441ZM162.766 159.372H164.303V150.13H162.766V159.372ZM169.904 159.486C171.004 159.486 171.631 159.22 172.143 158.917L171.745 157.569C171.289 157.816 170.72 158.044 170.169 158.044C169.297 158.044 169.05 157.512 169.05 156.393V151.459H172.105V150.13H169.05V146.809L167.513 146.98V150.13H166.317V151.459H167.513V156.62C167.513 158.48 168.272 159.486 169.904 159.486ZM181.933 154.59C181.933 151.952 180.206 150.017 177.682 150.017C175.044 150.017 173.128 151.971 173.128 154.761C173.128 157.588 175.063 159.486 177.796 159.486C179.656 159.486 180.813 158.784 181.61 157.759L180.529 156.848C179.959 157.55 179.086 158.082 177.853 158.082C176.107 158.082 174.893 156.943 174.684 155.216H181.895C181.895 155.102 181.933 154.837 181.933 154.59ZM177.663 151.421C179.181 151.421 180.168 152.446 180.396 153.964H174.722C175.006 152.389 176.183 151.421 177.663 151.421ZM184.187 159.372H185.724V154.78C185.724 152.711 186.862 151.421 188.38 151.421C189.766 151.421 190.525 152.502 190.525 154.476V159.372H192.062V154.78C192.062 152.711 193.22 151.421 194.662 151.421C196.066 151.421 196.768 152.502 196.768 154.476V159.372H198.305V154.059C198.305 151.421 197.167 150.017 195.117 150.017C193.675 150.017 192.422 150.738 191.72 151.99H191.701C191.227 150.719 190.221 150.017 188.836 150.017C187.602 150.017 186.445 150.681 185.743 151.8H185.724V150.13H184.187V159.372ZM206.147 163.129H207.684V157.778H207.703C208.386 158.841 209.525 159.486 210.986 159.486C213.529 159.486 215.484 157.626 215.484 154.818C215.484 152.085 213.605 150.017 210.986 150.017C209.582 150.017 208.405 150.662 207.703 151.762H207.684V150.13H206.147V163.129ZM210.777 158.082C209.012 158.082 207.608 156.772 207.608 154.818C207.608 152.92 208.88 151.421 210.758 151.421C212.504 151.421 213.927 152.768 213.927 154.818C213.927 156.677 212.637 158.082 210.777 158.082ZM217.917 159.372H219.455V145.405H217.917V159.372ZM226.345 159.486C227.845 159.486 228.983 158.803 229.647 157.702H229.666V159.372H231.146V150.13H229.609V151.762L229.571 151.781C228.907 150.662 227.712 150.017 226.345 150.017C223.727 150.017 221.848 152.085 221.848 154.818C221.848 157.626 223.802 159.486 226.345 159.486ZM226.573 158.082C224.675 158.082 223.404 156.677 223.404 154.818C223.404 152.768 224.827 151.421 226.573 151.421C228.395 151.421 229.666 152.92 229.666 154.818C229.666 156.772 228.281 158.082 226.573 158.082ZM237.931 159.486C239.734 159.486 240.967 158.803 241.745 157.873L240.683 156.905C240.113 157.607 239.145 158.082 238.045 158.082C236.166 158.082 234.895 156.734 234.895 154.761C234.895 152.806 236.166 151.421 238.064 151.421C239.164 151.421 240.075 151.914 240.664 152.597L241.707 151.668C240.796 150.586 239.373 150.017 237.988 150.017C235.236 150.017 233.32 151.971 233.32 154.761C233.32 157.569 235.236 159.486 237.931 159.486ZM252.021 154.59C252.021 151.952 250.294 150.017 247.77 150.017C245.132 150.017 243.216 151.971 243.216 154.761C243.216 157.588 245.151 159.486 247.884 159.486C249.744 159.486 250.901 158.784 251.698 157.759L250.617 156.848C250.047 157.55 249.174 158.082 247.941 158.082C246.195 158.082 244.981 156.943 244.772 155.216H251.983C251.983 155.102 252.021 154.837 252.021 154.59ZM247.751 151.421C249.269 151.421 250.256 152.446 250.484 153.964H244.81C245.094 152.389 246.271 151.421 247.751 151.421ZM254.275 159.372H255.812V154.723C255.812 152.635 256.95 151.421 258.791 151.421C260.138 151.421 261.068 152.18 261.068 154.267V159.372H262.605V153.831C262.605 151.193 261.239 150.017 259.246 150.017C257.766 150.017 256.552 150.643 255.831 151.743H255.812V145.405H254.275V159.372ZM269.495 159.486C272.228 159.486 274.258 157.569 274.258 154.761C274.258 151.952 272.228 150.017 269.495 150.017C266.629 150.017 264.713 152.104 264.713 154.761C264.713 157.417 266.629 159.486 269.495 159.486ZM269.495 158.082C267.578 158.082 266.288 156.601 266.288 154.761C266.288 152.92 267.559 151.421 269.495 151.421C271.279 151.421 272.683 152.787 272.683 154.761C272.683 156.734 271.26 158.082 269.495 158.082ZM276.664 159.372H278.201V145.405H276.664V159.372ZM285.13 159.486C286.629 159.486 287.805 158.784 288.47 157.664H288.489V159.372H289.969V145.405H288.432V151.781H288.413C287.711 150.662 286.515 150.017 285.111 150.017C282.511 150.017 280.594 152.085 280.594 154.818C280.594 157.626 282.568 159.486 285.13 159.486ZM285.338 158.082C283.46 158.082 282.169 156.677 282.169 154.818C282.169 152.768 283.593 151.421 285.357 151.421C287.217 151.421 288.489 152.92 288.489 154.818C288.489 156.772 287.084 158.082 285.338 158.082ZM301.056 154.59C301.056 151.952 299.33 150.017 296.806 150.017C294.168 150.017 292.251 151.971 292.251 154.761C292.251 157.588 294.187 159.486 296.92 159.486C298.779 159.486 299.937 158.784 300.734 157.759L299.652 156.848C299.083 157.55 298.21 158.082 296.976 158.082C295.231 158.082 294.016 156.943 293.807 155.216H301.019C301.019 155.102 301.056 154.837 301.056 154.59ZM296.787 151.421C298.305 151.421 299.292 152.446 299.519 153.964H293.845C294.13 152.389 295.307 151.421 296.787 151.421ZM303.31 159.372H304.847V154.913C304.847 153.053 305.891 151.705 307.656 151.705C307.808 151.705 308.035 151.724 308.263 151.743V150.036C308.13 150.017 308.016 150.017 307.884 150.017C306.612 150.017 305.549 150.7 304.885 151.819H304.847V150.13H303.31V159.372ZM309.481 159.505C310.108 159.505 310.601 159.012 310.601 158.385C310.601 157.759 310.108 157.266 309.481 157.266C308.855 157.266 308.343 157.759 308.343 158.385C308.343 159.012 308.855 159.505 309.481 159.505ZM321.49 159.372H323.141V147.398H327.221V145.899H317.467V147.398H321.49V159.372ZM331.688 159.486C334.421 159.486 336.451 157.569 336.451 154.761C336.451 151.952 334.421 150.017 331.688 150.017C328.823 150.017 326.906 152.104 326.906 154.761C326.906 157.417 328.823 159.486 331.688 159.486ZM331.688 158.082C329.772 158.082 328.481 156.601 328.481 154.761C328.481 152.92 329.753 151.421 331.688 151.421C333.472 151.421 334.876 152.787 334.876 154.761C334.876 156.734 333.453 158.082 331.688 158.082ZM348.753 159.486C351.296 159.486 353.25 157.626 353.25 154.818C353.25 152.085 351.372 150.017 348.753 150.017C347.348 150.017 346.172 150.643 345.47 151.743H345.451V145.405H343.914V159.372H345.375V157.702H345.413C346.096 158.803 347.235 159.486 348.753 159.486ZM348.544 158.082C346.779 158.082 345.375 156.772 345.375 154.818C345.375 152.92 346.646 151.421 348.525 151.421C350.271 151.421 351.694 152.768 351.694 154.818C351.694 156.677 350.404 158.082 348.544 158.082ZM363.787 154.59C363.787 151.952 362.06 150.017 359.536 150.017C356.899 150.017 354.982 151.971 354.982 154.761C354.982 157.588 356.918 159.486 359.65 159.486C361.51 159.486 362.668 158.784 363.465 157.759L362.383 156.848C361.814 157.55 360.941 158.082 359.707 158.082C357.961 158.082 356.747 156.943 356.538 155.216H363.749C363.749 155.102 363.787 154.837 363.787 154.59ZM359.517 151.421C361.036 151.421 362.022 152.446 362.25 153.964H356.576C356.861 152.389 358.037 151.421 359.517 151.421ZM371.211 159.372H372.748V154.913C372.748 153.053 373.792 151.705 375.557 151.705C375.709 151.705 375.936 151.724 376.164 151.743V150.036C376.031 150.017 375.918 150.017 375.785 150.017C374.513 150.017 373.451 150.7 372.786 151.819H372.748V150.13H371.211V159.372ZM385.822 154.59C385.822 151.952 384.095 150.017 381.571 150.017C378.933 150.017 377.017 151.971 377.017 154.761C377.017 157.588 378.952 159.486 381.685 159.486C383.545 159.486 384.702 158.784 385.499 157.759L384.417 156.848C383.848 157.55 382.975 158.082 381.742 158.082C379.996 158.082 378.781 156.943 378.573 155.216H385.784C385.784 155.102 385.822 154.837 385.822 154.59ZM381.552 151.421C383.07 151.421 384.057 152.446 384.285 153.964H378.611C378.895 152.389 380.072 151.421 381.552 151.421ZM388.075 163.129H389.613V157.778H389.632C390.315 158.841 391.453 159.486 392.914 159.486C395.457 159.486 397.412 157.626 397.412 154.818C397.412 152.085 395.533 150.017 392.914 150.017C391.51 150.017 390.334 150.662 389.632 151.762H389.613V150.13H388.075V163.129ZM392.706 158.082C390.941 158.082 389.537 156.772 389.537 154.818C389.537 152.92 390.808 151.421 392.687 151.421C394.433 151.421 395.856 152.768 395.856 154.818C395.856 156.677 394.565 158.082 392.706 158.082ZM399.846 159.372H401.383V145.405H399.846V159.372ZM408.274 159.486C409.773 159.486 410.912 158.803 411.576 157.702H411.595V159.372H413.075V150.13H411.538V151.762L411.5 151.781C410.836 150.662 409.64 150.017 408.274 150.017C405.655 150.017 403.776 152.085 403.776 154.818C403.776 157.626 405.731 159.486 408.274 159.486ZM408.501 158.082C406.604 158.082 405.332 156.677 405.332 154.818C405.332 152.768 406.756 151.421 408.501 151.421C410.323 151.421 411.595 152.92 411.595 154.818C411.595 156.772 410.209 158.082 408.501 158.082ZM419.859 159.486C421.662 159.486 422.896 158.803 423.674 157.873L422.611 156.905C422.042 157.607 421.074 158.082 419.973 158.082C418.095 158.082 416.823 156.734 416.823 154.761C416.823 152.806 418.095 151.421 419.992 151.421C421.093 151.421 422.004 151.914 422.592 152.597L423.636 151.668C422.725 150.586 421.302 150.017 419.916 150.017C417.165 150.017 415.248 151.971 415.248 154.761C415.248 157.569 417.165 159.486 419.859 159.486ZM433.949 154.59C433.949 151.952 432.222 150.017 429.698 150.017C427.061 150.017 425.144 151.971 425.144 154.761C425.144 157.588 427.08 159.486 429.812 159.486C431.672 159.486 432.83 158.784 433.627 157.759L432.545 156.848C431.976 157.55 431.103 158.082 429.869 158.082C428.123 158.082 426.909 156.943 426.7 155.216H433.911C433.911 155.102 433.949 154.837 433.949 154.59ZM429.679 151.421C431.198 151.421 432.184 152.446 432.412 153.964H426.738C427.023 152.389 428.199 151.421 429.679 151.421ZM440.131 159.486C441.63 159.486 442.807 158.784 443.471 157.664H443.49V159.372H444.97V145.405H443.433V151.781H443.414C442.712 150.662 441.516 150.017 440.112 150.017C437.512 150.017 435.596 152.085 435.596 154.818C435.596 157.626 437.569 159.486 440.131 159.486ZM440.34 158.082C438.461 158.082 437.171 156.677 437.171 154.818C437.171 152.768 438.594 151.421 440.359 151.421C442.219 151.421 443.49 152.92 443.49 154.818C443.49 156.772 442.086 158.082 440.34 158.082ZM198.537 187.372H199.941L202.067 180.597H202.086L204.211 187.372H205.653L208.841 178.13H207.266L204.951 185.076H204.913L202.75 178.13H201.421L199.296 185.076H199.258L196.924 178.13H195.349L198.537 187.372ZM211.663 176.441C212.289 176.441 212.782 175.948 212.782 175.341C212.782 174.734 212.289 174.24 211.663 174.24C211.036 174.24 210.543 174.734 210.543 175.341C210.543 175.948 211.036 176.441 211.663 176.441ZM210.885 187.372H212.422V178.13H210.885V187.372ZM218.022 187.486C219.123 187.486 219.749 187.22 220.261 186.917L219.863 185.569C219.407 185.816 218.838 186.044 218.288 186.044C217.415 186.044 217.168 185.512 217.168 184.393V179.459H220.223V178.13H217.168V174.809L215.631 174.98V178.13H214.435V179.459H215.631V184.62C215.631 186.48 216.39 187.486 218.022 187.486ZM222.279 187.372H223.816V182.723C223.816 180.635 224.955 179.421 226.796 179.421C228.143 179.421 229.073 180.18 229.073 182.267V187.372H230.61V181.831C230.61 179.193 229.244 178.017 227.251 178.017C225.771 178.017 224.556 178.643 223.835 179.743H223.816V173.405H222.279V187.372ZM242.499 187.486C244.302 187.486 245.535 186.803 246.313 185.873L245.251 184.905C244.681 185.607 243.714 186.082 242.613 186.082C240.734 186.082 239.463 184.734 239.463 182.761C239.463 180.806 240.734 179.421 242.632 179.421C243.733 179.421 244.643 179.914 245.232 180.597L246.275 179.668C245.365 178.586 243.941 178.017 242.556 178.017C239.804 178.017 237.888 179.971 237.888 182.761C237.888 185.569 239.804 187.486 242.499 187.486ZM252.566 187.486C255.299 187.486 257.329 185.569 257.329 182.761C257.329 179.952 255.299 178.017 252.566 178.017C249.7 178.017 247.784 180.104 247.784 182.761C247.784 185.417 249.7 187.486 252.566 187.486ZM252.566 186.082C250.649 186.082 249.359 184.601 249.359 182.761C249.359 180.92 250.63 179.421 252.566 179.421C254.35 179.421 255.754 180.787 255.754 182.761C255.754 184.734 254.331 186.082 252.566 186.082ZM259.621 187.372H261.158V182.78C261.158 180.711 262.297 179.421 263.815 179.421C265.2 179.421 265.959 180.502 265.959 182.476V187.372H267.496V182.78C267.496 180.711 268.654 179.421 270.096 179.421C271.5 179.421 272.203 180.502 272.203 182.476V187.372H273.74V182.059C273.74 179.421 272.601 178.017 270.552 178.017C269.109 178.017 267.857 178.738 267.155 179.99H267.136C266.661 178.719 265.656 178.017 264.27 178.017C263.037 178.017 261.879 178.681 261.177 179.8H261.158V178.13H259.621V187.372ZM276.411 191.129H277.948V185.778H277.967C278.65 186.841 279.789 187.486 281.25 187.486C283.793 187.486 285.748 185.626 285.748 182.818C285.748 180.085 283.869 178.017 281.25 178.017C279.846 178.017 278.669 178.662 277.967 179.762H277.948V178.13H276.411V191.129ZM281.041 186.082C279.276 186.082 277.872 184.772 277.872 182.818C277.872 180.92 279.144 179.421 281.022 179.421C282.768 179.421 284.191 180.768 284.191 182.818C284.191 184.677 282.901 186.082 281.041 186.082ZM292.261 187.486C294.994 187.486 297.025 185.569 297.025 182.761C297.025 179.952 294.994 178.017 292.261 178.017C289.396 178.017 287.479 180.104 287.479 182.761C287.479 185.417 289.396 187.486 292.261 187.486ZM292.261 186.082C290.345 186.082 289.054 184.601 289.054 182.761C289.054 180.92 290.326 179.421 292.261 179.421C294.045 179.421 295.45 180.787 295.45 182.761C295.45 184.734 294.026 186.082 292.261 186.082ZM299.317 187.372H300.854V182.761C300.854 180.673 301.992 179.421 303.738 179.421C305.085 179.421 306.015 180.161 306.015 182.324V187.372H307.552V181.888C307.552 179.25 306.224 178.017 304.231 178.017C302.808 178.017 301.594 178.681 300.873 179.8H300.854V178.13H299.317V187.372ZM318.467 182.59C318.467 179.952 316.74 178.017 314.217 178.017C311.579 178.017 309.662 179.971 309.662 182.761C309.662 185.588 311.598 187.486 314.33 187.486C316.19 187.486 317.348 186.784 318.145 185.759L317.063 184.848C316.494 185.55 315.621 186.082 314.387 186.082C312.641 186.082 311.427 184.943 311.218 183.216H318.429C318.429 183.102 318.467 182.837 318.467 182.59ZM314.198 179.421C315.716 179.421 316.702 180.446 316.93 181.964H311.256C311.541 180.389 312.717 179.421 314.198 179.421ZM320.721 187.372H322.258V182.761C322.258 180.673 323.397 179.421 325.143 179.421C326.49 179.421 327.42 180.161 327.42 182.324V187.372H328.957V181.888C328.957 179.25 327.628 178.017 325.636 178.017C324.213 178.017 322.998 178.681 322.277 179.8H322.258V178.13H320.721V187.372ZM334.255 187.486C335.355 187.486 335.981 187.22 336.494 186.917L336.095 185.569C335.64 185.816 335.071 186.044 334.52 186.044C333.647 186.044 333.401 185.512 333.401 184.393V179.459H336.456V178.13H333.401V174.809L331.864 174.98V178.13H330.668V179.459H331.864V184.62C331.864 186.48 332.623 187.486 334.255 187.486Z" fill="#4E46B4"/><path d="M57.209 203.093C56.7244 203.093 56.2652 202.997 55.8473 202.823L54.9387 205.015C55.6395 205.305 56.4071 205.465 57.209 205.465V203.093ZM53.9204 200.897C53.7471 200.479 53.6509 200.02 53.6509 199.535H51.2788C51.2788 200.337 51.4386 201.104 51.7292 201.805L53.9204 200.897ZM53.6509 199.535V195.384H51.2788V199.535H53.6509ZM53.6509 187.081V178.779H51.2788V187.081H53.6509ZM53.6509 170.477V162.174H51.2788V170.477H53.6509ZM53.6509 153.872V145.57H51.2788V153.872H53.6509ZM53.6509 137.267V133.116H51.2788V137.267H53.6509ZM53.6509 133.116C53.6509 132.632 53.7471 132.172 53.9204 131.755L51.7293 130.846C51.4386 131.547 51.2788 132.314 51.2788 133.116H53.6509ZM55.8473 129.828C56.2652 129.654 56.7244 129.558 57.209 129.558V127.186C56.4071 127.186 55.6396 127.346 54.9387 127.636L55.8473 129.828ZM57.209 129.558H61.9532V127.186H57.209V129.558ZM71.4416 129.558H80.93V127.186H71.4416V129.558ZM90.4183 129.558H99.9067V127.186H90.4183V129.558ZM109.395 129.558H118.883V127.186H109.395V129.558ZM128.372 129.558H137.86V127.186H128.372V129.558ZM147.349 129.558H156.837V127.186H147.349V129.558ZM166.325 129.558H175.814V127.186H166.325V129.558ZM185.302 129.558H194.79V127.186H185.302V129.558ZM204.279 129.558H213.767V127.186H204.279V129.558ZM223.256 129.558H232.744V127.186H223.256V129.558ZM242.232 129.558H251.721V127.186H242.232V129.558ZM261.209 129.558H270.697V127.186H261.209V129.558ZM280.186 129.558H289.674V127.186H280.186V129.558ZM299.163 129.558H308.651V127.186H299.163V129.558ZM318.139 129.558H327.628V127.186H318.139V129.558ZM337.116 129.558H346.604V127.186H337.116V129.558ZM356.093 129.558H365.581V127.186H356.093V129.558ZM375.069 129.558H384.558V127.186H375.069V129.558ZM394.046 129.558H403.535V127.186H394.046V129.558ZM413.023 129.558H422.511V127.186H413.023V129.558ZM432 129.558H441.488V127.186H432V129.558ZM450.977 129.558H460.465V127.186H450.977V129.558ZM469.953 129.558H474.697V127.186H469.953V129.558ZM474.697 129.558C475.182 129.558 475.641 129.654 476.059 129.828L476.968 127.636C476.267 127.346 475.499 127.186 474.697 127.186V129.558ZM477.986 131.755C478.159 132.172 478.256 132.632 478.256 133.116H480.628C480.628 132.314 480.468 131.547 480.177 130.846L477.986 131.755ZM478.256 133.116V137.267H480.628V133.116H478.256ZM478.256 145.57V153.872H480.628V145.57H478.256ZM478.256 162.174V170.477H480.628V162.174H478.256ZM478.256 178.779V187.081H480.628V178.779H478.256ZM478.256 195.384V199.535H480.628V195.384H478.256ZM478.256 199.535C478.256 200.02 478.159 200.479 477.986 200.897L480.177 201.805C480.468 201.104 480.628 200.337 480.628 199.535H478.256ZM476.059 202.823C475.641 202.997 475.182 203.093 474.697 203.093V205.465C475.499 205.465 476.267 205.305 476.968 205.015L476.059 202.823ZM474.697 203.093H469.953V205.465H474.697V203.093ZM460.465 203.093H450.976V205.465H460.465V203.093ZM441.488 203.093H432V205.465H441.488V203.093ZM422.511 203.093H413.023V205.465H422.511V203.093ZM403.535 203.093H394.046V205.465H403.535V203.093ZM384.558 203.093H375.069V205.465H384.558V203.093ZM365.581 203.093H356.093V205.465H365.581V203.093ZM346.604 203.093H337.116V205.465H346.604V203.093ZM327.628 203.093H318.139V205.465H327.628V203.093ZM308.651 203.093H299.162V205.465H308.651V203.093ZM289.674 203.093H280.186V205.465H289.674V203.093ZM270.697 203.093H261.209V205.465H270.697V203.093ZM251.721 203.093H242.232V205.465H251.721V203.093ZM232.744 203.093H223.255V205.465H232.744V203.093ZM213.767 203.093H204.279V205.465H213.767V203.093ZM194.79 203.093H185.302V205.465H194.79V203.093ZM175.814 203.093H166.325V205.465H175.814V203.093ZM156.837 203.093H147.349V205.465H156.837V203.093ZM137.86 203.093H128.372V205.465H137.86V203.093ZM118.883 203.093H109.395V205.465H118.883V203.093ZM99.9066 203.093H90.4183V205.465H99.9066V203.093ZM80.9299 203.093H71.4415V205.465H80.9299V203.093ZM61.9531 203.093H57.209V205.465H61.9531V203.093ZM57.209 201.907C56.883 201.907 56.578 201.843 56.3016 201.728L54.4844 206.11C55.3267 206.46 56.2485 206.651 57.209 206.651V201.907ZM55.016 200.442C54.9014 200.166 54.8369 199.861 54.8369 199.535H50.0928C50.0928 200.495 50.2844 201.417 50.6337 202.26L55.016 200.442ZM54.8369 199.535V195.384H50.0928V199.535H54.8369ZM54.8369 187.081V178.779H50.0928V187.081H54.8369ZM54.8369 170.477V162.174H50.0928V170.477H54.8369ZM54.8369 153.872V145.57H50.0928V153.872H54.8369ZM54.8369 137.267V133.116H50.0928V137.267H54.8369ZM54.8369 133.116C54.8369 132.79 54.9014 132.485 55.016 132.209L50.6337 130.392C50.2844 131.234 50.0928 132.156 50.0928 133.116H54.8369ZM56.3017 130.923C56.578 130.809 56.883 130.744 57.209 130.744V126C56.2485 126 55.3267 126.192 54.4844 126.541L56.3017 130.923ZM57.209 130.744H61.9532V126H57.209V130.744ZM71.4416 130.744H80.93V126H71.4416V130.744ZM90.4183 130.744H99.9067V126H90.4183V130.744ZM109.395 130.744H118.883V126H109.395V130.744ZM128.372 130.744H137.86V126H128.372V130.744ZM147.349 130.744H156.837V126H147.349V130.744ZM166.325 130.744H175.814V126H166.325V130.744ZM185.302 130.744H194.79V126H185.302V130.744ZM204.279 130.744H213.767V126H204.279V130.744ZM223.256 130.744H232.744V126H223.256V130.744ZM242.232 130.744H251.721V126H242.232V130.744ZM261.209 130.744H270.697V126H261.209V130.744ZM280.186 130.744H289.674V126H280.186V130.744ZM299.163 130.744H308.651V126H299.163V130.744ZM318.139 130.744H327.628V126H318.139V130.744ZM337.116 130.744H346.604V126H337.116V130.744ZM356.093 130.744H365.581V126H356.093V130.744ZM375.069 130.744H384.558V126H375.069V130.744ZM394.046 130.744H403.535V126H394.046V130.744ZM413.023 130.744H422.511V126H413.023V130.744ZM432 130.744H441.488V126H432V130.744ZM450.977 130.744H460.465V126H450.977V130.744ZM469.953 130.744H474.697V126H469.953V130.744ZM474.697 130.744C475.023 130.744 475.328 130.809 475.605 130.923L477.422 126.541C476.58 126.192 475.658 126 474.697 126V130.744ZM476.89 132.209C477.005 132.485 477.069 132.79 477.069 133.116H481.814C481.814 132.156 481.622 131.234 481.273 130.392L476.89 132.209ZM477.069 133.116V137.267H481.814V133.116H477.069ZM477.069 145.57V153.872H481.814V145.57H477.069ZM477.069 162.174V170.477H481.814V162.174H477.069ZM477.069 178.779V187.081H481.814V178.779H477.069ZM477.069 195.384V199.535H481.814V195.384H477.069ZM477.069 199.535C477.069 199.861 477.005 200.166 476.89 200.442L481.273 202.26C481.622 201.417 481.814 200.495 481.814 199.535H477.069ZM475.605 201.728C475.328 201.843 475.023 201.907 474.697 201.907V206.651C475.658 206.651 476.58 206.46 477.422 206.11L475.605 201.728ZM474.697 201.907H469.953V206.651H474.697V201.907ZM460.465 201.907H450.976V206.651H460.465V201.907ZM441.488 201.907H432V206.651H441.488V201.907ZM422.511 201.907H413.023V206.651H422.511V201.907ZM403.535 201.907H394.046V206.651H403.535V201.907ZM384.558 201.907H375.069V206.651H384.558V201.907ZM365.581 201.907H356.093V206.651H365.581V201.907ZM346.604 201.907H337.116V206.651H346.604V201.907ZM327.628 201.907H318.139V206.651H327.628V201.907ZM308.651 201.907H299.162V206.651H308.651V201.907ZM289.674 201.907H280.186V206.651H289.674V201.907ZM270.697 201.907H261.209V206.651H270.697V201.907ZM251.721 201.907H242.232V206.651H251.721V201.907ZM232.744 201.907H223.255V206.651H232.744V201.907ZM213.767 201.907H204.279V206.651H213.767V201.907ZM194.79 201.907H185.302V206.651H194.79V201.907ZM175.814 201.907H166.325V206.651H175.814V201.907ZM156.837 201.907H147.349V206.651H156.837V201.907ZM137.86 201.907H128.372V206.651H137.86V201.907ZM118.883 201.907H109.395V206.651H118.883V201.907ZM99.9066 201.907H90.4183V206.651H99.9066V201.907ZM80.9299 201.907H71.4415V206.651H80.9299V201.907ZM61.9531 201.907H57.209V206.651H61.9531V201.907Z" fill="#EEEDF8"/></g><defs><filter id="filter0_ddd" x="0" y="0" width="531.907" height="288.744" filterUnits="userSpaceOnUse" colorInterpolation-filters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset/><feGaussianBlur stdDeviation="0.5"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feMorphology radius="8" operator="erode" in="SourceAlpha" result="effect2_dropShadow"/><feOffset/><feGaussianBlur stdDeviation="16"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"/><feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feMorphology radius="8" operator="erode" in="SourceAlpha" result="effect3_dropShadow"/><feOffset dy="32"/><feGaussianBlur stdDeviation="16"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"/><feBlend mode="normal" in2="effect2_dropShadow" result="effect3_dropShadow"/><feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow" result="shape"/></filter></defs>
      </svg>
  )
}
export default Popover