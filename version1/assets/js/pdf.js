

function generateTable(passengersInfo, hotelInfo, flightInfo, transportationInfo , passengerInfo, voucherNumber) {
  const { jsPDF } = window.jspdf;
  var doc = new jsPDF('p', 'pt');

  console.log('PASSENGER INFO',passengersInfo)

  let businessTitle = "ABDALI TRAVELS (PVT) LTD....!";
  let businessSlogan = "HAJJ & UMRAH SERVICES";
  // let voucherNumber = 123456789;

  // let passengerInfo = {
  //   guest : 'GUEST NAME : ' + 'Atiqa',
  //   contact: 'Contact NO. ' + '0303030',
  //   agent: 'PAK AGENT NAME' + 'NAGORI TRAVELS PVT LTD 2023-2024',
  //   company : 'K-S-A UMRAH COMPANY' + 'BASHMA EMAAR.....!'
  // }


  
let startY = 150; // Initial y position of the first table

doc.text(businessTitle,30, 30)
doc.setFontSize(10)
doc.text(businessSlogan, 190, 60)
doc.text('GL NO#' + 1909, 220, 73)

doc.text(passengerInfo.company, 30, 100)
doc.text(passengerInfo.agent, 30, 115)
doc.text(passengerInfo.contact, 30, 130)
doc.text(passengerInfo.guest, 30, 145)
doc.text('VOUCHER NO: ' + voucherNumber , 415, 145)
// doc.addImage(mainImage, 'PNG', 160, 10, 30, 30);


const tables = [
  {
      info: {
              image: '', 
              text : 'PASSENGER DETAILS',
            },
      columns: ['NAME', 'GENDER', 'PASSPORT NO', 'VISA NO'],
      rows:     
        passengersInfo
  },
  {
      info: {
            image: '', 
            text : 'HOTEL DETAILS'
          },
      columns: ['HOTEL NAME', 'CITY', 'ROOM TYPE', 'CHECK IN', 'CHECK OUT', 'NIGHTS'],
      rows: 
        hotelInfo
             
  },
  {
      info: {
            image: '', 
            text : 'TRANSPORTATION DETAILS'
          },
      columns: ['TRANSPORTATION COMPANY NAME', 'TRANSPORT TYPE/ROUTE'],
      rows: 
          transportationInfo
      
  },
  {
    info: {
          image: '', 
          text : 'FLIGHT DETAILS'
        },
    columns: ['DATE', 'FLIGHT NO', 'ROUTE', 'DEPARTURE', 'ARRIVAL', 'PRN NO'],
    rows: 
      flightInfo
    
   },
];


const pageHeight = doc.internal.pageSize.height; // Get the height of the page

tables.forEach((table, index) => {
  // Calculate the height required for the current table
  const tableHeight = table.rows.length * 12; // Adjust 12 based on your row height and padding

  // Check if the table fits on the current page
  if (startY + tableHeight > pageHeight) {
      // Add a new page if the table doesn't fit
      doc.addPage();
      startY = 20; // Reset startY for the new page
  }

  // Add title above each table
  if(index > 0){
    // doc.addImage(table.info.image, 410, startY + 20)
    doc.text(table.info.text, 210, startY + 20);
  }
  else {
    // doc.addImage(table.info.image, 410, startY + 20)
    doc.text(table.info.text, 210, startY + 20 );
  }

  // Add table to PDF
  doc.autoTable({
      head: [table.columns],
      body: table.rows,
      startY: startY + 40,
      theme: 'plain',
      styles: {
          cellPadding: 3,
          // lineColor: [0, 0, 0],
          // lineWidth: 0.1,
      },
      headStyles: {
          fillColor: false,
          textColor: 0,
          fontStyle: 'normal',
          lineWidth: 0.1,
          lineColor: [0, 0, 0],
      },
      bodyStyles: {
          fillColor: false,
          textColor: 0,
          fontStyle: 'normal',
          lineWidth: 0.1,
          lineColor: [0, 0, 0],
      }
  });

  // Update startY for the next table
  startY = doc.autoTable.previous.finalY + 10; // Add some padding between tables (adjust as needed)
});

// Add other content (text, images, etc.) between tables
doc.text("Additional Content between tables", 14, startY + 20);


// Save the PDF
doc.save("nagori-travelling-agency.pdf");
}
