// sketch.js

function setup() {
  createCanvas(windowWidth, windowHeight);

  //獲取生成按鈕元素
  const generateButton = select("#generateButton");
  generateButton.mousePressed(generateImage);

}

// function mousePressed(){
// 	generateImage
// }

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
  // 清空畫布
  background("#E7E7E7");

  // 設置圖案生成初始的位置
  let x = width / 2;
  // let x = 40;
  const y = height / 2;
  //textSize(32);

  for (let i = 0; i < inputText.length; i++) {
    const letter = inputText.charAt(i).toUpperCase();
    // 將字母轉換成大寫

    // 檢查字母是否在對照表中
    if (sizeMap.hasOwnProperty(letter)) {
      const size = sizeMap[letter];
      ellipse(x, y, size * 10, size * 10);
      // 根據對照表產生圖案

      x += size * 12;
      // 更新水平位置圖案不會疊在一起
    }
  }
}
