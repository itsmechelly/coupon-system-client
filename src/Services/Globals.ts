class Globals {}

class DevelopmentGlobals extends Globals {
  public theHost = "localhost";
  public thePort = "8080";

  public urls = {
    //Edit this later
    example: `http://${this.theHost}:${this.thePort}/admin/getAllCompanies`,

    addCompany: "http://localhost:8080/admin/addCompany",
    updateCompany: "http://localhost:8080/admin/updateCompany",
    deleteCompany: "http://localhost:8080/admin/deleteCompany/",
    getOneCompany: "http://localhost:8080/admin/getOneCompany/",
    getAllCompanies: "http://localhost:8080/admin/getAllCompanies",

    addCustomer: "http://localhost:8080/admin/addCustomer",
    updateCustomer: "http://localhost:8080/admin/updateCustomer",
    deleteCustomer: "http://localhost:8080/admin/deleteCustomer/",
    getOneCustomer: "http://localhost:8080/admin/getOneCustomer/",
    getAllCustomers: "http://localhost:8080/admin/getAllCustomers",

    addCompanyCoupon: "http://localhost:8080/company/addCompanyCoupon/",
    updateCompanyCoupon: "http://localhost:8080/company/updateCompanyCoupon",
    deleteCompanyCoupon: "http://localhost:8080/company/deleteCompanyCoupon/",
    getAllCompaniesCoupons:
      "http://localhost:8080/company/getAllCompaniesCoupons",
    getAllCompanyCouponsByCategory:
      "http://localhost:8080/company/getAllCouponsByCategory/",
    getAllCompanyCouponsUnderMaxPrice:
      "http://localhost:8080/company/getAllCouponsUnderMaxPrice/",
    getCompanyDetails: "http://localhost:8080/company/getCompanyDetails",

    purchaseCoupon: "http://localhost:8080/customer/purchaseCoupon",
    getAllCoupons: "http://localhost:8080/customer/getAllCoupons",
    getAllCustomerCoupons:
      "http://localhost:8080/customer/getAllCustomerCoupons",
    getAllAvailableForPurchase: "http://localhost:8080/customer/getAllCoupons",
    getAllCustomerCouponsByCategory:
      "http://localhost:8080/customer/getAllCouponsByCategory/",
    getAllCustomerCouponsUnderMaxPrice:
      "http://localhost:8080/customer/getAllCouponsUnderMaxPrice/",
    getCustomerDetails: "http://localhost:8080/customer/getCustomerDetails",

    register: "http://localhost:8080/register",
    login: "http://localhost:8080/login",
  };
}

class ProductionGlobals extends Globals {
  public urls = {
    addCompany: "http://13.48.44.129:8080/admin/addCompany",
    updateCompany: "http://13.48.44.129:8080/admin/updateCompany",
    deleteCompany: "http://13.48.44.129:8080/admin/deleteCompany/",
    getOneCompany: "http://13.48.44.129:8080/admin/getOneCompany/",
    getAllCompanies: "http://13.48.44.129:8080/admin/getAllCompanies",

    addCustomer: "http://13.48.44.129:8080/admin/addCustomer",
    updateCustomer: "http://13.48.44.129:8080/admin/updateCustomer",
    deleteCustomer: "http://13.48.44.129:8080/admin/deleteCustomer/",
    getOneCustomer: "http://13.48.44.129:8080/admin/getOneCustomer/",
    getAllCustomers: "http://13.48.44.129:8080/admin/getAllCustomers",

    addCompanyCoupon: "http://13.48.44.129:8080/company/addCompanyCoupon/",
    updateCompanyCoupon: "http://13.48.44.129:8080/company/updateCompanyCoupon",
    deleteCompanyCoupon:
      "http://13.48.44.129:8080/company/deleteCompanyCoupon/",
    getAllCompaniesCoupons:
      "http://13.48.44.129:8080/company/getAllCompaniesCoupons",
    getAllCompanyCouponsByCategory:
      "http://13.48.44.129:8080/company/getAllCouponsByCategory/",
    getAllCompanyCouponsUnderMaxPrice:
      "http://13.48.44.129:8080/company/getAllCouponsUnderMaxPrice/",
    getCompanyDetails: "http://13.48.44.129:8080/company/getCompanyDetails",

    purchaseCoupon: "http://13.48.44.129:8080/customer/purchaseCoupon",
    getAllCoupons: "http://13.48.44.129:8080/customer/getAllCoupons",
    getAllCustomerCoupons:
      "http://13.48.44.129:8080/customer/getAllCustomerCoupons",
    getAllAvailableForPurchase:
      "http://13.48.44.129:8080/customer/getAllCoupons",
    getAllCustomerCouponsByCategory:
      "http://13.48.44.129:8080/customer/getAllCouponsByCategory/",
    getAllCustomerCouponsUnderMaxPrice:
      "http://13.48.44.129:8080/customer/getAllCouponsUnderMaxPrice/",
    getCustomerDetails: "http://13.48.44.129:8080/customer/getCustomerDetails",

    register: "http://13.48.44.129:8080/register",
    login: "http://13.48.44.129:8080/login",

    layout: "http://13.48.44.129:8080/layout",
    home: "http://13.48.44.129:8080",
  };
}

const globals = new ProductionGlobals();
// const globals = process.env.NODE_ENV === "development" ? new DevelopmentGlobals() : new ProductionGlobals();

export default globals;
