import { customAxios } from "../../util/customAxios";

class Board {
  public async getBoards() {
    const value = await customAxios.get(`/boards/?page=${1}&keyword=""`);
    console.log(value);
    return value.data.list;
  }
  public async postBoards(preview, title, description) {
    const preivewSave = await customAxios.post(
      `/boards/attachments/`,
      preview,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    const value = await customAxios.post(`/boards/`, {
      attachments: preivewSave,
      title,
      content: description,
    });

    console.log(value);
  }
}

export default new Board();
