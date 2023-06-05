import { pool } from "../db.js";

export const getGuests = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT idGuest, nameGuest, phoneGuest, emailGuest FROM tbGuest");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const postGuests = async (req, res) => {
  try {
    const { idGuest, nameGuest, phoneGuest, emailGuest } = req.body;
    await pool.query(
      "INSERT INTO tbGuest(idGuest, nameGuest, phoneGuest, emailGuest) VALUES (?, ?, ?, ?)",
      [idGuest, nameGuest, phoneGuest, emailGuest]
    );
    res.send("POST");
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const putGuests = async (req, res) => {
  try {
    const { idGuest, nameGuest, phoneGuest, emailGuest } = req.body;
    await pool.query("CALL spUpdateGuest(?, ?, ?, ?, ?)", [
      req.params.idGuest,
      idGuest,
      nameGuest,
      phoneGuest,
      emailGuest,
    ]);
    res.send("PUT");
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteGuests = async (req, res) => {
  try {
    await pool.query("CALL spDeleteGuest(?)", [req.params.idGuest]);
    res.send("DELETE");
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getGuest = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT idGuest, nameGuest, phoneGuest, emailGuest FROM tbGuest WHERE idGuest = ?", [
      req.params.idGuest,
    ]);
    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getIdsGuests = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT idGuest FROM tbGuest");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
