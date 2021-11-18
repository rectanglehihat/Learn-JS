// 프로덕트 버튼을 누르면
// 0. 모든 버튼의 active 제거 및 모든 내용의 show 제거
// 1. 탭이 주황색으로 변하고
// 2. 내용이 해당사항으로 보여야함

// for (let i = 0; i < $(".tab-button").length; i++) {
//   $(".tab-button")
//     .eq(i)
//     .click(function () {
//       openTab(i);
//     });
// }

function openTab(num) {
  $(".tab-button").removeClass("active");
  $(".tab-content").removeClass("show");
  $(".tab-button").eq(num).addClass("active");
  $(".tab-content").eq(num).addClass("show");
}

// 이벤트리스너 절약하면서 몰래 저장된 정보 가져옴
$(".list").click(function (e) {
  openTab(e.target.dataset.id);
});
