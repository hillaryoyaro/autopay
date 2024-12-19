"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Button,
  Img,
  Checkbox,
  Input,
  Heading,
  Combobox,
  Text,
  Separator,
} from "@/components/ui";
import metadata from "libphonenumber-js/metadata.full.json";
import React from "react";

export default function PersonalAccount() {
  const countryOptions = React.useMemo(() => {
    return Object.entries(metadata.countries).map(([code, data]) => {
      const callingCode = `${data[0]}`;

      const display = {
        code,
        callingCode: `+${callingCode}`,
        imgSrc: `https://catamphetamine.github.io/country-flag-icons/3x2/${code}.svg`,
      };

      return {
        value: code,
        label: <></>,
      };
    });
  }, []);

  return (
    <Dialog>
      <DialogContent className="w-full min-w-[1386px] bg-white-a700 p-[26px] sm:p-5">
        <div className="flex items-center bg-white-a700 md:flex-col">
          <div className="relative h-[920px] w-full bg-gradient1 md:px-5">
            <Img
              src="img_line_pattern.png"
              width={240}
              height={286}
              alt="Linepattern"
              className="absolute right-0 top-0 m-auto h-[286px] w-[36%] object-contain"
            />
            <Img
              src="img_line_pattern_128x258.png"
              width={258}
              height={128}
              alt="Linepattern"
              className="absolute bottom-0 left-0 m-auto h-[128px] w-[40%] object-contain"
            />
            <div className="absolute bottom-[5%] left-0 right-0 mx-[50px] flex flex-1 flex-col items-end md:mx-0">
              <div className="w-[88%] md:w-full">
                <div className="relative h-[442px]">
                  <div className="absolute left-0 right-0 top-0 mx-auto flex-1">
                    <div className="relative h-[358px]">
                      <Img
                        src="img_image_47.png"
                        width={318}
                        height={358}
                        alt="Imagefortyseven"
                        className="absolute bottom-0 left-[8%] top-0 my-auto h-[358px] w-[72%] rounded-[14px] object-contain"
                      />
                      <div className="absolute bottom-[23px] left-0 right-0 mx-auto flex flex-1 flex-col items-start gap-0.5">
                        <div className="mr-12 flex w-[54%] justify-center self-end rounded-[14px] bg-white-a700 p-3 shadow-sm md:mr-0 md:w-full">
                          <div className="flex w-full justify-center gap-3">
                            <Button
                              variant="fill"
                              shape="round"
                              className="w-[44px] rounded-[10px] border-2 border-solid border-gray-100 px-1"
                            >
                              <Img src="img_thumbs_up.svg" width={34} height={34} />
                            </Button>
                            <div className="flex flex-1 flex-col items-start">
                              <div className="flex justify-center self-stretch">
                                <Heading
                                  size="headinglg"
                                  as="h1"
                                  className="font-manrope text-[15px] font-extrabold text-black-900"
                                >
                                  Payment Received
                                </Heading>
                              </div>
                              <Heading
                                size="headings"
                                as="h2"
                                className="font-manrope text-[12px] font-extrabold text-deep_purple-a200"
                              >
                                + $34,908.00
                              </Heading>
                            </div>
                          </div>
                        </div>
                        <div className="w-[26%] rounded-[10px] bg-white-a700 py-3.5 shadow-md md:w-full">
                          <div className="flex flex-col items-center gap-3.5">
                            <Button
                              variant="fill"
                              shape="circle"
                              colorScheme="green_50"
                              className="w-[44px] rounded-[22px] px-3"
                            >
                              <Img src="img_checkmark.svg" width={16} height={12} />
                            </Button>
                            <div className="flex flex-col items-center justify-center gap-4 self-stretch">
                              <Heading
                                size="headingxs"
                                as="h3"
                                className="self-stretch text-center font-manrope text-[10px] font-bold leading-3 text-blue_gray-300"
                              >
                                Transfer was successful!
                              </Heading>
                              <Separator orientation="horizontal" className="h-px w-full self-stretch bg-gray-300" />
                              <Heading
                                size="headingmd"
                                as="h4"
                                className="font-manrope text-[14px] font-extrabold text-black-900_01"
                              >
                                $36,128.00
                              </Heading>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Img
                    src="img_contrast.svg"
                    width={98}
                    height={98}
                    alt="Contrast"
                    className="absolute bottom-[-1px] right-0 m-auto h-[98px] w-[20%] rounded-tl-[46px] rounded-tr-[46px] object-contain"
                  />
                </div>
                <div className="relative z-[1] mt-[-4px] flex flex-col gap-[22px]">
                  <Heading
                    size="heading4xl"
                    as="h5"
                    className="text-center font-manrope text-[40px] font-bold leading-[44px] tracking-[-0.80px] text-white-a700 md:text-[38px] sm:text-[36px]"
                  >
                    All transactions, one platform
                  </Heading>
                  <Text as="p" className="text-center font-manrope text-[16px] font-normal leading-6 text-white-a700">
                    Autopay help user. you save goals and earn back offers. Go to disclaimer for more details and get
                    paychecks upto two days early!
                  </Text>
                </div>
              </div>
              <Img
                src="img_group_45.svg"
                width={84}
                height={82}
                alt="Image"
                className="relative z-[2] mr-[30px] mt-[-22px] h-[82px] w-[16%] object-contain md:mr-0"
              />
            </div>
            <div className="absolute left-0 right-0 top-[4%] mx-auto flex flex-col items-start gap-2.5">
              <Img src="img_plus.svg" width={28} height={28} alt="Plus" className="ml-[62px] h-[28px] md:ml-0" />
              <Img src="img_grid.svg" width={84} height={82} alt="Grid" className="h-[82px] w-[16%] object-contain" />
            </div>
            <Img
              src="img_plus.svg"
              width={28}
              height={28}
              alt="Plus"
              className="absolute bottom-[33%] left-[7%] m-auto h-[28px]"
            />
            <div className="absolute left-0 right-0 top-[19px] mx-[26px] flex flex-1 gap-2.5 md:mx-0">
              <Img src="img_television.svg" width={30} height={30} alt="Television" className="h-[30px]" />
              <Heading size="heading2xl" as="h6" className="font-manrope text-[20px] font-bold text-white-a700">
                Autopay.
              </Heading>
            </div>
          </div>
          <div className="flex w-full flex-col items-center gap-3.5 px-14 md:px-5">
            <div className="flex w-[82%] flex-col gap-10 md:w-full">
              <div className="flex flex-col items-end justify-center gap-1.5 px-1.5">
                <Heading
                  size="heading3xl"
                  as="h2"
                  className="mt-1 text-[28px] font-bold text-black-900_01 md:text-[26px] sm:text-[24px]"
                >
                  Create your personal account
                </Heading>
                <Heading
                  size="headingxl"
                  as="h3"
                  className="mr-[74px] text-[16px] font-semibold text-blue_gray-700 md:mr-0"
                >
                  Send, Spend and Budget Smarter
                </Heading>
              </div>
              <div className="flex flex-col items-end">
                <div className="flex justify-end gap-2.5 self-stretch sm:flex-col">
                  <div className="flex w-[44%] flex-col items-start gap-1 sm:w-full">
                    <Heading as="h4" className="text-[14px] font-medium text-neutral-2">
                      <span className="text-neutral-2">Full Name</span>
                      <span className="text-orange-900">&nbsp;*</span>
                    </Heading>
                    <Input
                      shape="round"
                      type="text"
                      placeholder={`First Name`}
                      className="mb-5 self-stretch rounded !border px-2.5"
                    />
                  </div>
                  <div className="flex w-[46%] justify-center py-[22px] sm:w-full sm:py-5">
                    <Input
                      shape="round"
                      type="text"
                      placeholder={`Last Name`}
                      className="w-full self-end rounded !border px-2.5 !text-gray-500"
                    />
                  </div>
                </div>
                <div className="mt-3 flex w-[90%] flex-col items-start gap-1 rounded md:w-full">
                  <Heading size="textxs" as="h5" className="mt-1 text-[14px] font-medium text-neutral-2">
                    <span className="text-gray-500">Email&nbsp;</span>
                    <span className="text-orange-900">*</span>
                  </Heading>
                  <Input
                    shape="round"
                    colorScheme="text_8"
                    type="email"
                    placeholder={`Enter email address`}
                    className="self-stretch rounded !border px-2.5"
                  />
                </div>
                <div className="mt-6 flex w-[90%] flex-col items-start gap-1 md:w-full">
                  <Heading as="h6" className="text-[14px] font-medium text-neutral-2">
                    <span className="text-neutral-2">Phone Number</span>
                    <span className="text-orange-900">&nbsp;*</span>
                  </Heading>
                  <div className="flex h-[40px] items-center justify-center self-stretch rounded border border-solid border-neutral-5">
                    <Combobox
                      options={countryOptions}
                      defaultValue={""}
                      width="104"
                      className="flex max-h-[40px] flex-shrink-0 items-center justify-center rounded-bl rounded-tl border-r border-solid border-none border-neutral-5 bg-transparent"
                    />
                    <Input
                      size="xs"
                      shape="square"
                      placeholder="712 123456"
                      type="tel"
                      className="ml-2.5 flex-grow border-none px-3 text-neutral-4"
                    />
                  </div>
                </div>
                <div className="mt-10 flex w-[90%] flex-col items-start gap-1 md:w-full">
                  <Heading as="p" className="text-[14px] font-medium text-neutral-2">
                    <span className="text-neutral-2">Password</span>
                    <span className="text-orange-900">&nbsp;*</span>
                  </Heading>
                  <Input
                    size="md"
                    shape="round"
                    type="password"
                    placeholder={`Enter Password`}
                    className="mb-5 self-stretch rounded !border px-3"
                  />
                </div>
              </div>
            </div>
            <div className="flex w-[82%] flex-col items-end gap-3 md:w-full">
              <Checkbox
                label="By creating an account, you are agreeing to our Terms 
and conditions"
                id="89:3251"
                className="gap-2 pr-6 text-left text-[14px] font-medium leading-[21px] text-neutral-2 sm:pr-5"
              />
              <Button
                size="sm"
                shape="round"
                colorScheme="deep_orange_700_01_yellow_900_01"
                rightIcon={
                  <Img
                    src="img_arrowleft.svg"
                    width={16}
                    height={10}
                    alt="Arrow Left"
                    className="mb-1.5 mt-2 h-[10px] w-[16px] object-contain"
                  />
                }
                className="w-full min-w-[420px] max-w-[420px] gap-5 rounded-lg px-[34px] font-manrope font-bold sm:px-5"
              >
                Continue
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
