<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Trangchu extends CI_Controller {
	public function __construct()
	{
		parent::__construct();
		$this->load->model('cfs');
		$this->load->config('page');

	}
	public function index()
	{
		$data['title'] = 'Confessions';
		$data['logo'] = $this->config->item('page_logo');
		$data['name_page'] = $this->config->item('page_name');
		$this->load->view('trangchu', $data);
      
    }
    public function upload()
    {
    	$mess = $this->input->post('mess');
		if(!empty($mess)){
			if($this->cfs->check_check($mess) >=1 )
			{
				echo 'Confession đã bị trùng lập';
			}
			else
			{
				echo 'Đăng thành công';
				$this->cfs->up_cfs_to_db($mess);
			}
			
		}
    }
 }

/* End of file Trangchu.php */
/* Location: ./application/controllers/Trangchu.php */