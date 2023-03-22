// HOW TO IMPORT ?
// const Convert = require('location/animeListAlphaModel.js'); 
// OR
// import Convert from 'location/animeListAlphaModel.js'
// HOW TO USE?
// FOR OBJECT
// const data = Convert.objectOfanimeListAlphaModel(data)
// FOR ARRAY
// const data = Convert.listOfanimeListAlphaModel(data)
const modelOfDataanimeListAlphaModel = {
	list_letter: [],
	data: [modelOfDatadata]
};
function listOfanimeListAlphaModel(data = []) {
  var listData = [modelOfDataanimeListAlphaModel];
  listData = [];
  try {
    data.map((val) => {
      var object = {
				list_letter: val.list_letter ?? [],
				data: listOfdata(val.data ?? [])
      };
      listData.push(object);
    });
  } catch (error) {
    console.log(error.message);
  }
  return listData;
}
function objectOfanimeListAlphaModel(data = null) {
  var objectData = modelOfDataanimeListAlphaModel;
  if (data == null) {
    return null;
  }
  try {
		objectData.list_letter = data.list_letter ?? [];
		objectData.data = listOfdata(data.data ?? []);
  } catch (error) {
    console.log(error.message);
  }
  return objectData;
}
module.exports = {
  listOfanimeListAlphaModel: listOfanimeListAlphaModel,
  objectOfanimeListAlphaModel: objectOfanimeListAlphaModel,
};

const modelOfDatadata = {
	letter: '',
	list_anime: [modelOfDatalist_anime]
};
function listOfdata(data = []) {
  var listData = [modelOfDatadata];
  listData = [];
  try {
    data.map((val) => {
      var object = {
				letter: val.letter ?? null,
				list_anime: listOflist_anime(val.list_anime ?? [])
      };
      listData.push(object);
    });
  } catch (error) {
    console.log(error.message);
  }
  return listData;
}

const modelOfDatalist_anime = {
	title: '',
	watch_url: ''
}
function listOflist_anime(data = []) {
  var listData = [modelOfDatalist_anime];
  listData = [];
  try {
    data.map((val) => {
      var object = {
				title: val.title ?? null,
				watch_url: val.watch_url ?? null
      };
      listData.push(object);
    });
  } catch (error) {
    console.log(error.message);
  }
  return listData;
};


  