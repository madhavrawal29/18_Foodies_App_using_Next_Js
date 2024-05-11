import sql from "better-sqlite3";
import { resolve } from "styled-jsx/css";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  throw new Error("Loading meals failed"); // this line will commented in the next commit because this was just for demo
  return db.prepare("SELECT * FROM meals").all();
}
