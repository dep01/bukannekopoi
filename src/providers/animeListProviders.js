import {sys_get} from 'rbase-helpers/api_client';

export async function getAnimeList({page = 1}) {
  try {
    const response = await sys_get({
      auth: false,
      endpoint: `anime_list?page=${page}`,
    });
    if (response.success) {
      return response;
    } else {
      throw response;
    }
  } catch (error) {
    throw error;
  }
}

export async function getNewAnime() {
  try {
    const response = await sys_get({auth: false, endpoint: ''});
    if (response.success) {
      return response;
    } else {
      throw response;
    }
  } catch (error) {
    throw error;
  }
}

export async function getEpisodeList({uri = ''}) {
  try {
    const response = await sys_get({
      auth: false,
      endpoint: `episode_list?uri=${uri}`,
    });
    if (response.success) {
      return response;
    } else {
      throw response;
    }
  } catch (error) {
    throw error;
  }
}

export async function getUrlWatchAnime({uri = ''}) {
    try {
      const response = await sys_get({
        auth: false,
        endpoint: `watch_anime?uri=${uri}`,
      });
      if (response.success) {
        return response;
      } else {
        throw response;
      }
    } catch (error) {
      throw error;
    }
  }
  
export async function getAnimeListAlpha() {
  try {
    const response = await sys_get({
      auth: false,
      endpoint: `anime_list_alpha`,
    });
    if (response.success) {
      return response;
    } else {
      throw response;
    }
  } catch (error) {
    throw error;
  }
}

export async function searchAnime({search=""}) {
  try {
    const response = await sys_get({
      auth: false,
      endpoint: `search?search=${search}`,
    });
    if (response.success) {
      return response;
    } else {
      throw response;
    }
  } catch (error) {
    throw error;
  }
}