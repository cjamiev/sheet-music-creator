import React from 'react';

const ModifierIcon = ({
  showAccent,
  showFermata,
  showGraceNote,
  showNoteFlat,
  showNoteNatural,
  showNoteSharp,
  showRolled,
  showTenuto,
  showTrill
}) => {
  return (
    <g>
      {showAccent && <g
        data-testid="accent"
        transform="matrix(2.2245103,0,0,2.2245103,-166.66257,-90.441184)"
        //style="fill:#000000;stroke:#000000"
      >
        <path
          //style="fill:#000000;stroke:#000000;stroke-width:0.656167;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
          d="m 80.384644,47.2925 11.97583,5.22465"
        />
        <path
          //style="fill:#000000;stroke:#000000;stroke-width:0.656167;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
          d="M 80.384644,57.80885 92.360474,52.5842"
        />
        <path
          //style="fill:#000000;stroke:#000000;stroke-width:0.656167;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none"
          sides="3"
          cx="93.453613"
          cy="52.431381"
          r1="0.43114451"
          r2="0.0043114452"
          arg1="0.98805683"
          arg2="2.0352544"
          flatsided="true"
          rounded="9.1940344e-17"
          randomized="0"
          transform-center-x="-0.065956492"
          transform-center-y="-0.0023239237"
          transform="matrix(0.30347626,0.37790863,-0.5664694,0.17728172,94.017915,7.9363959)"
          d="M 93.690878,52.791369 93.023223,52.456865 93.646739,52.04591 Z"
        />
      </g>}
      {showFermata && <g
        data-testid="fermata"
        transform="matrix(2.0621214,0,0,2.0621214,-350.21288,-335.54034)">
        <path
          //style="fill:#000000;stroke:#000000;stroke-width:0.0611274px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
          d="m 174.21272,179.75685 c 0,0 1.29878,-8.3831 8.64814,-8.42082 7.1648,-0.0368 8.22875,6.96542 8.25268,8.23439 0.024,1.27127 -0.45058,-6.37202 -8.2917,-6.29429 -8.18967,0.0812 -8.40343,6.58357 -8.60912,6.48072 z"
        />
        <path
          //style="fill:#000000;stroke:#000000;stroke-width:0.365567;stroke-linecap:round;stroke-linejoin:round"
          type="arc"
          cx="172.10721"
          cy="188.28404"
          rx="0.87554854"
          ry="0.83385581"
          start="0"
          end="6.2465858"
          arc-type="slice"
          transform="rotate(-3.3018566)"
          d="m 172.98276,188.28404 a 0.87554854,0.83385581 0 0 1 -0.86754,0.83382 0.87554854,0.83385581 0 0 1 -0.88341,-0.81856 0.87554854,0.83385581 0 0 1 0.85137,-0.8488 0.87554854,0.83385581 0 0 1 0.89899,0.80303 l -0.87496,0.0305 z"
        />
      </g>}
      {showRolled && <g
        data-testid="rolled"
        transform="matrix(1.3934153,0,0,1.3934153,-450.00124,-281.06957)"
      >
        <path
          //style="fill:#000000;stroke:#000000;stroke-width:0.489989px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
          d="m 340.12282,224.60846 c 0,0 2.48553,3.32792 1.58274,5.59509 -0.62851,1.57834 -2.19852,1.67851 -2.70356,3.57022 -0.38904,1.45699 3.49815,4.63442 3.49815,4.63442 l -0.71961,-1.56769 c 0.0206,0.0539 -1.09795,-2.85781 2.9754,-5.81943 0.99653,-0.72454 -3.38773,-5.82792 -4.63306,-6.41261 z"
        />
        <path
          //style="fill:#000000;stroke:#000000;stroke-width:0.489989px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
          d="m 340.12282,213.82862 c 0,0 2.48553,3.32792 1.58274,5.59509 -0.62851,1.57834 -2.19852,1.67851 -2.70356,3.57022 -0.38904,1.45699 3.49815,4.63442 3.49815,4.63442 l -0.71961,-1.5677 c 0.0206,0.0539 -1.09795,-2.8578 2.9754,-5.81943 0.99653,-0.72453 -3.38773,-5.82791 -4.63306,-6.4126 z"
        />
        <path
          //style="fill:#000000;stroke:#000000;stroke-width:0.489989px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
          d="m 340.12282,203.04877 c 0,0 2.48553,3.32792 1.58274,5.59509 -0.62851,1.57835 -2.19852,1.67852 -2.70356,3.57023 -0.38904,1.45698 3.49815,4.63441 3.49815,4.63441 l -0.71961,-1.56769 c 0.0206,0.0539 -1.09795,-2.85781 2.9754,-5.81943 0.99653,-0.72453 -3.38773,-5.82792 -4.63306,-6.41261 z"
        />
      </g>}
      {showNoteFlat && <g
        data-testid="note-flat"
        transform="matrix(2.595187,0,0,2.595187,-738.69555,-217.66449)"
        //style="stroke:#000000"
      >
        <rect
          //style="fill:#000000;stroke:#000000;stroke-width:0;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none"
          width="0.4383156"
          height="14.251248"
          x="292.65439"
          y="86.800064"
        />
        <path
          //style="fill:#000000;stroke:#000000;stroke-width:0.287221;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
          d="m 293.20964,95.936626 c 0,0 1.81656,-1.65509 2.90649,-1.211043 0.92332,0.37617 0.76699,1.574343 0.76699,1.574343 -0.0879,2.141493 -4.08401,5.459224 -4.09633,4.806244 -0.0807,-4.279 0.44838,-5.131254 0.42285,-5.169544 z"
        />
        <path
          //style="fill:#ffffff;stroke:#000000;stroke-width:0;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
          d="m 293.06776,96.462211 c 0,0 1.4833,-1.29179 2.03825,-1.019629 0.55497,0.272162 0.31633,1.850919 0.31633,1.850919 -0.0525,1.604202 -2.31528,3.926209 -2.32264,3.437059 -0.0483,-3.205425 -0.0167,-4.68211 -0.0319,-4.268349 z"
        />
      </g>}
      {showGraceNote && <g
        data-testid="grace-note"
        transform="matrix(3.7788571,0,0,3.7788571,-3129.6279,-997.21098)">
        <g
          data-testid="element-grace-note"
          transform="translate(44.451512,-0.10207113)"
        >
          <rect
            //style="fill:#000000;stroke:#1a1a1a;stroke-width:0;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none"
            width="0.2159626"
            height="6.2962098"
            x="789.01129"
            y="265.1727"
          />
          <ellipse
            //style="fill:#000000;stroke:#1a1a1a;stroke-width:0;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none"
            cx="692.81122"
            cy="521.70508"
            rx="1.5859085"
            ry="1.0218173"
            transform="matrix(0.94215293,-0.33518331,0.25876348,0.96594071,0,0)"
          />
          <path
            //style="fill:#000000;stroke:#000000;stroke-width:0.0431925px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
            d="m 789.22724,265.1727 c 0,0 -0.15673,1.31091 1.49252,1.90647 1.64925,0.59557 0.36242,3.73702 0.33188,3.69121 -0.0306,-0.0458 0.96511,-2.70713 -0.5304,-3.21781 -1.44332,-0.49285 -1.33237,-0.4303 -1.33237,-0.4303 l 0.0384,-1.94957"
          />
          <rect
            //style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.446634;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none"
            data-testid="grace-note-slash"
            width="5.1266527"
            height="0.286024"
            x="-1423.6665"
            y="2025.2115"
            transform="matrix(0.81428481,-0.58046554,0.96145749,-0.27495361,0,0)"
          />
        </g>
        <path
          //style="fill:none;stroke:#000000;stroke-width:0.247926px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
          d="m 831.68786,273.40961 c 0,0 0.93244,4.88317 7.45471,3.41747"
          data-testid="condition-grace-note-bottom-slur"
        />
        <path
          //style="fill:none;stroke:#000000;stroke-width:0.2018px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
          d="m 839.62561,268.17793 c 0,0 -0.56665,-4.4763 -5.3372,-3.32604"
          data-testid="condition-grace-note-upper-slur"
        />
      </g>}
      {showNoteNatural && <g
        data-testid="note-natural"
        transform="matrix(1.3548244,0,0,1.7549311,-62.006725,-285.62058)"
      >
        <rect
          //style="fill:#000000;stroke:#000000;stroke-width:0;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none"
          width="0.7267859"
          height="18.201654"
          x="61.165066"
          y="166.01704"
        />
        <rect
          //style="fill:#000000;stroke:#000000;stroke-width:0;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none"
          width="7.9662356"
          height="2.2366626"
          x="36.048428"
          y="192.58131"
          transform="matrix(0.97014993,-0.24250592,0.13683522,0.99059382,0,0)"
        />
        <rect
          //style="fill:#000000;stroke:#000000;stroke-width:0;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none"
          width="0.7267859"
          height="18.201654"
          x="68.700806"
          y="171.44075"
        />
        <rect
          //style="fill:#000000;stroke:#000000;stroke-width:0;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none"
          width="7.9662356"
          height="2.2366626"
          x="37.248775"
          y="184.07086"
          transform="matrix(0.97014993,-0.24250592,0.13683522,0.99059382,0,0)"
        />
      </g>}
      {showNoteSharp && <g
        data-testid="note-sharp"
        //style="fill:#000000;stroke:#000000"
        transform="matrix(1.7060783,0,0,3.0696148,-175.0232,-289.07899)"
      >
        <rect
          //style="fill:#000000;stroke:#000000;stroke-width:0;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none"
          width="0.50682449"
          height="12.692932"
          x="116.30758"
          y="96.447319"
        />
        <rect
          //style="fill:#000000;stroke:#000000;stroke-width:0;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none"
          width="0.50682449"
          height="12.692932"
          x="119.34854"
          y="96.447319"
        />
        <rect
          //style="fill:#000000;stroke:#000000;stroke-width:0;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none"
          width="6.571476"
          height="1.8450588"
          x="100.60621"
          y="125.54735"
          transform="matrix(0.97014993,-0.24250592,0.13683521,0.99059382,0,0)"
        />
        <rect
          //style="fill:#000000;stroke:#000000;stroke-width:0;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none"
          width="6.571476"
          height="1.8450588"
          x="99.805077"
          y="131.22731"
          transform="matrix(0.97014993,-0.24250592,0.13683521,0.99059382,0,0)"
        />
      </g>}
      {showTrill && <text
        //style="font-style:normal;font-weight:normal;font-size:44.0406px;line-height:1.25;font-family:sans-serif;fill:#000000;fill-opacity:1;stroke:none;stroke-width:6.55291;stroke-miterlimit:4;stroke-dasharray:none"
        x="18.260199"
        y="34.693336"
        data-testid="trill"
        transform="scale(0.87702874,1.1402135)">
        <tspan
          x="18.260199"
          y="34.693336"
          //style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:44.0406px;font-family:Gabriola;-inkscape-font-specification:'Gabriola, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;stroke-width:6.55291;stroke-miterlimit:4;stroke-dasharray:none"
        >
          tr
        </tspan>
      </text>}
      {showTenuto && <rect
        //style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:1.96685;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none"
        data-testid="tenuto"
        width="24.131603"
        height="0.94070297"
        x="14.392532"
        y="25.987982"
      />}
    </g>
  );
};

export default ModifierIcon;