import { atom } from "recoil";

export const userAtom = atom({
  key:"userAtom",
  name:"userAtom",
  default:{
    isAuthenticated:false,
  },
  logout:() => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  },
})

export const subscriptionState = atom({
  key:"subscriptionState",
  name:"subscriptionState",
  default:{
    subscribed:false,
    product:undefined,
    package:undefined
  }
});

export const errorAtom = atom({
  key:"errorAtom",
  name:"errorAtom",
  default:{
    error:false,
    message:"",
  }
})

export const messageAtom = atom({
  key:"messageAtom",
  name:"messageAtom",
  default:{
    msg:false,
    message:""
  }
})

export const loadingAtom = atom({
  key:"loadingAtom",
  name:"loadingAtom",
  default:{
    loading:false,
  }  
})