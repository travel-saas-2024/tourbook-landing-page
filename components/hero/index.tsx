import { Button, Divider, Input, Text } from "@nextui-org/react";
import React from "react";
import { CheckIcon } from "../icons/CheckIcon";
import { Box } from "../styles/box";
import { Flex } from "../styles/flex";

export const Hero = () => {
  return (
    <>
      <Flex
        css={{
          gap: "$3",
          px: "$6",
          flexDirection: "column",
          alignContent: "center",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          "@sm": {
            flexDirection: "row",
            mt: "$20",
          },
        }}
        justify={"center"}
      >
        <Box
          css={{
            pt: "$13",

            display: "flex",
            flexDirection: "column",
            gap: "$5",
          }}
        >
          <Box
            css={{
              maxWidth: "600px",
            }}
          >
            <Text
              h1
              css={{
                display: "inline",
              }}
            >
              Hãy để việc điều hành tour{" "}
            </Text>
            <Text
              h1
              css={{
                display: "inline",
              }}
            >
              trở nên{" "}
            </Text>
            <Text
              h1
              css={{
                display: "inline",
              }}
              color="primary"
            >
              dễ dàng!
            </Text>
          </Box>

          <Text
            css={{
              color: "$accents8",
              maxWidth: "400px",
            }}
            size={"$lg"}
            span
          >
            Trải nghiệm quản lý đơn giản và thú vị là chìa khóa cho sự thành
            công của một doanh nghiệp du lịch.
          </Text>

          <Flex
            css={{
              gap: "$8",
              pt: "$4",
            }}
            wrap={"wrap"}
          >
            <Input placeholder="Nhập email của bạn" size="lg" />
            <Button>Đăng ký dùng thử ngay!</Button>
          </Flex>
          <Flex
            wrap={"wrap"}
            css={{
              gap: "$8",
              py: "$7",
              "@sm": {
                py: "$4",
              },
            }}
          >
            <Flex
              css={{
                color: "$accents7",
                alignItems: "center",
              }}
            >
              <CheckIcon /> Không cần thẻ tín dụng
            </Flex>
            <Flex
              css={{
                color: "$accents7",
                alignItems: "center",
              }}
            >
              <CheckIcon /> 14 ngày dùng thử
            </Flex>
            <Flex
              css={{
                color: "$accents7",
                alignItems: "center",
              }}
            >
              <CheckIcon /> Huỷ bất cứ lúc nào!
            </Flex>
          </Flex>
        </Box>
        <Box
          css={{
            "& img": {
              width: "775px",
              objectFit: "contain",
            },
          }}
        >
          <img src="screenshot.png" />
        </Box>
      </Flex>
      <Divider
        css={{ position: "absolute", inset: "0p", left: "0", mt: "$10" }}
      />
    </>
  );
};
