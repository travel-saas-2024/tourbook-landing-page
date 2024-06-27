import { Button, Divider, Text } from "@nextui-org/react";
import React from "react";
import { Flex } from "../styles/flex";

export const Trial = () => {
  return (
    <>
      <Flex
        css={{
          py: "$20",
          px: "$6",
        }}
        justify={"center"}
        direction={"column"}
        align={"center"}
      >
        <Text h3>Bắt đầu dùng thử ngay!</Text>
        <Text
          span
          css={{
            color: "$accents8",
            pb: "$15",
            textAlign: "center",
          }}
        >
          Quản lý tour dễ dàng và hiệu quả hơn với Tourbook ngay hôm nay.
        </Text>

        <Button>Đăng ký dùng thử</Button>
      </Flex>

      <Divider
        css={{ position: "absolute", inset: "0p", left: "0", mt: "$5" }}
      />
    </>
  );
};
