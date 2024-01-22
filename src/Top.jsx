import React, { useState, useEffect } from "react";

export default function Top({ name }) {
  const [greeting, setGreeting] = useState("");
  const [emoji, setEmoji] = useState("");
  useEffect(() => {
    const getCurrentGreeting = () => {
      const currentHour = new Date().getHours();

      let currentGreeting = "";
      let currentEmoji = "";

      if (currentHour >= 5 && currentHour < 12) {
        currentGreeting = "Good morning";
        currentEmoji = "🌞";
      } else if (currentHour >= 12 && currentHour < 18) {
        currentGreeting = "Good afternoon";
        currentEmoji = "☀️";
      } else {
        currentGreeting = "Good evening";
        currentEmoji = "🌙";
      }

      setGreeting(currentGreeting);
      setEmoji(currentEmoji);
    };

    getCurrentGreeting();
  }, []);

  return (
    <div className=" mt-10">
      <div className="flex justify-between ml-20 mb-6">
        <span className="text-3xl font-bold">DASHBOARD</span>
        <div className="flex items-center">
          <div style={{ position: "relative" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              class="w-6 h-6 mr-6"
            >
              <path
                fill-rule="evenodd"
                d="M12 5a4 4 0 0 0-8 0v2.379a1.5 1.5 0 0 1-.44 1.06L2.294 9.707a1 1 0 0 0-.293.707V11a1 1 0 0 0 1 1h2a3 3 0 1 0 6 0h2a1 1 0 0 0 1-1v-.586a1 1 0 0 0-.293-.707L12.44 8.44A1.5 1.5 0 0 1 12 7.38V5Zm-5.5 7a1.5 1.5 0 0 0 3 0h-3Z"
                clip-rule="evenodd"
              />
            </svg>
            <div
              style={{
                position: "absolute",
                top: 0,
                right: "25px",
                width: "11px",
                height: "11px",
                backgroundColor: "red",
                borderRadius: "50%",
              }}
            ></div>
          </div>
          <button
            style={{ borderRadius: "10px" }}
            className="flex bg-green-500 h-10 w-24 items-center justify-center mr-32 border-r"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              class="w-6 h-6 mr-1"
            >
              <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
            </svg>
            CREATE
          </button>
        </div>
      </div>
      <span className="ml-20 text-xl font-semibold">
        {greeting && `${greeting},`} {name}!{" "}
        {emoji && (
          <span role="img" aria-label="time-emoji">
            {emoji}
          </span>
        )}
      </span>
    </div>
  );
}
