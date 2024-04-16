import { SelectInputBase } from "@/services/StyleUtils";
import { ClearRounded } from "@mui/icons-material";
import {
  Typography,
  Dialog,
  DialogTitle,
  IconButton,
  DialogContent,
  InputBase,
  FormControl,
  MenuItem,
  TextareaAutosize,
  Select,
  Button,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers";
// import { ConfigProvider, DatePicker } from "antd";

import dayjs from "dayjs";
import React from "react";

interface DialogProps {
  open: boolean;
  onClose: () => void;
  customer_name: any;
  customer_phone: any;
  customer_email: any;
  customer_address: any;
  customer_main_address: any;
  onChangeCustomerData: (e: any) => void;

  locale: any;
  customer_birth_day: any;
  onChangeDate: (e: any) => void;
  cascaderAddress: any;

  onChangeProvince: (e: any) => void;
  onChangeDistrict: (e: any) => void;
  onChangeSubDistrictAndPostCode: (e: any, a: any) => void;

  onSubmit: () => void;
}
export default function DialogEditUserProps(props: DialogProps) {
  const [province, setProvince] = React.useState("x");
  const [district, setDistrict] = React.useState("x");
  const [subDistrict, setSubDistrict] = React.useState("x");

  const [districtList, setDistrictList] = React.useState([]);
  const [subDistrictList, setSubDistrictList] = React.useState([]);

  React.useEffect(() => {
    if (props.customer_main_address[0] && props.open === true) {
      setProvince(props.customer_main_address[0]);
    }
  }, [props.open]);

  React.useEffect(() => {
    const district = props.cascaderAddress.find(
      (item: any) => item.value === Number(province)
    );
    if (district?.children && props.open === true) {
      setDistrictList(district?.children);
    }

    if (props.customer_main_address[1] && props.open === true) {
      setDistrict(props.customer_main_address[1]);
    }

    if (province !== "x") {
      props.onChangeProvince(province);
    }
  }, [province]);

  React.useEffect(() => {
    const subDistrict: any = districtList.find(
      (item: any) => item.value === Number(district)
    );
    if (subDistrict?.children && props.open === true) {
      setSubDistrictList(subDistrict?.children);
    }

    const subDistrictValue = props.customer_main_address[2].split(" ")[1];
    if (
      subDistrictValue !== "null" &&
      subDistrictValue !== "" &&
      props.open === true
    ) {
      setSubDistrict(props.customer_main_address[2]);
    }

    if (district !== "x") {
      props.onChangeDistrict(district);
    }
  }, [district]);

  React.useEffect(() => {
    if (subDistrict !== "x") {
      const [subDistrictValue, postCode] = subDistrict.split(" ");
      props.onChangeSubDistrictAndPostCode(subDistrictValue, postCode);
    }
  }, [subDistrict]);

  const onCloseDialog = () => {
    setProvince("x");
    setDistrict("x");
    setSubDistrict("x");
    setDistrictList([]);
    setSubDistrictList([]);
    props.onClose();
  };

  const onSubmit = () => {
    setProvince("x");
    setDistrict("x");
    setSubDistrict("x");
    setDistrictList([]);
    setSubDistrictList([]);
    props.onSubmit();
  };

  const handlePhoneInput = (e: { target: { value: string } }) => {
    const numericValue = e.target.value.replace(/\D/g, "");
    props.onChangeCustomerData({
      target: { name: "phone", value: numericValue },
    });
  };
  return (
    <Dialog
      open={props.open}
      PaperProps={{
        style: {
          borderRadius: 20,
        },
      }}
    >
      <div
        onClick={props.onClose}
        style={{
          justifyContent: "space-between",
          display: "flex",
          alignItems: "center",
        }}
      >
        <DialogTitle>แก้ไขข้อมูลส่วนตัว</DialogTitle>
        <IconButton>
          <ClearRounded style={{ margin: 5 }} />
        </IconButton>
      </div>

      <DialogContent>
        <div className="edit-container">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography className="">ชื่อ</Typography>
            <div className="input">
              <InputBase
                onChange={props.onChangeCustomerData}
                value={props.customer_name}
                sx={{ marginTop: 0.5 }}
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
            <Typography>โทรศัพท์</Typography>
            <div className="input">
              <InputBase
                value={props.customer_phone}
                onChange={handlePhoneInput}
                sx={{ marginTop: 0.5 }}
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
                value={props.customer_email}
                onChange={props.onChangeCustomerData}
                sx={{ marginTop: 0.5 }}
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
            <Typography>วันเกิด</Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                format="DD/MM/YYYY"
                className="borderless-date-picker"
                defaultValue={
                  props.customer_birth_day
                    ? dayjs(props.customer_birth_day)
                    : dayjs()
                }
                onChange={props.onChangeDate}
              />
            </LocalizationProvider>
          </div>
          <Typography>ที่อยู่</Typography>
          <div className="select-address-container">
            <div style={{ marginTop: 10, width: "100%" }}>
              <Typography>จังหวัด</Typography>
              <FormControl style={{ width: "95%" }}>
                <Select
                  value={province}
                  onChange={(e) => setProvince(e.target.value as string)}
                  className="bg-select-address2"
                  id="demo-multiple-chip-label"
                  displayEmpty
                  input={<SelectInputBase id="select-multiple-chip" />}
                >
                  <MenuItem value="x" disabled key="">
                    กรุณาเลือกจังหวัด
                  </MenuItem>
                  {props.cascaderAddress.map((item: any) => (
                    <MenuItem value={item.value} key={item.value}>
                      {item.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>

            <div style={{ marginTop: 10, width: "100%" }}>
              <Typography>อำเภอ</Typography>
              <FormControl style={{ width: "95%" }}>
                <Select
                  value={district}
                  disabled={districtList?.length === 0}
                  onChange={(e) => setDistrict(e.target.value as string)}
                  id="demo-multiple-chip-label"
                  displayEmpty
                  input={<SelectInputBase id="select-multiple-chip" />}
                  className="bg-select-address2"
                >
                  <MenuItem value="x" disabled key="">
                    กรุณาเลือกอำเภอ
                  </MenuItem>
                  {districtList &&
                    districtList.map((item: any) => (
                      <MenuItem value={item.value} key={item.value}>
                        {item.label}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
            </div>
          </div>

          <div className="select-address-container">
            <div style={{ marginTop: 10, width: "100%" }}>
              <Typography>ตำบล</Typography>
              <FormControl style={{ width: "95%" }}>
                <Select
                  value={subDistrict}
                  disabled={subDistrictList?.length === 0}
                  onChange={(e) => setSubDistrict(e.target.value as string)}
                  id="demo-multiple-chip-label"
                  displayEmpty
                  input={<SelectInputBase id="select-multiple-chip" />}
                  className="bg-select-address2"
                >
                  <MenuItem value="x" disabled key="">
                    กรุณาเลือกตำบล
                  </MenuItem>
                  {subDistrictList &&
                    subDistrictList.map((item: any) => (
                      <MenuItem value={item.value} key={item.value}>
                        {item.label}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
            </div>

            {/* <div style={{ marginTop: 10, width: "100%" }}>
              <Typography>รหัสไปรษณีย์</Typography>
              <FormControl style={{ width: "95%" }}>
                <Select
                  id="demo-multiple-chip-label"
                  displayEmpty
                  input={<SelectInputBase id="select-multiple-chip" />}
                  className="bg-select-address2"
                ></Select>
              </FormControl>
            </div> */}
          </div>
          <div style={{ marginTop: 10, marginBottom: 20 }}>
            <Typography>ที่อยู่เพิ่มเติม</Typography>

            <div className="input-address">
              <TextareaAutosize
                onChange={props.onChangeCustomerData}
                value={props.customer_address}
                name="address"
                className="ellipsis3"
                placeholder="กรอกที่อยู่"
              />
            </div>
          </div>

          <div
            style={{
              justifyContent: "center",
              display: "flex",
            }}
          >
            <Button
              onClick={onSubmit}
              className="btn-regis"
              variant="contained"
            >
              บันทึก
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
