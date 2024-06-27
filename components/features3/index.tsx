import { Card, Divider, Text } from "@nextui-org/react";
import React from "react";
import { BoxIcon } from "../icons/BoxIcon";
import { Box } from "../styles/box";
import { Flex } from "../styles/flex";

export const Features3 = () => {
  return (
    <>
      <Box
        css={{
          px: "$6",
          pb: "$14",
        }}
      >
        <Flex
          direction={"column"}
          justify={"center"}
          align={"center"}
          css={{
            pt: "$20",
          }}
        >
          <Text h3>Quản Lý Nhà Cung Cấp</Text>
        </Flex>
        <Flex
          align={"center"}
          justify={"center"}
          wrap={"wrap"}
          css={{
            gap: "1rem",
            pt: "$14",
          }}
        >
          <Card css={{ mw: "500px" }}>
            <Card.Body>
              <Flex css={{ gap: "0.5rem" }}>
                <BoxIcon />
                <Flex direction={"column"}>
                  <Text h5>Danh sách nhà cung cấp toàn diện</Text>
                  <Text span>
                    Dễ dàng tìm kiếm và truy xuất thông tin nhà cung cấp, tùy
                    chọn sắp xếp và lọc danh sách theo nhiều tiêu chí khác nhau
                  </Text>
                </Flex>
              </Flex>
            </Card.Body>
          </Card>
          <Card css={{ mw: "500px" }}>
            <Card.Body>
              <Flex css={{ gap: "0.5rem" }}>
                <BoxIcon />
                <Flex direction={"column"}>
                  <Text h5>Quản lý thông tin hợp đồng</Text>
                  <Text span>
                    Quản lý thông tin hợp đồng năm hiện tại và năm kế tiếp. Hỗ
                    trợ cập nhật và theo dõi thông tin hợp đồng. Đảm bảo bạn
                    luôn nắm rõ tình trạng hợp đồng với nhà cung cấp.
                  </Text>
                </Flex>
              </Flex>
            </Card.Body>
          </Card>
        </Flex>
        <Flex
          align={"center"}
          wrap={"wrap"}
          justify={"center"}
          css={{
            gap: "1rem",
            pt: "$8",
          }}
        >
          <Card css={{ mw: "500px" }}>
            <Card.Body>
              <Flex css={{ gap: "0.5rem" }}>
                <BoxIcon />
                <Flex direction={"column"}>
                  <Text h5>Dịch vụ cung cấp</Text>
                  <Text span>
                    Thêm mới dịch vụ dễ dàng, kèm theo hình ảnh minh họa, giúp
                    bạn cung cấp thông tin rõ ràng và chuyên nghiệp về các dịch
                    vụ của nhà cung cấp.
                  </Text>
                </Flex>
              </Flex>
            </Card.Body>
          </Card>
          <Card css={{ mw: "500px" }}>
            <Card.Body>
              <Flex css={{ gap: "0.5rem" }}>
                <BoxIcon />
                <Flex direction={"column"}>
                  <Text h5>Thanh toán</Text>
                  <Text span>
                    Quản lý thanh toán nhà cung cấp một cách hiệu quả với các
                    công cụ ghi nhận và theo dõi chi tiết các khoản thanh toán,
                    bao gồm các khoản đặt cọc và thanh toán số dư.
                  </Text>
                </Flex>
              </Flex>
            </Card.Body>
          </Card>
        </Flex>
      </Box>

      <Divider
        css={{ position: "absolute", inset: "0p", left: "0", mt: "$5" }}
      />
    </>
  );
};
