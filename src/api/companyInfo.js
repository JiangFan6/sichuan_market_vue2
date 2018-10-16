
import pubapi from "./pubapi"
/*公共promise对象*/
let apiPromise = function (apiParam) {
  return new Promise(function (resolve, reject) {
    pubapi[apiParam.method](
      apiParam.url,
      apiParam.param,
      res => {
        if (res) {
          resolve(res);
        } else {
          reject("error")
        }
      },
      err => {
        reject(err)
      }
    );
  })

};


export default {


  /*添加一条公司信息*/
  addAindustryInfo: function (reqParam) {
    let apiParam = {
      url: "/companyInfo/addACompanyInfo",
      method: "post",
      param: reqParam
    };
    return apiPromise(apiParam);
  },




}










