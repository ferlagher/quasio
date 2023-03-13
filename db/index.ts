import * as SQLite from "expo-sqlite";

import { DBCalculations, DBRes, DBSavedId } from "../types/propTypes";

const db = SQLite.openDatabase("calculations.db");

export const init = () => {
  return new Promise<void>((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS calculations (
          id INTEGER PRIMARY KEY NOT NULL,
          number DECIMAL NOT NULL,
          operator TEXT NOT NULL,
          note TEXT
        );`,
        [],
        () => {
          resolve();
        },
        (_, err) => {
          reject(err);
        }
      );
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS saved_tapes (
          id TEXT PRIMARY KEY NOT NULL,
          date TEXT NOT NULL
        );`,
        [],
        () => {
          resolve();
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
};

export const insertCalculations = (
  number: number,
  operator: string,
  note: string | null = null
) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `INSERT INTO calculations (number, operator, note) VALUES (?, ?, ?);`,
        [number, operator, note],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
};

export const insertSavedId = (id: string, date: string) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `INSERT INTO saved_tapes (id, date) VALUES (?, ?);`,
        [id, date],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
};

export const fetchTape = () => {
  return new Promise<DBCalculations>((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM calculations;`,
        [],
        (_, result) => {
          resolve(result as DBRes);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
};

export const fetchSavedIds = () => {
  return new Promise<DBSavedId>((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM saved_tapes;`,
        [],
        (_, result) => {
          resolve(result as DBRes);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
};

export const deleteTape = () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `DELETE FROM calculations;`,
        [],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
};
