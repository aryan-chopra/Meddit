// import React, { useContext } from "react";
// import CommunityPageMessage from "./CommunityPageMessage";
// import AnnouncementBlock from "./AnnouncementBlock";
// import UserContext from "../contexts/UserContext";

// function CommunityPageHeader() {
//   const {community,communityMiddle} = useContext(UserContext);
//   return (
//     <div className="mainn my-8 pb-7 mx-2 rounded-2xl bg-[#ebfbf9]">
//       <div className="inter-div w-full h-screen grid grid-rows-12 grid-cols-12 rounded-2xl bg-[#ebfbf9]">
//         <div className=" w-full h-full row-start-1 row-end-4 col-start-1 col-end-13 grid grid-rows-12 grid-cols-12 ">
//           <div className=" rounded-sm row-start-1 row-end-8 col-start-1 col-end-13">
//             <img
//               src="https://styles.redditmedia.com/t5_2r0ij/styles/bannerBackgroundImage_6gx1wewyz5x11.jpg?format=pjpg&s=5ac36526be277cd24336998655b70f621ce4e9bc"
//               alt="community-banner"
//               className="w-full h-full"
//             />
//           </div>
//           <div className="name-btn-img-div row-start-8 row-end-13 col-start-1 col-end-13 flex flex-row flex-wrap justify-between items-center mx-7 px-4 border-b-2 border-white bg-[#ebfbf9]">
//             <div className="post-name-div flex flex-row gap-3 flex-wrap">
//               <img
//                 src={community.commImg || communityMiddle.commImg}
//                 srcset=""
//                 sizes=""
//                 alt="r/announcements icon"
//                 className="w-14 h-14 rounded-full"
//               />
//               <div className="community-name flex flex-col  flex-wrap justify-center place-items-end">
//                 <p className="text-2xl">{communityMiddle.commName || community.commName}</p>
//               </div>
//             </div>
//             <div className="community-btn-div flex flex-row flex-wrap justify-between items-end gap-5 ">
//               <button className="bg-transparent rounded-3xl border border-slate-600 px-4 py-2 text-sm">
//                 <span>Create a Post</span>
//               </button>
//               <button className="bg-transparent rounded-3xl border border-slate-600 px-4 py-2 text-sm">
//                   <span>bell-icon</span>
//               </button>
//               <button className="bg-transparent rounded-3xl border border-slate-600 px-4 py-2 text-sm">
//                 <span className="text-sm">Join</span>
//               </button>
//             </div>
//           </div>
//         </div>
//         <div className="bg-[#ebfbf9] w-full h-full row-start-4 row-end-13 col-start-1 col-end-13 grid grid-row-12 grid-cols-12 mt-2">
//           <div className="community-message-col row-start-1 row-end-13 col-start-1 col-end-13 rounded-md pt-4 px-2 pb-4 mb-7 overflow-y-scroll hide-scrollbar">
//             <CommunityPageMessage commName={communityMiddle.commName || community.commName} commImg={community.commImg || communityMiddle.commImg}/>
//             <CommunityPageMessage commName={communityMiddle.commName || community.commName} commImg={community.commImg || communityMiddle.commImg}/>
//             <CommunityPageMessage commName={communityMiddle.commName || community.commName} commImg={community.commImg || communityMiddle.commImg}/>
//             <CommunityPageMessage commName={communityMiddle.commName || community.commName} commImg={community.commImg || communityMiddle.commImg}/>
//             <CommunityPageMessage commName={communityMiddle.commName || community.commName} commImg={community.commImg || communityMiddle.commImg}/>
//             <CommunityPageMessage commName={communityMiddle.commName || community.commName} commImg={community.commImg || communityMiddle.commImg}/>
//             <CommunityPageMessage commName={communityMiddle.commName || community.commName} commImg={community.commImg || communityMiddle.commImg}/>
//             <CommunityPageMessage commName={communityMiddle.commName || community.commName} commImg={community.commImg || communityMiddle.commImg}/>
//             <CommunityPageMessage commName={communityMiddle.commName || community.commName} commImg={community.commImg || communityMiddle.commImg}/>
//           </div>
//         </div>
//       </div>
//    </div>
//   );
// }

