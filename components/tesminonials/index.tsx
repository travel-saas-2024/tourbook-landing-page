import { Button, Card, Divider, Text } from "@nextui-org/react";
import React from "react";
import { QuotesIcon } from "../icons/QuotesIcon";
import { Flex } from "../styles/flex";

export const Testimonials = () => {
  return (
    <>
      <Flex
        direction={"column"}
        css={{
          gap: "1rem",
          justifyContent: "center",
          alignItems: "center",
          px: "$6",
          py: "$20",
          flexDirection: "column-reverse",
          "@sm": {
            justifyContent: "space-around",
            px: "$32",
            flexDirection: "row-reverse",
          },
          "@md": {
            px: "$64",
          },
        }}
      >
        <Flex direction="column" css={{ gap: "1.5rem" }}>
          <Card>
            <Card.Body>
              <Flex
                css={{
                  py: "$10",
                  gap: "$5",
                }}
              >
                <QuotesIcon />
                <Flex direction={"column"} css={{ gap: "0.5rem" }}>
                  <Text
                    span
                    css={{
                      maxWidth: "400px",
                      color: "$accents8",
                    }}
                  >
                    Tourbook là công cụ quản lý tour rất hiệu quả và dễ sử dụng.
                    Tôi thực sự ấn tượng với tính linh hoạt của nó trong việc
                    tạo và quản lý các chương trình tour.
                  </Text>
                  <Text
                    span
                    weight={"bold"}
                    css={{
                      maxWidth: "400px",
                      display: "contents",
                      color: "$accents9",
                    }}
                  >
                    Jennifer Ford{" "}
                  </Text>
                  <Text
                    span
                    css={{
                      display: "contents",
                      color: "$accents8",
                    }}
                  >
                    - CEO at Company
                  </Text>
                </Flex>
              </Flex>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <Flex
                css={{
                  py: "$10",
                  gap: "$5",
                }}
              >
                <QuotesIcon />
                <Flex direction={"column"} css={{ gap: "0.5rem" }}>
                  <Text
                    span
                    css={{
                      maxWidth: "400px",
                      color: "$accents8",
                    }}
                  >
                    Khả năng chỉnh sửa và tùy biến chi tiết theo nhu cầu của
                    từng tour là điều mà tôi đánh giá cao Tourbook. Tourbook đã
                    giúp cho công việc của chúng tôi trở nên dễ dàng và hiệu quả
                    hơn nhiều.
                  </Text>
                  <Text
                    span
                    weight={"bold"}
                    css={{
                      maxWidth: "400px",
                      display: "contents",
                      color: "$accents9",
                    }}
                  >
                    Jennifer Ford{" "}
                  </Text>
                  <Text
                    span
                    css={{
                      display: "contents",
                      color: "$accents8",
                    }}
                  >
                    - CEO at Company
                  </Text>
                </Flex>
              </Flex>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <Flex
                css={{
                  py: "$10",
                  gap: "$5",
                }}
              >
                <QuotesIcon />
                <Flex direction={"column"} css={{ gap: "0.5rem" }}>
                  <Text
                    span
                    css={{
                      maxWidth: "400px",
                      color: "$accents8",
                    }}
                  >
                    Tôi rất hài lòng với khả năng của TourBook trong việc tổ
                    chức và theo dõi các chương trình tour của chúng tôi. Giao
                    diện thân thiện và tính năng linh hoạt giúp cho việc làm
                    việc hàng ngày của chúng tôi trở nên đơn giản và hiệu quả
                    hơn rất nhiều.
                  </Text>
                  <Text
                    span
                    weight={"bold"}
                    css={{
                      maxWidth: "400px",
                      display: "contents",
                      color: "$accents9",
                    }}
                  >
                    Jennifer Ford{" "}
                  </Text>
                  <Text
                    span
                    css={{
                      display: "contents",
                      color: "$accents8",
                    }}
                  >
                    - CEO at Company
                  </Text>
                </Flex>
              </Flex>
            </Card.Body>
          </Card>
        </Flex>
        <Flex
          align={"start"}
          direction={"column"}
          css={{
            alignItems: "center",
            "@sm": {
              alignItems: "start",
            },
          }}
        >
          <Text h3>Từ Khách Hàng</Text>
          <Text span css={{ color: "$accents8", maxW: "600px", pb: "$8" }}>
            Tìm hiểu cách chúng tôi đã giúp các doanh nghiệp khác nhau tăng
            cường hiệu quả kinh doanh du lịch của mình.
          </Text>
          <Button>Read case studies</Button>
        </Flex>
      </Flex>
      Over 8000+ projects completed
      <Divider
        css={{ position: "absolute", inset: "0p", left: "0", mt: "$5" }}
      />
    </>
  );
};
