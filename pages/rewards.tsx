import Head from "next/head";
import * as React from "react";

import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  InputBase,
  Typography,
} from "@mui/material";
import {
  AddRounded,
  ArrowBackIosNewRounded,
  CardGiftcardRounded,
  MenuBookRounded,
  SearchOffOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import {
  SearchIconWrapper,
  SelectInputBase,
  Search,
} from "@/services/StyleUtils";
import ImageSlider from "../components/ImageSlider";
import TapsProps from "@/components/Tabs";
import router from "next/router";
import Image from "next/image";
import mypic from "../assets/imges/1709677279796.jpg";

export default function Rewards() {
  const [searchPlaceholder, setSearchPlaceholder] =
    React.useState("ค้นหาหนังสือ");

  const slides = [
    {
      title: "Slide 1",
      description: "Description for Slide 1",
    },
    {
      title: "Slide 2",
      description: "Description for Slide 2",
    },
    {
      title: "Slide 3",
      description: "Description for Slide 3",
    },
    // Add more slides as needed
  ];
  return (
    <>
      <Head>
        <title>Yaakz Member</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box className="container">
        <div className="toolbar">
          <IconButton onClick={() => router.back()}>
            <ArrowBackIosNewRounded />
          </IconButton>
          <Typography style={{ fontSize: 24 }}>แลกของรางวัล</Typography>
          <div />
        </div>
        <div className="box-points">
          <div className="box-points-left">
            <CardGiftcardRounded sx={{ width: 40, height: 40 }} />
            <div>
              <Typography style={{ fontSize: "12px", marginBottom: 5 }}>
                คะแนนสะสม
              </Typography>
              <div className="point">
                <Typography style={{ fontSize: "20px" }}>200</Typography>
                <div className="icon-point">
                  <div className="icon-point2"></div>
                  <Typography sx={{ mt: -2.6, ml: 0.8, color: "#fff" }}>
                    P
                  </Typography>
                </div>
              </div>
            </div>
          </div>
          <div className="box-points-right">
            <Typography style={{ fontSize: "14px" }}>30คะแนน</Typography>
            <Typography style={{ fontSize: "14px", marginBottom: 5 }}>
              คะแนนหมดอายุ 31 ธ.ค. 67
            </Typography>
            <Button
              className="point-detail"
              variant="contained"
              color="secondary"
            >
              <Typography style={{ fontSize: "14px" }}>
                ดูประวติการใช้คะแนน
              </Typography>
            </Button>
          </div>
        </div>

        <div className="product-index-container">
          <div style={{ marginTop: 40 }}>
            <div
              style={{
                backgroundColor: "#F1F1F1",
                width: "100%",
                height: 50,
                alignItems: "center",
                display: "flex",
              }}
            >
              <Typography style={{ fontSize: "22px", marginLeft: 20 }}>
                แลกของรางวัล
              </Typography>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <a href="/detail_reward">
                <Card className="box-item-rewards">
                  <CardMedia className="img-item-reward">
                    <Image
                      src={mypic}
                      alt=""
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        position: "absolute",
                      }}
                    />
                  </CardMedia>
                  <CardContent sx={{ marginLeft: -1, marginTop: -1 }}>
                    <Typography>กระเป๋า</Typography>
                    <div className="point2">
                      <Typography style={{ fontSize: "20px" }}>200</Typography>
                      <div className="icon-point-reward">
                        <div className="icon-point-reward2"></div>
                        <Typography sx={{ mt: -2.6, ml: 0.8, color: "#fff" }}>
                          P
                        </Typography>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </a>
              <a href="/detail_reward">
                <Card className="box-item-rewards">
                  <CardMedia className="img-item-reward">
                    <Image
                      src={mypic}
                      alt=""
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        position: "absolute",
                      }}
                    />
                  </CardMedia>
                  <CardContent sx={{ marginLeft: -1, marginTop: -1 }}>
                    <Typography>กระเป๋า</Typography>
                    <div className="point2">
                      <Typography style={{ fontSize: "20px" }}>200</Typography>
                      <div className="icon-point-reward">
                        <div className="icon-point-reward2"></div>
                        <Typography sx={{ mt: -2.6, ml: 0.8, color: "#fff" }}>
                          P
                        </Typography>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </a>
            </div>

            <div style={{ display: "flex", justifyContent: "center" }}>
              <a href="/detail_reward">
                <Card className="box-item-rewards">
                  <CardMedia className="img-item-reward">
                    <Image
                      src={mypic}
                      alt=""
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        position: "absolute",
                      }}
                    />
                  </CardMedia>
                  <CardContent sx={{ marginLeft: -1, marginTop: -1 }}>
                    <Typography>กระเป๋า</Typography>
                    <div className="point2">
                      <Typography style={{ fontSize: "20px" }}>200</Typography>
                      <div className="icon-point-reward">
                        <div className="icon-point-reward2"></div>
                        <Typography sx={{ mt: -2.6, ml: 0.8, color: "#fff" }}>
                          P
                        </Typography>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </a>
              <a href="/detail_reward">
                <Card className="box-item-rewards">
                  <CardMedia className="img-item-reward">
                    <Image
                      src={mypic}
                      alt=""
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        position: "absolute",
                      }}
                    />
                  </CardMedia>
                  <CardContent sx={{ marginLeft: -1, marginTop: -1 }}>
                    <Typography>กระเป๋า</Typography>
                    <div className="point2">
                      <Typography style={{ fontSize: "20px" }}>200</Typography>
                      <div className="icon-point-reward">
                        <div className="icon-point-reward2"></div>
                        <Typography sx={{ mt: -2.6, ml: 0.8, color: "#fff" }}>
                          P
                        </Typography>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </a>
            </div>
          </div>
        </div>
      </Box>
    </>
  );
}
