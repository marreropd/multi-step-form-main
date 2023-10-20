function transformData(formData) {
  const planPricesMonthly = {
    arcade: 9,
    advanced: 12,
    pro: 15,
  };

  const planPricesYearly = {
    arcade: 90,
    advanced: 120,
    pro: 150,
  };

  const servicePricesMonthy = {
    "online-service": 1,
    "larger-storage": 2,
    "customizable-profile": 2,
  };

  const servicePricesYearly = {
    "online-service": 10,
    "larger-storage": 20,
    "customizable-profile": 20,
  };

  const serviceTitle = {
    "online-service": "Online service",
    "larger-storage": "Larger storage",
    "customizable-profile": "Customizable profile",
  };

  const chargeShort = {
    monthly: "mo",
    yearly: "yr",
  };

  const objectToReturn = {
    plan: formData.plan.charAt(0).toUpperCase() + formData.plan.slice(1),
    charge: formData.charge.charAt(0).toUpperCase() + formData.charge.slice(1),
    planPrice:
      formData.charge === "monthly"
        ? planPricesMonthly[formData.plan]
        : planPricesYearly[formData.plan],
    chargeShort: chargeShort[formData.charge],
    services: () => {
      let obj = [];
      formData.services.map((service) => {
        obj.push({
          title: serviceTitle[service],
          price:
            formData.charge === "monthly"
              ? servicePricesMonthy[service]
              : servicePricesYearly[service],
        });
      });
      return obj;
    },
  };

  const getTotals = (objectToReturn) => {
    let totalServices = 0;

    objectToReturn.services().forEach((service) => {
      totalServices += service.price;
    });

    return objectToReturn.planPrice + totalServices;
  };
  return { ...objectToReturn, total: getTotals(objectToReturn) };
}

export default transformData;
