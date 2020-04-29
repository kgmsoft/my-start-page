import '../scss/styles.scss';
import axios from 'axios';
import dayjs from 'dayjs';
import { register } from 'register-service-worker';
import {
  initClock,
  setGreeting,
} from './modules/clock';
import {
  clearData,
  getData,
  setData,
} from './modules/data';
import {
  apiUrl,
  initIcons,
} from './modules/helpers';
import {
  initWeather,
} from './modules/weather';

async function getUnsplashImagesData() {
  const bgImagesApiUrl = `${apiUrl()}/background-image/`;
  const bgImagesData =  await axios.get(bgImagesApiUrl)
  .then((response) => {
    // console.log(response.data);
    return response.data;
  });
  return bgImagesData;
}

const normalizeImageData = (apiData) => {
  const returnData = apiData.map((imageData) => {
    const {
      alt_description: altDescription,
      description,
      links,
      location,
      urls,
      user,
    } = imageData || null;
    const {
      html: imageLink,
    } = links || null;
    const {
      title,
      name,
    } = location || null;
    const {
      regular: imageUrl
    } = urls || null;
    const {
      name: userName,
      links: userLinks,
    } = user || null;
    const {
      html: userLink,
    } = userLinks || null;
    return {
      altDescription,
      description,
      title,
      name,
      imageLink,
      imageUrl,
      userLink,
      userName,
    };
  });
  return returnData;
};

async function getUnsplashImage() {
  const lastUpdated = getData('bgLastUpdated');
  console.log('lastUpdated: ', lastUpdated);
  let apiData = null;
  if (lastUpdated) {
    const nextUpdateTime = dayjs(lastUpdated).add(60, 'minute');
    if (dayjs(lastUpdated).isAfter(nextUpdateTime) || lastUpdated === null) {
      apiData = await getUnsplashImagesData();
      apiData = normalizeImageData(apiData);
      clearData('bgData');
      clearData('bgLastUpdated');
      setData('bgData', apiData);
      setData('bgLastUpdated', dayjs());
    } else {
      apiData = getData('bgData');
    }
  } else {
    apiData = await getUnsplashImagesData();
    apiData = normalizeImageData(apiData);
    clearData('bgData');
    clearData('bgLastUpdated');
    setData('bgData', apiData);
    setData('bgLastUpdated', dayjs());
  }

  console.log('apiData: ', apiData);

  return apiData;
}

const setImageAndMetaData = async () => {
  const getAllBgImages = await getUnsplashImage();
  const randomImageNumber = Math.floor(Math.random() * 4);
  console.log('randomImageNumber: ', randomImageNumber);
  const imageData = getAllBgImages[randomImageNumber];
  const {
    title,
    name,
    description,
    altDescription,
    imageLink,
    imageUrl,
    userLink,
    userName,
  } = imageData || null;
  const getImageTitle = () => {
    if (title) {
      return title;
    }
    if (name) {
      return name;
    }
    if (description) {
      return description;
    }
    if (altDescription) {
      return altDescription;
    }
    return '';
  };
  document.body.style.background = `url('${imageUrl}') no-repeat center center fixed`;
  document.body.style.backgroundSize = 'cover';
  const linkSuffix = '?utm_source=My%20Browser%20Start%20Page&utm_medium=referral';
  const bgMetadataEl = document.querySelector('.bg-metadata');
  bgMetadataEl.innerHTML = `
    <span class="text-muted">
      <a class="" href="${imageLink}${linkSuffix}" target="_blank"><i class="fad fa-fw fa-image"></i> ${getImageTitle()}</a>
      <br>
      <a href="${userLink}${linkSuffix}" target="_blank"><i class="fad fa-fw fa-user"></i> ${userName}</a>
      via
      <a href="https://unsplash.com/${linkSuffix}" target="_blank">Unsplash</a>
    </span>
  `;
};

const initServiceWorker = () => {
  register('/service-worker.js', {
    updated(registration) {
      console.log(`Updated to the latest version.\n${registration}`);
      window.location.reload(true);
    },
    offline() {
      console.info('No internet connection found. App is currently offline.');
    },
    error(error) {
      console.error('Error during service worker registration:', error);
    },
  });
};

const initApp = () => {
  initServiceWorker();
  setImageAndMetaData();
  initClock();
  setGreeting();
  initIcons();
  initWeather();
};

document.onreadystatechange = async () => {
  if (document.readyState === 'interactive') {
    // code goes here
    initApp();
  }
};
