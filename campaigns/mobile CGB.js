export async function mobile({
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
  <div class="xyzGridContainer" style="background-color:#FAF1E2;">
      <div style="padding: 10px 5px 5px 0px;">
          <p class="xyHeader1" style="margin: 0 0 5px 0!important;"><span data-order-text="0">${getField(
            queries.cgb,
            "Up to"
          )}</br>${getField(queries.cgb, "All tables")}</span></p>
          <p class="xyHeader3" style="text-decoration: none!important; margin: 0 0 5px 0!important;"><span data-order-text="2">${getField(
            queries.cgb,
            "Until"
          )}</span></p>
          <a href="${getCategory(
            "https://www.beliani.ch/garden-furniture/outdoor-furniture/balcony-furniture/",
            { origin: false }
          )}"><p class="xyCTA" style="margin: 0!important;"><span data-order-text="3">${getField(
    queries.cgb,
    "Cta"
  )}</span></p></a>
      </div>
      <div>
          <a href="${getCategory(
            "https://www.beliani.ch/garden-furniture/outdoor-furniture/balcony-furniture/",
            { origin: false }
          )}"><video playsinline autoplay loop muted disableremoteplayback="true" style="max-width: 100%; vertical-align: middle;" >
              <source
                  src="https://www.pictureserver.net/images/pic/73/a7/german_src_mobilebanner_picid_10653_image.mp4?ver=1"
                  type="video/mp4">
          </video></a>
      </div>
  </div>
  
      `;
}
