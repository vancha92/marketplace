type formData = {
  companyName: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  date: string;
  origin: string;
  destination: string;
  description: string;
  comments: string;
  proforma: string;
  custNo: string;
  weight: string;
};

export const inquiryEmail = (values: formData, requestType: number) => {
  if (requestType === 1) {
    const emailAddress = "hermes_lines@hermes-lines.gr";
    const subject = "Get in touch";
    const body = `Company Name: ${values.companyName}
  Customer Number: ${values.custNo}
  First Name: ${values.firstName}
  Last Name: ${values.lastName}
  Phone: ${values.phone}
  Email: ${values.email}
  Comments: ${values.comments}
    `;

    window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }

  if (requestType === 2) {
    const emailAddress = "hermes_lines@hermes-lines.gr";
    const subject = "Inquiry request";
    const body = `Company Name: ${values.companyName}
  Customer Number: ${values.custNo}
  First Name: ${values.firstName}
  Last Name: ${values.lastName}
  Phone: ${values.phone}
  Email: ${values.email}
  Date: ${values.date}
  Origin: ${values.origin}
  Destination: ${values.destination}
  Estimated Weight: ${values.weight}
  Proforma Document ${values.proforma}
  Description: ${values.description}
  Comments: ${values.comments}
    `;

    window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }
};
