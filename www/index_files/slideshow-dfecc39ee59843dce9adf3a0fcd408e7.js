$(document).ready(function(){$(".next-button").on("click",function(){$(".home-banner-instance").removeClass("focus"),$(".home-banner-instance").each(function(){var n=parseInt($(this).css("margin-left"),10);$(this).animate({"margin-left":n-785},200)}),$(this).parent(".home-banner-instance").addClass("focus");var n=$(this).parent(".home-banner-instance").index();$(".banner-pagination ul li").removeClass("active").eq(n-1).addClass("active")}),$(".prev-button").on("click",function(){$(".home-banner-instance").removeClass("focus"),$(".home-banner-instance").each(function(){var n=parseInt($(this).css("margin-left"),10);$(this).animate({"margin-left":n+785},200)}),$(this).parent(".home-banner-instance").addClass("focus");var n=$(this).parent(".home-banner-instance").index();$(".banner-pagination ul li").removeClass("active").eq(n-1).addClass("active")}),$(".banner-pagination li").on("click",function(){var n=$(this).index(),a=-367-785*n;$(".home-banner-instance").removeClass("focus"),$(".home-banner-instance").each(function(){$(this).animate({"margin-left":a},200),a+=785}),$(".home-banner-instance").eq(n).addClass("focus"),$(".banner-pagination li").removeClass("active").eq(n).addClass("active")}),$(".banner-pagination").find("li:eq(1)").trigger("click")});