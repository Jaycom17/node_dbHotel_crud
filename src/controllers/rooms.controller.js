import { pool } from "../db.js";

export const getRooms = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT roomCapacity, roomState, roomPrice, roomDescription FROM tbRoom");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getRoom = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT roomCapacity, roomState, roomPrice, roomDescription FROM tbRoom WHERE codRoom = ?", [
      req.params.codRoom,
    ]);
    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const postRoom = async (req, res) => {
  try {
    const { codHotel, roomCapacity, roomState, roomPrice, roomDescription } =
      req.body;
    await pool.query(
      "INSERT INTO tbRoom (codHotel, roomCapacity, roomState, roomPrice, roomDescription) VALUES (?, ?, ?, ?, ?)",
      [codHotel, roomCapacity, roomState, roomPrice, roomDescription]
    );
    res.send("POST");
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const putRoom = async (req, res) => {
  try {
    const { codHotel, roomCapacity, roomState, roomPrice, roomDescription } =
      req.body;
    await pool.query(
      "UPDATE tbRoom SET codHotel = ?, roomCapacity = ?, roomState = ?, roomPrice = ?, roomDescription = ? WHERE codRoom = ?",
      [
        codHotel,
        roomCapacity,
        roomState,
        roomPrice,
        roomDescription,
        req.params.codRoom,
      ]
    );
    res.send("PUT");
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const deleteRoom = async (req, res) => {
  try {
    await pool.query("CALL spDeleteRoom(?)", [
      req.params.codRoom,
    ]);
    res.send("DELETE");
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getCodesRooms = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT codRoom FROM tbRoom ORDER BY codRoom");
    res.json(rows);
  }
    catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
