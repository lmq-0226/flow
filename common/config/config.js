/**
 * WanlShop 多用户电商系统核心配置项
 * @author 深圳前海万联科技有限公司 <wanlshop@i36k.com> 
 * < 本程序，未经版权所有权人书面许可，不能自行用于商业用途！>
 * 
 * @config socketUrl 即时通讯服务器地址，微信必须使用wss:// 如：wss://chat.wanlshop.com
 * @config cdnUrl OSS服务地址  如：https://oss.wanlshop.com 或 https://www.wanlshop.com
 * @config appUrl API服务器地址 如：https://api.wanlshop.com 或 https://www.wanlshop.com/api
 * @config amapKey 高德网页Key
 * @config debug 全局调试
 * 
 * @ 相关文档 https://doc.fastadmin.net/wanlshop/265.html
 */
export default {
	socketurl: 'wss://chat.51liuxiang.com', //如果是ws:// 地址为ws://你服务器IP:7272 如 ws://123.4.56.78:7272，使用wss 后面不需要添加 :7272 端口
	// cdnurl: 'http://localhost',
	cdnurl: 'http://app.51liuxiang.com/api',
	appurl: 'http://app.51liuxiang.com/api', //如二级域名：https://api.wanlshop.com 或不使用二级域名 https://www.wanlshop.com/api
	amapkey: 'd210b1ae26368deb246f4420f81cd6ce',
	appid: 'wx6****************7a', // 公众号appid
	versionName: '1.1.2',
	versionCode: '112',
	debug: true
}