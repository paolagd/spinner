let char = ['|   ', '/   ', '-   ', '\\   ','|   ', '/   ', '-   ', '\\   ','|   '];

const intervalCallback = (duration, i) => {   
  if(i < char.length){ 
    setTimeout((index) => { 
      process.stdout.write('\r'+char[index])
    }, duration, i); 
    i ++;
    intervalCallback(duration + 200,  i);
  } 
}
 
intervalCallback(0, 0);

