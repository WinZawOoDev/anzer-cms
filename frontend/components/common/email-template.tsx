import {
  Body, Container,
  Head,
  Heading,
  Html, Preview, Text
} from "@react-email/components";
import * as React from "react";

interface AnzerContactProps {
  jobTitle: string;
  responsipility: string;
  whenToImplement: string;
  honorific: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  organizationName: string;
  location: string;
}

export const EmailTemplate = ({
  jobTitle,
  responsipility,
  whenToImplement,
  honorific,
  firstName,
  lastName,
  email,
  organizationName,
  location,
  phoneNumber
}: AnzerContactProps) => (
  <Html>
    <Head />
    <Preview>Anzer Web Portal Contact</Preview>
    <Body style={main}>
      <Container style={container}>
        {/* <Heading style={h1}>Book a Demo or Enquiry for Partnership</Heading> */}
        <Text style={{ ...text, fontWeight: 'bold', fontSize: '16px' }}>
          {jobTitle}
        </Text>
        <Text style={{ ...text }}>
          <span style={{ paddingRight: '5px' }}>Responsibility: </span>
          <span style={{ fontWeight: 'bold' }}>{responsipility}</span>
        </Text>
        <Text style={{ ...text, }}>
          <span style={{ paddingRight: '5px' }}>When to implement: </span>
          <span style={{ fontWeight: 'bold' }}>{whenToImplement}</span>
        </Text>
        <Text style={{ ...text, }}>
          <span style={{ fontWeight: 'bold' }}>{honorific} {firstName} {lastName}</span>
        </Text>
        <Text style={{ ...text }}>
          <span style={{ paddingRight: '5px' }}>PhoneNumber: </span>
          <span style={{ fontWeight: 'bold' }}>{phoneNumber}</span>
        </Text>
        <Text style={{ ...text }}>
          <span style={{ paddingRight: '5px' }}>Email: </span>
          <span style={{ fontWeight: 'bold' }}> {email}</span>
        </Text>
        <Text style={{ ...text }}>
          <span style={{ paddingRight: '5px' }}>OrganizationName: </span>
          <span style={{ fontWeight: 'bold' }}>{organizationName}</span>
        </Text>
        <Text style={{ ...text }}>
          <span style={{ paddingRight: '5px' }}>Location: </span>
          <span style={{ fontWeight: 'bold' }}>{location}</span>
        </Text>
      </Container>
    </Body>
  </Html>
);

// AnzerContact.PreviewProps = {
//   jobTitle: "sparo-ndigo-amurt-secan",
// } as AnzerContactProps;

export default EmailTemplate;

const main = {
  backgroundColor: "#ffffff",
};

const container = {
  paddingLeft: "12px",
  paddingRight: "12px",
  margin: "0 auto",
};

const h1 = {
  color: "#333",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "40px 0",
  padding: "0",
};

const link = {
  color: "#2754C5",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "14px",
  textDecoration: "underline",
};

const text = {
  color: "#333",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "16px",
};

const footer = {
  color: "#898989",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "12px",
  lineHeight: "22px",
  marginTop: "12px",
  marginBottom: "24px",
};

const code = {
  display: "inline-block",
  padding: "16px 4.5%",
  width: "90.5%",
  backgroundColor: "#f4f4f4",
  borderRadius: "5px",
  border: "1px solid #eee",
  color: "#333",
};
