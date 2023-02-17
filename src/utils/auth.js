

export default function isLogged(){
  if(localStorage.get('token')&& localStorage.getItem('user')){
    return true;
  }else{
    return false;
  }
}