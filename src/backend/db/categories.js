import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "skin-care",
    categoryImage: "https://static.wixstatic.com/media/7f813716279546d89dc1eaef3ae1754f.jpg/v1/fill/w_594,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Woman%20with%20Face%20Cream.jpg",
    description:
      "Skin care involves practices and products that support the health and appearance of the skin. It includes activities such as cleansing, moisturizing, and protecting the skin from environmental damage.",
  },
  {
    _id: uuid(),
    categoryName: "hair-care",
    categoryImage: "https://i0.wp.com/sirapevida.com/wp-content/uploads/2021/05/Agua-de-arroz-5.jpg?resize=706%2C471&ssl=1",
    description:
      "Hair care refers to the practices and products used to maintain the health, cleanliness, and style of hair. It includes activities such as washing, conditioning, and styling the hair.",
  },
  {
    _id: uuid(),
    categoryName: "body-care",
    categoryImage: "https://static-bebeautiful-in.unileverservices.com/Simple-body-care-routine-to-pamper-your-skin-this-weekend%20_mobilehome.jpg",
    description:
      "Body care encompasses various practices and products aimed at nurturing and maintaining the health and well-being of the body. It includes activities such as bathing, moisturizing, and practicing good hygiene.",
  },
];

