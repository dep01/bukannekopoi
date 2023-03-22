// HOW TO IMPORT ?
// const Convert = require('location/searchAnimeModel.js'); 
// OR
// import Convert from 'location/searchAnimeModel.js'
// HOW TO USE?
// FOR OBJECT
// const data = Convert.objectOfsearchAnimeModel(data)
// FOR ARRAY
// const data = Convert.listOfsearchAnimeModel(data)
const modelOfDatasearchAnimeModel = {
	genre: [],
	title: '',
	desc: '',
	watch_url: '',
	image_url: ''
};
function listOfsearchAnimeModel(data = []) {
  var listData = [modelOfDatasearchAnimeModel];
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
function objectOfsearchAnimeModel(data = null) {
  var objectData = modelOfDatasearchAnimeModel;
  if (data == null) {
    return null;
  }
  try {
		objectData.genre = data.genre ?? [];
		objectData.title = data.title ?? null;
		objectData.desc = data.desc ?? null;
		objectData.watch_url = data.watch_url ?? null;
		objectData.image_url = data.image_url ?? null;
  } catch (error) {
    console.log(error.message);
  }
  return objectData;
}
module.exports = {
  listOfsearchAnimeModel: listOfsearchAnimeModel,
  objectOfsearchAnimeModel: objectOfsearchAnimeModel,
};




  