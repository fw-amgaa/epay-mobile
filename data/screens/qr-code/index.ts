export const decryptQr = async (qrCode: string) => {
  const body = {
    qrcPayload: qrCode,
  };

  try {
    const response = await fetch(
      `https://dev-sendmn.epayment.mn/api/qr-decrypt`,
      {
        method: "POST",
        headers: {
          "x-api-key": "67edae282b0a90bc910b712b",
        },
        body: body ? JSON.stringify(body) : undefined,
      }
    );

    return response;
  } catch (error) {
    console.error("Error decrypting QR code:", error);
    throw error;
  }
};
