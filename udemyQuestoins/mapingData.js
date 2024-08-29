//map loc[0].location_key,loc.auto_assign,bulk_config[0].data_values.config_key

const loc = [
  { location_key: [32, 43, 54], auto_assin: 1 },
  { location_key: [24, 89], auto_assin: 2 },
];

const bulk_config = [
  {
    data_values: {
      config_key: 100,
    },
  },
  {
    data_values: {
      config_key: 200,
    },
  },
];

function mapping() {
  return loc.map((item, index) => {
    return item.location_key.map((key) => {
      return {
        location_key: key,
        auto_assin: item.auto_assin,
        config_key: bulk_config[index].data_values.config_key,
      };
    });
  }).reduce((acc,arr)=>acc.concat(arr),[]);
}

console.log(mapping());


