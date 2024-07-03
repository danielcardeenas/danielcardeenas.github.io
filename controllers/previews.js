setTimeout(() => {
  $(".minipreview").miniPreview({
    width: 580,
    height: 370,
    prefetch: "pageload",
  });

  $(".minipreview-large").miniPreview({
    width: 760,
    height: 470,
    scale: 1,
    prefetch: "pageload",
  });
}, 1000);
