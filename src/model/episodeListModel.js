// HOW TO IMPORT ?
// const Convert = require('location/episodeListModel.js'); 
// OR
// import Convert from 'location/episodeListModel.js'
// HOW TO USE?
// FOR OBJECT
// const data = Convert.objectOfepisodeListModel(data)
// FOR ARRAY
// const data = Convert.listOfepisodeListModel(data)
const modelOfDataepisodeListModel = {
	image_url: '',
	desc: '',
	episode_list: [modelOfDataepisode_list]
};
function listOfepisodeListModel(data = []) {
  var listData = [modelOfDataepisodeListModel];
  listData = [];
  try {
    data.map((val) => {
      var object = {
				image_url: val.image_url ?? null,
				desc: val.desc ?? null,
				episode_list: listOfepisode_list(val.episode_list ?? [])
      };
      listData.push(object);
    });
  } catch (error) {
    console.log(error.message);
  }
  return listData;
}
function objectOfepisodeListModel(data = null) {
  var objectData = modelOfDataepisodeListModel;
  if (data == null) {
    return null;
  }
  try {
		objectData.image_url = data.image_url ?? null;
		objectData.desc = data.desc ?? null;
		objectData.episode_list = listOfepisode_list(data.episode_list ?? []);
  } catch (error) {
    console.log(error.message);
  }
  return objectData;
}
module.exports = {
  listOfepisodeListModel: listOfepisodeListModel,
  objectOfepisodeListModel: objectOfepisodeListModel,
};

const modelOfDataepisode_list = {
	date: '',
	episode: '',
	watch_url: ''
};
function listOfepisode_list(data = []) {
  var listData = [modelOfDataepisode_list];
  listData = [];
  try {
    data.map((val) => {
      var object = {
				date: val.date ?? null,
				episode: val.episode ?? null,
				watch_url: val.watch_url ?? null
      };
      listData.push(object);
    });
  } catch (error) {
    console.log(error.message);
  }
  return listData;
}



  