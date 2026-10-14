export const mapAddress = '657X+9FX, Sanjay Nagar Bengali Colony, Kamptee, Maharashtra 441001';
const encodedAddress = encodeURIComponent(mapAddress);
const mapLocation = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
export const mapEmbedLocation = `https://maps.google.com/maps?q=${encodedAddress}&z=15&output=embed`;

export default mapLocation;
