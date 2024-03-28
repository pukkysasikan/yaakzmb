import Head from "next/head";
import * as React from "react";
import Image from "next/image";
import mypic from "../assets/imges/Yaakz_Profile-1000-01_(1)-transformed.png";
import {
  Box,
  Button,
  FormControl,
  InputBase,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import {
  AddRounded,
  ErrorOutlineRounded,
  Search,
  SearchOutlined,
} from "@mui/icons-material";
import { SearchIconWrapper, SelectInputBase } from "@/services/StyleUtils";
import DialogProps from "@/components/dialog/DialogSuccess";

export default function Register() {
  const [openDialog, setOpenDialog] = React.useState(false);

  const handleClose = () => {
    setOpenDialog(false);
  };
  return (
    <>
      <Head>
        <title>Yaakz Member</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box className="container2">
        <div className="bg-regis" />
        <div className="regis-container">
          <Typography
            style={{ textAlign: "center", paddingTop: 20, fontSize: 20 }}
          >
            ลงทะเบียน
          </Typography>

          <div style={{ padding: 20 }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Typography className="">ชื่อ</Typography>
              <div className="input">
                <InputBase
                  onClick={() => setOpenDialog(true)}
                  sx={{ marginLeft: 6, marginTop: 0.5 }}
                  inputProps={{ "aria-label": "search" }}
                />
              </div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: 20,
              }}
            >
              <Typography>เบอร์โทรศัพท์</Typography>
              <div className="input">
                <InputBase
                  onClick={() => setOpenDialog(true)}
                  sx={{ marginLeft: 6, marginTop: 0.5 }}
                  inputProps={{ "aria-label": "search" }}
                />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: 20,
                marginBottom: 20,
              }}
            >
              <Typography>อีเมล</Typography>
              <div className="input">
                <InputBase
                  onClick={() => setOpenDialog(true)}
                  sx={{ marginLeft: 6, marginTop: 0.5 }}
                  inputProps={{ "aria-label": "search" }}
                />
              </div>
            </div>
            <Typography>ที่อยู่</Typography>
            <div className="select-address-container">
              <div style={{ marginTop: 10 }}>
                <Typography>จังหวัด</Typography>
                <FormControl sx={{ height: 40, width: 160 }}>
                  <Select
                    id="demo-multiple-chip-label"
                    displayEmpty
                    input={<SelectInputBase id="select-multiple-chip" />}
                    className="bg-select-address"
                  ></Select>
                </FormControl>
              </div>

              <div style={{ marginTop: 10 }}>
                <Typography>อำเภอ</Typography>
                <FormControl sx={{ height: 40, width: 160 }}>
                  <Select
                    id="demo-multiple-chip-label"
                    displayEmpty
                    input={<SelectInputBase id="select-multiple-chip" />}
                    className="bg-select-address"
                  ></Select>
                </FormControl>
              </div>
            </div>

            <div className="select-address-container">
              <div style={{ marginTop: 10 }}>
                <Typography>ตำบล</Typography>
                <FormControl sx={{ height: 40, width: 160 }}>
                  <Select
                    id="demo-multiple-chip-label"
                    displayEmpty
                    input={<SelectInputBase id="select-multiple-chip" />}
                    className="bg-select-address"
                  ></Select>
                </FormControl>
              </div>

              <div style={{ marginTop: 10 }}>
                <Typography>รหัสไปรษณีย์</Typography>
                <FormControl sx={{ height: 40, width: 160 }}>
                  <Select
                    id="demo-multiple-chip-label"
                    displayEmpty
                    input={<SelectInputBase id="select-multiple-chip" />}
                    className="bg-select-address"
                  ></Select>
                </FormControl>
              </div>
            </div>
            <div style={{ marginTop: 10, marginBottom: 20 }}>
              <Typography>ที่อยู่เพิ่มเติม</Typography>

              <div className="input-address">
                <InputBase
                  onClick={() => setOpenDialog(true)}
                  sx={{ marginLeft: 6, marginTop: 0.5 }}
                  inputProps={{ "aria-label": "search" }}
                />
              </div>
            </div>
            <a href="home">
              <div
                style={{
                  justifyContent: "center",
                  display: "flex",
                  marginTop: 20,
                }}
              >
                <Button className="btn-regis" variant="contained">
                  ลงทะเบียน
                </Button>
              </div>
            </a>
          </div>
        </div>
        <DialogProps
          open={openDialog}
          onClose={handleClose}
          text="เบอร์โทศัพท์นี้มีบัญชีผู้ใช้แล้วกรุณาใช้เบอร์โทรศัพท์อื่น"
          icon={
            <ErrorOutlineRounded
              style={{ width: 100, height: 100, color: "#5B5B5B" }}
            />
          }
        />
      </Box>
    </>
  );
}
