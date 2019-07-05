 $(document).ready(function() {
	
	 $('.LoginLink').click(function() {
            $('.loginSection').show();
            $('.homeSection').hide();
            $('.HomeLink').removeClass('active');
            $('.LoginLink').addClass('active');
        });
        

    });
