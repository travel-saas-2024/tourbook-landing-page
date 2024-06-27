import { Button, Divider, Text } from "@nextui-org/react";
import React from "react";
import { BoxIcon } from "../icons/BoxIcon";
import { FeatureIcon } from "../icons/FeatureIcon";
import { Flex } from "../styles/flex";

export const Features2 = () => {
  return (
    <>
      <Flex
        direction={"column"}
        css={{
          gap: "1rem",
          pt: "$20",
          justifyContent: "center",
          alignItems: "center",
          px: "$6",

          "@sm": {
            gap: "5rem",
            flexDirection: "row-reverse",
            px: "$16",
          },
          "@md": {
            justifyContent: "space-evenly",
          },
        }}
      >
        <Flex direction="column" align={"center"}>
          <Text h3>Quản Lý Khách Hàng</Text>

          <Flex
            justify={"center"}
            wrap={"wrap"}
            css={{
              py: "$10",
            }}
          >
            <Flex
              css={{
                py: "$10",
                gap: "$5",
              }}
            >
              <BoxIcon />
              <Flex direction={"column"}>
                <Text h4 weight={"medium"}>
                  Thông tin khách hàng
                </Text>
                <Text
                  span
                  css={{
                    maxWidth: "325px",
                    color: "$accents8",
                  }}
                >
                  Theo dõi và cập nhật thông tin khách hàng chi tiết, bao gồm
                  liên lạc và lịch sử giao dịch, giúp duy trì mối quan hệ chặt
                  chẽ và tăng cường hiệu quả kinh doanh.
                </Text>
              </Flex>
            </Flex>
            <Flex
              css={{
                py: "$10",
                gap: "$5",
              }}
            >
              <BoxIcon />
              <Flex direction={"column"}>
                <Text h4 weight={"medium"}>
                  Dễ dàng thu thập thông tin đoàn
                </Text>
                <Text
                  span
                  css={{
                    maxWidth: "325px",
                    color: "$accents8",
                  }}
                >
                  Các biểu mẫu và công cụ tự động để thu thập thông tin từ các
                  đoàn khách, đảm bảo dữ liệu chính xác và nhanh chóng để tổ
                  chức tour một cách hiệu quả.
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex align={"center"}>
          <FeatureIcon />
        </Flex>
      </Flex>

      <Divider
        css={{ position: "absolute", inset: "0p", left: "0", mt: "$5" }}
      />
    </>
  );
};
