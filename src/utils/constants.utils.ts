import opportunity from "./../assets/opportunity.svg";
import howitworks from "./../assets/howitworks.svg";
import about from "./../assets/about.svg";

import taxbenefits from "./../assets/taxbenefits.svg";
import diversify from "./../assets/diversify.svg";
import landinvestment from "./../assets/landinvestment.svg";
import plots from "./../assets/plots.svg";

import createaccount from "./../assets/createaccount.svg";
import discoveropportunity from "./../assets/discoveropportunity.svg";
import flexibility from "./../assets/flexibility.svg";

const HEADERTABS = [
  {
    name: "Opportunities",
    img: opportunity,
  },
  {
    name: "How it Works",
    img: howitworks,
  },
  {
    name: "About Us",
    img: about,
  },
];

const CARDDETAILS = [
  {
    title: "The demand for land investments has never been higher.",
    description:
      "As a collateral impact of Covid-19, weekend homes or a place to escape the bustle of the city are expanding rapidly.",
    img: diversify,
  },
  {
    title: "Unlock Tax Benefits with Smart Agricultural Land Investments.",
    description:
      "Gains from selling agricultural land in rural India is subject to tax exemption. Now is the time to seize the opportunity to invest in rural agricultural land and reap the benefits of tax advantages.",
    img: taxbenefits,
  },
  {
    title:
      "Prime Land Investment is Your Time-Tested Path to Enduring Prosperity",
    description:
      "Seize the moment with a strategic investment choice — prime land. Historically valued for its enduring worth, land investment beckons as a cornerstone of prosperity.",
    img: landinvestment,
  },
  {
    title: "Own plots along the thriving Delhi-Bombay Expressway",
    description:
      "The Delhi NCR & Sohna have established themselves as crucial real estate markets. The Delhi-Mumbai Expressway is expected to provide a solid push to real estate development in areas towards Rajasthan, boosting demand for land, residential & commercial properties.",
    img: plots,
  },
];

const HOWTOINVEST = [
  {
    question: "Create a Account",
    description:
      "Investing in private markets facilitates portfolio diversification, mitigating risks associated with public markets",
    img: createaccount,
    show: false,
    id: 1,
  },
  {
    question: "Discover Opportunities",
    description:
      "Investing in private markets facilitates portfolio diversification, mitigating risks associated with public markets",
    img: discoveropportunity,
    show: false,
    id: 2,
  },
  {
    question: "Invest with Flexibility",
    description:
      "Investing in private markets facilitates portfolio diversification, mitigating risks associated with public markets",
    img: flexibility,
    show: false,
    id: 3,
  },
];

export { HEADERTABS, CARDDETAILS, HOWTOINVEST };
