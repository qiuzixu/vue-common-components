const fs = require('fs-extra')
const packageName = require('./package.json').name,
  filed = /-(\w+)$/.test(packageName) ? packageName.match(/-(\w+)$/)[1] : '',
  filedUpper = JSON.stringify(filed.charAt(0).toUpperCase() + filed.slice(1))
// 定义源文件和目标文件的路径
const sourceFilePath = './vue2-components/distV2'
const sourceFilePath2 = './vue3-components/distV3'
const targetFilePath = 'targetLib/distV2'
const targetFilePath2 = 'targetLib/distV3'

try {
  fs.copySync(sourceFilePath, targetFilePath)
  fs.copySync(sourceFilePath2, targetFilePath2)
  console.log('复制成功')
} catch (err) {
  console.log('复制失败')
}

// 生成代码
const code = `
let version,mainFile

if (process.env.VUE_VERSION === '2') {
  version = 'distV2'
  mainFile= 'k'+ ${filedUpper} + '.umd.min.js'
} else if (process.env.VUE_VERSION === '3') {
  version = 'distV3'
  mainFile= 'k'+ ${filedUpper} + '.js'
} else {
  // 默认为 Vue 3
  version = 'distV3'
  mainFile= 'k'+ ${filedUpper} + '.js'
}

// 返回相应版本的代码
module.exports = require(\`./\${version}/\${mainFile}\`);
`

// 写入文件
fs.writeFileSync('./targetLib/index.js', code)

console.log('File created successfully.')
