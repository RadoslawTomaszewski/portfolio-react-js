import React, { useEffect, useState } from "react";
import axios from "axios";

export function MVCPage() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const [guestbookEntries, setGuestbookEntries] = useState([]);

  useEffect(() => {
    fetchGuestbookEntries();
  }, []);

  const fetchGuestbookEntries = async () => {
    try {
      const response = await axios.get("http://localhost:8080/guestbook");
      setGuestbookEntries(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/entry", {
        name: name,
        description: message,
      });

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
      <div className="text-center text-h1 font-bold">Księga gości</div>
      <div>
        {guestbookEntries.map((entry) => (
          <div key={entry.id} className="my-4">
            <div className="font-bold">{entry.name}</div>
            <div className="font-normal">{entry.description}</div>
          </div>
        ))}
      </div>
      <div className="border-t-4 border-darkgreen">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label className="my-2" htmlFor="name">
              Imię:
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
              Wpis:
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
              Dodaj wpis
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
