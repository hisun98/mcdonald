$(function(){
			// 네비게이션 실행
			var lnb = $("#lnb li");
			var ht = $(window).height();
			var body = $("html,body");

			//윈도우창을 수정해도 해당페이지로 잘 넘어가게 하는 코드
			$(window).resize(function(){
				ht = $(window).height();
			})

			lnb.click(function(){
				var tg=$(this);
				var i=tg.index();
				var nowTop=ht*i;

				lnb.removeClass('active_lnb');
				$(this).addClass('active_lnb');

				//버튼 클릭시 해당 컨텐츠로 스르륵 이동
				$("html,body").animate({scrollTop:nowTop},600,"linear");
			})

			$(window).scroll(function(){
				var myscrollTop=$(window).scrollTop();
				if(myscrollTop>=0 && myscrollTop<ht){
					lnb.removeClass("active_lnb");
					lnb.eq(0).addClass("active_lnb");
				}
				else if(myscrollTop>=ht && myscrollTop<ht*2){
					lnb.removeClass("active_lnb");
					lnb.eq(1).addClass("active_lnb");
				}
				else if(myscrollTop>=ht*2 && myscrollTop<ht*3){
					lnb.removeClass("active_lnb");
					lnb.eq(2).addClass("active_lnb");
				}
				else if(myscrollTop>=ht*3 && myscrollTop<ht*4){
					lnb.removeClass("active_lnb");
					lnb.eq(3).addClass("active_lnb");
				}
				else{
					lnb.removeClass("active_lnb");
					lnb.eq(4).addClass("active_lnb");
				}
			})

			// 브랜드 캐로셀
			var carousel_brand=$(".brand_story li");
			var carousel_brand_btn=$(".brand_btn li");
			var current=0;

			carousel_brand_btn.click(function(){
				var tg=$(this);
				var i=tg.index();
				if(current==i) return 0;
					// 동작하지 않겠다!

				move(i);

				function move(i){
					var currentImg_brand=carousel_brand.eq(current);
					var nextImg_brand=carousel_brand.eq(i);

					currentImg_brand.css("left",0).
						animate({"left":"-100%"});   
					nextImg_brand.css("left","100%").
						animate({"left":0});
					current=i;
				}
			//캐로셀 버튼 활성화
			carousel_brand_btn.removeClass("active_brand");
			tg.addClass("active_brand");
			})
			// 햄버거 메뉴 MENU 모달창
			var bgbg_modal =$(".menu_modal_burger"); //모달 기본창
			var modal_bg =$(".burger_img div"); //햄버거 메뉴들
			var bg_black=$("#menu .black"); //뒷배경 검은색
			var menu_bg=$(".menu_burger");	//햄버거 일러스트로 그린거
			var burger_btn=$(".burger_btn div"); //햄버거 이동버튼 햄버거사진
			var burger_x_btn = $(".menu_modal_burger span"); // 모달창 X 버튼

			bgbg_modal.hide();
			bg_black.hide();

			menu_bg.click(function(){
				bgbg_modal.show();
				modal_bg.hide();
				modal_bg.eq(0).show();
				bg_black.show();

				burger_btn.click(function(){
					var b =$(this).index();
					modal_bg.hide();
					modal_bg.eq(b).show();

					burger_btn.removeClass("active");
					burger_btn.eq(j).addClass("active");
				})
			})
			bg_black.click(function(){
				bgbg_modal.hide();
				modal_bg.hide();
				bg_black.hide();
			})
			burger_x_btn.click(function(){
  				bgbg_modal.hide();
				modal_bg.hide();
				bg_black.hide();
  			})

  			// 맥모닝 메뉴 MENU 모달창
			var mmbg_modal =$(".menu_modal_macmoring"); //모달 기본창
			var modal_mm =$(".macmoring_img div"); //맥모닝 메뉴들
			var mm_black=$("#menu .black"); //뒷배경 검은색
			var menu_mm=$(".menu_happym");	//맥모닝 일러스트로 그린거
			var macmoring_btn=$(".macmoring_btn div"); //맥모닝 이동버튼 맥모닝사진
			var macmoring_x_btn = $(".menu_modal_macmoring span"); // 모달창 X 버튼

			mmbg_modal.hide();
			mm_black.hide();

			menu_mm.click(function(){
				mmbg_modal.show();
				modal_mm.hide();
				modal_mm.eq(0).show();
				mm_black.show();

				macmoring_btn.click(function(){
					var m =$(this).index();
					modal_mm.hide();
					modal_mm.eq(m).show();

					macmoring_btn.removeClass("active");
					macmoring_btn.eq(m).addClass("active");
				})
			})
			mm_black.click(function(){
				mmbg_modal.hide();
				modal_mm.hide();
				mm_black.hide();
			})
			macmoring_x_btn.click(function(){
  				mmbg_modal.hide();
				modal_mm.hide();
				mm_black.hide();
  			})
			
			// 사이드 메뉴 MENU 모달창
			var sidebg_modal =$(".menu_modal_side"); //모달 기본창
			var modal_side =$(".side_img div"); //사이드 메뉴들
			var side_black=$("#menu .black"); //뒷배경 검은색
			var menu_side=$(".menu_potato");	//사이드 일러스트로 그린거
			var side_btn=$(".side_btn div"); //사이드 이동버튼 사이드사진
			var side_x_btn = $(".menu_modal_side span"); // 모달창 X 버튼

			sidebg_modal.hide();
			side_black.hide();

			menu_side.click(function(){
				sidebg_modal.show();
				modal_side.hide();
				modal_side.eq(0).show();
				side_black.show();

				side_btn.click(function(){
					var s =$(this).index();
					modal_side.hide();
					modal_side.eq(s).show();

					side_btn.removeClass("active");
					side_btn.eq(m).addClass("active");
				})
			})
			side_black.click(function(){
				sidebg_modal.hide();
				modal_side.hide();
				side_black.hide();
			})
			side_x_btn.click(function(){
  				sidebg_modal.hide();
				modal_side.hide();
				side_black.hide();
  			})
			
			// 드링크 메뉴 MENU 모달창
			var drinkbg_modal =$(".menu_modal_drink"); //모달 기본창
			var modal_drink =$(".drink_img div"); //드링크 메뉴들
			var drink_black=$("#menu .black"); //뒷배경 검은색
			var menu_drink=$(".menu_coke");	//드링크 일러스트로 그린거
			var drink_btn=$(".drink_btn div"); //드링크 이동버튼 드링크사진
			var drink_x_btn = $(".menu_modal_drink span"); // 모달창 X 버튼

			drinkbg_modal.hide();
			drink_black.hide();

			menu_drink.click(function(){
				drinkbg_modal.show();
				modal_drink.hide();
				modal_drink.eq(0).show();
				drink_black.show();

				drink_btn.click(function(){
					var d =$(this).index();
					modal_drink.hide();
					modal_drink.eq(d).show();

					drink_btn.removeClass("active");
					drink_btn.eq(d).addClass("active");
				})
			})
			drink_black.click(function(){
				drinkbg_modal.hide();
				modal_drink.hide();
				drink_black.hide();
			})
			drink_x_btn.click(function(){
  				drinkbg_modal.hide();
				modal_drink.hide();
				drink_black.hide();
  			})

  			// 디저트 메뉴 MENU 모달창
			var dessertsbg_modal =$(".menu_modal_desserts"); //모달 기본창
			var modal_desserts =$(".desserts_img div"); //디저트 메뉴들
			var desserts_black=$("#menu .black"); //뒷배경 검은색
			var menu_desserts=$(".menu_icecream");	//디저트 일러스트로 그린거
			var desserts_btn=$(".desserts_btn div"); //디저트 이동버튼 디저트사진
			var desserts_x_btn = $(".menu_modal_desserts span"); // 모달창 X 버튼

			dessertsbg_modal.hide();
			desserts_black.hide();

			menu_desserts.click(function(){
				dessertsbg_modal.show();
				modal_desserts.hide();
				modal_desserts.eq(0).show();
				desserts_black.show();

				desserts_btn.click(function(){
					var r =$(this).index();
					modal_desserts.hide();
					modal_desserts.eq(r).show();

					desserts_btn.removeClass("active");
					desserts_btn.eq(r).addClass("active");
				})
			})
			desserts_black.click(function(){
				dessertsbg_modal.hide();
				modal_desserts.hide();
				desserts_black.hide();
			})
			desserts_x_btn.click(function(){
  				dessertsbg_modal.hide();
				modal_desserts.hide();
				desserts_black.hide();
  			})

			// 이벤트창 EVENT 모달창
			var event_pan=$(".event_pan div");
			var event_modal1=$(".event_bigmacsong_modal");
			var event_happyMeal=$(".event_happy_modal");
			var event_modal2=$(".event_drink_modal");
			var blackBg_event=$("#event .black");
			var song_x_btn = $(".event_bigmacsong_modal span");
			var drink_x_btn = $(".event_drink_modal span");
			
			

			blackBg_event.hide();
			event_modal1.hide();
			event_happyMeal.hide();
			event_modal2.hide();


			event_pan.eq(0).click(function(){
				event_modal1.show();
				blackBg_event.show();
			})

			// event_pan.eq(1).click(function(){
			// 	event_happyMeal.show();
			// 	blackBg_event.show();
			// })

			event_pan.eq(2).click(function(){
				event_modal2.show();
				blackBg_event.show();
			})

			blackBg_event.click(function(){
				event_modal1.hide();
				blackBg_event.hide();
			})
			blackBg_event.click(function(){
				event_happyMeal.hide();
				blackBg_event.hide();
			})
			blackBg_event.click(function(){
				event_modal2.hide();
				blackBg_event.hide();
			})
			song_x_btn.click(function(){
				event_modal1.hide();
				blackBg_event.hide();
  			})
  			drink_x_btn.click(function(){
				event_modal2.hide();
				blackBg_event.hide();
  			})

			// 스토어 STORE 맥드라이브 이동~
			var macdrive_pung =$(".store_drive_pung");
			var store_pung=$(".store_store_pung");
			var store_map=$(".store_moni .map");
			var store_mov=$(".store_moni .howto");

			store_pung.hide();
			store_mov.hide();

			macdrive_pung.click(function(){
				store_map.hide();
				macdrive_pung.hide();
				store_pung.show();
				store_mov.show();

			})

			store_pung.click(function(){
				store_map.show();
				macdrive_pung.show();
				store_pung.hide();
				store_mov.hide();
			})
		})