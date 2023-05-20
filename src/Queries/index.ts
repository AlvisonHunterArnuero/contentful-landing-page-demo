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
      summary
      linkedin
      github
      title
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
