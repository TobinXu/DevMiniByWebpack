const EntryPlugin = require('webpack/lib/EntryPlugin')

const path = require('path');
const fs = require('fs');
const replaceExt = require('replace-ext');

class MinaWebpackPlugin {
  constructor() {
    this.entries = [];
  }

  applyEntry(compiler, done) {
    const { context, entry } = compiler.options;
    this.entries
      .map(item => replaceExt(item, '.js'))
      .map(item => path.relative(context, item))
      .forEach(item => this.itemToPlugin(context, './' + item, replaceExt(item, '')).apply(compiler));
      if (done) {
        done();
      }
  }

  // apply 是每一个插件的入口
  apply(compiler) {
    const { context, entry } = compiler.options;
    // 找到所有的入口文件，存放在 entries 里面
    this.inflateEntries(context, './app.js');

    // 这里订阅了 compiler 的 entryOption 事件，当事件发生时，就会执行回调里的代码
    compiler.hooks.entryOption.tap('MinaWebpackPlugin', () => {
      this.applyEntry(compiler);
      // this.entries
      //   // 将文件的扩展名替换成 js
      //   .map(item => replaceExt(item, '.js'))
      //   // 把绝对路径转换成相对于 context 的路径
      //   .map(item => path.relative(context, item))
      //   // 应用每一个入口文件，就像手动配置的那样
      //   // 'app'              : './app.js',
      //   // 'pages/index/index': './pages/index/index.js',
      //   // 'pages/logs/logs'  : './pages/logs/logs.js',
      //   .forEach(item => this.itemToPlugin(context, './' + item, replaceExt(item, '')).apply(compiler));
      // 返回 true 告诉 webpack 内置插件就不要处理入口文件了，因为这里已经处理了
      return true;
    });

    // 监听 watchRun 事件，当事件发生时，执行回调里的代码
    compiler.hooks.watchRun.tap('MinaWebpackPlugin', (compiler, done) => {
      this.applyEntry(compiler, done);
    })
  }

  itemToPlugin(context, item, name) {
    return new EntryPlugin(context, item, name);
  }

  inflateEntries(context, entry) {
    this._inflateEntries(context, path.resolve(context, entry));
  }

  _inflateEntries(context, entry) {
    const configFile = replaceExt(entry, '.json');
    if (fs.existsSync(configFile)) {
      const content = fs.readFileSync(configFile, 'utf8');
      const config = JSON.parse(content);

      ['pages', 'usingComponents'].forEach(key => {
        const items = config[key];
        if (typeof items === 'object') {
          Object.values(items).forEach(item => this.inflateEntries(context, item));
        }
      });
    }
    if (entry != null && !this.entries.includes(entry)) {
      this.entries.push(entry);
    }
  }
}

module.exports = MinaWebpackPlugin;
