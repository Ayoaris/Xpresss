import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";

const columns = [
  { field: "firstName", headerName: "First Name", width: 130 },
  { field: "lastName", headerName: "lastName", width: 130 },
  { field: "phoneNumber", headerName: "Phone Number", width: 200 },
  { field: "partner", headerName: "Partner", width: 130 },
  { field: "location", headerName: "Location", width: 130 },
  { field: "status", headerName: "Status", width: 130 },
  { field: "action", headerName: "Action", width: 100 },
];

const rows = [
  {
    id: 1,
    lastName: "Snow",
    firstName: "Jon",
    phoneNumber: "+234800 000 0000",
    partner: "The Place",
    location: "Festac",
    status: "Active",
    actions: "...",
  },
  {
    id: 2,
    lastName: "Lannister",
    firstName: "Cersei",
    phoneNumber: "+234800 000 0000",
    partner: "The Place",
    location: "Festac",
    status: "Active",
    actions: "...",
  },
  {
    id: 3,
    lastName: "Lannister",
    firstName: "Jaime",
    phoneNumber: "+234800 000 0000",
    partner: "The Place",
    location: "Festac",
    status: "Active",
    actions: "...",
  },
  {
    id: 4,
    lastName: "Stark",
    firstName: "Arya",
    phoneNumber: "+234800 000 0000",
    partner: "The Place",
    location: "Festac",
    status: "Active",
    actions: "...",
  },
  {
    id: 5,
    lastName: "Targaryen",
    firstName: "Daenerys",
    phoneNumber: "+234800 000 0000",
    partner: "The Place",
    location: "Festac",
    status: "Active",
    actions: "...",
  },
  {
    id: 6,
    lastName: "Melisandre",
    firstName: null,
    phoneNumber: "+234800 000 0000",
    partner: "The Place",
    location: "Festac",
    status: "Active",
    actions: "...",
  },
  {
    id: 7,
    lastName: "Clifford",
    firstName: "Ferrara",
    phoneNumber: "+234800 000 0000",
    partner: "The Place",
    location: "Festac",
    status: "Active",
    actions: "...",
  },
  {
    id: 8,
    lastName: "Frances",
    firstName: "Rossini",
    phoneNumber: "+234800 000 0000",
    partner: "The Place",
    location: "Festac",
    status: "Active",
    actions: "...",
  },
  {
    id: 9,
    lastName: "Roxie",
    firstName: "Harvey",
    phoneNumber: "+234800 000 0000",
    partner: "The Place",
    location: "Festac",
    status: "Active",
    actions: "...ee",
  },
];

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  border: "var(--Grid-borderWidth) solid",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function DataTable() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className="datatable">
      <div className="form-top">
        <div>
          <Box sx={{ minWidth: 212 }} bgcolor={"#fff"}>
            <FormControl fullWidth>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={10}>Active Verifiers</MenuItem>
                <MenuItem value={20}>Pending Verifiers</MenuItem>
                <MenuItem value={30}>Deactivated Verifiers</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
        <div className="form-right">
          <div className="search">
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Name/Phoneno/Location"
                inputProps={{ "aria-label": "Name/Phoneno/Location" }}
              />
            </Search>
          </div>
          <button className="btn">Add New Verifier</button>
        </div>
      </div>
      <div className="dataGrid" style={{ height: 650, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>
    </div>
  );
}

// export default DataTable;
