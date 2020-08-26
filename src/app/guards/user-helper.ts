export class UserHelper {
    public static isLogged = () => {
      if (localStorage.getItem('user')){
          return true;
      }else{
        return false;
      }
    }
  }
