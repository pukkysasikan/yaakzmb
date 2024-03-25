import { SelectInputBase } from "@/services/StyleUtils";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  InputBase,
  FormControl,
  Select,
  Button,
} from "@mui/material";

interface DialogProps {
  open: boolean;
  onClose: () => void;
}
export default function DialogEditUserProps(props: DialogProps) {
  return (
    <Dialog
      open={props.open}
      PaperProps={{
        style: {
          borderRadius: 20,
        },
      }}
    >
      <DialogTitle>แก้ไขข้อมูลส่วนตัว</DialogTitle>
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
                sx={{ marginLeft: 6, marginTop: 0.5 }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
          </div>
          <Typography>ที่อยู่</Typography>
          <div className="select-address-container">
            <div>
              <div style={{ marginTop: 10 }}>
                <Typography>จังหวัด</Typography>
                <FormControl sx={{ height: 40, width: 160 }}>
                  <Select
                    id="demo-multiple-chip-label"
                    displayEmpty
                    input={<SelectInputBase id="select-multiple-chip" />}
                    className="bg-select-address2"
                  ></Select>
                </FormControl>
              </div>
            </div>

            <div>
              <div style={{ marginTop: 10 }}>
                <Typography>อำเภอ</Typography>
                <FormControl sx={{ height: 40, width: 160 }}>
                  <Select
                    id="demo-multiple-chip-label"
                    displayEmpty
                    input={<SelectInputBase id="select-multiple-chip" />}
                    className="bg-select-address2"
                  ></Select>
                </FormControl>
              </div>
            </div>
          </div>

          <div className="select-address-container">
            <div>
              <div style={{ marginTop: 10 }}>
                <Typography>ตำบล</Typography>
                <FormControl sx={{ height: 40, width: 160 }}>
                  <Select
                    id="demo-multiple-chip-label"
                    displayEmpty
                    input={<SelectInputBase id="select-multiple-chip" />}
                    className="bg-select-address2"
                  ></Select>
                </FormControl>
              </div>
            </div>

            <div>
              <div style={{ marginTop: 10 }}>
                <Typography>รหัสไปรษณีย์</Typography>
                <FormControl sx={{ height: 40, width: 160 }}>
                  <Select
                    id="demo-multiple-chip-label"
                    displayEmpty
                    input={<SelectInputBase id="select-multiple-chip" />}
                    className="bg-select-address2"
                  ></Select>
                </FormControl>
              </div>
            </div>
          </div>
          <div style={{ marginTop: 10, marginBottom: 20 }}>
            <Typography>ที่อยู่เพิ่มเติม</Typography>

            <div className="input-address">
              <InputBase
                sx={{ marginLeft: 6, marginTop: 0.5 }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
          </div>

          <div
            style={{
              justifyContent: "center",
              display: "flex",
              marginTop: 20,
            }}
          >
            <Button
              className="btn-regis"
              variant="contained"
              onClick={props.onClose}
            >
              บันทึก
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}