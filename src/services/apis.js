import axios from 'axios';

const getDialog = async(url) => {
  try {
    const { data } = await axios({
      url,
      method: "GET",
    });
    return data;
  } catch (err) {
    throw err;
  }
}

export {
  getDialog
}
