// HOW TO IMPORT ?
// const Convert = require('location/animeListModel.js'); 
// OR
// import Convert from 'location/animeListModel.js'
// HOW TO USE?
// FOR OBJECT
// const data = Convert.objectOfanimeListModel(data)
// FOR ARRAY
// const data = Convert.listOfanimeListModel(data)
const modelOfDataanimeListModel = {
	data: [modelOfDatadata],
	current_page: 0,
	max_page: 0
};
function listOfanimeListModel(data = []) {
  var listData = [modelOfDataanimeListModel];
  listData = [];
  try {
    data.map((val) => {
      var object = {
				data: listOfdata(val.data ?? []),
				current_page: val.current_page ?? null,
				max_page: val.max_page ?? null
      };
      listData.push(object);
    });
  } catch (error) {
    console.log(error.message);
  }
  return listData;
}
function objectOfanimeListModel(data = null) {
  var objectData = modelOfDataanimeListModel;
  if (data == null) {
    return null;
  }
  try {
		objectData.data = listOfdata(data.data ?? []);
		objectData.current_page = data.current_page ?? null;
		objectData.max_page = data.max_page ?? null;
  } catch (error) {
    console.log(error.message);
  }
  return objectData;
}
module.exports = {
  listOfanimeListModel: listOfanimeListModel,
  objectOfanimeListModel: objectOfanimeListModel,
};

const modelOfDatadata = {
	genre: [],
	title: '',
	desc: '',
	watch_url: '',
	image_url: ''
};
function listOfdata(data = []) {
  var listData = [modelOfDatadata];
  listData = [];
  try {
    data.map((val) => {
      var object = {
				genre: val.genre ?? [],
				title: val.title ?? null,
				desc: val.desc ?? null,
				watch_url: val.watch_url ?? null,
				image_url: val.image_url ?? null
      };
      listData.push(object);
    });
  } catch (error) {
    console.log(error.message);
  }
  return listData;
}



  