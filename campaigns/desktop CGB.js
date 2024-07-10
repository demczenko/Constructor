export async function desktop({
  links,
  getProductByName,
  getProductById,
  getCategory,
  queries,
  getField,
  id,
  origin,
  country,
  type,
}) {
  return `
    <div class="cgbContainer" style="background-color: #FAF1E2;">
      <div class="textContainer1">
        <p class="xyHeader1" style="margin: 0 0 12px 0!important;"><span>${getField(
          queries.cgb,
          "Up to"
        )}</br>${getField(queries.cgb, "All tables")}</span></p>
        <p class="xyHeader3" style="text-decoration: none!important; margin: 0 0 18px 0!important;"><span>${getField(
          queries.cgb,
          "Until"
        )}</span></p>
        <a href="${getCategory(
          "https://www.beliani.ch/garden-furniture/outdoor-furniture/balcony-furniture/",
          { origin: false }
                )}"><p class="xyCTA" style="margin: 0!important;"><span>${getField(
            queries.cgb,
            "Cta"
          )}</span></p></a>
    </div>
    <a href="${getCategory(
      "https://www.beliani.ch/garden-furniture/outdoor-furniture/balcony-furniture/",
      { origin: false }
    )}"><video style="max-width: 100%; vertical-align: middle;" autoplay="" loop="" muted="" playsinline="" disableremoteplayback="true" ><source src="https://www.pictureserver.net/images/pic/d8/6d/german_src_banner_picid_10653_image.mp4?ver=1" type="video/mp4"></video></a>
  </div>
  `;
}
