import Head from "next/head";
import * as React from "react";

import { Button, IconButton, Typography } from "@mui/material";
import {
  AddRounded,
  ArrowBackIosNewRounded,
  CheckRounded,
} from "@mui/icons-material";

import TapsProps from "@/components/Tabs";
import router from "next/router";

export default function ProductDetailAdded() {
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
        <Typography style={{ fontSize: "24px" }}>รายละเอียดสินค้า</Typography>
      </div>
      <div className="box-image-product-detail">
        <div className="box-image-product">
          <img src="" />
          <Typography>รูปภาพ</Typography>
        </div>
      </div>
      <div className="product-detail-container">
        <div>
          <Typography
            style={{ textAlign: "center", fontSize: "20px", padding: 20 }}
          >
            ยอดนักสืบจิ๋ว โคนัน ล.8 - วันสบายๆ ของซีโร่ (90)
          </Typography>
          <div className="text-product-detail-container">
            <div className="text-product-detail-left">
              <Typography>ราคา&nbsp;&nbsp;:</Typography>
              <Typography>วันที่วางขาย&nbsp;&nbsp;:</Typography>
              <Typography>สำนักพิมพ์&nbsp;&nbsp;:</Typography>
            </div>
            <div>
              <Typography>90 บาท</Typography>
              <Typography>12/12/66</Typography>
              <Typography>No Information</Typography>
            </div>
          </div>
        </div>
        <div style={{ justifyContent: "center", display: "flex" }}>
          <Button
            style={{ width: "90%", borderRadius: 10 }}
            variant="outlined"
            color="info"
          >
            <CheckRounded />
            เพิ่มในคลังแล้ว
          </Button>
        </div>
      </div>
      <TapsProps />
    </>
  );
}
