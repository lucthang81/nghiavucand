# THPT Bạc Liêu Confessions
## Hướng dẫn 
**-Thay đổi domain trang**
<ul>
	<li>Vào /aplication/config/config.php</li>
	<li>Thêm domain vào <code>config['base_url'] = 'https://yourdomain.xxx';</code></li>
</ul>
**-Thay đổi thông tin database**
<ul>
	<li>Vào /aplication/config/database.php</li>
</ul>
**-Thay đổi Facebook App ID và Facebook App Secret**
<ul>
	<li>Vào /aplication/config/facebook.php</li>
</ul>
**-Thêm ID, tên và logo Fanpage**
<ul>
	<li>Vào /aplication/config/page.php</li>
</ul>
<b><i>-Sửa lỗi  mkdir(): Invalid path</i></b>
<ul>
	<li>Vào /aplication/config/config.php</li>
	<li>Tìm dòng <code>$config['sess_save_path'] = NULL;</code> thay bằng<code>$config['sess_save_path'] = sys_get_temp_dir();</code> </li>
</ul>
## Thông tin liên hệ
<ul>
	<li>Chắc chắn do chưa có nhiều kinh nghiệm trong việc code nên còn nhiều thiết sót mong các bạn, anh, chị hỗ trợ bằng cách liên hệ </li>
	<li>Facebook: <a href='https://fb.me/e4f58a805a6e1fd0f6bef58c86f9ceb3'>https://fb.me/e4f58a805a6e1fd0f6bef58c86f9ceb3</a></li>
	<li>Email: <a href='mailto:minhkhoablieu@gmail.com'>chanzi908@gmail.com</a></li>
</ul>
## Một số thông tin khác 
<ul>
	<li>Được phát triển bởi Phùng Sơn Minh Khoa với sợ trợ giúp hỗ trợ của nhiều anh em</li>
	<li>Admin Cpanel được thiết kế bởi MULTINITY <a href='https://github.com/multinity/stisla-admin-template'>https://github.com/multinity/stisla-admin-template</a></li>
</ul>