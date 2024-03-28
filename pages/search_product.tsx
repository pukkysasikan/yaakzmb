import Head from "next/head";
import * as React from "react";

import { Button, IconButton, Typography } from "@mui/material";
import {
  AddRounded,
  ArrowBackIosNewRounded,
  CheckCircleOutlined,
  CheckRounded,
} from "@mui/icons-material";

import TapsProps from "@/components/Tabs";
import router from "next/router";
import DialogProps from "@/components/dialog/DialogSuccess";

export default function SearchProduct() {
  const [openSuccess, setOpenSuccess] = React.useState(false);

  const handleClose = () => {
    setOpenSuccess(false);
  };
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
        <Typography style={{ fontSize: "24px", marginRight: 30 }}>
          ผลการค้นหา
        </Typography>
        <div />
      </div>

      <Typography
        style={{
          justifyContent: "left",
          display: "flex",

          marginLeft: 20,
          fontSize: "24px",
        }}
      >
        โคนัน
      </Typography>
      <div
        style={{
          justifyContent: "left",
          display: "flex",
          gap: 20,
          marginLeft: 20,
        }}
      >
        <div>
          <Typography>ทั้งหมด</Typography>
          <Typography>200</Typography>
          <Typography>เล่ม</Typography>
        </div>
        <div style={{ borderRight: "1px solid #7B7878" }}></div>
        <div>
          <Typography>คลังของฉัน</Typography>
          <Typography>200</Typography>
          <Typography>เล่ม</Typography>
        </div>
      </div>
      <div className="box-search-item2">
        <div className="box-item">
          <div className="img-item">
            <Typography>รูปภาพ</Typography>
          </div>
          <div style={{ width: 230, marginTop: -5 }}>
            <Typography style={{ height: 55 }}>
              ยอดนักสืบจิ๋ว โคนัน ล.5 - วันสบายๆของซีโร่ (90)
            </Typography>
            <div>
              <Button
                onClick={(_) => setOpenSuccess(true)}
                className="btn-add-item-search"
                variant="contained"
                color="secondary"
              >
                <AddRounded style={{ width: 16, height: 16 }} />
                <Typography style={{ fontSize: "14px" }}>
                  เพิ่มในคลัง
                </Typography>
              </Button>
            </div>
          </div>
        </div>

        <div className="box-item">
          <div className="img-item">
            <Typography>รูปภาพ</Typography>
          </div>
          <div style={{ width: 230, marginTop: -5 }}>
            <Typography style={{ height: 55 }}>
              ยอดนักสืบจิ๋ว โคนัน ล.5 - วันสบายๆของซีโร่ (90)
            </Typography>
            <div>
              <Button
                className="btn-add-item-search-success"
                variant="contained"
                color="secondary"
              >
                <CheckRounded style={{ width: 16, height: 16 }} />
                <Typography style={{ fontSize: "14px" }}>
                  เพิ่มในคลังแล้ว
                </Typography>
              </Button>
            </div>
          </div>
        </div>
      </div>
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

      <TapsProps />
    </>
  );
}
