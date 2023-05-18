export const query = `
{
  partnerInfoCollection {
    items {
      name
      email
      phone
      slogan
      primaryColor
      bgColor
      secondaryColor
      partnerPhoto{
        url
      }
      sys {
        id
      }
    }
  }
}
  `
