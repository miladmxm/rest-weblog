export const truncate = (str, len) => {
    let newTxt = str.replace(/<[a-zA-Z & 0-9 & ; & / & ' & " & \ & = & ( & ) & ! & * & %]*?>/g, ' ')
    
        return newTxt.length > len-10 ? newTxt.substring(0, len) + "..." : newTxt;
    
}