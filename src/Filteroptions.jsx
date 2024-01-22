import { useState } from "react";

import Transactions from "./Transactions";
import { InputGroup, InputLeftElement } from "@chakra-ui/react";

export default function FilterOptions() {
  const [selectedStatus, setselectedStatus] = useState("");
  const [SearchedName, setSearchedName] = useState("");
  const [selectedYear, setSelectedYear] = useState("All year");
  const [selectedMonth, setSelectedMonth] = useState("All month");
  const [selectedDate, setSelectedDate] = useState("All date");

  const searchNameHandler = (event) => {
    setSearchedName(event.target.value);
  };
  const searchStatusHandler = (event) => {
    setselectedStatus(event.target.value);
  };

  const yearHandler = (event) => {
    setSelectedYear(event.target.value);
  };

  const monthHandler = (event) => {
    setSelectedMonth(event.target.value);
  };

  const dateHandler = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <div className="flex justify-center">
      <div>
        <div style={{ marginTop: "30px" }}>
          <span className="text-2xl font-semibold">Transactions</span>
          <div>
            <div style={{ display: "flex", marginTop: "1rem" }}>
              <InputGroup>
                <InputLeftElement pointerEvents="none"></InputLeftElement>
                <input
                  style={{ borderRadius: "10px" }}
                  className="h-10 w-64  border-2 border-black bg-white"
                  type="tel"
                  placeholder="Search by name"
                  backgroundColor="white"
                  value={SearchedName}
                  onChange={searchNameHandler}
                />
              </InputGroup>

              <select
                style={{ borderRadius: "10px" }}
                className="w-48 mr-14 border-2 border-black bg-white"
                bg="white"
                value={selectedStatus}
                onChange={searchStatusHandler}
              >
                <option value="">All status</option>
                <option value="Pending">Pending</option>
                <option value="Processing">Processing</option>
                <option value="Disbursed">Disbursed</option>
              </select>
              <select
                style={{ borderRadius: "10px" }}
                className="w-26 ml-7 mr-7 h-10 border-2 border-black bg-white"
                placeholder="sort by last transaction"
                bg="white"
                onChange={yearHandler}
              >
                <option>All year</option>
                <option>2024</option>
                <option>2023</option>
                <option>2022</option>
              </select>
              <select
                style={{ borderRadius: "10px" }}
                className="w-28 mr-6 h-10 border-2 border-black bg-white"
                placeholder="sort by last transaction"
                bg="white"
                onChange={monthHandler}
              >
                <option>All month</option>
                <option>JAN</option>
                <option>FEB</option>
                <option>MAR</option>
                <option>APR</option>
                <option>MAY</option>
                <option>JUN</option>
                <option>JUL</option>
                <option>AUG</option>
                <option>SEP</option>
                <option>OCT</option>
                <option>NOV</option>
                <option>DEC</option>
              </select>
              <select
                style={{ borderRadius: "10px" }}
                className="w-28 mr-6 h-10 border-2 border-black bg-white"
                placeholder="sort by last transaction"
                bg="white"
                onChange={dateHandler}
              >
                <option>All date</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
                <option>13</option>
                <option>14</option>
                <option>15</option>
                <option>16</option>
                <option>17</option>
                <option>18</option>
                <option>19</option>
                <option>20</option>
                <option>21</option>
                <option>22</option>
                <option>23</option>
                <option>24</option>
                <option>25</option>
                <option>26</option>
                <option>27</option>
                <option>28</option>
                <option>29</option>
                <option>30</option>
                <option>31</option>
              </select>
            </div>
          </div>
        </div>
        <Transactions
          SearchedName={SearchedName}
          selectedStatus={selectedStatus}
          selectedYear={selectedYear}
          selectedMonth={selectedMonth}
          selectedDate={selectedDate}
        />
      </div>
    </div>
  );
}
