import React from 'react';

const MeasureIcon = ({
  showRepeatBarStart,
  showRepeatBarEnd,
  showMeasureEnd
}) => {
  return (
    <g>
      <g
        id="staff">
        <rect
          width="27.192894"
          height="0.073101997"
          x="198.7715"
          y="34.872143" />
        <rect
          width="27.192894"
          height="0.07310199"
          x="198.7715"
          y="39.899235" />
        <rect
          width="27.192894"
          height="0.07310199"
          x="198.7715"
          y="44.926311" />
        <rect
          width="27.192894"
          height="0.07310199"
          x="198.7715"
          y="49.953365" />
        <rect
          width="27.192894"
          height="0.073101684"
          x="198.76918"
          y="54.980465" />
      </g>
      {showRepeatBarStart && <g
        data-testid="repeat-bar-start"
        transform="matrix(1.8471628,0,0,1.8471628,-70.380038,-279.55505)"
      >
        <g
          data-testid="element-repeat-bar-start"
          transform="matrix(1,0,0,0.26264656,-159.94138,122.11752)"
          //style="stroke:#000000"
        >
          <rect
            //style="fill:#000000;stroke:#000000;stroke-width:0;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none"
            width="1.0516512"
            height="78.978127"
            x="-199.53009"
            y="126.27064"
            transform="scale(-1,1)"
          />
          <rect
            //style="fill:#000000;stroke:#000000;stroke-width:0;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none"
            width="0.44599354"
            height="78.978127"
            x="-200.84798"
            y="126.27064"
            transform="scale(-1,1)"
          />
        </g>
        <g
          data-testid="element-repeat-start-dots"
          //style="stroke:#000000"
          transform="translate(-159.94132,29.011438)"
        >
          <ellipse
            //style="opacity:0.998;fill:#000000;fill-opacity:0.995413;stroke:#000000;stroke-width:0;stroke-linecap:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
            cx="-202.67708"
            cy="133.7086"
            rx="1.0583327"
            ry="1.0583323"
            transform="scale(-1,1)"
          />
          <ellipse
            //style="opacity:0.998;fill:#000000;fill-opacity:0.995413;stroke:#000000;stroke-width:0;stroke-linecap:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
            cx="-202.67708"
            cy="138.45671"
            rx="1.0583327"
            ry="1.0583323"
            transform="scale(-1,1)"
          />
        </g>
      </g>}
      {showRepeatBarEnd && <g
        data-testid="repeat-bar-end"
        transform="matrix(-1.8471628,0,0,1.8471628,123.29671,-279.55505)"
      >
        <g
          data-testid="element-repeat-bar-end"
          transform="matrix(1,0,0,0.26264656,-159.94138,122.11752)"
          //style="stroke:#000000"
        >
          <rect
            //style="fill:#000000;stroke:#000000;stroke-width:0;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none"
            width="1.0516512"
            height="78.978127"
            x="-199.53009"
            y="126.27064"
            transform="scale(-1,1)"
          />
          <rect
            //style="fill:#000000;stroke:#000000;stroke-width:0;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none"
            width="0.44599354"
            height="78.978127"
            x="-200.84798"
            y="126.27064"
            transform="scale(-1,1)"
          />
        </g>
        <g
          data-testid="element-repeat-end-dots"
          //style="stroke:#000000"
          transform="translate(-159.94132,29.011438)"
        >
          <ellipse
            //style="opacity:0.998;fill:#000000;fill-opacity:0.995413;stroke:#000000;stroke-width:0;stroke-linecap:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
            cx="-202.67708"
            cy="133.7086"
            rx="1.0583327"
            ry="1.0583323"
            transform="scale(-1,1)"
          />
          <ellipse
            //style="opacity:0.998;fill:#000000;fill-opacity:0.995413;stroke:#000000;stroke-width:0;stroke-linecap:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
            cx="-202.67708"
            cy="138.45671"
            rx="1.0583327"
            ry="1.0583323"
            transform="scale(-1,1)"
          />
        </g>
      </g>}
      {showMeasureEnd && <g
        data-testid="measure-end"
        transform="matrix(1.8471628,0,0,1.8471628,-365.81976,-576.87182)"
      >
        <rect
          //style="fill:#000000;stroke:#000000;stroke-width:0;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none"
          data-testid="element-measure-end"
          width="0.54693741"
          height="20.796249"
          x="225.71387"
          y="316.2272"
        />
      </g>}
    </g>
  );
};

export default MeasureIcon;