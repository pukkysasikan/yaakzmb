import TapsProps from "@/components/Tabs";
import DialogProps from "@/components/dialog/DialogSuccess";
import {
  ArrowBackIosNewRounded,
  CheckCircleOutlined,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import Image from "next/image";
import mypic from "../assets/imges/1709677279796.jpg";

export default function ItemDetailRewards() {
  const [openSuccess, setOpenSuccess] = React.useState(false);

  const handleClose = () => {
    setOpenSuccess(false);
  };

  const router = useRouter();
  return (
    <>
      <Head>
        <title>Yaakz Member</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="toolbar">
        <IconButton onClick={() => router.back()}>
          <ArrowBackIosNewRounded />
        </IconButton>
        <Typography style={{ fontSize: 24 }}>รายละเอียดสินค้า</Typography>
        <div />
      </div>
      <Box className="container">
        <div className="product-index-container">
          <Card
            sx={{
              boxShadow: "none",
              display: "grid",
              justifyContent: "center",
            }}
          >
            <CardMedia className="img-detail-reward">
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
            <CardContent>
              <Typography style={{ fontSize: 20 }}>ถุงผ้า รุ่นโกลว์</Typography>
              <Typography>
                ถุงผ้า รุ่นโกลว์ ขนาด 40 X 0.3 X 45 ซม. - สีเบจ/ดำ
              </Typography>
            </CardContent>
          </Card>
        </div>

        <div className="bottom">
          <div className="box-btn-reward">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: 10,
              }}
            >
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Typography>คะแนนของคุณ</Typography>
                <div className="point2">
                  <Typography style={{ fontSize: "20px" }}>200</Typography>
                  <div className="icon-point-reward">
                    <div className="icon-point-reward2"></div>
                    <Typography sx={{ mt: -2.6, ml: 0.8, color: "#fff" }}>
                      P
                    </Typography>
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Typography sx={{ mr: 1 }}>ใช้คะแนน</Typography>
                <div className="point2">
                  <Typography style={{ fontSize: "20px" }}>50</Typography>
                  <div className="icon-point-reward">
                    <div className="icon-point-reward2"></div>
                    <Typography sx={{ mt: -2.6, ml: 0.8, color: "#fff" }}>
                      P
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ justifyContent: "center", display: "flex" }}>
              <Button
                onClick={() => setOpenSuccess(true)}
                style={{
                  width: "90%",
                  borderRadius: 10,
                  backgroundColor: "#F1F1F1",
                  color: "#7B7878",
                }}
                variant="contained"
              >
                ยืนยัน
              </Button>

              <DialogProps
                open={openSuccess}
                onClose={handleClose}
                text="แลกของรางวัลสำเร็จ"
                icon={
                  <CheckCircleOutlined
                    style={{ width: 100, height: 100, color: "#60D36C" }}
                  />
                }
              />
            </div>
          </div>
        </div>
      </Box>
    </>
  );
}