// export default CommunityPageHeader;


import React, { useContext, useEffect, useState } from "react";
import CommunityPageMessage from "./CommunityPageMessage";
import UserContext from "../contexts/UserContext";

function CommunityPageHeader() {
  const { community, communityMiddle } = useContext(UserContext);
  const [darkMode, setDarkMode] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      setDarkMode(mediaQuery.matches);
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return (
    <div
      className={`mainn my-8 pb-7 mx-2 rounded-2xl ${
        darkMode ? "bg-gray-900 text-white" : "bg-[#ebfbf9] text-black"
      }`}
    >
      <div className="inter-div w-full h-screen grid grid-rows-12 grid-cols-12 rounded-2xl">
        <div className="w-full h-full row-start-1 row-end-4 col-start-1 col-end-13 grid grid-rows-12 grid-cols-12">
          <div className="rounded-sm row-start-1 row-end-8 col-start-1 col-end-13">
            <img
              src="https://styles.redditmedia.com/t5_2r0ij/styles/bannerBackgroundImage_6gx1wewyz5x11.jpg?format=pjpg&s=5ac36526be277cd24336998655b70f621ce4e9bc"
              alt="community-banner"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="name-btn-img-div row-start-8 row-end-13 col-start-1 col-end-13 flex flex-row flex-wrap justify-between items-center mx-7 px-4 border-b-2 border-white bg-inherit">
            <div className="post-name-div flex flex-row gap-3 flex-wrap">
              <img
                src={"data:image/png;base64,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"}
                alt="community icon"
                className="w-14 h-14 rounded-full"
              />
              <div className="community-name flex flex-col justify-center">
                <p className="text-2xl">
                  {communityMiddle.commName || community.commName}
                </p>
              </div>
            </div>
            <div className="community-btn-div flex flex-row gap-5">
              <button className="bg-transparent rounded-3xl border border-slate-600 px-4 py-2 text-sm">
                <span>Create a Post</span>
              </button>
              <button className="bg-transparent rounded-3xl border border-slate-600 px-4 py-2 text-sm">
                <span>bell-icon</span>
              </button>
              <button className="bg-transparent rounded-3xl border border-slate-600 px-4 py-2 text-sm">
                <span className="text-sm">Join</span>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full h-full row-start-4 row-end-13 col-start-1 col-end-13 grid grid-rows-12 grid-cols-12 mt-2">
          <div className="community-message-col row-start-1 row-end-13 col-start-1 col-end-13 rounded-md pt-4 px-2 pb-4 mb-7 overflow-y-scroll hide-scrollbar">
            {Array.from({ length: 10 }).map((_, idx) => (
              <CommunityPageMessage
                key={idx}
                commName={communityMiddle.commName || community.commName}
                commImg={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOoAAADXCAMAAAAjrj0PAAAAtFBMVEX///8AAADYRT7XQTnWNCzeamX00tH7+/v29vbXPzfWMinYQzzWNy/55+beZmHvvrzifHfxx8Xj4+PExMTaUEra2trQ0NCioqK+vr7h4eHv7+9lZWXHx8eCgoKWlpaQkJBcXFw5OTmpqakpKSlycnK1tbWFhYVSUlIdHR16enpvb29BQUFISEhhYWEMDAwmJiYyMjIXFxfjg4DcWVPqpaPtsa/77OvUJxzompfkjIj33NvgdG85NDO8AAAOlUlEQVR4nN1daUMbOQ/uBLYZjl5JkwnhSAKEEKCUbLfttu///18vucCypLFky0m6z0cYz1g+dEt580aAVns8brfqnugEn/gT0JrOigWuLpknypti9UTV3OjUbFFeF694Ivet5zxRVJueoBm6BUQXP3IBn3g467W7nVa/3Pxk1ThpV4O7h/vR0+hhMix8oH29RI+scHs/rbr9bVAgQefy7pab+ZoAb8hJ4Pli2ts9cls3ITIX8HjTRDBk2NsORQxapxI6n3EFh8kG3Y63RBaBi/B01zhxx1XSUfd5hG6zdbJESyjmmpJjuAbYoC+R4yzQvRjOnPffnlaEfPApfVJQWty4Q0XXe4ULQzLLHr3IX8b1TPBBQykk9VEzktO21Ojc1Xxl0uYH3tSMC01Yc/KLomNCaHsU+Mwjt6ZCJvoCsGhT1dCvBoR2JGfwlhZvutkWBWB1Z7qxyUe4KZWJD8SdbSop/RIePbtlr3AipZqVxctKjH6YDi7b7bN2e0C8wWPo1CPPmn6z3+kNiB04S6L0XEHps5Lmi1pvrtOxK+vxvTj1hhPb6thxJ5ce35qmUIqNj3o8emoL4NsDbyHKmT8cKSW+mVfcwf937t1/JjCm8kpJaeEfopFLafD9xGXvwSeu0QP3gRfI0EerLgHgxO4bCLnXdBn0hLS3O+67CR4L7LxY0drX6GUOXNHoMkuSktZaBXtibbEXY4H2LbmzjOVLX+MoBWzU/TPzmbJ3cTetavfj7OL67oLTtt0TXKO11YHVyh5Ob6qqGlxP2LV4vTLuAY6bRhAuH4/bVVrKPIHl74/p9XjlhO5qJJLEwSU1bGcRaFMkTLEFXFaU7vLCKN15ZPLyjZxPxFjoJUUow8opr9760rhy9YQenoimu9Qxwgabplc84ygJHW3FLF0TLup0BVESX9UAKSmE7HaBN3aK/5HHNe9OdRQxHvHW0DQ7/oDVcXWvfJKGymLsfOEu/LgPtElhJxUywSfozzFrHoarb0X4l3w1SXL00L4u7jYwTbKwYFdy68Wqp2IX56JRvmm6NMhcXSYHX+q7n9QzYM+bKT14vsNs8WFXE7H0X67hXlW9kuJfO/FajeC4yp/Kg3oqYbgB2nopQcELO8j3wruui/gLWLcMl9VVIPQefihpHhUjPV/xgjG5f7CPmYHVVauF3vnVeBy9oYsT7J6wCLkXgHsC9e6WMZyvSteCGuIEvU49mRBcj41eRYGnUDfes4fmywSkQZr3EgMcI/31gA4lpSyEpC4u6yhp4esBOKie6cHZKgfDE7xY50HC60Jw1bqJejSUGF/CAwCg9rxwhwIryfYEh7yJAUCtUKvgwIVaynRX9NnyYOAU0muFMP9A64KDkYelegSCcaa5c/hbKsAoi9qHDEYvJR2wAyxzFsABjIg4QqVdfSqAqrXStBIXn8Ukaaa+U1TNwEEIZcVwwQm2S7sBElvPf5NJhYHE5d8AD76pH68AuGoxFyPxAIPY2tpUAF6NiDnReEx9qz1bMlh/CkC5jlLDoLDR6pVQ2KwvEFBVrRjTyH1plC8HuojSVIiXtQbMyia/CHzpKvx8cLJD5WhCMZwj/bAhgPhDnDfdi9YoRxPq/hzwXFv4XVoWb4T+wnQjbgEgwiw8h+CFsZr1NZhtsmm+BLwWkTNzAM9e7O33ohgq/RwG8FxeCxhTurwBNvl97FuAvqW78ZQbbQXAmJ5i5/YC8J14R+QITlgx0ouzgnMF/pNqoQPhr3HfevBc3jizioMXlYVTsDlyKwCdMCFu651guS3ixXrgFOBb0yJVkJ2kWPte2or0ZpHhqVcAzh5jc70CfCbJVPLDhzKB4+fE+FmgkGelbCvc1LTyKT+LMj6U7AJkoaYo/eCm6sNvAH4sWeC4QdVrQ/QIXIz4bYW2V6pXA5XGhHQ5nBJDaDCAB8RvK/iM1lGNgGder2biii7qXMG3xspWKAvT875wIcWMP3F9IhectDVG7hOjOHMEGkk+70t+4WpjGV5HFffRWq7H2mXpJBDe+bEw8/ERnhOLj0ufrGLkjjt0neozmZreC5Jv6gJ0QeXTRcdRTlpMkizr//Al9lA5qZE33ihDk60keroeVOPq4vyBLe3hBYC/NDpzzi+7MQt2eYdFjpoLNPaf1SiwKLnPLO1WV3j6ijrzEfFqDWtCt8UuY6aMKlSo/T5+XL4zSIezzDfwGZ4EtZqBbx8WGtMVj02zjzxIqxzXeKwXdASp4sAoUfObauFDiIv4l8sc4jIU05ZpTTi52kqsvn5CUS0WdvBeE6NkIoOahnmKPFVESmEisKeovRElXJAl6/ZNTVqS0s5HmTZAqldh4UrqqYlWOY2TEHuaSZkLWWYftk/ISsRMNUqtQU2ThqHC9iSvQ0gXoK64XSMIjO45ubbDQAsMH+Ri1b8CqZNz2EoahD6uqlK/g6y2q3W/UNLYKiLNA1un+neQTK4uhjCiBsTY9SpgjULvW6c3iffn0OWl2bvf4eK3CNlGa2Dc3MmLGlt/rAD+bsyVIa0IRnenm8DYVwEg2JBKT58MvjTp2v4NNG/E7DPKS08fYUq60p1yrGsAKGAFLe6rI5ICrETTjX3ylId6wOp6HKn0EZ7555Le/Vk6HQLgHoqR/h267aSnAZHaRq5Kbh94N2KzVehGa4ANk+bMxnqsYlJjle4mbfI7Rg5D6TD05t9/f/vs4f0/epaNSY1eY4aSF5bD9bQKTfr74cGRj73jxg/t/AxJ5XpWDpf/5XrIhuT4259HDQIHn7XTw/prQsIg0yVmYeVw3buCK/ttj6K00dj/rpwdJlWe1oTAXNfiqt/nHNBBf8WPfZrSxsFH5exMSVU3ORSY4+8OGVL3/lJODvd2SUobwrGJeoS9STtLqtjxuoQgvmNHKk4cSKyb0bTUk9ioOUlNVb3lkU2RWLMjFfv7UkktpZ1xZR/KSWqyP0DIhoVpOzlJTc8cIuM4PobCl+02qRJah9J3GZKKbpZFjDNIq5wh5CR1qH0DhQCtCo1s50mtb/qpsf5zkmqUelGyGSYzlft193f1DRNYFKRXQPwRpNIRC60/J6ewGWrfwAO7I+kfLqpDTlItE2rQy/VCe8dViBcgNqyPjP/IaNlYxsRQgKa+3O3Hv3+9RyCdaM84+vwR4deHmrdj09wyfoKN17qnvx8e7yFwlD7TeoCx/5n3mWJSLQP1OBhVE6j+QHtBdThosLIMu9HsundQ0aia8MyRAaWNxvE/2yEVS1Y++PWb4z867H3jPoDt6BTnqA8c2+Ad6p84h68ORw05qZaNRPGZ4dMIs5OKFRrLECAWZXwbj+yk4iNmmumHf5Nje6Rid7xpH1GcoMoqwdlJxTzSNNkExyHZlcxOKo56miYm4OQHlsFnJxUvu2kCJ+Z6rJMjO6k4wmv7a4ro9azCn51UnJdim1WOk8+4pcxOKo7pm1JKnBrOXZidVBw3syUVc3jOSMxOKppJXFcyFljx5C5rblKxuWpagfeGqiRjTNbcpOKAg3UOMnZEMJc1N6k4Q8zSXJ0DW+fMYlqResRMBHMN69xGfG78HwBf4W3mXcVFeOa/UYy+wOhjP36akMpmbmHLwzw3F19Wxvj/eGxB6s+3zDxwaNC8rhIbFExrq/LzcbIj7ejwX24e+HSZVxtijZ9dzl/7h/s++K0+Qs/uHzY+cdPAAt7i94k94JPDsr7m77c+PnC0Hr3HD7/jZ4HNyQw/UYPVYE3bQ6vwFLZWMxThEdndiq4eVqRi7pihZIDof7SFtA/s0MtRxoQlmqKwxohUohozx+80EknCcultRCpxi9R0CECcYHm82ohUnKdsbK2uQLQrEItvI1Kx4ydPHR5xgsWRISNS8Qzy9CsgTjBj3mDYkEqUO2UqxCNKOaXxEhtSiTYqmYqDiexKaa6LDanYW5itCwVRaySMIpiQSiSeZ+vNQJToDmUjTUglPm//w4UrUK0jZNtqQipR4G7f72iNO/yxoWigBanEQoslgB5UcatoWy1IJc5vzjYq2LKQ2cYWpBI9DXM2F6GSgyVmlAGp1InK2nKDkDcib8QB41s7YB1mPoh0c+twDQRVgC3RQ38xzqXD38IPp/RajAPVjFlyjpqNA4LQGi+oD6oE3jY1QPRJSY+78n+H+8ce9o/llebEZ/P8+Hz9N2X2xbtPHzx8krMVqpdK9qYb1EczivIlyHuTT1Vag6pstQ5y+qCuTY7fY/dAdsHI26uG7NtmHm0kQBXKPWaV5mQXzpwfXINs4zLM+EGyr0zuO7ME2V/AMtnaA1lvmVmorkDXoWfrjEa2J8urFL6C7lqTifnTTbs207PrDd3suZhlaZdLd83M3MXVAd1gKoumRjfj2EQfwRUI10uR5QLR3Z43t6mMppZB5JDNwjd4U+dgeqQNbb/CdC/bFPtdgVlvU82UoXRDMvUVI3oaIzsVkVnNDSlKDmgp8CxzrNacZn3FZrRfCKYhp5Ek4FtS5O+3jMFdJYsTxrSOLGzL6OWgO5Q+Y5R6iLlrWmT7CYMQ+L5iSYbOWU3vmI2KVAe4auAFX6Pn1GIPS+oSJoHIKH3BadQpLumW0itsWHkA4NlHFLGtWkKL2w00RudR38pyqDrGPaa16wvy+0Pr51c/u6dKuLXt+g2dI0dCoQrBFqWji0C8udmpJP0wt8V8HbBq0ytmp1WHFIj9znhAd/FH2KA5zkPU8/AZk+vzajzunZ21e+NxNZiean7JcAf2dI6W4gfOIpH7h3LEaIZ4ZyJmW+a9ADVaazqGW5WnCALmFAvLjjQmYLuaJ+JxRxgSgK4xthB3u3V41+gQOVxpqPk1821D9xuiQWzPZhOgZL1fenC/2b4z6Gj6u9fgy9a1ewG6Brz4etN+7Vh0mA60QtxWW3KWRaFfRf1S9xzT3eW6HLphYxthdv7n0blE91whaR9PL/8ETsSjP54KjvLTtPen8KF6lN3qfELu7+398Kb6j1DpoCxb3bkD4vIZ416722mVufXb/wNtuvr34uM/DAAAAABJRU5ErkJggg=="}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommunityPageHeader;
