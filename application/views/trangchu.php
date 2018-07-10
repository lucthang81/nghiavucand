<?php $this->load->view('header');?>
<div class="container">
	<div class="row">
		<div class="col-sm-2">
			<!-- <div class="card bg-faded">
				<div class="card card-body bg-light"> Liên hệ quảng cáo </div>
			</div> -->
		</div>
		<div class="col-sm-8">
			<div class="form-group">
				<div class="card">
					<div class="card-header">
						<label for="comment">
							<h5>Bạn là ai tôi không biết </h5>
							<h6>Nhưng hãy nhớ đọc điều khoản sử dụng nếu chưa đọc hãy bấm vào <a href="/dieukhoansudung">đây</a></h6> </label>
					</div>
					<div class="card-body">
						<textarea style="overflow:auto;resize:none" rows="7" class="form-control" id="comment"></textarea>
						<br>
						<p><span class="text-success"></span></p>
						<button type="button" class="btn btn-primary" id='uploadcfs'> Đăng Confession </button>
						<br>

					</div>
				</div>
			</div>
		</div>
		<div class="col-sm-2">
			<!-- <div class="card bg-faded">
				<div class="card card-body bg-light"> Liên hệ quảng cáo </div>
			</div> -->
		</div>
	</div>
</div>
<!-- The Modal -->
<!-- <div class="modal fade" id="myModal">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-body">
				<p>Cảm ơn bạn đã gửi confession vui lòng chờ đợi ad duyệt</p>
				<p>Nếu không thấy confession của mình trên page vui lòng coi lại nội quy hoặc liên hệ cho admin</p>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
			</div>
		</div>
	</div>
</div> -->
<?php $this->load->view('footer');?>