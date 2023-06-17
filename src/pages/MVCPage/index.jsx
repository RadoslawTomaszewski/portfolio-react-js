import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import bookImage from "../../assets/img/book.png";

export function MVCPage() {
  const { t } = useTranslation();

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const [guestbookEntries, setGuestbookEntries] = useState([]);

  useEffect(() => {
    fetchGuestbookEntries();
  }, []);

  const fetchGuestbookEntries = async () => {
    try {
      const response = await axios.get(
        "https://guestlist-backend.onrender.com/guestbook"
      );
      setGuestbookEntries(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://guestlist-backend.onrender.com/entry",
        {
          name: name,
          description: message,
        }
      );

      console.log(response.data);

      // Zresetuj pola formularza
      setName("");
      setMessage("");

      // Zaktualizuj listę wpisów
      fetchGuestbookEntries();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex min-h-[95%] flex-col justify-start overflow-y-scroll rounded-md bg-green-100 p-4">
      <div className="text-center text-4xl font-bold">{t("Guest book")}</div>
      <div className="flex justify-between">
        <div className="flex-grow-1 justify-center">
          {guestbookEntries.map((entry) => (
            <div key={entry.id} className="my-4">
              <div className="font-bold">{entry.name}</div>
              <div className="font-normal">{entry.description}</div>
            </div>
          ))}
        </div>
        <div className="hidden items-center justify-center lg:flex lg:w-[50%]">
          <img src={bookImage} alt="book" />
        </div>
      </div>
      <div className="border-t-2 border-darkgreen">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label className="my-2" htmlFor="name">
              Nick:
            </label>
            <input
              type="text"
              className="p-2"
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="my-2" htmlFor="message">
              {t("description")}
            </label>
            <textarea
              id="message"
              className="h-40 p-2"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              required
            ></textarea>
          </div>
          <div className="p-3 text-center">
            <button
              type="submit"
              className="my-2 rounded bg-darkgreen p-2 px-4  font-medium text-white hover:text-lightgreen"
            >
              {t("Add entry")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
