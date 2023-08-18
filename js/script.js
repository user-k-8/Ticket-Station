let n =['1', '2', '3', '4']


function slide (m) {
  $("#carousel-multiple-"+m).on("slide.bs.carousel", function (e) {
    var itemsPerSlide = 4,
      totalItems = $(".carousel-item", this).length,
      reserve = 2,//do not change
      $itemsContainer = $(".carousel-inner", this),
      it = (itemsPerSlide + reserve) - (totalItems - e.to);

    if (it > 0) {
      for (var i = 0; i < it; i++) {
        $(".carousel-item", this)
          .eq(e.direction == "left" ? i : 0)
          // append slides to the end/beginning
          .appendTo($itemsContainer);
      }
    }
  });
};


for(const i of n){
    slide(i);
}
