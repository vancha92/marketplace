export const openEmailClient = () => {
  const emailAddress = "hermes_lines@hermes-lines.gr";
  const subject = "Request for contact";
  const body = "";

  window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
};
