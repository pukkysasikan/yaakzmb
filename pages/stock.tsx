import ItemSlider from "@/components/ItemSlider";
import TapsProps from "@/components/Tabs";
import ImageSlider from "@/components/ImageSlider";
import { ArrowBackIosNewRounded, MenuBookRounded } from "@mui/icons-material";
import { IconButton, Slider, Typography } from "@mui/material";
import Head from "next/head";
import router from "next/router";

export default function Stock() {
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
      <div className="toolbar">
        <div></div>
        <Typography style={{ fontSize: 24, marginRight: 20 }}>
          ชั้นหนังสือ
        </Typography>
        <div />
      </div>
      <div className="container">
        <div style={{ height: 300 }}>
          <div
            style={{
              backgroundColor: "#D9D9D9",
              height: 225,
              borderRadius: "0px 0px 20px 20px",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <div className="box-stock">
              <div style={{ padding: 20, justifyContent: "center" }}>
                <MenuBookRounded style={{ width: 90, height: 90 }} />
              </div>
              <div style={{ textAlign: "right", padding: 20 }}>
                <Typography style={{ fontSize: "16px" }}>
                  หนังสือทั้งหมดในคลัง
                </Typography>
                <Typography style={{ fontSize: "20px" }}>200</Typography>
                <Typography style={{ fontSize: "16px" }}>เล่ม</Typography>
              </div>
            </div>
          </div>
        </div>

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
            สำนักพิมพ์
          </Typography>
        </div>
        <div>
          <ItemSlider slides={slides} />
        </div>

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
              ที่เพิ่มในคลังล่าสุด
            </Typography>
          </div>
          <div style={{ marginBottom: 10 }}>
            <ImageSlider slides={slides} />
          </div>
        </div>
        <div style={{ height: 70 }} />
      </div>

      <TapsProps />
    </>
  );
}
