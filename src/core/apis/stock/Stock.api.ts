import { customAxios } from "../../util/customAxios";

class StockApi {
  public async getStock(pageNumber: Number) {
    try {
      const res = await customAxios.get(`/stocks/?page=${pageNumber}&size=10`);
      console.log(res.data.list);
      return res.data.list;
    } catch (e) {
      return e;
    }
  }
  public async getStockByName(name) {
    try {
      const res = await customAxios.get(`/stocks/${name}`);
      return res.data;
    } catch (e) {
      alert("잘못된 값을 입력하였습니다.");
      return false;
    }
  }
}

export default new StockApi();
