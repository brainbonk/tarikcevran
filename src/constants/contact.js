export const CONTACT_INFO = {
  phoneNumber: "+905418741701",
  maskedNumber: "+90 (541) 874 17 01",
  whatsappMessage: "Merhaba, su altı arama-kurtarma / dalgıçlık hizmeti için bilgi almak istiyorum.",
  //social media links
  facebookLink: "https://www.facebook.com/cevransualtihizmeti",
  instagramLink: "https://www.instagram.com/cevransualtihizmeti",
  youtubeLink: "https://www.youtube.com/@cevransualtihizmeti",
  linkedinLink: "https://www.linkedin.com/in/cevransualtihizmeti",
  gmailLink: "cevran.tarik@gmail.com",
  personalInstagramLink: "https://www.instagram.com/tarik.cevran",

  get whatsappLink() {
    return `https://wa.me/${this.phoneNumber.replace('+', '')}?text=${encodeURIComponent(this.whatsappMessage)}`;
  }
};