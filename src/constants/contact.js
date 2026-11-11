export const CONTACT_INFO = {
  phoneNumber: "+905418741701",
  maskedNumber: "+90 (541) 874 17 01",
  whatsappMessage: "Merhaba, su altı arama-kurtarma / dalgıçlık hizmeti için bilgi almak istiyorum.",
  //social media links
  facebookLink: "https://www.facebook.com/tarik.cevran",
  instagramLink: "https://www.instagram.com/tarik.cevran",
  youtubeLink: "https://www.youtube.com/@tarik.cevran",
  linkedinLink: "https://www.linkedin.com/in/tarik.cevran",
  gmailLink: "tarik.cevran@gmail.com",

  get whatsappLink() {
    return `https://wa.me/${this.phoneNumber.replace('+', '')}?text=${encodeURIComponent(this.whatsappMessage)}`;
  }
};