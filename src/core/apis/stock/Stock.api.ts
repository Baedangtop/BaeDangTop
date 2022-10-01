import { customAxios } from "../../util/customAxios";

class StockApi {
  public async getStock(pageNumber: Number) {
    try {
      const res = await customAxios.get(`/stocks/?page=${pageNumber}&size=10`);
      return res.data.list;
    } catch (e) {
      return e;
    }
  }
  public async getStockByName(name) {
    const res = await customAxios.get(`/stocks/${name}`);
    return res.data;
  }
}

export default new StockApi();
