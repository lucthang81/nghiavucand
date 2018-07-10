$(document).ready(function() {
	$("#upload").on("click", function() {
		total = $("input:checkbox:checked").length, $(".card input:checkbox").each(function() {
			var a, e;
			this.checked && (a = $(this).val(), e = $("input#" + a + ".form-control").val(), 
				$.ajax({
				url: "/admin/confessions_moi/up_cfs_len_page",
				type: "POST",
				dataType: "text",
				data: {
					id: a,
					mess: e
				}
			})), $("div#" + a + ".card").remove(), console.log(total), console.log(a)
		}), $.ajax({
			url: "/admin/confessions_moi/capnhat_so_cfs",
			type: "POST",
			dataType: "text",
			data: {
				total: total
			}
		})
	}), $("#delete").on("click", function() {
		$(".card input:checkbox").each(function() {
			var a;
			this.checked && (a = $(this).val(), $.ajax({
				url: "/admin/confessions_moi/xoa_cfs",
				type: "POST",
				dataType: "text",
				data: {
					id: a
				}
			})), $("div#" + a + ".card").remove()
		})
	}), 
	$("button.btn.btn-primary").on("click", function() {
		mess = $("textarea#comment.form-control").val();
		if(mess!=''){
			$.ajax({
				url: "/trangchu/upload",
				type: "POST",
				dataType: "text",
				data: {
					mess: mess
				},
				success:function(data)
				{
					$('span.text-success').text(data);
					
				}
			})
		console.log(mess);
		}

	 }), 
	$("#email").change(function() {
		var a = $("#email").val();
		"" !== a && $.ajax({
			url: "/admin/them_admin_moi/check_email_avalibility",
			type: "POST",
			dataType: "text",
			data: {
				email: a
			},
			success: function(a) {
				console.log(a.replace(/\s+/, "")), 1 == a ? ($("label").text(" "), $("label").addClass("text-danger"), $("label").append("Email không hợp lệ")) : 2 == a ? ($("label").text(" "), $("label").addClass("text-danger"), $("label").append("Email đã có người sử dụng ")) : ($("label").text(" "), $("label").removeClass('text-danger').addClass('text-success'), $("label").append("Email hợp lệ"), $("button#add_admin.btn.btn-primary").removeAttr("disabled"))
			}
		})
	}), $("button#add_admin.btn.btn-primary").on("click", function() {
		name = $("input#ten.form-control").val(), email = $("input#email.form-control").val(), nickname = $("input#nickname.form-control").val(), $.ajax({
			url: "/admin/them_admin_moi/them_admin",
			type: "POST",
			dataType: "text",
			data: {
				name: name,
				email: email,
				nickname: nickname
			},
			success: function() {
				$("label").text(" "), 
				$("label").removeClass('text-danger').addClass('text-success'), 
				$("label").append("Thêm thành công")
			}
		})
	})
});