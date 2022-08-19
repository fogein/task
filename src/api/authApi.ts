

export const authApi = {
   login(email: string, password: string) {
    return new Promise ((resolve:any, reject) => {
      setTimeout(() => {
        resolve(email)
      }, 1000);
         
       
    }) ;
  },
};
