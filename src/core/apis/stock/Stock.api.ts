import { customAxios } from "../../util/customAxios";

class StockApi {
  public async getStock(pageNumber) {
    const res = await customAxios.get(`/stocks/?page=${pageNumber}`);
    console.log(res);
  }
  public async getStockByName(name) {
    const res = await customAxios.get(`/stocks/${name}`);
    console.log(res);
  }
}

export default new StockApi();
