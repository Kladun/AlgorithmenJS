  function nestedTypeKiller(data){
    if(Array.isArray(data)){
      for(let i = 0; i < data.length; i++){
        nestedTypeKiller(data[i]);
      }
    }else if(typeof data == "object"){
      for(let key in data){
        nestedTypeKiller(data[key]);
      }
    }else{
      let convertType = Number(data);
      if(isNaN(convertType)){
        console.log(data);
      }else{
        console.log(data);
      }
    }
  }
