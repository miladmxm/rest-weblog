export const truncate = (str, len) => {
  let newTxt = str.replace(/<.*?>/g, " ");
  newTxt = newTxt.replace(/&.*?;/g, " ");

  return newTxt.length > len - 10 ? newTxt.substring(0, len) + "..." : newTxt;
};
export const truncateAll = (str) => {
  let newTxt = str.replace(/<.*?>/g, "");
  newTxt = newTxt.replace(/&.*?;/g, "");
  if(!/[a-zA-Z0-9ا-ی]/.test(newTxt)){
    return newTxt = ''
  }
  return newTxt;
};
