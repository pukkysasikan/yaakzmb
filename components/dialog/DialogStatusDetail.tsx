import { CloseRounded } from "@mui/icons-material";
import { Dialog, DialogTitle, Typography, DialogContent } from "@mui/material";
import QontoStepIcon from "@/components/Stapper";
import React from "react";
import { text } from "stream/consumers";

interface StatusDetailProps {
  open: boolean;
  onClose: () => void;
  step: number;
  text: string;
}
export default function StatusDetailProps(props: StatusDetailProps) {
  return (
    <Dialog
      open={props.open}
      PaperProps={{
        style: {
          borderRadius: 20,
        },
      }}
    >
      <DialogTitle style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography>YAAKZ SHOP สาขาเดอะมอลล์ บางกะปิ</Typography>
        <CloseRounded onClick={props.onClose} />
      </DialogTitle>
      <DialogContent style={{ padding: 15 }}>
        <Typography>เลขที่คำสั่งซื้อ : 392024/000000042</Typography>
        <Typography>วันที่ซื้อ : 21/02/67 12:33</Typography>

        {props.text !== "YaakzShop" && (
          <div className="box-status">
            <Typography style={{ fontSize: 12, margin: 5 }}>
              สถานะคำสั่งซื้อ
            </Typography>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                margin: 0,
                padding: 0,
              }}
            >
              <QontoStepIcon step={props.step} />
            </div>
          </div>
        )}

        <div className="box-status-item">
          <div style={{ width: 20 }}>
            <Typography>1</Typography>
          </div>
          <div style={{ width: 200 }}>
            <Typography>
              ยอดนักสืบจิ๋ว โคนัน ล.7 - วันสบายๆ ของซีโร่ (90)
            </Typography>
          </div>
          <div style={{ width: 30 }}>
            <Typography>80</Typography>
          </div>
        </div>
        <div className="box-status">
          <div
            style={{
              justifyContent: "space-between",
              display: "flex",
              padding: 5,
            }}
          >
            <div>
              <Typography>รวมสินค้า (1)</Typography>
              <Typography>รวมชำระ</Typography>
              <Typography>การชำระเงิน</Typography>
            </div>
            <div>
              <Typography>80.00</Typography>
              <Typography>80.00</Typography>
              <Typography>เงินสด</Typography>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
