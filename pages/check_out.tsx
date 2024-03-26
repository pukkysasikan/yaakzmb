import Head from "next/head";
import * as React from "react";

import { Box, Button, IconButton, Typography } from "@mui/material";
import {
  ArrowBackIosNewRounded,
  CheckCircleOutlined,
  ModeEditOutlineRounded,
  MopedRounded,
} from "@mui/icons-material";

import TapsProps from "@/components/Tabs";
import DialogProps from "@/components/dialog/DialogSuccess";
import router from "next/router";
import DialogEditUserProps from "@/components/dialog/DialogEditUser";

export default function Cart() {
  const [openSuccess, setOpenSuccess] = React.useState(false);
  const [openEditUser, setOpenEditUser] = React.useState(false);
  const handleClose = () => {
    setOpenSuccess(false);
    setOpenEditUser(false);
  };

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
          <Typography style={{ fontSize: "24px", marginRight: 50 }}>
            สั่งซื้อ
          </Typography>
        </div>

        <div className="box-chk-item">
          <div className="box-chkout-address" style={{ padding: 15 }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: 2,
              }}
            >
              <Typography>ที่อยู่ในการจัดส่ง</Typography>
              <IconButton onClick={() => setOpenEditUser(true)}>
                <ModeEditOutlineRounded />
              </IconButton>
            </div>
            <Typography>ชื่อ : Pukky</Typography>
            <Typography>เบอร์โทรศัพท์ : 06138908xx</Typography>
            <Typography style={{ width: 300 }}>
              ที่อยู่ : 681/6 เลอชาโต ซ.ลาดพร้าว48 แยก12 แขวงสามเสนนอก
              เขตห้วยขวาง 10310
            </Typography>
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
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <MopedRounded />
                    <Typography style={{ fontSize: 14 }}>
                      พร้อมจัดส่ง 19/12/24
                    </Typography>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography>x1</Typography>
                  </div>
                </div>
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
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <MopedRounded />
                    <Typography style={{ fontSize: 14 }}>
                      พร้อมจัดส่ง 19/12/24
                    </Typography>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography>x1</Typography>
                  </div>
                </div>
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
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <MopedRounded />
                    <Typography style={{ fontSize: 14 }}>
                      พร้อมจัดส่ง 19/12/24
                    </Typography>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography>x1</Typography>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a href="/order_list">
            <Button
              className="btn-regis"
              variant="contained"
              onClick={() => setOpenSuccess(true)}
            >
              ดำเนินการต่อ
            </Button>
          </a>
        </div>
        <DialogProps
          open={openSuccess}
          onClose={handleClose}
          text="สั่งซื้อสำเร็จ"
          icon={
            <CheckCircleOutlined
              style={{ width: 100, height: 100, color: "#60D36C" }}
            />
          }
        />
        <DialogEditUserProps open={openEditUser} onClose={handleClose} />

        <TapsProps />
      </Box>
    </>
  );
}
