const sentence = 'hello there from lighthouse labs';
let t = 
for(const char of sentence){
  setTimeout(()=>process.stdout.write(char), 1000);
}