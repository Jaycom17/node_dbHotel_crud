import { pool } from "../db.js";

export const getHostings = async (req, res) => {
    try {
    const [rows] = await pool.query(
      "SELECT codGuest, codRoom, checkIn, checkOut, payment FROM tbHosting"
    );
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export const getHosting = async (req, res) => {
    try {
    const [rows] = await pool.query(
      "SELECT codGuest, codRoom, checkIn, checkOut, payment FROM tbHosting WHERE codHosting = ?",
      [req.params.codHosting]
    );
    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export const postHosting = async (req, res) => {
    try {
        const { codGuest, codRoom, checkIn, checkOut, payment } = req.body;
    const [rows] = await pool.query(
      "INSERT INTO tbHosting (codGuest, codRoom, checkIn, checkOut, payment) VALUES (?, ?, ?, ?, ?)",
      [codGuest, codRoom, checkIn, checkOut, payment]
    );
    res.send("POST")
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export const deleteHosting = async (req, res) => {
    try {
        await pool.query(
            "DELETE FROM tbHosting WHERE codHosting = ?",
            [req.params.codHosting]
        );
        res.send("DELETE")
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const putHosting = async (req, res) => {
    try {
        const { codGuest, codRoom, checkIn, checkOut, payment } = req.body;
        await pool.query(
            "UPDATE tbHosting SET codGuest = ?, codRoom = ?, checkIn = ?, checkOut = ?, payment = ? WHERE codHosting = ?",
            [codGuest, codRoom, checkIn, checkOut, payment, req.params.codHosting]
        );
        res.send("UPDATE")
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const getCodesHosting = async (req, res) => {
    try {
        const [rows] = await pool.query(
            "SELECT codHosting FROM tbHosting"
        );
        res.json(rows);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}