// 関数

// メイン部分
let alertString;
alertString = addString("WebCamp");

// 作成した関数を呼び出す
alert(alertString)

// 作成した関数
function addString(strA){
  let addStr = "Hello " + strA;
  return addStr;
}