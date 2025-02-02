import React from 'react';
import PropTypes from 'prop-types';

const IconLogo = props => {
  const { className, ...rest } = props;

  return (
    <svg
      className={className}
      {...rest}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Artboard" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Group" transform="translate(1.000000, 3.000000)">
          <ellipse
            id="Oval"
            fill="#FFBA37"
            fillRule="nonzero"
            cx="14.0625"
            cy="13.125"
            rx="12.1875"
            ry="11.25"
          ></ellipse>
          <path
            d="M12.1944109,4.30124294 C12.3152755,6.55810616 16.9081303,9.8817729 17.4477045,13.830221 C17.6635341,15.4113003 17.378639,18.4247015 15.5397704,20.4860549 C14.7196178,21.4126014 13.2001771,22.58141 13.5023386,23.6652144 C13.5964059,23.9522694 13.7827641,24.2014013 14.0332795,24.375 C16.8345999,24.3481447 19.5482293,23.4096922 21.7513476,21.7058661 C22.7614303,20.9025758 26.3096696,17.8296716 26.2492373,13.133186 C26.1587956,10.6017236 25.2036951,8.17431949 23.538417,6.24359038 C23.2751048,5.94607545 22.9988429,5.6698116 22.9513604,5.62305925 C21.6811667,4.36059476 20.1602916,3.36950409 18.4836867,2.71166319 C16.888664,2.10496575 15.1852607,1.82302119 13.476439,1.88287161 C13.122921,2.06168686 12.8191417,2.32285914 12.5915375,2.64365978 C12.2923205,3.14407242 12.1538796,3.721917 12.1944109,4.30124294 Z"
            id="Path"
            fill="#D3CADC"
            fillRule="nonzero"
          ></path>
          <circle
            id="Oval"
            fill="#F78C25"
            fillRule="nonzero"
            cx="8.4375"
            cy="13.125"
            r="1"
          ></circle>
          <circle
            id="Oval"
            fill="#5300C6"
            fillRule="nonzero"
            cx="19.6875"
            cy="13.125"
            r="1"
          ></circle>
          <circle
            id="Oval"
            fill="#5300C6"
            fillRule="nonzero"
            cx="18.28125"
            cy="10.78125"
            r="1"
          ></circle>
          <ellipse
            id="Oval"
            fill="#FFFFFF"
            fillRule="nonzero"
            cx="18.75"
            cy="10.3125"
            rx="1"
            ry="1"
          ></ellipse>
          <circle
            id="Oval"
            fill="#F78C25"
            fillRule="nonzero"
            cx="9.84375"
            cy="10.78125"
            r="1"
          ></circle>
          <ellipse
            id="Oval"
            fill="#FFFFFF"
            fillRule="nonzero"
            cx="10.3125"
            cy="10.3125"
            rx="1"
            ry="1"
          ></ellipse>
          <path
            d="M24.341911,25.2637211 L23.8514592,24.9287216 C23.7914727,24.8836554 23.7121386,24.8733398 23.6425631,24.9015595 L23.0930755,25.1098024 C23.0121764,25.141156 22.9204248,25.1237906 22.8566823,25.0650613 C22.7929399,25.0063321 22.7683606,24.9165157 22.793355,24.8336542 L22.9613801,24.2723038 C22.9824568,24.2003904 22.9672192,24.1227531 22.9205092,24.0640609 L22.5526704,23.611359 C22.4969788,23.5447749 22.4843291,23.4523304 22.5200966,23.3733096 C22.5558642,23.2942889 22.6337651,23.2425748 22.7206955,23.2401434 L23.3110541,23.2401434 C23.3868572,23.2393183 23.4570241,23.2000795 23.4972441,23.1360219 L23.8196707,22.6425768 C23.9604485,22.4343339 24.1420973,22.456969 24.2238392,22.692374 L24.4191117,23.2491974 C24.4462571,23.3197393 24.5051483,23.3734144 24.5780544,23.394062 L25.1457069,23.5479807 C25.228952,23.5708294 25.2919938,23.6387672 25.3083709,23.7232776 C25.324748,23.8077881 25.291626,23.8942449 25.2229076,23.9463584 L24.7687856,24.3039929 C24.7107364,24.3500324 24.6772264,24.4201834 24.6779612,24.4941277 L24.7097498,25.0826403 C24.7111082,25.1700346 24.6618698,25.2503991 24.5832542,25.2891002 C24.5046385,25.3278014 24.4106958,25.3179226 24.341911,25.2637211 L24.341911,25.2637211 Z"
            id="Path"
            fill="#5300C6"
            fillRule="nonzero"
          ></path>
          <path
            d="M24.3406715,2.76353213 L23.8495935,2.43199618 C23.7895304,2.3867849 23.710095,2.37643614 23.6404306,2.40474664 L23.0902414,2.61365971 C23.0092389,2.6451142 22.9173701,2.6276929 22.8535463,2.56877466 C22.7897225,2.50985642 22.7651118,2.41975099 22.7901381,2.33662282 L22.9583778,1.76892427 C22.9794929,1.69823646 22.9641656,1.62169159 22.9174546,1.56455279 L22.5491461,1.11039396 C22.4961144,1.04353183 22.4850714,0.952625242 22.5205557,0.875036166 C22.55604,0.79744709 22.6320653,0.746264968 22.7173858,0.742525297 L23.3084983,0.742525297 C23.3843982,0.741697616 23.4546547,0.702332494 23.494926,0.638068764 L23.8177644,0.14303563 C23.958722,-0.0658774351 24.1406027,-0.0431694932 24.222449,0.192993103 L24.4179709,0.751608474 C24.4468508,0.821203686 24.5051358,0.874429251 24.5771165,0.896939302 L25.1454939,1.05135331 C25.2288453,1.07427556 25.2919676,1.14243199 25.3083656,1.2272144 C25.3247636,1.31199681 25.2915993,1.39873186 25.2227932,1.45101308 L24.7680913,1.80979857 C24.7094063,1.85553809 24.6757128,1.92620989 24.6771509,2.00054528 L24.7089801,2.59095177 C24.7068805,2.67698871 24.6562648,2.75444662 24.5782572,2.7909991 C24.5002495,2.82755158 24.4082568,2.81691643 24.3406715,2.76353213 Z"
            id="Path"
            fill="#5300C6"
            fillRule="nonzero"
          ></path>
          <path
            d="M17.8125,14.1757917 C16.6811839,16.6304451 12.0995707,16.4524153 11.25,14.0625"
            id="Path"
            stroke="#F78C25"
            strokeWidth="0.75"
            strokeLinecap="round"
          ></path>
          <path
            d="M29.3516838,14.0435234 L29.0308127,13.8166027 C28.9868578,13.7928724 28.9341119,13.7928724 28.8901569,13.8166027 L28.5209354,13.9589843 C28.4673995,13.9771586 28.4083303,13.964184 28.3670503,13.9251833 C28.3257704,13.8861826 28.3089146,13.8274244 28.3231382,13.7721084 L28.437421,13.3894578 C28.4519149,13.3397947 28.4403068,13.2860777 28.4066526,13.2470762 L28.1605049,12.9400659 C28.1227863,12.8950764 28.1143517,12.8319924 28.1388992,12.7784722 C28.1634467,12.724952 28.2164957,12.6907642 28.2747878,12.6908981 L28.6703822,12.6908981 C28.7201999,12.6881355 28.7658127,12.6617512 28.793456,12.6197072 L29.0088353,12.2860003 C29.1011406,12.1436187 29.219819,12.156967 29.2769604,12.3171463 L29.4088252,12.6953475 C29.4229678,12.7438301 29.4614456,12.7810865 29.5099216,12.7932348 L29.8923295,12.8955716 C29.9468784,12.9129466 29.9874054,12.9595159 29.9975539,13.0164843 C30.0077024,13.0734528 29.9857975,13.1314184 29.94068,13.1669866 L29.6285999,13.4072555 C29.5889999,13.4375387 29.5674442,13.4862146 29.5714585,13.5362889 L29.5714585,13.9367371 C29.5632886,13.9850639 29.5324886,14.0263858 29.4888233,14.0476023 C29.4451581,14.0688188 29.3940431,14.0672985 29.3516838,14.0435234 Z"
            id="Path"
            fill="#5300C6"
            fillRule="nonzero"
          ></path>
          <path
            d="M13.125,25.3125 L13.125,26.25"
            id="Path"
            stroke="#F78C25"
            strokeLinecap="round"
          ></path>
          <path
            d="M9.49071429,24.375 L9.25928571,25.3125"
            id="Path"
            stroke="#F78C25"
            strokeWidth="1.05"
            strokeLinecap="round"
          ></path>
          <path
            d="M6.7875,23.4375 L6.3375,24.375"
            id="Path"
            stroke="#F78C25"
            strokeWidth="1.05"
            strokeLinecap="round"
          ></path>
          <path
            d="M4.6875,21.5625 L3.75,22.5"
            id="Path"
            stroke="#F78C25"
            strokeWidth="1.05"
            strokeLinecap="round"
          ></path>
          <path
            d="M2.8125,18.525 L1.875,18.975"
            id="Path"
            stroke="#F78C25"
            strokeWidth="1.05"
            strokeLinecap="round"
          ></path>
          <path
            d="M1.875,15.8196429 L0.9375,16.0553571"
            id="Path"
            stroke="#F78C25"
            strokeWidth="1.05"
            strokeLinecap="round"
          ></path>
          <path
            d="M0.9375,13.125 L0,13.125"
            id="Path"
            stroke="#F78C25"
            strokeLinecap="round"
          ></path>
          <path
            d="M1.875,9.49071429 L0.9375,9.25928571"
            id="Path"
            stroke="#F78C25"
            strokeWidth="1.05"
            strokeLinecap="round"
          ></path>
          <path
            d="M2.8125,6.7875 L1.875,6.3375"
            id="Path"
            stroke="#F78C25"
            strokeWidth="1.05"
            strokeLinecap="round"
          ></path>
          <path
            d="M4.6875,4.6875 L3.75,3.75"
            id="Path"
            stroke="#F78C25"
            strokeWidth="1.05"
            strokeLinecap="round"
          ></path>
          <path
            d="M6.7875,2.8125 L6.3375,1.875"
            id="Path"
            stroke="#F78C25"
            strokeWidth="1.05"
            strokeLinecap="round"
          ></path>
          <path
            d="M9.49071429,1.875 L9.25928571,0.9375"
            id="Path"
            stroke="#F78C25"
            strokeWidth="1.05"
            strokeLinecap="round"
          ></path>
          <path
            d="M13.125,0.9375 L13.125,0"
            id="Path"
            stroke="#F78C25"
            strokeLinecap="round"
          ></path>
        </g>
      </g>
    </svg>
  );
};

const { string } = PropTypes;

IconLogo.defaultProps = {
  className: null,
};

IconLogo.propTypes = {
  className: string,
};

export default IconLogo;
