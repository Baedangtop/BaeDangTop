import axios from "axios";
import config from "../../config/config.js";
import { customAxios } from "../../util/customAxios";

class Board {
  public async getBoards() {
    const value = await customAxios.get(`/boards/`);
    console.log(value);
  }
}

export default new Board();
