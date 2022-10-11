const simplifyPath = (path) =>{

    const split_path = path.split('/');
  
  
    let stack =[];
    let res = "";
  
    for(let i =0; i< split_path.length; i++){
        if(split_path[i] === "." || split_path[i] === "" ){
            continue
        }
        if(split_path[i] === ".." ){
            if(stack.length > 0){
                stack.pop();
            }
          
        }
        else{
            stack.push(split_path[i])
        }
  
    }
  
  for(let dir of stack){
      res += `/${dir}`;
  }
  
  if(res === ""){
      res ='/'
  }
  
  
  return res
  };