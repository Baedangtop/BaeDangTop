import { customAxios } from "../../util/customAxios";

class Board {
  public async getBoards(kategory) {
    const value = await customAxios.get(`/boards/?page=${1}&type=${kategory}`);
    console.log(value);
    return value.data.list;
  }

  public async getImage(url: any) {
    const value = await customAxios.get(url);
    console.log(value);
    return value.data;
  }

  public async postBoards(preview, title, description, kategory) {
    let preivewSave;
    console.log(preview);

    preivewSave = await customAxios.post(`/boards/attachments/`, preview, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    try {
      const value = await customAxios.post(`/boards/`, {
        attachments: [preivewSave.data],
        title,
        content: description,
        type: kategory,
      });
    } catch (e) {
      console.log(e);
    }
    window.location.reload();
  }

  public async getComment(postId) {
    const { data } = await customAxios.get(`/boards/${postId}/comments`);
    return data.list;
  }

  public async postComment(postId, comment) {
    const { data } = await customAxios.post(`/boards/${postId}/comments`, {
      content: comment,
    });
    return data.list;
  }

  public async addStock(code) {
    const response = await customAxios.post("/users/favorites", {
      stockCode: code,
    });
    console.log(response);
  }
}

export default new Board();
