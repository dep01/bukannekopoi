// HOW TO IMPORT ?
// const Convert = require('location/newAnimeModel.js'); 
// OR
// import Convert from 'location/newAnimeModel.js'
// HOW TO USE?
// FOR OBJECT
// const data = Convert.objectOfnewAnimeModel(data)
// FOR ARRAY
// const data = Convert.listOfnewAnimeModel(data)
const modelOfDatanewAnimeModel = {
	title: '',
	episode: '',
	watch_url: '',
	image_url: ''
};
function listOfnewAnimeModel(data = []) {
  var listData = [modelOfDatanewAnimeModel];
  listData = [];
  try {
    data.map((val) => {
      var object = {
				title: val.title ?? null,
				episode: val.episode ?? null,
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
function objectOfnewAnimeModel(data = null) {
  var objectData = modelOfDatanewAnimeModel;
  if (data == null) {
    return null;
  }
  try {
		objectData.title = data.title ?? null;
		objectData.episode = data.episode ?? null;
		objectData.watch_url = data.watch_url ?? null;
		objectData.image_url = data.image_url ?? null;
  } catch (error) {
    console.log(error.message);
  }
  return objectData;
}
module.exports = {
  listOfnewAnimeModel: listOfnewAnimeModel,
  objectOfnewAnimeModel: objectOfnewAnimeModel,
};




  