import React from "react";
import { pdf, Document, Page, Text, View, PDFDownloadLink ,StyleSheet} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: { padding: 20 },
  title: { fontSize: 16, marginBottom: 10, fontWeight: "bold" },
  content: { fontSize: 12, textAlign: "justify" }
});

function GeneratePDF({ title, content }) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.content}>{content}</Text>
        </View>
      </Page>
    </Document>
  );
}

// 📤 Use this function for automatic download
export async function triggerEssayDownload({ title, content }) {
  const blob = await pdf(<GeneratePDF title={title} content={content} />).toBlob();
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = "essay.pdf";
  document.body.appendChild(link);
  link.click();
  link.remove();

  URL.revokeObjectURL(url);
}

// 🖱️ Optional: Use this component if you want to show a manual download button
export default function GenerateEssayPdf({ title, content }) {
  return (
    <PDFDownloadLink
      document={<GeneratePDF title={title} content={content} />}
      fileName="essay.pdf"
      style={{
        textDecoration: "none",
        color: "white",
        backgroundColor: "#007bff",
        padding: "10px 20px",
        borderRadius: "5px",
      }}
    >
      {({ loading }) => (loading ? "Loading document..." : "Download PDF")}
    </PDFDownloadLink>
  );
}
