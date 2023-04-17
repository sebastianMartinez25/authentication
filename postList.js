export var apikeyg;
export var spreadSheetId;
export const setupPosts = (data) => {
    
    if (data.length){
        data.forEach(doc => {
            const post = doc.data()
          apikeyg= post.apikeyg;
          spreadSheetId=post.spreadSheetId;
        })
    }else{}
      
};
