import Head from "next/head";
import * as React from "react";

import {
  Avatar,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  FormControl,
  IconButton,
  InputBase,
  Select,
  Typography,
} from "@mui/material";
import {
  CardGiftcardRounded,
  ModeEditOutlineRounded,
} from "@mui/icons-material";

import ImageSlider from "../components/ImageSlider";
import TapsProps from "@/components/Tabs";
import { SelectInputBase } from "@/services/StyleUtils";
import DialogProps from "@/components/dialog/DialogSuccess";
import DialogEditUserProps from "@/components/dialog/DialogEditUser";
import ItemRewarsSliders from "@/components/ItemRewarsSliders";

export default function Profile() {
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

  const handleClose = () => {
    setOpenEditUser(false);
  };

  const [openEditUser, setOpenEditUser] = React.useState(false);
  return (
    <>
      <Head>
        <title>Yaakz Member</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="toolbar" />
      <div style={{ display: "grid", justifyContent: "center" }}>
        <Avatar
          style={{ width: 80, height: 80, marginLeft: 10 }}
          alt="Pukky"
          src="/static/images/avatar/1.jpg"
        />

        <div style={{ display: "flex", justifyContent: "center" }}>
          <Typography
            style={{
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              fontSize: 24,
            }}
          >
            Pukky
          </Typography>
          <IconButton onClick={() => setOpenEditUser(true)}>
            <ModeEditOutlineRounded />
          </IconButton>
        </div>
      </div>

      <div className="box-points-profile">
        <div className="box-points-profile-left">
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
        <div className="box-points-profile-right">
          <Typography style={{ fontSize: "14px" }}>30คะแนน</Typography>
          <Typography style={{ fontSize: "14px", marginBottom: 5 }}>
            คะแนนหมดอายุ 31 ธ.ค. 67
          </Typography>
          <a href="/rewards">
            {" "}
            <Button
              className="point-detail"
              variant="contained"
              color="secondary"
            >
              <Typography style={{ fontSize: "14px" }}>
                ดูรายละเอียดเพิ่มเติม
              </Typography>
            </Button>
          </a>
        </div>
      </div>

      <div className="product-index-container2">
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
          <div>
            <ItemRewarsSliders slides={slides} />
          </div>
        </div>
      </div>
      <footer>
        <TapsProps />
      </footer>
      <DialogEditUserProps open={openEditUser} onClose={handleClose} />
    </>
  );
}
