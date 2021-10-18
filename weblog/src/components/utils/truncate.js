export const truncate = (str, len) => {
  
  let newTxt = str.replace(/<.*?>/g, " ");
  newTxt = newTxt.replace(/&.*?;/g, " ");

  return newTxt.length > len - 10 ? newTxt.substring(0, len) + "..." : newTxt;
};
