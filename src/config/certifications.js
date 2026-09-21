// Badges render at ~330x330 (responsive). Put real badge images in
// src/assets/certifications/ and point `image` at them.
// credentialId is intentionally NOT displayed publicly.

export const certifications = [
  {
    name: "Certified Implementation Specialist – Data Foundations (CMDB & CSDM)",
    issuer: "ServiceNow",
    image: "placeholder", // replace with imported image, e.g. cisDataFoundations
    verificationUrl:
      "https://www.credly.com/badges/c8fc934c-713b-4512-845f-bc4c442391e7/public_url",
  },
  {
    name: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    image: "placeholder",
    verificationUrl:
      "https://www.credly.com/badges/5160c0d3-bdb9-4fa2-a2e9-904d1b463e57/public_url",
  },
  {
    name: "ServiceNow Certified System Administrator (CSA)",
    issuer: "ServiceNow",
    image: "placeholder",
    verificationUrl: "https://www.credly.com/badges/1f090eaf-5056-4ac3-aa7d-813b669f2ca1/public_url",
    
  },
];
