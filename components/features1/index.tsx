import { Divider, Grid, Text } from "@nextui-org/react";
import React from "react";
import { BoxIcon } from "../icons/BoxIcon";
import { FeatureIcon } from "../icons/FeatureIcon";
import { Box } from "../styles/box";
import { Flex } from "../styles/flex";

export const Features1 = () => {
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
            justifyContent: "space-around",
            px: "$32",
            flexDirection: "row",
          },
          "@md": {
            px: "$64",
          },
        }}
      >
        <Flex direction="column">
          <Text h3>Thiết Kế và Quản Lý Tour</Text>
          <Flex
            css={{
              py: "$10",
              gap: "$5",
            }}
          >
            <BoxIcon />
            <Flex direction={"column"}>
              <Text h4 weight={"medium"}>
                Quản lý sản phẩm tour chuyên nghiệp
              </Text>
              <Text
                span
                css={{
                  maxWidth: "400px",
                  color: "$accents8",
                }}
              >
                Thiết kế sản phẩm với nhiều bước, quản lý chi tiết thông tin sản
                phẩm linh hoạt và dễ sử dụng, giúp bạn tạo các sản phẩm tour một
                cách hiệu quả và chuyên nghiệp.
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
                Tạo chương trình tour dễ dàng
              </Text>
              <Text
                span
                css={{
                  maxWidth: "400px",
                  color: "$accents8",
                }}
              >
                Tạo chương trình tour từ các sản phẩm tour một cách nhanh chóng
                và tiện lợi. Dễ dàng chỉnh sửa theo nhu cầu, giúp bạn tùy biến
                chương trình tour phù hợp với yêu cầu của khách hàng.
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
                Quản lý hóa đơn và đặt chỗ hiệu quả
              </Text>
              <Text
                span
                css={{
                  maxWidth: "400px",
                  color: "$accents8",
                }}
              >
                Quản lý danh sách hóa đơn và đặt chỗ một cách hiệu quả. Tạo mới
                và chỉnh sửa hóa đơn, ghi nhận thanh toán và gửi email tự động,
                đảm bảo quy trình quản lý tài chính và đặt chỗ chuyên nghiệp và
                chính xác.
              </Text>
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
