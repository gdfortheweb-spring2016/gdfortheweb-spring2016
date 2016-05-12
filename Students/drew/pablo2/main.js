
/*!
 * toggleAttr() jQuery plugin
 * @link http://github.com/mathiasbynens/toggleAttr-jQuery-Plugin
 * @description Used to toggle selected="selected", disabled="disabled", checked="checked" etc…
 * @author Mathias Bynens <http://mathiasbynens.be/>
 */

$(function() {

	$(".audio01").trigger('load');
	$(".audio02").trigger('load');
	$(".audio03").trigger('load');
	$(".audio04").trigger('load');
	$(".audio05").trigger('load');
	$(".audio06").trigger('load');
	$(".audio07").trigger('load');
	$(".audio08").trigger('load');
	$(".audio09").trigger('load');
	$(".audio10").trigger('load');
	$(".audio11").trigger('load');
	$(".audio12").trigger('load');
	$(".audio13").trigger('load');
	$(".audio14").trigger('load');
	$(".audio15").trigger('load');
	$(".audio16").trigger('load');
	$(".audio17").trigger('load');
	$(".audio18").trigger('load');
	$(".audio19").trigger('load');
	// ... //

	// function play_audio(task) {
	//       if(task == 'play'){
	//            $(".pablo_audio").trigger('play');
	//       }
	//       if(task == 'stop'){
	//            $(".pablo_audio").trigger('pause');
	//            $(".pablo_audio").prop("currentTime",0);
	//       }
	//  }
	$(".ultra").click(function() {
		if($(this).hasClass("is-playing")) {
			$(".audio01").trigger('stop');
			$(this).removeClass("is-playing");
			$("audio").each(function() {
				$(this).trigger("pause");
			});
			console.log ( 'stopped' );
		} else {
			$(".audio01").trigger("play");
	  		$(this).addClass("is-playing");
			console.log ( 'played' );
			}
	});



	$(".fsmh1").click(function() {
		if($(this).hasClass("is-playing")) {
			$(".audio02").trigger('stop');
			$(this).removeClass("is-playing");
			$("audio").each(function() {
				$(this).trigger("pause");
			});
			console.log ( 'stopped' );
		} else {
			$(".audio02").trigger("play");
	  		$(this).addClass("is-playing");
			console.log ( 'played' );
			}
	});


	$(".fsmh2").click(function() {
		if($(this).hasClass("is-playing")) {
			$(".audio03").trigger('stop');
			$(this).removeClass("is-playing");
			$("audio").each(function() {
				$(this).trigger("pause");
			});
			console.log ( 'stopped' );
		} else {
			$(".audio03").trigger("play");
	  		$(this).addClass("is-playing");
			console.log ( 'played' );
			}
	});

	$(".famous").click(function() {
		if($(this).hasClass("is-playing")) {
			$(".audio04").trigger('stop');
			$(this).removeClass("is-playing");
			$("audio").each(function() {
				$(this).trigger("pause");
			});
			console.log ( 'stopped' );
		} else {
			$(".audio04").trigger("play");
	  		$(this).addClass("is-playing");
			console.log ( 'played' );
			}
	});


	$(".feedback").click(function() {
		if($(this).hasClass("is-playing")) {
			$(".audio05").trigger('stop');
			$(this).removeClass("is-playing");
			$("audio").each(function() {
				$(this).trigger("pause");
			});
			console.log ( 'stopped' );
		} else {
			$(".audio05").trigger("play");
	  		$(this).addClass("is-playing");
			console.log ( 'played' );
			}
	});

	$(".low").click(function() {
		if($(this).hasClass("is-playing")) {
			$(".audio06").trigger('stop');
			$(this).removeClass("is-playing");
			$("audio").each(function() {
				$(this).trigger("pause");
			});
			console.log ( 'stopped' );
		} else {
			$(".audio06").trigger("play");
	  		$(this).addClass("is-playing");
			console.log ( 'played' );
			}
	});

	$(".high").click(function() {
		if($(this).hasClass("is-playing")) {
			$(".audio07").trigger('stop');
			$(this).removeClass("is-playing");
			$("audio").each(function() {
				$(this).trigger("pause");
			});
			console.log ( 'stopped' );
		} else {
			$(".audio07").trigger("play");
	  		$(this).addClass("is-playing");
			console.log ( 'played' );
			}
	});

	$(".free").click(function() {
		if($(this).hasClass("is-playing")) {
			$(".audio08").trigger('stop');
			$(this).removeClass("is-playing");
			$("audio").each(function() {
				$(this).trigger("pause");
			});
			console.log ( 'stopped' );
		} else {
			$(".audio08").trigger("play");
	  		$(this).addClass("is-playing");
			console.log ( 'played' );
			}
	});

	$(".love").click(function() {
		if($(this).hasClass("is-playing")) {
			$(".audio09").trigger('stop');
			$(this).removeClass("is-playing");
			$("audio").each(function() {
				$(this).trigger("pause");
			});
			console.log ( 'stopped' );
		} else {
			$(".audio09").trigger("play");
	  		$(this).addClass("is-playing");
			console.log ( 'played' );
			}
	});	

	$(".waves").click(function() {
		if($(this).hasClass("is-playing")) {
			$(".audio10").trigger('stop');
			$(this).removeClass("is-playing");
			$("audio").each(function() {
				$(this).trigger("pause");
			});
			console.log ( 'stopped' );
		} else {
			$(".audio10").trigger("play");
	  		$(this).addClass("is-playing");
			console.log ( 'played' );
			}
	});	


	$(".fml").click(function() {
		if($(this).hasClass("is-playing")) {
			$(".audio11").trigger('stop');
			$(this).removeClass("is-playing");
			$("audio").each(function() {
				$(this).trigger("pause");
			});
			console.log ( 'stopped' );
		} else {
			$(".audio11").trigger("play");
	  		$(this).addClass("is-playing");
			console.log ( 'played' );
			}
	});	



	$(".friends").click(function() {
		if($(this).hasClass("is-playing")) {
			$(".audio12").trigger('stop');
			$(this).removeClass("is-playing");
			$("audio").each(function() {
				$(this).trigger("pause");
			});
			console.log ( 'stopped' );
		} else {
			$(".audio12").trigger("play");
	  		$(this).addClass("is-playing");
			console.log ( 'played' );
			}
	});	


	$(".wolves").click(function() {
		if($(this).hasClass("is-playing")) {
			$(".audio13").trigger('stop');
			$(this).removeClass("is-playing");
			$("audio").each(function() {
				$(this).trigger("pause");
			});
			console.log ( 'stopped' );
		} else {
			$(".audio13").trigger("play");
	  		$(this).addClass("is-playing");
			console.log ( 'played' );
			}
	});	


	$(".frank").click(function() {
		if($(this).hasClass("is-playing")) {
			$(".audio14").trigger('stop');
			$(this).removeClass("is-playing");
			$("audio").each(function() {
				$(this).trigger("pause");
			});
			console.log ( 'stopped' );
		} else {
			$(".audio14").trigger("play");
	  		$(this).addClass("is-playing");
			console.log ( 'played' );
			}
	});	




	$(".silver").click(function() {
		if($(this).hasClass("is-playing")) {
			$(".audio15").trigger('stop');
			$(this).removeClass("is-playing");
			$("audio").each(function() {
				$(this).trigger("pause");
			});
			console.log ( 'stopped' );
		} else {
			$(".audio15").trigger("play");
	  		$(this).addClass("is-playing");
			console.log ( 'played' );
			}
	});	


	$(".hours").click(function() {
		if($(this).hasClass("is-playing")) {
			$(".audio16").trigger('stop');
			$(this).removeClass("is-playing");
			$("audio").each(function() {
				$(this).trigger("pause");
			});
			console.log ( 'stopped' );
		} else {
			$(".audio16").trigger("play");
	  		$(this).addClass("is-playing");
			console.log ( 'played' );
			}
	});	

	$(".nomore").click(function() {
		if($(this).hasClass("is-playing")) {
			$(".audio17").trigger('stop');
			$(this).removeClass("is-playing");
			$("audio").each(function() {
				$(this).trigger("pause");
			});
			console.log ( 'stopped' );
		} else {
			$(".audio17").trigger("play");
	  		$(this).addClass("is-playing");
			console.log ( 'played' );
			}
	});	


	$(".facts").click(function() {
		if($(this).hasClass("is-playing")) {
			$(".audio18").trigger('stop');
			$(this).removeClass("is-playing");
			$("audio").each(function() {
				$(this).trigger("pause");
			});
			console.log ( 'stopped' );
		} else {
			$(".audio18").trigger("play");
	  		$(this).addClass("is-playing");
			console.log ( 'played' );
			}
	});	



	$(".fade").click(function() {
		if($(this).hasClass("is-playing")) {
			$(".audio19").trigger('stop');
			$(this).removeClass("is-playing");
			$("audio").each(function() {
				$(this).trigger("pause");
			});
			console.log ( 'stopped' );
		} else {
			$(".audio19").trigger("play");
	  		$(this).addClass("is-playing");
			console.log ( 'played' );
			}
	});	


	// jQuery.fn.toggleAttr = function(attr) {
 // 	return this.each(function() {
 //  	var $this = $(this);
 //  	$this.attr(attr) ? $this.removeAttr(attr) : $this.attr(attr, attr);
	//  });
	// };


    $(".svg-holder").click(function() {
		if($(this).hasClass("is-clicked")) {
			
			$(this).toggleClass("not-clicked");
			$(this).removeClass("is-clicked");
			$(this).removeClass("unplayed");
			$(".ultra").css("width","7.93%");
			$(".fsmh1").css("width","2.77%");
			$(".fsmh2").css("width","2.6%");
			$(".famous ").css("width","4.41%");
			$(".feedback ").css("width","3.33%");
			$(".low").css("width","2.66%");
			$(".high").css("width","4.55%");
			$(".free").css("width","2.4%");
			$(".love").css("width",".23%");
			$(".waves").css("width","4.05%");
			$(".fml").css("width","5.59%");
			$(".friends").css("width","6.01%");
			$(".wolves").css("width","7.04%");
			$(".frank").css("width",".25%");
			$(".silver").css("width",".36%");
			$(".hours").css("width","8.07%");
			$(".nomore").css("width","9.44%");
			$(".facts").css("width","4.55%");
			$(".fade").css("width","4.39%");
		
			
			
	} else {
			$(this).addClass("is-clicked");
			$(this).removeClass("not-clicked");
	  		$(".ultra").css("width",7.93*.7+"%");
			$(".fsmh1").css("width",2.77*.7+"%");
			$(".fsmh2").css("width",2.6*.7+"%");
			$(".famous ").css("width",4.41*.7+"%");
			$(".feedback ").css("width",3.33*.7+"%");
			$(".low").css("width",2.66*.7+"%");
			$(".high").css("width",4.55*.7+"%");
			$(".free").css("width",2.4*.7+"%");
			$(".love").css("width",.23*.7+"%");
			$(".waves").css("width",4.05*.7+"%");
			$(".fml").css("width",5.59*.7+"%");
			$(".friends").css("width",6.01*.7+"%");
			$(".wolves").css("width",7.04*.7+"%");
			$(".frank").css("width",.25*.7+"%");
			$(".silver").css("width",.36*.7+"%");
			$(".hours").css("width",8.07*.7+"%");
			$(".nomore").css("width",9.44*.7+"%");
			$(".facts").css("width",4.55*.7+"%");
			$(".fade").css("width",4.39*.7+"%");
	  		$(this).css("width","+24.5%");



			};
	});

 //    $("#fsmh1").click(function() {
			
	// if($(this).hasClass("is-clicked2")) {
			
	// 		$(this).attr("id","not-clicked2");
	// 		$(this).removeClass("is-clicked2");
	// 		$("#not-clicked2").css("width","2.77%");
			
			
	// } else {
	// 		$(this).attr("id","is-clicked2");
	//   		$(this).addClass('is-clicked2')
	//   		$("#is-clicked2").css("width","+30%");
	// 		};

	// });

	//  $("#fade").click(function() {
			
	// if($(this).hasClass("is-clicked18")) {
			
	// 		$(this).attr("id","not-clicked18");
	// 		$(this).removeClass("is-clicked18");
	// 		$("#not-clicked18").css("width","4.39%");
			
			
	// } else {
	// 		$(this).attr("id","is-clicked18");
	//   		$(this).addClass('is-clicked18')
	//   		$("#is-clicked18").css("width","+30%");
	// 		};

	// });

    // $('#is-clicked').click(function() {
    // if ($('#ultra').attr('id','is-clicked')) {
    //     $('#ultra').removeAttr('id','is-clicked');
    // } else {
    //     $('#ultra').attr('id','is-clicked');
    // }

    	// $("#ultra").click(function() {
 //  		$("#ultra").attr("id","is-clicked");
	// 	}, function() {
 //  	$("#ultra").attr("id","");
	// 	});

	// $("#ultra").on("click", function() {
 //  		$("#ultra").attr("id","is-clicked");
	// 	});


	// $("#ultra").on("mousedown", function() {
 //  		$("#ultra").attr("id","");
	// });

		// $("#ultra").on("mousedown", function() {
	// if($(this).attr("id","is-clicked")) {
 //  		$("#ultra").attr("id","");
	// } else {
	// 	$("#ultra").attr("id","is-clicked");
	// };
});



