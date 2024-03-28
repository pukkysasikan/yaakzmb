import Head from "next/head";
import * as React from "react";

import { IconButton, Typography } from "@mui/material";

import TapsProps from "@/components/Tabs";
import { ArrowBackIosNewRounded } from "@mui/icons-material";
import router from "next/router";

export default function StockDetail() {
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
        <Typography style={{ fontSize: "24px", marginRight: 20 }}>
          คลังของฉัน
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
        NoInformation
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
      </div>
      <div className="box-search-item2">
        <a href="/product_detail">
          <div className="box-item">
            <div className="img-item">
              <Typography>รูปภาพ</Typography>
            </div>
            <div style={{ width: 230, marginTop: -5 }}>
              <Typography style={{ height: 55 }}>
                ยอดนักสืบจิ๋ว โคนัน ล.5 - วันสบายๆของซีโร่ (90)
              </Typography>
              <div>
                <Typography style={{ fontSize: "14px" }}>
                  เพิ่มในคลังเมื่อ 12/12/66
                </Typography>
              </div>
            </div>
          </div>
        </a>
        <div className="box-item">
          <div className="img-item">
            <Typography>รูปภาพ</Typography>
          </div>
          <div style={{ width: 230, marginTop: -5 }}>
            <Typography style={{ height: 55 }}>
              ยอดนักสืบจิ๋ว โคนัน ล.5 - วันสบายๆของซีโร่ (90)
            </Typography>
            <div>
              <Typography style={{ fontSize: "14px" }}>
                เพิ่มในคลังเมื่อ 12/12/66
              </Typography>
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
              <Typography style={{ fontSize: "14px" }}>
                เพิ่มในคลังเมื่อ 12/12/66
              </Typography>
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
              <Typography style={{ fontSize: "14px" }}>
                เพิ่มในคลังเมื่อ 12/12/66
              </Typography>
            </div>
          </div>
        </div>
      </div>

      <TapsProps />
    </>
  );
}
