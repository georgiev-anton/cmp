import React, { memo } from "react";

const CustomLastDot = memo(({ cx, cy, payload, ico_info }) => {
  if (
    ico_info &&
    ico_info.dates[ico_info.dates.length - 1].date !== payload.date
  ) {
    return "";
  }

  return (
    <>
      <svg
        x={cx - 114}
        y={cy - 270}
        width="229"
        height="198"
        viewBox="0 0 229 198"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M41 51C29.402 51 20 60.402 20 72V119.167C20 130.765 29.402 140.167 41 140.167H99.4909L114 158L128.509 140.167H188C199.598 140.167 209 130.765 209 119.167V72C209 60.402 199.598 51 188 51H41Z"
            fill="#3B3B3B"
          />
        </g>
        <g filter="url(#filter1_d)">
          <path
            d="M36 17.5C36 7.83502 43.835 0 53.5 0H175.5C185.165 0 193 7.83502 193 17.5V17.5C193 27.165 185.165 35 175.5 35H53.5C43.835 35 36 27.165 36 17.5V17.5Z"
            fill="#3B3B3B"
          />
        </g>
        <text
          width="30px"
          className="custom-dot-text"
          x={115}
          y={17}
          dy={-4}
          fill="white"
          textAnchor="middle"
          wordSpacing={2}
        >
          Продано CMP
        </text>
        <text
          className="custom-dot-text"
          x={115}
          y={34}
          dy={-4}
          fill="white"
          fontSize={10}
          textAnchor="middle"
        >
          {ico_info ? ico_info.selled_coins : "0"}
        </text>
        <text
          className="custom-dot-text"
          x={115}
          y={75}
          dy={-4}
          fill="white"
          fontSize={10}
          textAnchor="middle"
        >
          Сбор в USDT
        </text>
        <text
          className="custom-dot-text-sbor"
          x={115}
          y={110}
          dy={-4}
          fill="white"
          fontSize={10}
          textAnchor="middle"
        >
          170.91 USD
        </text>
        <text
          className="custom-dot-text"
          x={115}
          y={135}
          dy={-4}
          fill="white"
          fontSize={10}
          textAnchor="middle"
        >
          Commit Phase
        </text>

        <defs>
          <filter
            id="filter0_d"
            x="0"
            y="51"
            width="229"
            height="147"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="20" />
            <feGaussianBlur stdDeviation="10" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
          <filter
            id="filter1_d"
            x="16"
            y="0"
            width="197"
            height="75"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="20" />
            <feGaussianBlur stdDeviation="10" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </>
  );
});

export default CustomLastDot;