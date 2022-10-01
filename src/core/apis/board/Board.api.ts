import { customAxios } from "../../util/customAxios";

class Board {
  public async getBoards() {
    const value = await customAxios.get(`/boards/?page=${1}&type=FREE`);
    console.log(value);
    return value.data.list;
  }

  public async getImage(url: any) {
    const value = await customAxios.get(url);
    console.log(value);
    return value.data;
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

    console.log(preivewSave);

    const value = await customAxios.post(`/boards/`, {
      attachments: [preivewSave.data],
      title,
      content: description,
      type: "FREE",
    });

    console.log(value);
  }
}

export default new Board();
