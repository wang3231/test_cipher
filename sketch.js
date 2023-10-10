// sketch.js

function setup() {
  createCanvas(windowWidth, windowHeight);

  //獲取生成按鈕元素
  const generateButton = select("#generateButton");
  generateButton.mousePressed(generateImage);

}

function draw() {}

function generateImage() {
  // 獲取輸入框裡的文字
  const inputText = select("#inputText").value();

  // 重置輸出區域
  const output = select("#output");
  output.html("");

  // create a p5.js canvas
  const canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent(output);
  clear();

  // 設置圖案生成初始的位置
  let x = width / 2-200;
  let y = height / 2;


  for (let i = 0; i < inputText.length; i++) {
    const letteri = inputText.charAt(i).toUpperCase();
    
      if (sizeMap.hasOwnProperty(letteri)) {
      const sizei = sizeMap[letteri];
      
      strokeWeight(4)
      ellipse(x, y, 6);
        
        if((sizei%4) === 1){
          
              line(x,y,x+(sizei/4+1) * 10,y);
      x += (sizei/4+1) * 10; 
          
        }else if((sizei%4) === 2){
          
              line(x,y,x,y-(sizei/4+1)  * 10);
      y -= (sizei/4+1) * 10; 
          
        }else if((sizei%4) === 3){
          
              line(x,y,x-(sizei/4+1)  * 10,y);
      x -= (sizei/4+1) * 10; 
          
        }else if((sizei%4) === 0){
          
              line(x,y,x,y+(sizei/4+1)  * 10);
      y += (sizei/4+1) * 10; 
          
        }
             
    }
  }
  
 
}
