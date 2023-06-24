import React, { useEffect, useState } from "react";
import { Button, Img, Input, Text, } from "components";
import Landing003Iphone from "components/Landing003Iphone";
import Navigation from "components/Navigation";
import Card from "components/Card";
import Picture from "components/Bubble/Rotate";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Landing003Page = () => {

  const [visibleFixedHeader, setVisibleFixedHeader] = useState(false);
  const [visibleFixedphone, setVisibleFixedPhone] = useState(false);

  const [frame, setFrame] = useState(0)
  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      setVisibleFixedHeader(e.currentTarget.scrollY > 600);
      setVisibleFixedPhone(e.currentTarget.scrollY > 2300 && e.currentTarget.scrollY < 4300);

      const div1 = document.getElementById("frame1");
      const div2 = document.getElementById("frame2");
      const div3 = document.getElementById("frame3");

      let previousScrollPosition = window.pageYOffset;
      const currentScrollPosition = window.pageYOffset;

      if (currentScrollPosition > previousScrollPosition) {
        // Check if div 1 is visible
        const div1Rect = div1.getBoundingClientRect();
        if (div1Rect.y + div1Rect.height > 0 && div1Rect.y < window.innerHeight) {
          console.log("Div 111 scrolled out of view from top");
          setFrame(0);
        }

        // Check if div 2 is visible
        const div2Rect = div2.getBoundingClientRect();
        if (div2Rect.y + div2Rect.height > 0 && div2Rect.y < window.innerHeight) {
          setFrame(1);
        }

        // Check if div 3 is visible
        const div3Rect = div3.getBoundingClientRect();
        if (div3Rect.y + div3Rect.height > 0 && div3Rect.y < window.innerHeight) {
          setFrame(2);
        }
      } else {
        // Check if div 1 is visible
        const div1Rect = div1.getBoundingClientRect();
        if (
          div1Rect.y + 500 < window.innerHeight &&
          div1Rect.y + div1Rect.height > 0
        ) {
          setFrame(0)
          console.log( div1Rect.y, window.innerHeight , "AAA" , div1Rect.y + div1Rect.height);
        }

        // Check if div 2 is visible
        const div2Rect = div2.getBoundingClientRect();
        if (
          div2Rect.y + 400 < window.innerHeight &&
          div2Rect.y + div2Rect.height > 0
        ) {
          setFrame(1)
        }

        // Check if div 3 is visible
        const div3Rect = div3.getBoundingClientRect();
        if (
          div3Rect.y + 400 < window.innerHeight &&
          div3Rect.y + div3Rect.height > 0
        ) {
          setFrame(2)
        }

      }

      previousScrollPosition = currentScrollPosition;

    });



    // return (() => {
    //   window.removeEventListener('scroll');
    // })

    // const imageContainer = document.getElementById("image-container");
    // const iPhoneTop = document.getElementById("iPhoneTop");
    // imageContainer.addEventListener("mouseover", function() {
    //   iPhoneTop.style.display = "block";
    // });
    // imageContainer.addEventListener("mouseout", function() {
    //   iPhoneTop.style.display = "none";
    // });
  }, [])

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-outfit items-center justify-start mx-auto w-full">
        <div className="md:px-5 relative w-full">
          <div className="flex flex-col m-auto w-full">
            <div
              className="bg-cover bg-no-repeat flex flex-col items-center justify-start mx-auto p-[38px] sm:px-5 w-full"
              style={{ backgroundImage: "url('images/img_group10.png')" }}
            >
              <div className="flex flex-col justify-start mb-[76px] w-[99%] md:w-full">
                <div className="flex flex-row md:gap-10 items-center justify-between py-0.5 w-full">
                  <div className="flex flex-row items-start justify-start pr-[17px]">
                    <Img
                      className="h-[33px]"
                      src="images/img_edit.svg"
                      alt="edit"
                    />
                    <Text
                      className="ml-[5px] mt-[3px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                      size="txtOutfitBold24"
                    >
                      novara
                    </Text>
                  </div>
                  <Button className="bg-deep_orange-500 cursor-pointer font-bold leading-[normal] min-w-[124px] py-[11px] rounded-[10px] shadow-bs text-base text-center text-white-A700">
                    Let’s Create
                  </Button>
                </div>
                <div className={`fixed w-screen flex flex-col items-center justify-start left-0 z-20 transition-all ${visibleFixedHeader ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-9'}`}>
                  <Navigation className="w-[90%] relative" />
                </div>
                <div data-aos="fade-up" data-aos-duration="2000" className="flex flex-col gap-[19px] items-center justify-start md:ml-[0] mt-[65px] w-full">
                  <Text
                    className="md:text-5xl text-[85px] text-black-900 text-center"
                    size="txtOutfitExtraBold85"
                  >
                    <span className="text-black-900 font-outfit font-extrabold">
                      <>
                        Build an app
                        <br />
                      </>
                    </span>
                    <span className="text-black-900 font-outfit font-extrabold">
                      for your
                    </span>
                    <span className="text-black-900 font-outfit font-extrabold">
                      {" "}
                    </span>
                    <span className="text-deep_orange-500 font-outfit font-extrabold">
                      Ski Resort
                    </span>
                  </Text>
                  <Text
                    className="text-center text-gray-700 text-xl"
                    size="txtInterMedium20"
                  >
                    <>
                      Create and launch a native mobile app in less than a day.
                      <br />
                      No technical skills or coding required.
                    </>
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex flex-col items-center justify-start relative">
            <div data-aos="zoom-in" data-aos-duration="1000" className=" relative flex flex-col items-center justify-start  z-0">
              <Landing003Iphone className="p-0.5 relative" />
            </div>
            <div className="absolute h-full w-full flex flex-col justify-evenly z-1 m-auto max-w-[1000px] ml-[30px] md:ml-[22.43px]">

              <div data-aos="fade-right" data-aos-duration="1000" className="flex justify-start pl-[18px] md:pl-[13.46px]">

                <div className="relative h-[100px]   w-[187px] md:h-[75.3px] md:w-[139.8px]">
                  <Picture img={'images/img_magicpatterndesign.png'} text={'Greeting Module'} type={0} />
                  {/* <Img
                    className="h-[100px] m-auto object-cover rounded-bl-[24px] rounded-br-[24px] rounded-tl rounded-tr-[24px] w-full md:h-[75.3px] md:w-[139.8px]"
                    src="images/img_magicpatterndesign.png"
                    alt="magicpatterndes"
                  />
                  <Text
                    className="absolute h-max inset-[0] justify-center m-auto text-lg text-white-A700 w-max"
                    size="txtOutfitBold18"
                  >
                    Greeting Module
                  </Text> */}
                </div>
              </div>

              <div data-aos="fade-left" data-aos-duration="1000" className="flex justify-end">
                <div className="relative h-[128px] w-[247px]  md:h-[95.72px] md:w-[184.7px]">
                  <Picture img={'images/img_magicpatterndesign_128x247.png'} text={'Hero Image Module'} type={1} />
                  {/* <Img
                      className="h-32 m-auto object-cover rounded-bl-[24px] rounded-br-[24px] rounded-tl-[24px] rounded-tr w-full md:h-[95.72px] md:w-[184.7px]"
                      src="images/img_magicpatterndesign_128x247.png"
                      alt="magicpatterndes_Two"
                    />
                    <Text
                      className="absolute h-max inset-[0] justify-center m-auto text-lg text-white-A700 w-max"
                      size="txtOutfitBold18"
                    >
                      Hero Image Module
                    </Text> */}
                </div>
              </div>
              <div data-aos="fade-right" data-aos-duration="1000" className="flex justify-start pl-[121px] md:pl-[90.49px]">
                <div className="relative h-[147px]  w-[187px] md:h-[109.9px] md:w-[139.8px]">
                  <Picture img={'images/img_magicpatterndesign_147x187.png'} text={'Offers Module'} type={0} />
                  {/* <Img
                      className="h-[147px] m-auto object-cover rounded-bl-[24px] rounded-br-[24px] rounded-tl rounded-tr-[24px] w-full z-10 md:h-[109.9px] md:w-[139.8px]"
                      src="images/img_magicpatterndesign_147x187.png"
                      alt="magicpatterndes_One"
                    />
                    <Text
                      className="absolute h-max inset-[0] justify-center m-auto text-lg text-white-A700 w-max"
                      size="txtOutfitBold18"
                    >
                      Offers Module
                    </Text> */}
                </div>
              </div>
              <div data-aos="fade-left" data-aos-duration="1000" className="flex justify-end pr-[104px] md:pr-[77.7px]">
                <div className="relative h-[128px] w-[232px]  md:h-[95.72px] md:w-[173.5px]">
                  <Picture img={'images/img_magicpatterndesign_128x232.png'} text={'Weather Module'} type={1} />
                  {/* <Img
                    className="h-full m-auto object-cover rounded-bl-[24px] rounded-br-[24px] rounded-tl-[24px] rounded-tr w-full md:h-[95.72px] md:w-[173.5px]"
                    src="images/img_magicpatterndesign_128x232.png"
                    alt="magicpatterndes_Three"
                  />
                  <Text
                    className="absolute h-max inset-[0] justify-center m-auto text-lg text-white-A700 w-max"
                    size="txtOutfitBold18"
                  >
                    Weather Module
                  </Text> */}
                </div>
              </div>
              <div data-aos="fade-right" data-aos-duration="1000" className="flex justify-start ">
                <div className="relative max-h-[111px] max-w-[222px]  md:h-[83px] md:w-[166px]">
                  <Picture img={'images/img_magicpatterndesign_111x222.png'} text={'Live Tracking Module'} type={0} />
                  {/* <Img
                    className="h-[111px] m-auto object-cover rounded-bl-[24px] rounded-br-[24px] rounded-tl rounded-tr-[24px] w-full md:h-[83px] md:w-[166px]"
                    src="images/img_magicpatterndesign_111x222.png"
                    alt="magicpatterndes_Four"
                  />
                  <Text
                    className="absolute h-max inset-[0] justify-center m-auto text-lg text-white-A700 w-max"
                    size="txtOutfitBold18"
                  >
                    Live Tracking Module
                  </Text> */}
                </div>
              </div>

              <div data-aos="fade-left" data-aos-duration="1000" className="flex justify-end pr-[74px] md:pr-[55.34px]">
                <div className="relative h-[100px]  w-[187px] md:h-[75.3px] md:w-[139.8px]">
                  <Picture img={'images/img_magicpatterndesign_100x187.png'} text={'Many More'} type={1} />
                  {/* <Img
                    className="h-[100px] m-auto object-cover rounded-bl-[24px] rounded-br-[24px] rounded-tl-[24px] rounded-tr w-full md:h-[75.3px] md:w-[139.8px]"
                    src="images/img_magicpatterndesign_100x187.png"
                    alt="magicpatterndes_Five"
                  />
                  <Text
                    className="absolute h-max inset-[0] justify-center m-auto text-lg text-white-A700 w-max"
                    size="txtOutfitBold18"
                  >
                    & Many More
                  </Text> */}
                </div>
              </div>
            </div>
          </div>
        </div>
       
        <div data-aos="fade-up"  data-aos-duration="1000" className="flex flex-col font-nunito items-center justify-start mt-[107.6px] md:px-5 w-[28%] md:w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="relative h-[724px]  w-[349px]">
              <div className=" h-[724px] w-[349px] m-auto">
                <Img
                  className=" h-[701px]  w-[346.22px] mt-[11.06px] ml-[2.01px] object-cover "
                  src="images/img_iphone12pro.png"
                  alt="iphone12pro_One"
                />
                <div className="absolute h-[672px] inset-[0] justify-center w-[311px] ml-[19.6px] mt-[25.64px]">
                  <Img
                    className="h-[672px] object-cover "
                    src="images/img_screeniphone12_672x311.png"
                    alt="screeniphoneTwelve_One"
                  />
                  <div className="absolute flex flex-col inset-x-[0] items-start justify-start mx-auto top-[9%] w-[93%]">
                    <div className="flex flex-row items-center justify-between w-full">
                      <Text
                        className="text-lg text-shadow-ts text-white-A700"
                        size="txtNunitoExtraBold18"
                      >
                        Hello, Michael! 👋
                      </Text>
                      <div className="bg-white-A700 flex flex-col h-[31px] items-center justify-start rounded-tl-[10px] rounded-tr-[10px] rounded-bl-[10px] rounded-br-[10px] shadow-bs w-[31px]">
                        <Img
                          className="h-[31px] rounded-tl-[10px] rounded-tr-[10px] w-[31px]"
                          src="images/img_settings.svg"
                          alt="settings"
                        />
                      </div>
                    </div>
                    <Text
                      className="mt-[183px] text-base text-black-900"
                      size="txtNunitoBold16"
                    >
                      Offers Just For You
                    </Text>
                    <div className="h-[100px] md:h-[107px] mt-[7px] relative rounded-[12px] shadow-bs1 w-[95%]">
                      <Img
                        className="h-[100px] m-auto object-cover rounded-[12px] w-full"
                        src="images/img_rectangle5852.png"
                        alt="rectangle5852"
                      />
                      <div className="absolute flex flex-col items-start justify-start left-[4%] top-[26%]">
                        <Text
                          className="text-sm text-white-A700 tracking-[0.10px]"
                          size="txtNunitoExtraBold14"
                        >
                          Save 30% on all Lift Upgrades
                        </Text>
                        <Text
                          className="bg-white-A700 h-[18px] justify-center mt-0.5 px-4 py-[3px] rounded-[9px] text-[8px] text-black-900_99 w-auto"
                          size="txtNunitoMedium8"
                        >
                          Expires in 48 Hours
                        </Text>
                      </div>
                    </div>
                    <Text
                      className="mt-[13px] text-base text-black-900"
                      size="txtNunitoBold16"
                    >
                      Weather
                    </Text>
                  </div>
                </div>
              </div>
              <Img
                className="absolute h-[39.97px] inset-x-[0] w-[305.22px] ml-[19.98px] top-[20.89px]"
                src="images/img_statusbar.svg"
                alt="statusbar_One"
              />
            </div>
          </div>
        </div>
        <div id="image-container" className="relative">

          <div data-aos="fade-up" id="frame1" data-aos-duration="1000" className="flex flex-col font-nunito justify-start mt-[148px] w-full max-w-[1065px] px-4">
            <div className="flex flex-row  items-start justify-between md:flex-col w-full md:px-2 md:items-center">
              <div className="flex flex-col gap-[38px] items-start justify-start md:mt-0 mt-[54px] px-2 max-w-[450px] md:w-full">
                <Text
                  className="sm:text-[40px] md:text-[46px] text-[50px] text-black-900"
                  size="txtOutfitExtraBold50"
                >
                  <>
                    The fastest way to
                    <br />
                    build an app
                  </>
                </Text>
                <Text
                  className="text-gray-700 text-xl w-full"
                  size="txtInterMedium20"
                >
                  By using our modules, you can quickly select which ones you need
                  in your app to increase your Guests’ Experience and your ROI.
                </Text>
              </div>
              <div className="flex md:flex-1 flex-col items-center justify-start invisible md:visible">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="relative h-[724px]  w-[349px]">
                    <div className=" relative h-[724px] w-[349px] m-auto">
                      <Img
                        className=" absolute h-[701px]  w-[346.22px] mt-[11.06px] ml-[2.01px] object-cover "
                        src="images/img_iphone12pro.png"
                        alt="iphone12pro_One"
                      />
                      <div className="absolute h-[672px] inset-[0] justify-center w-[311px] ml-[19.6px] mt-[25.64px]">
                        <Img
                          className="h-[672px] object-cover "
                          src="images/img_screeniphone12_672x311.png"
                          alt="screeniphoneTwelve_One"
                        />
                        <div className="absolute flex flex-col inset-x-[0] items-start justify-start mx-auto top-[9%] w-[93%]">
                          <div className="flex flex-row items-center justify-between w-full">
                            <Text
                              className="text-lg text-shadow-ts text-white-A700"
                              size="txtNunitoExtraBold18"
                            >
                              Hello, Michael! 👋
                            </Text>
                            <div className="bg-white-A700 flex flex-col h-[31px] items-center justify-start rounded-tl-[10px] rounded-tr-[10px]  rounded-bl-[10px] rounded-br-[10px] shadow-bs w-[31px]">
                              <Img
                                className="h-[31px] rounded-tl-[10px] rounded-tr-[10px] w-[31px]"
                                src="images/img_settings.svg"
                                alt="settings"
                              />
                            </div>
                          </div>
                          <Text
                            className="mt-[183px] text-base text-black-900"
                            size="txtNunitoBold16"
                          >
                            Offers Just For You
                          </Text>
                          <div className="h-[100px] md:h-[107px] mt-[7px] relative rounded-[12px] shadow-bs1 w-[95%]">
                            <Img
                              className="h-[100px] m-auto object-cover rounded-[12px] w-full"
                              src="images/img_rectangle5852.png"
                              alt="rectangle5852"
                            />
                            <div className="absolute flex flex-col items-start justify-start left-[4%] top-[26%]">
                              <Text
                                className="text-sm text-white-A700 tracking-[0.10px]"
                                size="txtNunitoExtraBold14"
                              >
                                Save 30% on all Lift Upgrades
                              </Text>
                              <Text
                                className="bg-white-A700 h-[18px] justify-center mt-0.5 px-4 py-[3px] rounded-[9px] text-[8px] text-black-900_99 w-auto"
                                size="txtNunitoMedium8"
                              >
                                Expires in 48 Hours
                              </Text>
                            </div>
                          </div>
                          <Text
                            className="mt-[13px] text-base text-black-900"
                            size="txtNunitoBold16"
                          >
                            Weather
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Img
                      className="absolute h-[39.97px] inset-x-[0] w-[305.22px] ml-[19.98px] top-[20.89px]"
                      src="images/img_statusbar.svg"
                      alt="statusbar_One"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" id="frame2" data-aos-duration="1000" className="flex flex-col font-inter items-center justify-start  mt-[202px] w-full max-w-[1065px] ">
            <div className="flex flex-row gap-10 items-start justify-between md:flex-col w-full md:px-2 md:items-center px-4">
              <div className="flex flex-col gap-8 items-start justify-start md:mt-0 mt-[91px] px-2 max-w-[451px] md:w-full">
                <Text
                  className="sm:text-[40px] md:text-[46px] text-[50px] text-black-900 "
                  size="txtOutfitExtraBold50"
                >
                  Make it your own
                </Text>
                <Text
                  className="text-gray-700 text-xl w-full"
                  size="txtInterMedium20"
                >
                  Our intuitive platform lets you decide how everything looks,
                  where it goes, what it does and so much more to ensure your app
                  matches your brands style.
                </Text>

              </div>
              <div className="flex md:flex-1 flex-col items-center justify-start md:w-full invisible md:visible">
                <div className=" relative md:h-[701px] h-[724px] w-[349.74px]">
                  <div className="relative h-[701px] m-auto w-[346.22px]" >
                    <Img
                      className="absolute h-[701px] m-auto object-cover w-[346.22px]"
                      src="images/img_iphone12pro.png"
                      alt="iphone12pro_Three"
                    />
                    <div className="absolute h-[672.72px] inset-[0] justify-center w-[311px] mt-[14.94px] ml-[18px]">
                      <Img
                        className="h-[672px] w-[311px] object-cover"
                        src="images/img_screeniphone12_1.png"
                        alt="screeniphoneTwelve_Three"
                      />
                      <div className="absolute flex flex-row inset-x-[0] items-center justify-between mx-auto top-[9%] w-[93%]">
                        <Text
                          className="text-black-900 text-lg text-shadow-ts"
                          size="txtInterExtraBold18"
                        >
                          Hello, Laurie! 👋
                        </Text>
                        <div className="bg-black-900 flex flex-col h-[31px] items-center justify-start rounded-[15px] w-[31px]">
                          <Img
                            className="h-[31px] rounded-tl-[15px] rounded-tr-[15px] w-[31px]"
                            src="images/img_frame.svg"
                            alt="frame"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <Img
                    className="absolute h-[39px] w-[305.23px] inset-x-[0] ml-[19.9px] top-[15.89px]"
                    src="images/img_statusbar.svg"
                    alt="statusbar_Three"
                  />
                </div>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" id="frame3" data-aos-duration="1000" className="flex flex-col font-outfit items-center justify-start mt-[202px] w-full max-w-[1065px] px-2">
            <div className="flex md:flex-col flex-row md:gap-10 justify-between w-full md:px-2 md:items-center">
              <div className="flex flex-col gap-8 items-start justify-start md:mt-0 mt-[86px] px-4 max-w-[548px] md:w-full">
                <Text
                  className="sm:text-[40px] md:text-[46px] text-[50px] text-black-900"
                  size="txtOutfitExtraBold50"
                >
                  See Changes Instantly
                </Text>
                <Text
                  className="text-gray-700 text-xl w-[88%] sm:w-full"
                  size="txtInterMedium20"
                >
                  You can change anything about your app, anytime. The second you
                  publish is the moment your guests will see them. No need to wait
                  for App Store approvals.
                </Text>
              </div>
              <div className="flex md:flex-1 flex-col items-center justify-start w-[33%] md:w-full invisible md:visible">
                <div className="relative md:h-[701px] h-[724px]  w-[349.74px]">
                  <div className="relative h-[701px] m-auto w-[349.74px]">
                    <Img
                      className="h-[701.88px] m-auto object-cover w-[346.22px]"
                      src="images/img_iphone12pro.png"
                      alt="iphone12pro_Four"
                    />
                    <div className="absolute h-[672.72px] inset-[0] justify-center mt-[14.58px] ml-[18.59px] w-[311.55px]">
                      <Img
                        className=" absolute h-[672.72px] m-auto object-cover  w-[311.55px]"
                        src="images/img_screeniphone12_2.png"
                        alt="screeniphoneTwelve_Four"
                      />
                      <div className="absolute flex flex-col gap-[23px] inset-x-[0] items-center justify-start mx-auto top-[9%] w-[93%]">
                        <div className="flex flex-row items-center justify-between w-full">
                          <Text
                            className="text-black-900 text-lg text-shadow-ts"
                            size="txtOutfitExtraBold18"
                          >
                            Hello, Sam! 👋
                          </Text>
                          <div className="bg-red-600 flex flex-col h-[31px] items-center justify-start rounded-tl-[10px] rounded-tr-[10px] rounded-bl-[10px] rounded-br-[10px] shadow-bs w-[31px]">
                            <Img
                              className="h-[31px] rounded-tl-[10px] rounded-tr-[10px] w-[31px]"
                              src="images/img_settings_white_a700.svg"
                              alt="settings_Two"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                          <Text
                            className="text-base text-black-900"
                            size="txtOutfitBold16"
                          >
                            Weather
                          </Text>
                          <div className="flex flex-col items-center justify-start rounded-[12px] shadow-bs1 w-full">
                            <div
                              className="bg-cover bg-no-repeat flex flex-row h-[100px] items-start justify-between p-[7px] rounded-[12px] w-full"
                              style={{
                                backgroundImage:
                                  "url('images/img_largeweather.png')",
                              }}
                            >
                              <div className="md:h-[66px] h-[83px] ml-2.5 relative w-3/5">
                                <div className="absolute bottom-[0] flex flex-col items-center justify-start left-[0] w-[83%]">
                                  <div className="flex flex-row items-start justify-between w-full">
                                    <div className="flex flex-col items-start justify-start">
                                      <Text
                                        className="text-[10px] text-white-A700_a2"
                                        size="txtOutfitMedium10"
                                      >
                                        Blazing Blizzard
                                      </Text>
                                      <Text
                                        className="mt-[25px] text-[10px] text-white-A700_a2"
                                        size="txtOutfitMedium10"
                                      >
                                        Snowfall
                                      </Text>
                                      <Text
                                        className="md:ml-[0] ml-[11px] text-white-A700 text-xs"
                                        size="txtOutfitBold12"
                                      >
                                        18”
                                      </Text>
                                    </div>
                                    <Text
                                      className="mt-[38px] text-[10px] text-white-A700_a2"
                                      size="txtOutfitMedium10"
                                    >
                                      Lifts
                                    </Text>
                                  </div>
                                </div>
                                <Text
                                  className="absolute bottom-[0] right-[14%] text-white-A700 text-xs"
                                  size="txtOutfitBold12"
                                >
                                  18/24
                                </Text>
                                <Text
                                  className="absolute left-[0] text-[10px] text-white-A700 top-[2%]"
                                  size="txtOutfitBold10"
                                >
                                  Snow
                                </Text>
                                <div className="absolute flex flex-row items-start justify-evenly right-[0] top-[0] w-[39%]">
                                  <Text
                                    className="h-[51px] sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
                                    size="txtOutfitBold40"
                                  >
                                    24
                                  </Text>
                                  <Text
                                    className="mt-[5px] text-center text-white-A700 text-xs"
                                    size="txtOutfitBold12"
                                  >
                                    °F
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-col items-start justify-start mr-[13px] mt-1 w-[12%]">
                                <Img
                                  className="h-6 md:ml-[0] ml-[7px] w-6"
                                  src="images/img_airplane.svg"
                                  alt="airplane"
                                />
                                <Text
                                  className="ml-0.5 md:ml-[0] mt-[27px] text-[10px] text-white-A700_a2"
                                  size="txtOutfitMedium10"
                                >
                                  Wind
                                </Text>
                                <Text
                                  className="text-white-A700 text-xs"
                                  size="txtInterBold12"
                                >
                                  <span className="text-white-A700 font-outfit text-left font-bold">
                                    6
                                  </span>
                                  <span className="text-white-A700 font-outfit text-left text-[10px] font-medium">
                                    mph
                                  </span>
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Img
                    className="absolute h-[39px] w-[305.23px] inset-x-[0] ml-[19.55px] top-[15.89px]"
                    src="images/img_statusbar.svg"
                    alt="statusbar_Four"
                  />
                </div>
              </div>
            </div>
          </div>

          <div id="iPhoneTop" className= {`top-[136px] left-[59%]  flex md:flex-1 flex-col items-center justify-start md:invisible z-15 fixed transition-all ${visibleFixedphone ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-9'}`}>
            <div className="flex flex-col items-center justify-start w-full">
              <div className="relative h-[724px]  w-[349px]">
                <div className=" relative h-[724px] w-[349px] m-auto">
                  <Img
                    className=" absolute h-[701px]  w-[346.22px] mt-[11.06px] ml-[2.01px] object-cover "
                    src="images/img_iphone12pro.png"
                    alt="iphone12pro_One"
                  />

                  {frame === 0 ?
                    
                    <div className="absolute h-[672px] inset-[0] justify-center w-[311px] ml-[19.6px] mt-[25.64px]">
                      <Img
                        className="h-[672px] object-cover "
                        src="images/img_screeniphone12_672x311.png"
                        alt="screeniphoneTwelve_One"
                      />
                      <div className="absolute flex flex-col inset-x-[0] items-start justify-start mx-auto top-[9%] w-[93%]">
                        <div className="flex flex-row items-center justify-between w-full">
                          <Text
                            className="text-lg text-shadow-ts text-white-A700"
                            size="txtNunitoExtraBold18"
                          >
                            Hello, Michael! 👋
                          </Text>
                          <div className="bg-white-A700 flex flex-col h-[31px] items-center justify-start rounded-tl-[10px] rounded-tr-[10px]  rounded-bl-[10px] rounded-br-[10px] shadow-bs w-[31px]">
                            <Img
                              className="h-[31px] rounded-tl-[10px] rounded-tr-[10px] w-[31px]"
                              src="images/img_settings.svg"
                              alt="settings"
                            />
                          </div>
                        </div>
                        <Text
                          className="mt-[183px] text-base text-black-900"
                          size="txtNunitoBold16"
                        >
                          Offers Just For You
                        </Text>
                        <div className="h-[100px] md:h-[107px] mt-[7px] relative rounded-[12px] shadow-bs1 w-[95%]">
                          <Img
                            className="h-[100px] m-auto object-cover rounded-[12px] w-full"
                            src="images/img_rectangle5852.png"
                            alt="rectangle5852"
                          />
                          <div className="absolute flex flex-col items-start justify-start left-[4%] top-[26%]">
                            <Text
                              className="text-sm text-white-A700 tracking-[0.10px]"
                              size="txtNunitoExtraBold14"
                            >
                              Save 30% on all Lift Upgrades
                            </Text>
                            <Text
                              className="bg-white-A700 h-[18px] justify-center mt-0.5 px-4 py-[3px] rounded-[9px] text-[8px] text-black-900_99 w-auto"
                              size="txtNunitoMedium8"
                            >
                              Expires in 48 Hours
                            </Text>
                          </div>
                        </div>
                        <Text
                          className="mt-[13px] text-base text-black-900"
                          size="txtNunitoBold16"
                        >
                          Weather
                        </Text>
                      </div>
                    </div>                 
                  : frame === 1 ?
                    <div className="absolute h-[672.72px] inset-[0] justify-center w-[311px] mt-[24.94px] ml-[18px] ">
                      <Img
                        className="h-[672px] w-[311px] object-cover"
                        src="images/img_screeniphone12_1.png"
                        alt="screeniphoneTwelve_Three"
                      />
                      <div className="absolute flex flex-row inset-x-[0] items-center justify-between mx-auto top-[9%] w-[93%]">
                        <Text
                          className="text-black-900 text-lg text-shadow-ts"
                          size="txtInterExtraBold18"
                        >
                          Hello, Laurie! 👋
                        </Text>
                        <div className="bg-black-900 flex flex-col h-[31px] items-center justify-start rounded-[15px] w-[31px]">
                          <Img
                            className="h-[31px] rounded-tl-[15px] rounded-tr-[15px] w-[31px]"
                            src="images/img_frame.svg"
                            alt="frame"
                          />
                        </div>
                      </div>
                    </div>
                : 
                    <div className="absolute h-[672.72px] inset-[0] justify-center mt-[24.58px] ml-[18.59px] w-[311.55px]">
                    <Img
                      className=" absolute h-[672.72px] m-auto object-cover  w-[311.55px]"
                      src="images/img_screeniphone12_2.png"
                      alt="screeniphoneTwelve_Four"
                    />
                    <div className="absolute flex flex-col gap-[23px] inset-x-[0] items-center justify-start mx-auto top-[9%] w-[93%]">
                      <div className="flex flex-row items-center justify-between w-full">
                        <Text
                          className="text-black-900 text-lg text-shadow-ts"
                          size="txtOutfitExtraBold18"
                        >
                          Hello, Sam! 👋
                        </Text>
                        <div className="bg-red-600 flex flex-col h-[31px] items-center justify-start rounded-tl-[10px] rounded-tr-[10px] rounded-bl-[10px] rounded-br-[10px] shadow-bs w-[31px]">
                          <Img
                            className="h-[31px] rounded-tl-[10px] rounded-tr-[10px] w-[31px]"
                            src="images/img_settings_white_a700.svg"
                            alt="settings_Two"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                        <Text
                          className="text-base text-black-900"
                          size="txtOutfitBold16"
                        >
                          Weather
                        </Text>
                        <div className="flex flex-col items-center justify-start rounded-[12px] shadow-bs1 w-full">
                          <div
                            className="bg-cover bg-no-repeat flex flex-row h-[100px] items-start justify-between p-[7px] rounded-[12px] w-full"
                            style={{
                              backgroundImage:
                                "url('images/img_largeweather.png')",
                            }}
                          >
                            <div className="md:h-[66px] h-[83px] ml-2.5 relative w-3/5">
                              <div className="absolute bottom-[0] flex flex-col items-center justify-start left-[0] w-[83%]">
                                <div className="flex flex-row items-start justify-between w-full">
                                  <div className="flex flex-col items-start justify-start">
                                    <Text
                                      className="text-[10px] text-white-A700_a2"
                                      size="txtOutfitMedium10"
                                    >
                                      Blazing Blizzard
                                    </Text>
                                    <Text
                                      className="mt-[25px] text-[10px] text-white-A700_a2"
                                      size="txtOutfitMedium10"
                                    >
                                      Snowfall
                                    </Text>
                                    <Text
                                      className="md:ml-[0] ml-[11px] text-white-A700 text-xs"
                                      size="txtOutfitBold12"
                                    >
                                      18”
                                    </Text>
                                  </div>
                                  <Text
                                    className="mt-[38px] text-[10px] text-white-A700_a2"
                                    size="txtOutfitMedium10"
                                  >
                                    Lifts
                                  </Text>
                                </div>
                              </div>
                              <Text
                                className="absolute bottom-[0] right-[14%] text-white-A700 text-xs"
                                size="txtOutfitBold12"
                              >
                                18/24
                              </Text>
                              <Text
                                className="absolute left-[0] text-[10px] text-white-A700 top-[2%]"
                                size="txtOutfitBold10"
                              >
                                Snow
                              </Text>
                              <div className="absolute flex flex-row items-start justify-evenly right-[0] top-[0] w-[39%]">
                                <Text
                                  className="h-[51px] sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
                                  size="txtOutfitBold40"
                                >
                                  24
                                </Text>
                                <Text
                                  className="mt-[5px] text-center text-white-A700 text-xs"
                                  size="txtOutfitBold12"
                                >
                                  °F
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-start mr-[13px] mt-1 w-[12%]">
                              <Img
                                className="h-6 md:ml-[0] ml-[7px] w-6"
                                src="images/img_airplane.svg"
                                alt="airplane"
                              />
                              <Text
                                className="ml-0.5 md:ml-[0] mt-[27px] text-[10px] text-white-A700_a2"
                                size="txtOutfitMedium10"
                              >
                                Wind
                              </Text>
                              <Text
                                className="text-white-A700 text-xs"
                                size="txtInterBold12"
                              >
                                <span className="text-white-A700 font-outfit text-left font-bold">
                                  6
                                </span>
                                <span className="text-white-A700 font-outfit text-left text-[10px] font-medium">
                                  mph
                                </span>
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>}
                </div>
                <Img
                  className="absolute h-[39.97px] inset-x-[0] w-[305.22px] ml-[19.98px] top-[20.89px]"
                  src="images/img_statusbar.svg"
                  alt="statusbar_One"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-start max-w-[1141px] mt-[187px] mx-auto md:px-5 w-full">
          <div data-aos="fade-up" data-aos-duration="2000" className="flex flex-col items-center justify-start w-full px-4">
            <Text
              className="sm:text-[40px] md:text-[46px] text-[50px] text-black-900 text-center"
              size="txtOutfitExtraBold50"
            >
              <>
                Features that are
                <br />
                primed for an ROI
              </>
            </Text>
            <Text
              className="mt-6 text-center text-gray-700 text-xl w-[46%] sm:w-full"
              size="txtInterMedium20"
            >
              We have many features designed to enhance your Guests Experience
              and to help your business grow.
            </Text>
            <div data-aos="fade-up" data-aos-duration="1000" className="flex flex-col md:gap-10 gap-[62px] items-center justify-start mt-[78px] w-full">
              <div className="perspective-10 font-inter md:gap-5 gap-[38px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                <Card image={'images/img_magicpatterndesign_142x142.png'} text={'Food & Beverage'} svg={'images/img_frame_white_a700.svg'} />
                {/* <div className=" bg-white-A700 flex flex-1 flex-col gap-[39px] items-center justify-end p-9 sm:px-5 rounded-[24px] shadow-bs w-full z-10">
                  <div className="h-[142px] relative w-[142px]">
                    <Img
                      className="h-[142px] m-auto object-cover rounded-[24px] w-[142px]"
                      src="images/img_magicpatterndesign_142x142.png"
                      alt="magicpatterndes"
                    />
                    <Img
                      className="absolute h-[84px] inset-[0] justify-center m-auto w-[84px]"
                      src="images/img_frame_white_a700.svg"
                      alt="frame"
                    />
                  </div>
                  <Text
                    className="text-2xl md:text-[22px] text-black-900 text-center sm:text-xl"
                    size="txtInterSemiBold24"
                  >
                    Food & Beverage
                  </Text>
                </div> */}
                <Card image={'images/img_magicpatterndesign_1.png'} text={'Discounts & Offers'} svg={'images/img_frame_white_a700_84x84.svg'} />
                {/* <div className="card bg-white-A700 flex flex-1 flex-col gap-9 items-center justify-start p-[38px] sm:px-5 rounded-[24px] shadow-bs w-full">
                  <div className="h-[142px] relative w-[142px]">
                    <Img
                      className="h-[142px] m-auto object-cover rounded-[24px] w-[142px]"
                      src="images/img_magicpatterndesign_1.png"
                      alt="magicpatterndes"
                    />
                    <Img
                      className="absolute h-[84px] inset-[0] justify-center m-auto w-[84px]"
                      src="images/img_frame_white_a700_84x84.svg"
                      alt="frame"
                    />
                  </div>
                  <Text
                    className="text-2xl md:text-[22px] text-black-900 text-center sm:text-xl"
                    size="txtInterSemiBold24"
                  >
                    Discounts & Offers
                  </Text>
                </div> */}
                <Card image={'images/img_magicpatterndesign_2.png'} text={'Events'} svg={'images/img_frame_84x84.svg'} />
                {/* <div className="bg-white-A700 flex flex-1 flex-col gap-[37px] items-center justify-start p-[38px] sm:px-5 rounded-[24px] shadow-bs w-full card">
                  <div className="h-[142px] relative w-[142px]">
                    <Img
                      className="h-[142px] m-auto object-cover rounded-[24px] w-[142px]"
                      src="images/img_magicpatterndesign_2.png"
                      alt="magicpatterndes"
                    />
                    <Img
                      className="absolute h-[84px] inset-[0] justify-center m-auto w-[84px]"
                      src="images/img_frame_84x84.svg"
                      alt="frame"
                    />
                  </div>
                  <Text
                    className="text-2xl md:text-[22px] text-black-900 text-center sm:text-xl"
                    size="txtInterSemiBold24"
                  >
                    Events
                  </Text>
                </div> */}
                <Card image={'images/img_magicpatterndesign_3.png'} text={'Maps & POIs'} svg={'images/img_frame_1.svg'} />
                {/* <div className=" bg-white-A700 flex flex-1 flex-col gap-[39px] items-center justify-end p-9 sm:px-5 rounded-[24px] shadow-bs w-full card">
                  <div className="h-[142px] relative w-[142px]">
                    <Img
                      className="h-[142px] m-auto object-cover rounded-[24px] w-[142px]"
                      src="images/img_magicpatterndesign_3.png"
                      alt="magicpatterndes"
                    />
                    <Img
                      className="absolute h-[84px] inset-[0] justify-center m-auto w-[84px]"
                      src="images/img_frame_1.svg"
                      alt="frame"
                    />
                  </div>
                  <Text
                    className="text-2xl md:text-[22px] text-black-900 text-center sm:text-xl"
                    size="txtInterSemiBold24"
                  >
                    Maps & POIs
                  </Text>
                </div> */}
                <Card image={'images/img_magicpatterndesign_4.png'} text={'Rentals'} svg={'images/img_clock.svg'} />
                {/* <div className="bg-white-A700 flex flex-1 flex-col gap-[37px] items-center justify-start p-[38px] sm:px-5 rounded-[24px] shadow-bs w-full  card glow">
                  <div className="h-[142px] relative w-[142px]">
                    <Img
                      className="h-[142px] m-auto object-cover rounded-[24px] w-[142px]"
                      src="images/img_magicpatterndesign_4.png"
                      alt="magicpatterndes"
                    />
                    <Img
                      className="absolute h-[84px] inset-[0] justify-center m-auto w-[84px]"
                      src="images/img_clock.svg"
                      alt="clock"
                    />
                  </div>
                  <Text
                    className="text-2xl md:text-[22px] text-black-900 text-center sm:text-xl"
                    size="txtInterSemiBold24"
                  >
                    Rentals
                  </Text>
                </div> */}
                <Card image={'images/img_magicpatterndesign_5.png'} text={'& much more'} svg={'images/img_frame_2.svg'} />
                {/* <div className="bg-white-A700 flex flex-1 flex-col gap-[37px] items-center justify-start p-[38px] sm:px-5 rounded-[24px] shadow-bs w-full card">
                  <div className="h-[142px] relative w-[142px]">
                    <Img
                      className="h-[142px] m-auto object-cover rounded-[24px] w-[142px]"
                      src="images/img_magicpatterndesign_5.png"
                      alt="magicpatterndes"
                    />
                    <Img
                      className="absolute h-[84px] inset-[0] justify-center m-auto w-[84px]"
                      src="images/img_frame_2.svg"
                      alt="frame"
                    />
                  </div>
                  <Text
                    className="text-2xl md:text-[22px] text-black-900 text-center sm:text-xl"
                    size="txtInterSemiBold24"
                  >
                    & much more
                  </Text>
                </div> */}
              </div>
              <Button className="bg-deep_orange-500 cursor-pointer font-extrabold font-outfit leading-[normal] min-w-[232px] py-3 rounded-[12px] shadow-bs text-center text-lg text-white-A700">
                View all our modules
              </Button>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="1000" className="flex flex-col items-center justify-end max-w-[1126px] mt-[163px] mx-auto md:px-5 py-[22px] w-full">
          <Text
            data-aos="fade-up" data-aos-duration="1000"
            className="mt-3.5 sm:text-[40px] md:text-[46px] text-[50px] text-black-900 text-center"
            size="txtOutfitExtraBold50"
          >
            Give it a try!
          </Text>
          <Text
            data-aos="fade-up" data-aos-duration="1500"
            className="mt-[3px] text-center text-gray-700 text-xl w-[53%] sm:w-full"
            size="txtInterMedium20"
          >
            <>
              We&#39;ve set up a scaled down demo for you to play with and see
              just how much creative control you have with our platform.
            </>
          </Text>
          <div data-aos="fade-up" data-aos-duration="2000" className="bg-white-A700 flex md:flex-col flex-row font-inter md:gap-10 items-center justify-between mt-[73px] p-[17px] rounded-[24px] shadow-bs w-full">
            <div className="bg-gray-200 flex md:flex-1 flex-col gap-[35px] items-center justify-start mb-[3px] md:mt-0 mt-[9px] p-[13px] rounded-[24px] w-[29%] px-4 md:w-full">
              <Text
                className="mt-4 text-2xl md:text-[22px] text-black-900 text-center sm:text-xl"
                size="txtInterSemiBold24"
              >
                Modules
              </Text>
              <div className="flex flex-col gap-9 items-center justify-start w-[95%] md:w-full">
                <div className="flex flex-col gap-3 items-center justify-start w-full">
                  <Img
                    className="h-[133px] md:h-auto object-cover rounded-bl-[12px] rounded-br-[12px] w-full"
                    src="images/img_rectangle5841.png"
                    alt="rectangle5841"
                  />
                  <Text
                    className="text-base text-blue_gray-900_bf text-center"
                    size="txtInterMedium16"
                  >
                    Hero Image 1
                  </Text>
                </div>
                <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                  <div className="font-nunito h-[100px] relative rounded-[12px] shadow-bs w-full">
                    <Img
                      className="h-[100px] m-auto object-cover rounded-[12px] w-full"
                      src="images/img_rectangle5852.png"
                      alt="rectangle5852_Two"
                    />
                    <div className="absolute flex flex-col items-start justify-start left-[4%] top-[26%]">
                      <Text
                        className="text-sm text-white-A700 tracking-[0.10px]"
                        size="txtNunitoExtraBold14"
                      >
                        Save 30% on all Lift Upgrades
                      </Text>
                      <Text
                        className="bg-white-A700 h-[18px] justify-center mt-0.5 px-4 py-[3px] rounded-[9px] text-[8px] text-black-900_99 w-auto"
                        size="txtNunitoMedium8"
                      >
                        Expires in 48 Hours
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="text-base text-blue_gray-900_bf text-center"
                    size="txtInterMedium16"
                  >
                    Offers 1
                  </Text>
                </div>
                <div className="flex flex-col gap-3 items-center justify-start w-[51%] md:w-full">
                  <div className="h-[100px] relative rounded-[20px] shadow-bs w-full">
                    <Img
                      className="h-[100px] m-auto object-cover rounded-[20px] w-full"
                      src="images/img_rectangle5823.png"
                      alt="rectangle5823"
                    />
                    <div className="absolute bottom-[8%] flex flex-col gap-2 items-start justify-start left-[9%] w-[38%]">
                      <Img
                        className="h-[18px]"
                        src="images/img_airplane_white_a700.svg"
                        alt="airplane_One"
                      />
                      <Text
                        className="text-white-A700 text-xs"
                        size="txtInterBold12"
                      >
                        Weather
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="text-base text-blue_gray-900_bf text-center"
                    size="txtInterMedium16"
                  >
                    Tile
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-3 items-center justify-start mb-[15px] w-full">
                <div className="font-outfit h-[100px] relative w-full">
                  <div className="h-[100px] m-auto shadow-bs w-[94%]"></div>
                  <div
                    className="absolute bg-cover bg-no-repeat flex flex-row h-full inset-[0] items-start justify-between m-auto p-[7px] rounded-[12px] w-full"
                    style={{
                      backgroundImage: "url('images/img_largeweather.png')",
                    }}
                  >
                    <div className="md:h-[66px] h-[83px] ml-2.5 relative w-3/5">
                      <div className="absolute bottom-[0] flex flex-col items-center justify-start left-[0] w-[83%]">
                        <div className="flex flex-row items-start justify-between w-full">
                          <div className="flex flex-col items-start justify-start">
                            <Text
                              className="text-[10px] text-white-A700_a2"
                              size="txtOutfitMedium10"
                            >
                              Blazing Blizzard
                            </Text>
                            <Text
                              className="mt-[25px] text-[10px] text-white-A700_a2"
                              size="txtOutfitMedium10"
                            >
                              Snowfall
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[11px] text-white-A700 text-xs"
                              size="txtOutfitBold12"
                            >
                              18”
                            </Text>
                          </div>
                          <Text
                            className="mt-[38px] text-[10px] text-white-A700_a2"
                            size="txtOutfitMedium10"
                          >
                            Lifts
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="absolute bottom-[0] right-[14%] text-white-A700 text-xs"
                        size="txtOutfitBold12"
                      >
                        18/24
                      </Text>
                      <Text
                        className="absolute left-[0] text-[10px] text-white-A700 top-[2%]"
                        size="txtOutfitBold10"
                      >
                        Snow
                      </Text>
                      <div className="absolute flex flex-row items-start justify-evenly right-[0] top-[0] w-[39%]">
                        <Text
                          className="h-[51px] sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
                          size="txtOutfitBold40"
                        >
                          24
                        </Text>
                        <Text
                          className="mt-[5px] text-center text-white-A700 text-xs"
                          size="txtOutfitBold12"
                        >
                          °F
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start mr-[13px] mt-1 w-[12%]">
                      <Img
                        className="h-6 md:ml-[0] ml-[7px] w-6"
                        src="images/img_airplane.svg"
                        alt="airplane_Two"
                      />
                      <Text
                        className="ml-0.5 md:ml-[0] mt-[27px] text-[10px] text-white-A700_a2"
                        size="txtOutfitMedium10"
                      >
                        Wind
                      </Text>
                      <Text
                        className="text-white-A700 text-xs"
                        size="txtInterBold12"
                      >
                        <span className="text-white-A700 font-outfit text-left font-bold">
                          6
                        </span>
                        <span className="text-white-A700 font-outfit text-left text-[10px] font-medium">
                          mph
                        </span>
                      </Text>
                    </div>
                  </div>
                </div>
                <Text
                  className="text-base text-blue_gray-900_bf text-center"
                  size="txtInterMedium16"
                >
                  Weather
                </Text>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col font-nunito items-center justify-start w-[28%] md:w-full">
              <div className="md:h-[611px] h-[631px] relative w-[304.81px]">
                <div className=" relative h-[611.72px] m-auto w-[301.75px]">
                  <Img
                    className="h-[611px] m-auto object-cover w-[301.75px]"
                    src="images/img_iphone12pro.png"
                    alt="iphone12pro_Five"
                  />
                  <div className="absolute h-[586.3px] inset-[0] justify-center w-[271.53px] mt-[12.71px] ml-[15.33px]">
                    <Img
                      className="h-[586px] object-cover w[271.53px]"
                      src="images/img_screeniphone12_586x271.png"
                      alt="screeniphoneTwelve_Five"
                    />
                    <Text
                      className="absolute left-[5%] text-shadow-ts text-sm text-white-A700 top-[11%]"
                      size="txtNunitoExtraBold14"
                    >
                      Hello, Guest! 👋
                    </Text>
                  </div>
                </div>
                <Img
                  className="absolute h-[34.84px] w-[266.02px] inset-x-[0] ml-[15.33px] top-[8.57px]"
                  src="images/img_statusbar_white_a700.svg"
                  alt="statusbar_Five"
                />
              </div>
            </div>
            <div className="bg-gray-200 flex md:flex-1 flex-col font-inter items-center justify-start mb-[3px] md:mt-0 mt-[9px] p-[27px] sm:px-5 rounded-[24px] w-[29%] md:w-full">
              <div className="flex flex-col gap-[38px] items-center justify-start mb-[138px] w-[93%] md:w-full">
                <Text
                  className="text-2xl md:text-[22px] text-black-900 text-center sm:text-xl"
                  size="txtInterSemiBold24"
                >
                  Editor
                </Text>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                      <Text
                        className="text-base text-blue_gray-900_bf"
                        size="txtInterMedium16"
                      >
                        Color
                      </Text>
                      <div className="flex flex-row gap-5 items-center justify-between w-full">
                        <Input
                          name="rectangle5844"
                          placeholder=""
                          className="p-0 w-full"
                          wrapClassName="bg-deep_orange-500 flex h-10 rounded-[10px] shadow-bs1 w-10"
                        ></Input>
                        <Button className="bg-white-A700 cursor-pointer font-medium leading-[normal] min-w-[180px] py-2.5 rounded-[10px] shadow-bs1 text-base text-blue_gray-900 text-center">
                          #F96221
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[5px] items-start justify-start mt-[38px] w-full">
                    <Text
                      className="text-base text-blue_gray-900_bf"
                      size="txtInterMedium16"
                    >
                      Font
                    </Text>
                    <Button className="bg-white-A700 cursor-pointer font-medium leading-[normal] min-w-[240px] py-2.5 rounded-[10px] shadow-bs1 text-base text-blue_gray-900 text-center">
                      Inter
                    </Button>
                  </div>
                  <div className="flex flex-row items-start justify-between mt-7 w-[97%] md:w-full">
                    <Text
                      className="text-base text-blue_gray-900_bf"
                      size="txtInterMedium16"
                    >
                      Image
                    </Text>
                    <Img
                      className="h-5 w-5"
                      src="images/img_trash.svg"
                      alt="trash"
                    />
                  </div>
                  <Img
                    className="h-[207px] md:h-auto mt-1 object-cover rounded-[10px] w-full"
                    src="images/img_rectangle5845.png"
                    alt="rectangle5845"
                  />
                  <div className="flex flex-col items-start justify-start mt-[39px] w-full">
                    <Text
                      className="text-base text-blue_gray-900_bf"
                      size="txtInterMedium16"
                    >
                      Edges
                    </Text>
                    <Button className="bg-white-A700 cursor-pointer font-medium leading-[normal] min-w-[240px] mt-1 py-2.5 rounded-[10px] shadow-bs1 text-base text-blue_gray-900 text-center">
                      Round
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Text
            className="mt-[37px] text-base text-center text-gray-700_7f w-[46%] sm:w-full"
            size="txtInterMedium16Gray7007f"
          >
            <>
              Please note: The demo above is just to show you how easy our
              Novara App Editor is to use. It doesn&#39;t showcase all the
              features, themes and capabilities you&#39;ll have when you use the
              full version.
            </>
          </Text>
        </div>
        <div data-aos="fade-up" data-aos-duration="1000" className="flex flex-col items-center justify-start mt-[167px] md:px-5 w-[41%] md:w-full">
          <div data-aos="fade-up" data-aos-duration="1000" className="flex flex-col gap-6 items-center justify-start w-full">
            <Text
              className="sm:text-[40px] md:text-[46px] text-[50px] text-black-900 text-center"
              size="txtOutfitExtraBold50"
            >
              <>
                Unleash your
                <br />
                inner creativity
              </>
            </Text>
            <Text
              className="text-center text-gray-700 text-xl w-full"
              size="txtInterMedium20"
            >
              You have the creative control to make your app look and feel
              exactly how you need it to.
            </Text>
          </div>
          <div data-aos="fade-up" data-aos-duration="1500" className="flex flex-col gap-6 items-center justify-start mt-[63px] pb-[17px] w-full">
            <Text
              className="sm:text-[40px] md:text-[46px] text-[50px] text-black-900 text-center"
              size="txtOutfitExtraBold50"
            >
              <>
                Save time,
                <br />
                avoid hassle
              </>
            </Text>
            <Text
              className="text-center text-gray-700 text-xl w-full"
              size="txtInterMedium20"
            >
              Forget long Product & Development cycles. Instead, create and
              adjust features whenever it suits you.
            </Text>
          </div>
          <div data-aos="fade-up" data-aos-duration="2000" className="flex flex-col gap-6 items-center justify-start mt-[75px] pb-[17px] w-full">
            <Text
              className="sm:text-[40px] md:text-[46px] text-[50px] text-black-900 text-center"
              size="txtOutfitExtraBold50"
            >
              <>
                Zero coding
                <br />
                required
              </>
            </Text>
            <Text
              className="text-center text-gray-700 text-xl w-full"
              size="txtInterMedium20"
            >
              Bring your app to life without writing a single line of code. We
              made this for you, not developers.
            </Text>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="1000" className="bg-deep_orange-500 flex flex-col font-outfit items-center justify-end mt-[167px] py-8 w-full">
          <div className="flex flex-col items-center justify-start mt-[69px] w-full">
            <Text
              className="sm:text-[40px] md:text-[46px] text-[50px] text-center text-white-A700"
              size="txtOutfitExtraBold50WhiteA700"
            >
              <>
                Ready to increase your <br />
                guest experience?
              </>
            </Text>
            <Button className="bg-black-900 cursor-pointer font-extrabold leading-[normal] min-w-[223px] mt-[52px] py-3 rounded-[12px] shadow-bs text-center text-lg text-white-A700">
              Let’s make an app!
            </Button>
            <Img
              className="h-11 mt-[159px]"
              src="images/img_forward.svg"
              alt="forward"
            />
            <div className="flex flex-row items-center justify-center mt-[25px] md:px-5 w-[19%] md:w-full">
              <Text
                className="text-center text-sm text-white-A700_7f"
                size="txtOutfitMedium14"
              >
                Home
              </Text>
              <Text
                className="ml-[53px] text-center text-sm text-white-A700_7f"
                size="txtOutfitMedium14"
              >
                Modules
              </Text>
              <Text
                className="ml-[46px] text-center text-sm text-white-A700_7f"
                size="txtOutfitMedium14"
              >
                Contact
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing003Page;
