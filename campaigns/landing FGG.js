import { Footer } from "../components/footer.js";
import { Header } from "../components/header.js";
import {
  Line,
  Category,
  GetCode,
  Intro,
  Paragraph,
  ImageWithLink,
  Space,
  Freebies,
  Product,
  ProductWithSize,
} from "../components/index.js";
import { computeValue } from "../helpers/computeValue.js";

export async function landing_FGG({
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
  ${
    country === "UK"
      ? `
      <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="max-width: 650px; width: 100%; background-color: #ffccb7; color: #000;" >
        <tbody>
          <tr>
            <td>
              <img loading="lazy" src=${getField(
                queries.header,
                "Header asembly src"
              )} style="display: block; max-width: 100%;">
            </td>
          </tr>
        </tbody>
      </table>
              `
      : ""
  }
  <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="max-width: 650px; width: 100%; background-color: #ffffff;" id="newsletter">
  <tbody>
  <tr>
    <td align="center">
      
  <table cellspacing="0" cellpadding="0" style="max-width: 650px; width: 100%;">
  <tbody>
      <tr>
          <td>
              <a href="${links[0]}">
                  <img alt="" src="${
                    links[1]
                  }" style="display: block; width: 100%">
              </a>
          </td>
      </tr>
  </tbody>
  </table>
  
    </td>
  </tr>
  <tr>
    <td align="center">
      
  <table cellspacing="0" cellpadding="0" style="max-width: 650px; width: 100%;">
  <tbody>
      <tr>
          <td>
              <a href="${links[2]}">
                  <img alt="" src=${links[3]} style="display: block; width: 100%">
              </a>
          </td>
      </tr>
  </tbody>
  </table>
  
    </td>
  </tr>
  <tr>
  <td>
    
  <table cellspacing="0" cellpadding="0" border="0" width="100%">
  <tbody>
  <tr>
      <td class="newsletterBottom35px">
      </td>
  </tr>
  </tbody>
  </table>
  
  </td>
  </tr>
  <tr>
    <td align="center" class="newsletterContainer">
        
  <table cellspacing="0" cellpadding="0" border="0" width="100%">
  <tbody>
    <tr>
        <td align="center">
            <span class="newsletterParagraph">
                ${queries.intro}
            </span>
        </td>
    </tr>
  </tbody>
  </table>
  
    </td>
  </tr>
  <tr>
  <td>
    
  <table cellspacing="0" cellpadding="0" border="0" width="100%">
  <tbody>
  <tr>
      <td class="newsletterBottom35px">
      </td>
  </tr>
  </tbody>
  </table>
  
  </td>
  </tr>
  
  <tr>
  <td align="center" class="newsletterContainer">
    
        <table cellspacing="0" cellpadding="0" style="width: 100%;">
          <tbody>
            <tr>
              <td width="50%">
                <a href="${getCategory(
                  "https://www.beliani.ch/outdoor-furniture/"
                )}">
                  <img src="https://beliani.info/newsletter/2022/240223Category1.png" alt="" style="display: block; max-width: 100%;">
                </a>
              </td>
              <td align="center" width="50%" style="vertical-align: middle; width: 50%; background-color: #fee3bf;">
                
  <table cellspacing="0" cellpadding="0" border="0" width="100%">
  <tbody>
    <tr>
        <td align="center">
            <span class="newsletterTitle">
            ${queries.categoryTitle[0]}
            </span>
        </td>
    </tr>
  </tbody>
  </table>
  
                <a href="${getCategory(
                  "https://www.beliani.ch/outdoor-furniture/"
                )}" style="color: #000000; text-decoration: underline;">
                  <span style="color: #000000; " class="newsletterCta">${
                    queries.shopNow
                  }</span>
                </a>
              </td>
            </tr>
            <tr>
            <td>
              
  <table cellspacing="0" cellpadding="0" border="0" width="100%">
  <tbody>
  <tr>
      <td class="newsletterBottom20px">
      </td>
  </tr>
  </tbody>
  </table>
  
            </td>
          </tr>
          </tbody>
        </table>
  
        
        <table cellspacing="0" cellpadding="0" style="width: 100%;">
          <tbody>
            <tr>
              <td align="center" width="50%" style="vertical-align: middle; width: 50%; background-color: #fee3bf;">
                
  <table cellspacing="0" cellpadding="0" border="0" width="100%">
  <tbody>
    <tr>
        <td align="center">
            <span class="newsletterTitle">
            ${queries.categoryTitle[1]}
            </span>
        </td>
    </tr>
  </tbody>
  </table>
  
                <a href="${getCategory(
                  "https://www.beliani.ch/sofas/"
                )}" style="color: #000000;  text-decoration: underline;">
                  <span style="color: #000000; " class="newsletterCta">${
                    queries.shopNow
                  }</span>
                </a>
              </td>
              <td width="50%">
                <a href="${getCategory("https://www.beliani.ch/sofas/")}">
                  <img src="https://beliani.info/newsletter/2022/240223Category2.png" alt="" style="display: block; max-width: 100%;">
                </a>
              </td>
            </tr>
            <tr>
            <td>
              
  <table cellspacing="0" cellpadding="0" border="0" width="100%">
  <tbody>
  <tr>
  <td class="newsletterBottom20px">
  </td>
  </tr>
  </tbody>
  </table>
  
  </td>
  </tr> 
  </tbody>
  </table>
        
  <table cellspacing="0" cellpadding="0" style="width: 100%;">
  <tbody>
  <tr>
  <td width="50%">
  <a href="${getCategory("https://www.beliani.ch/beds/")}">
  <img src="https://beliani.info/newsletter/2022/240223Category3.png" alt="" style="display: block; max-width: 100%;">
  </a>
  </td>
  <td align="center" width="50%" style="vertical-align: middle; width: 50%; background-color: #fee3bf;">
  
  <table cellspacing="0" cellpadding="0" border="0" width="100%">
  <tbody>
  <tr>
  <td align="center">
  <span class="newsletterTitle">
  ${queries.categoryTitle[2]}
  </span>
  </td>
  </tr>
  </tbody>
  </table>
  
                <a href="${getCategory(
                  "https://www.beliani.ch/beds/"
                )}" style="color: #000000; text-decoration: underline;">
                  <span style="color: #000000; " class="newsletterCta">${
                    queries.shopNow
                  }</span>
                </a>
              </td>
            </tr>
            <tr>
            <td>
              
  <table cellspacing="0" cellpadding="0" border="0" width="100%">
  <tbody>
  <tr>
      <td class="newsletterBottom20px">
      </td>
  </tr>
  </tbody>
  </table>
  
            </td>
          </tr>
          </tbody>
        </table>
  
        
        <table cellspacing="0" cellpadding="0" style="width: 100%;">
          <tbody>
            <tr>
              <td align="center" width="50%" style="vertical-align: middle; width: 50%; background-color: #fee3bf;">
                
  <table cellspacing="0" cellpadding="0" border="0" width="100%">
  <tbody>
    <tr>
        <td align="center">
            <span class="newsletterTitle">
  ${queries.categoryTitle[3]}
            </span>
        </td>
    </tr>
  </tbody>
  </table>
  
                <a href="${getCategory(
                  "https://www.beliani.ch/armchairs/"
                )}" style="color: #000000;  text-decoration: underline;">
                  <span style="color: #000000; " class="newsletterCta">${
                    queries.shopNow
                  }</span>
                </a>
              </td>
              <td width="50%">
                <a href="${getCategory("https://www.beliani.ch/armchairs/")}">
                  <img src="https://beliani.info/newsletter/2022/240223Category4.png" alt="" style="display: block; max-width: 100%;">
                </a>
              </td>
            </tr>
            <tr>
            <td>
              
  <table cellspacing="0" cellpadding="0" border="0" width="100%">
  <tbody>
  <tr>
      <td class="newsletterBottom20px">
      </td>
  </tr>
  </tbody>
  </table>
  
            </td>
          </tr> 
          </tbody>
        </table>
        
        <table cellspacing="0" cellpadding="0" style="width: 100%;">
          <tbody>
            <tr>
              <td width="50%">
                <a href="${getCategory("https://www.beliani.ch/chairs/")}">
                  <img src="https://beliani.info/newsletter/2022/240223Category5.png" alt="" style="display: block; max-width: 100%;">
                </a>
              </td>
              <td align="center" width="50%" style="vertical-align: middle; width: 50%; background-color: #fee3bf;">
                
  <table cellspacing="0" cellpadding="0" border="0" width="100%">
  <tbody>
    <tr>
        <td align="center">
            <span class="newsletterTitle">
                ${queries.categoryTitle[4]}
            </span>
        </td>
    </tr>
  </tbody>
  </table>
  
                <a href="${getCategory(
                  "https://www.beliani.ch/chairs/"
                )}" style="color: #000000; text-decoration: underline;">
                  <span style="color: #000000; " class="newsletterCta">${
                    queries.shopNow
                  }</span>
                </a>
              </td>
            </tr>
            <tr>
            <td>
              
  <table cellspacing="0" cellpadding="0" border="0" width="100%">
  <tbody>
  <tr>
      <td class="newsletterBottom20px">
      </td>
  </tr>
  </tbody>
  </table>
  
            </td>
          </tr>
          </tbody>
        </table>
  
        
        <table cellspacing="0" cellpadding="0" style="width: 100%;">
          <tbody>
            <tr>
              <td align="center" width="50%" style="vertical-align: middle; width: 50%; background-color: #fee3bf;">
                
  <table cellspacing="0" cellpadding="0" border="0" width="100%">
  <tbody>
    <tr>
        <td align="center">
            <span class="newsletterTitle">
                ${queries.categoryTitle[5]}
            </span>
        </td>
    </tr>
  </tbody>
  </table>
  
                <a href="${getCategory(
                  "https://www.beliani.ch/tables/"
                )}" style="color: #000000;  text-decoration: underline;">
                  <span style="color: #000000; " class="newsletterCta">${
                    queries.shopNow
                  }</span>
                </a>
              </td>
              <td width="50%">
                <a href="${getCategory("https://www.beliani.ch/tables/")}">
                  <img src="https://beliani.info/newsletter/2022/240223Category6.png" alt="" style="display: block; max-width: 100%;">
                </a>
              </td>
            </tr>
            <tr>
            <td>
              
  <table cellspacing="0" cellpadding="0" border="0" width="100%">
  <tbody>
  <tr>
      <td class="newsletterBottom20px">
      </td>
  </tr>
  </tbody>
  </table>
  
            </td>
          </tr> 
          </tbody>
        </table>
        
        <table cellspacing="0" cellpadding="0" style="width: 100%;">
          <tbody>
            <tr>
              <td width="50%">
                <a href="${getCategory("https://www.beliani.ch/storage/")}">
                  <img src="https://beliani.info/newsletter/2022/240223Category7.png" alt="" style="display: block; max-width: 100%;">
                </a>
              </td>
              <td align="center" width="50%" style="vertical-align: middle; width: 50%; background-color: #fee3bf;">
                
  <table cellspacing="0" cellpadding="0" border="0" width="100%">
  <tbody>
    <tr>
        <td align="center">
            <span class="newsletterTitle">
                ${queries.categoryTitle[6]}
            </span>
        </td>
    </tr>
  </tbody>
  </table>
  
                <a href="${getCategory(
                  "https://www.beliani.ch/storage/"
                )}" style="color: #000000; text-decoration: underline;">
                  <span style="color: #000000; " class="newsletterCta">${
                    queries.shopNow
                  }</span>
                </a>
              </td>
            </tr>
            <tr>
            <td>
              
  <table cellspacing="0" cellpadding="0" border="0" width="100%">
  <tbody>
  <tr>
      <td class="newsletterBottom20px">
      </td>
  </tr>
  </tbody>
  </table>
  
            </td>
          </tr>
          </tbody>
        </table>
  
        
        <table cellspacing="0" cellpadding="0" style="width: 100%;">
          <tbody>
            <tr>
              <td align="center" width="50%" style="vertical-align: middle; width: 50%; background-color: #fee3bf;">
                
  <table cellspacing="0" cellpadding="0" border="0" width="100%">
  <tbody>
    <tr>
        <td align="center">
            <span class="newsletterTitle">
                ${queries.categoryTitle[7]}
            </span>
        </td>
    </tr>
  </tbody>
  </table>
  
                <a href="${getCategory(
                  "https://www.beliani.ch/lighting/"
                )}" style="color: #000000;  text-decoration: underline;">
                  <span style="color: #000000; " class="newsletterCta">${
                    queries.shopNow
                  }</span>
                </a>
              </td>
              <td width="50%">
                <a href="${getCategory("https://www.beliani.ch/lighting/")}">
                  <img src="https://beliani.info/newsletter/2022/240223Category8.png" alt="" style="display: block; max-width: 100%;">
                </a>
              </td>
            </tr>
            <tr>
            <td>
              
  <table cellspacing="0" cellpadding="0" border="0" width="100%">
  <tbody>
  <tr>
      <td class="newsletterBottom20px">
      </td>
  </tr>
  </tbody>
  </table>
  
            </td>
          </tr> 
          </tbody>
        </table>
        
        <table cellspacing="0" cellpadding="0" style="width: 100%;">
          <tbody>
            <tr>
              <td width="50%">
                <a href="${getCategory(
                  "https://www.beliani.ch/bathtubs-hot-tubs/"
                )}">
                  <img src="https://beliani.info/newsletter/2022/240223Category9.png" alt="" style="display: block; max-width: 100%;">
                </a>
              </td>
              <td align="center" width="50%" style="vertical-align: middle; width: 50%; background-color: #fee3bf;">
                
  <table cellspacing="0" cellpadding="0" border="0" width="100%">
  <tbody>
    <tr>
        <td align="center">
            <span class="newsletterTitle">
                ${queries.categoryTitle[8]}
            </span>
        </td>
    </tr>
  </tbody>
  </table>
  
                <a href="${getCategory(
                  "https://www.beliani.ch/bathtubs-hot-tubs/"
                )}" style="color: #000000; text-decoration: underline;">
                  <span style="color: #000000; " class="newsletterCta">${
                    queries.shopNow
                  }</span>
                </a>
              </td>
            </tr>
            <tr>
            <td>
              
  <table cellspacing="0" cellpadding="0" border="0" width="100%">
  <tbody>
  <tr>
      <td class="newsletterBottom20px">
      </td>
  </tr>
  </tbody>
  </table>
  
            </td>
          </tr>
          </tbody>
        </table>
  
        
        <table cellspacing="0" cellpadding="0" style="width: 100%;">
          <tbody>
            <tr>
              <td align="center" width="50%" style="vertical-align: middle; width: 50%; background-color: #fee3bf;">
                
  <table cellspacing="0" cellpadding="0" border="0" width="100%">
  <tbody>
    <tr>
        <td align="center">
            <span class="newsletterTitle">
                ${queries.categoryTitle[9]}
            </span>
        </td>
    </tr>
  </tbody>
  </table>
  
                <a href="${getCategory(
                  "https://www.beliani.ch/office-furniture/desks-eng/"
                )}" style="color: #000000;  text-decoration: underline;">
                  <span style="color: #000000; " class="newsletterCta">${
                    queries.shopNow
                  }</span>
                </a>
              </td>
              <td width="50%">
                <a href="${getCategory(
                  "https://www.beliani.ch/office-furniture/desks-eng/"
                )}">
                  <img src="https://beliani.info/newsletter/2022/240223Category10.png" alt="" style="display: block; max-width: 100%;">
                </a>
              </td>
            </tr>
            <tr>
            <td>
              
  <table cellspacing="0" cellpadding="0" border="0" width="100%">
  <tbody>
  <tr>
      <td class="newsletterBottom20px">
      </td>
  </tr>
  </tbody>
  </table>
  
            </td>
          </tr> 
          </tbody>
        </table>
        
        <table cellspacing="0" cellpadding="0" style="width: 100%;">
          <tbody>
            <tr>
              <td width="50%">
                <a href="${getCategory("https://www.beliani.ch/rugs/")}">
                  <img src="https://beliani.info/newsletter/2022/240223Category11.png" alt="" style="display: block; max-width: 100%;">
                </a>
              </td>
              <td align="center" width="50%" style="vertical-align: middle; width: 50%; background-color: #fee3bf;">
                
  <table cellspacing="0" cellpadding="0" border="0" width="100%">
  <tbody>
    <tr>
        <td align="center">
            <span class="newsletterTitle">
                ${queries.categoryTitle[10]}
            </span>
        </td>
    </tr>
  </tbody>
  </table>
  
                <a href="${getCategory(
                  "https://www.beliani.ch/rugs/"
                )}" style="color: #000000; text-decoration: underline;">
                  <span style="color: #000000; " class="newsletterCta">${
                    queries.shopNow
                  }</span>
                </a>
              </td>
            </tr>
            <tr>
            <td>
              
  <table cellspacing="0" cellpadding="0" border="0" width="100%">
  <tbody>
  <tr>
      <td class="newsletterBottom20px">
      </td>
  </tr>
  </tbody>
  </table>
  
            </td>
          </tr>
          </tbody>
        </table>
  
        
        <table cellspacing="0" cellpadding="0" style="width: 100%;">
          <tbody>
            <tr>
              <td align="center" width="50%" style="vertical-align: middle; width: 50%; background-color: #fee3bf;">
                
  <table cellspacing="0" cellpadding="0" border="0" width="100%">
  <tbody>
    <tr>
        <td align="center">
            <span class="newsletterTitle">
                ${queries.categoryTitle[11]}
            </span>
        </td>
    </tr>
  </tbody>
  </table>
  
                <a href="${getCategory(
                  "https://www.beliani.ch/home-accessories/"
                )}" style="color: #000000;  text-decoration: underline;">
                  <span style="color: #000000; " class="newsletterCta">${
                    queries.shopNow
                  }</span>
                </a>
              </td>
              <td width="50%">
                <a href="${getCategory(
                  "https://www.beliani.ch/home-accessories/"
                )}">
                  <img src="https://beliani.info/newsletter/2022/240223Category12.png" alt="" style="display: block; max-width: 100%;">
                </a>
              </td>
            </tr>
            <tr>
            <td>
              
  <table cellspacing="0" cellpadding="0" border="0" width="100%">
  <tbody>
  <tr>
      <td class="newsletterBottom20px">
      </td>
  </tr>
  </tbody>
  </table>
  
            </td>
          </tr> 
          </tbody>
        </table>
        
        <table cellspacing="0" cellpadding="0" style="width: 100%;">
          <tbody>
            <tr>
              <td width="50%">
                <a href="${getCategory("https://www.beliani.ch/textiles/")}">
                  <img src="https://beliani.info/newsletter/2022/240223Category13.png" alt="" style="display: block; max-width: 100%;">
                </a>
              </td>
              <td align="center" width="50%" style="vertical-align: middle; width: 50%; background-color: #fee3bf;">
                
  <table cellspacing="0" cellpadding="0" border="0" width="100%">
  <tbody>
    <tr>
        <td align="center">
            <span class="newsletterTitle">
                ${queries.categoryTitle[12]}
            </span>
        </td>
    </tr>
  </tbody>
  </table>
  
                <a href="${getCategory(
                  "https://www.beliani.ch/textiles/"
                )}" style="color: #000000; text-decoration: underline;">
                  <span style="color: #000000; " class="newsletterCta">${
                    queries.shopNow
                  }</span>
                </a>
              </td>
            </tr>
            <tr>
            <td>
              
  <table cellspacing="0" cellpadding="0" border="0" width="100%">
  <tbody>
  <tr>
      <td class="newsletterBottom20px">
      </td>
  </tr>
  </tbody>
  </table>
  
            </td>
          </tr>
          </tbody>
        </table>
  
        
  </td>
  </tr>
  <tr>
  <td>
    
  <table cellspacing="0" cellpadding="0" border="0" width="100%">
  <tbody>
  <tr>
      <td class="newsletterBottom60px">
      </td>
  </tr>
  </tbody>
  </table>
  
  </td>
  </tr>
  <tr>
  <td align="center" class="newsletterContainer">
    
  <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
  <tbody>
  <tr>
  <td>
  <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
    <tbody>
      <tr>
        <td align="center" class="newsletterBottom35px">
          <span class="newsletterTitle">
            ${queries.voucher[0]}
          </span>
        </td>
      </tr>
    </tbody>
  </table>
  </td>
  </tr>
  <tr>
  <td>
  <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
    <tbody>
      <tr>
        <td align="center">
          <span class="newsletterParagraph">
            ${queries.voucher[1]}
          </span>
        </td>
      </tr>
    </tbody>
  </table>
  </td>
  </tr>
  </tbody>
  </table>
  
  </td>
  </tr>
  <tr>
  <td>
    
  <table cellspacing="0" cellpadding="0" border="0" width="100%">
  <tbody>
  <tr>
  <td class="newsletterBottom35px">
  </td>
  </tr>
  </tbody>
  </table>
  
  </td>
  </tr>
  <tr>
  <td class="newsletterContainer">
    
  <table cellspacing="0" cellpadding="0" style="max-width: 650px; width: 100%;">
  <tbody>
      <tr>
          <td>
              <a href="${getCategory("https://www.beliani.ch/gift-cards/")}">
                  <img alt="" src="https://beliani.info/newsletter/2022/240223Voucher.png" style="display: block; width: 100%">
              </a>
          </td>
      </tr>
  </tbody>
  </table>
  
  </td>
  </tr>
  <tr>
  <td>
    
  <table cellspacing="0" cellpadding="0" border="0" width="100%">
  <tbody>
  <tr>
  <td class="newsletterBottom35px">
  </td>
  </tr>
  </tbody>
  </table>
  
  </td>
  </tr>
  <tr>
  <td style="padding-top: 0px; padding-left: 0px; padding-right: 0px;" class="newsletterBottom80px">
    <table cellspacing="0" cellpadding="0" style="width: 100%; ">
      <tbody>
        <tr>
          <td style="padding-top: 0px; padding-left: 0px; padding-right: 0px; text-align: center;">
            <a href="${getCategory(
              "https://www.beliani.ch/gift-cards/"
            )}" style="color:#000; text-decoration: underline;">
              <span class="newsletterCta">${queries.shopNow}</span>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </td>
  </tr>
  </tbody></table>
  <table align="center" border="0" cellpadding="0" cellspacing="0" class="newsletterContainer" style="margin: 0 auto; max-width: 650px; color: #000000; background-color:#ffffff;" id="newsletter">
              <tbody>
                  <tr>
                      <td align="left">
                          <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%">
                              <tbody>
                              <tr>
                                <td class="newsletterBottom35px" >
                                  ${Line()}
                                </td>
                              </tr>
                                  <tr>
                                      <td align="left" class="newsletterBottom35px">
                                          <span class="newsletterSoonEndingTitle">${
                                            queries.soonEnding
                                          }</span>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td align="left" class="newsletterBottom20px">
                                          <a href=${links[4]}>
                                              <img loading="lazy" src=${
                                                links[5]
                                              } style="display: block;" width="100%">
                                          </a>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td align="left" class="newsletterBottom35px">
                                          <a href=${links[6]}>
                                              <img loading="lazy" src=${
                                                links[7]
                                              } style="display: block;" width="100%">
                                          </a>
                                      </td>
                                  </tr>
                              </tbody>
                          </table>
                      </td>
                  </tr>
              ${
                country === "UK"
                ? `
                <tr>
                  <td class="newsletterBottom35px" >
                    ${Line()}
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="${getField(queries.footer, "Asembly href")}?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                      <img loading="lazy" src=${getField(queries.footer, "Asembly src")} style="display: block; max-width: 100%;">
                    </a>
                  </td>
                </tr>
                <tr>
                  <td class="newsletterBottom35px" >
                  </td>
                </tr>
                `
                : ""
              }
              </tbody>
          </table>
          ${Footer(
            {
              id,
              assembly: {
                src: ["AT", "PL", "FR", "UK"].includes(country)
                  ? getField(queries.footer, "Delivery src")
                  : getField(queries.footer, "Asembly src"),
                href: getField(queries.footer, "Asembly href"),
                exclude: ["SK", "CHIT", "SE", "NO", "FI"].includes(country),
              },
              workBanner: {
                src: getField(queries.footer, "Job src"),
                href: getField(queries.footer, "Job href"),
                exclude: !["PL"].includes(country),
              },
              thousandsMore: {
                title: getField(queries.footer, "Title"),
                firstCategory: {
                  src: getField(queries.footer, "Category src 1"),
                  href: getField(queries.footer, "Category href 1"),
                },
                secondCategory: {
                  src: getField(queries.footer, "Category src 2"),
                  href: getField(queries.footer, "Category href 2"),
                },
                thirdCategory: {
                  src: getField(queries.footer, "Category src 3"),
                  href: getField(queries.footer, "Category href 3"),
                },
                foutrthCategory: {
                  src: getField(queries.footer, "Category src 4"),
                  href: getField(queries.footer, "Category href 4"),
                },
                fifthCategory: {
                  src: getField(queries.footer, "Category src 5"),
                  href: getField(queries.footer, "Category href 5"),
                },
                sixthCategory: {
                  src: getField(queries.footer, "Category src 6"),
                  href: getField(queries.footer, "Category href 6"),
                },
                seventhCategory: {
                  src: getField(queries.footer, "Category src 7"),
                  href: getField(queries.footer, "Category href 7"),
                },
                eigthCategory: {
                  src: getField(queries.footer, "Category src 8"),
                  href: getField(queries.footer, "Category href 8"),
                },
              },
              klarna: {
                src: getField(queries.footer, "Klarna src"),
                href: getField(queries.footer, "Klarna href"),
                exclude: ["SK", "HU"].includes(country),
              },
              socials: {
                title: getField(queries.footer, "Socials Title"),
                instagram: {
                  src: getField(queries.footer, "Instagram src"),
                  href: getField(queries.footer, "Instagram href"),
                },
                facebook: {
                  src: getField(queries.footer, "Facebook src"),
                  href: getField(queries.footer, "Facebook href"),
                },
                youtube: {
                  src: getField(queries.footer, "Youtube src"),
                  href: getField(queries.footer, "Youtube href"),
                },
                pinterest: {
                  src: getField(queries.footer, "Pinterest src"),
                  href: getField(queries.footer, "Pinterest href"),
                },
              },
              advantages: {
                firstAdvantage: {
                  src: getField(queries.footer, "Advantages src 1"),
                  href: getField(queries.footer, "Advantages href 1"),
                },
                secondAdvantage: {
                  src: getField(queries.footer, "Advantages src 2"),
                  href: getField(queries.footer, "Advantages href 2"),
                },
                thirdAdvantage: {
                  src: getField(queries.footer, "Advantages src 3"),
                  href: getField(queries.footer, "Advantages href 3"),
                },
                fourthAdvantage: {
                  src: getField(queries.footer, "Advantages src 4"),
                  href: getField(queries.footer, "Advantages href 4"),
                },
              },
              conditions: {
                conditionsTitle: getField(queries.footer, "Conditions title"),
                conditionsText: queries.condition,
              },
              companyDetails: {
                title: getField(queries.footer, "Company Details"),
                address: getField(queries.footer, "Address"),
                mobileNumber: getField(queries.footer, "Mobile number"),
                emailAddress: getField(queries.footer, "Email address"),
                mailTo: getField(queries.footer, "Mail to"),
                email: getField(queries.footer, "Email"),
                commercialRegister: getField(queries.footer, "Commercial register"),
                vat: getField(queries.footer, "VAT"),
              },
            },
            { country, type }
          )}
    `;
}
