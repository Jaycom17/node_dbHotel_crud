import { pool } from "../db.js";

export const getHotel = async (req, res) => {
    try {
    const [rows] = await pool.query("SELECT nameHotel FROM tbHotel");
    return res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export const postHotel = async (req, res) => {
    try {
    const { nameHotel } = req.body;
    await pool.query("INSERT INTO tbHotel (nameHotel) VALUES (?)", [nameHotel]);
    return res.send("POST");
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export const putHotel = async (req, res) => {
    try {
    const { nameHotel } = req.body;
    await pool.query("call spUpdateHotel(?)", [nameHotel]);
    return res.send("PUT");
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export const deleteHotel = async (req, res) => {
    try {
    await pool.query("call spDeleteHotel()");
    return res.send("DELETE");
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export const getCodeHotel = async (req, res) => {
    try {
    const [rows] = await pool.query("SELECT codHotel FROM tbHotel");
    return res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}