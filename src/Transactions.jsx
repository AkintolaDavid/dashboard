import React, { useState } from "react";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
//
import { Button } from "@chakra-ui/react";

import { Flex, Grid, Text, Avatar, Divider } from "@chakra-ui/react";

const getStatusColor = (status) => {
  switch (status) {
    case "Pending":
      return "red";
    case "Processing":
      return "orange";
    case "Disbursed":
      return "green";
  }
};

export default function Transactions(props) {
  const {
    SearchedName,
    selectedStatus,
    selectedYear,
    selectedMonth,
    selectedDate,
  } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);
  const [selectedData, setSelectedData] = useState(null);
  const [T_selectedStatus, setT_SelectedStatus] = useState(null);

  const [data, setData] = useState([
    {
      id: 1,
      name: "Aaron",
      date: { time: "12:40:55", day: "2022-10-03" },
      amount: 748,
      status: "Disbursed",
      avatar: "luigi.png",
    },
    {
      id: 2,
      name: "Tobi",
      date: { time: "12:40:55", day: "2022-10-04" },
      amount: 7248,
      status: "Pending",
      avatar: "mario.png",
    },
    {
      id: 3,
      name: "Eric",
      date: { time: "12:40:55", day: "2023-11-07" },
      amount: 322,
      status: "Processing",
      avatar: "peach.png",
    },
    {
      id: 4,
      name: "Max",
      date: { time: "12:40:55", day: "2023-11-11" },
      amount: 48,
      status: "Pending",
      avatar: "yoshi.png",
    },
    {
      id: 5,
      name: "Chidi",
      date: { time: "12:40:55", day: "2023-11-13" },
      amount: 48,
      status: "Processing",
      avatar: "luigi.png",
    },
    {
      id: 6,
      name: "David",
      date: { time: "12:40:55", day: "2023-11-17" },
      amount: 748,
      status: "Disbursed",
      avatar: "mario.png",
    },
    {
      id: 7,
      name: "Ebube",
      date: { time: "12:40:55", day: "2023-12-02" },
      amount: 7248,
      status: "Processing",
      avatar: "peach.png",
    },
    {
      id: 8,
      name: "David",
      date: { time: "12:40:55", day: "2023-12-05" },
      amount: 322,
      status: "Disbursed",
      avatar: "yoshi.png",
    },
    {
      id: 9,
      name: "Kamsi",
      date: { time: "12:40:55", day: "2023-12-07" },
      amount: 48,
      status: "Pending",
      avatar: "luigi.png",
    },
    {
      id: 10,
      name: "Tumi",
      date: { time: "12:40:55", day: "2024-01-13" },
      amount: 748,
      status: "Disbursed",
      avatar: "mario.png",
    },
    {
      id: 11,
      name: "Jesse",
      date: { time: "12:40:55", day: "2024-01-17" },
      amount: 748,
      status: "Disbursed",
      avatar: "peach.png",
    },
    {
      id: 12,
      name: "Kayode",
      date: { time: "12:40:55", day: "2024-01-20" },
      amount: 7248,
      status: "Pending",
      avatar: "yoshi.png",
    },
    {
      id: 13,
      name: "Tiwa",
      date: { time: "12:40:55", day: "2024-01-23" },
      amount: 322,
      status: "Processing",
      avatar: "luigi.png",
    },
    {
      id: 14,
      name: "Max",
      date: { time: "12:40:55", day: "2024-02-03" },
      amount: 48,
      status: "Pending",
      avatar: "mario.png",
    },
    {
      id: 15,
      name: "Daniel",
      date: { time: "12:40:55", day: "2024-02-13" },
      amount: 48,
      status: "Processing",
      avatar: "peach.png",
    },
    {
      id: 16,
      name: "Temi",
      date: { time: "12:40:55", day: "2024-02-15" },
      amount: 748,
      status: "Disbursed",
      avatar: "yoshi.png",
    },
    {
      id: 17,
      name: "Bobb",
      date: { time: "12:40:55", day: "2024-02-17" },
      amount: 7248,
      status: "Processing",
      avatar: "luigi.png",
    },
    {
      id: 18,
      name: "Eric",
      date: { time: "12:40:55", day: "2024-02-23" },
      amount: 322,
      status: "Disbursed",
      avatar: "mario.png",
    },
    {
      id: 19,
      name: "Max",
      date: { time: "12:40:55", day: "2024-02-23" },
      amount: 48,
      status: "Pending",
      avatar: "peach.png",
    },
    // ... (remaining data entries)
  ]);

  const handleViewClick = (data) => {
    setSelectedData(data);
    onOpen();
  };
  const handleUpdateStatus = () => {
    // Find the index of the selected data in the data array
    const dataIndex = data.findIndex((item) => item.id === selectedData.id);

    // Create a copy of the data array
    const updatedData = [...data];

    // Update the status of the selected data with the new status
    updatedData[dataIndex] = {
      ...updatedData[dataIndex],
      status: T_selectedStatus,
    };

    // Update the data with the new data
    setData(updatedData);

    onClose();
  };
  return (
    <div className="bg-gray-200 mt-8 rounded-xl">
      <div>
        <Grid
          gridTemplateColumns="24% 21% 22% 18% 10%"
          pt="20px"
          ml="70px"
          mb="20px"
          color="gray.500"
          fontSize="17px"
        >
          <div>Name</div>
          <div>Amount</div>
          <div>Date</div>
          <div>Status</div>
          <div>Action</div>
        </Grid>

        <div
          style={{
            overflowY: "auto", // Enable vertical scrolling only
            maxHeight: "360px",
            minWidth: "100%",
          }}
        >
          {data
            .filter(
              (transaction) =>
                (!SearchedName ||
                  transaction.name
                    .toLowerCase()
                    .includes(SearchedName.toLowerCase())) &&
                (!selectedStatus || transaction.status === selectedStatus) &&
                (selectedYear === "All year" ||
                  new Date(transaction.date.day).getFullYear() ==
                    selectedYear) &&
                (selectedMonth === "All month" ||
                  new Date(transaction.date.day).toLocaleDateString("en-US", {
                    month: "short",
                  }) === selectedMonth) && // Adding 1 because getMonth returns zero-based month index
                (selectedDate === "All date" ||
                  new Date(transaction.date.day).getDate() == selectedDate)
            )
            .map((data) => (
              <div key={data.id}>
                <Divider />
                <Grid
                  gridTemplateColumns="29% 17% 23% 20.5% 3%"
                  mt="10px"
                  ml="30px"
                  mb="10px"
                >
                  <Flex display="flex" alignItems="center">
                    <div>
                      <Avatar
                        size="sm"
                        src={`../../img/${data.avatar}`}
                        mr="10px"
                      ></Avatar>
                    </div>
                    <div>
                      <Text fontSize="15px">{data.name}</Text>
                      <Text fontSize="10px" color="gray">
                        akintoladavid66@gmail.com
                      </Text>
                    </div>
                  </Flex>

                  <div>${data.amount}</div>
                  <div>
                    <div style={{ marginLeft: "8px" }}>{data.date.time}</div>
                    <div>{data.date.day}</div>
                  </div>
                  <div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      {data.status === "Disbursed" && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                          class="w-4 h-4"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      )}
                      {data.status === "Pending" && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                          class="w-4 h-4"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8Zm7.75-4.25a.75.75 0 0 0-1.5 0V8c0 .414.336.75.75.75h3.25a.75.75 0 0 0 0-1.5h-2.5v-3.5Z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      )}
                      {data.status === "Processing" && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                          class="w-4 h-4"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M13.836 2.477a.75.75 0 0 1 .75.75v3.182a.75.75 0 0 1-.75.75h-3.182a.75.75 0 0 1 0-1.5h1.37l-.84-.841a4.5 4.5 0 0 0-7.08.932.75.75 0 0 1-1.3-.75 6 6 0 0 1 9.44-1.242l.842.84V3.227a.75.75 0 0 1 .75-.75Zm-.911 7.5A.75.75 0 0 1 13.199 11a6 6 0 0 1-9.44 1.241l-.84-.84v1.371a.75.75 0 0 1-1.5 0V9.591a.75.75 0 0 1 .75-.75H5.35a.75.75 0 0 1 0 1.5H3.98l.841.841a4.5 4.5 0 0 0 7.08-.932.75.75 0 0 1 1.025-.273Z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      )}
                      <span style={{ color: getStatusColor(data.status) }}>
                        {data.status}
                      </span>
                    </div>
                  </div>
                  <div>
                    <svg
                      onClick={() => handleViewClick(data)}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      class="w-4 h-4"
                    >
                      <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
                      <path
                        fill-rule="evenodd"
                        d="M1.38 8.28a.87.87 0 0 1 0-.566 7.003 7.003 0 0 1 13.238.006.87.87 0 0 1 0 .566A7.003 7.003 0 0 1 1.379 8.28ZM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        clip-rule="evenodd"
                      />
                    </svg>

                    {selectedData && (
                      <>
                        <Modal
                          finalFocusRef={finalRef}
                          isOpen={isOpen}
                          onClose={onClose}
                        >
                          <ModalContent>
                            <div style={{ backgroundColor: "#29AB87" }}>
                              <ModalHeader color="white" fontSize="1.3rem">
                                Transactions
                              </ModalHeader>
                              <ModalCloseButton />
                            </div>
                            <ModalBody>
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  alignItems: "flex-start",
                                }}
                              >
                                <div
                                  style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    fontSize: "1.3rem",
                                    fontWeight: "600",
                                    marginBottom: "2.3rem",
                                    marginTop: "1.4rem",
                                  }}
                                >
                                  Vendor's Name:
                                  <span style={{ marginLeft: "85px" }}>
                                    {selectedData.name}
                                  </span>
                                </div>
                                <div
                                  style={{
                                    fontSize: "1.3rem",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    fontWeight: "600",
                                    marginBottom: "2.3rem",
                                  }}
                                >
                                  Transaction Amount:{" "}
                                  <span
                                    style={{
                                      alignSelf: "flex-end",
                                      marginLeft: "30px",
                                    }}
                                  >
                                    {"$" + selectedData.amount}
                                  </span>
                                </div>
                                <div
                                  style={{
                                    display: "flex",
                                    fontSize: "1.3rem",
                                    fontWeight: "600",
                                    marginBottom: "2.3rem",
                                    alignItems: "center",
                                  }}
                                >
                                  <div style={{ justifyContent: "center" }}>
                                    Date Of Transaction:
                                  </div>
                                  <div
                                    style={{
                                      textAlign: "center",
                                      marginLeft: "25px",
                                    }}
                                  >
                                    <div style={{ fontSize: "1.1rem" }}>
                                      {selectedData.date.time}
                                    </div>
                                    <div style={{ fontSize: "1.1rem" }}>
                                      {selectedData.date.day}
                                    </div>
                                  </div>
                                </div>
                                <div
                                  style={{
                                    fontSize: "1.3rem",
                                    fontWeight: "600",
                                    marginBottom: "2.3rem",
                                  }}
                                >
                                  Transaction Status:
                                  <span style={{ marginLeft: "30px" }}>
                                    <select
                                      value={T_selectedStatus} // Use T_selectedStatus as the value
                                      onChange={(e) =>
                                        setT_SelectedStatus(e.target.value)
                                      }
                                    >
                                      <option value="Pending">Pending</option>
                                      <option value="Processing">
                                        Processing
                                      </option>
                                      <option value="Disbursed">
                                        Disbursed
                                      </option>
                                    </select>
                                  </span>
                                </div>
                              </div>
                            </ModalBody>

                            <ModalFooter mt="1rem">
                              <Button
                                bg="#29AB87"
                                mr="5rem"
                                color="white"
                                onClick={handleUpdateStatus}
                              >
                                Update status
                              </Button>
                              <Button colorScheme="gray">Contact Vendor</Button>
                            </ModalFooter>
                          </ModalContent>
                        </Modal>
                      </>
                    )}
                  </div>
                </Grid>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
